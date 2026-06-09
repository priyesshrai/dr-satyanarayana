import PDFDocument from "pdfkit";

interface AppointmentWithRelations {
    id: string;
    status: string;
    patientId: string;
    patient: {
        name: string;
        email: string;
    };
    appointmentContexts: unknown[];
    slot: {
        doctor: {
            userId: string;
            user: {
                name: string;
                email: string;
            };
        };
    };
}

const BRAND = "#0f766e";
const LIGHT = "#f0fdfa";
const BORDER = "#ccfbf1";
const DARK = "#0f172a";
const MUTED = "#64748b";
const DIVIDER = "#e2e8f0";

const MARGIN = 72;                         // left & right margin (pt)
const PAGE_W = 595.28 - MARGIN * 2;       // A4 width minus margins (451.28 pt)

export function generatePrescriptionPDF(
    prescription: string,
    appointment: AppointmentWithRelations
): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        try {
            const doc = new PDFDocument({
                size: "A4",
                margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
                info: {
                    Title: "Medical Prescription",
                    Author: `Dr. ${appointment.slot.doctor.user.name}`,
                    Subject: `Prescription for ${appointment.patient.name}`,
                    Creator: "Dr. Satyanarayana Garre Health Platform",
                },
            });

            const chunks: Buffer[] = [];
            doc.on("data", (c: Buffer) => chunks.push(c));
            doc.on("end", () => resolve(Buffer.concat(chunks)));
            doc.on("error", reject);

            const doctor = appointment.slot.doctor.user;
            const patient = appointment.patient;

            // ── Header bar ───────────────────────────────────────────────────────
            doc.rect(MARGIN, MARGIN, PAGE_W, 56).fill(BRAND);

            doc.font("Helvetica-Bold").fontSize(15).fillColor("#ffffff")
                .text("Dr. Satyanarayana Garre", MARGIN, MARGIN + 10, {
                    width: PAGE_W, align: "center",
                });

            doc.font("Helvetica").fontSize(10).fillColor("#ccfbf1")
                .text("Nephrology & Kidney Care  |  Apollo Health City, Hyderabad", MARGIN, MARGIN + 30, {
                    width: PAGE_W, align: "center",
                });

            // ── Sub-header label ─────────────────────────────────────────────────
            doc.rect(MARGIN, MARGIN + 56, PAGE_W, 20).fill(LIGHT);
            doc.rect(MARGIN, MARGIN + 76, PAGE_W, 0.5).fillColor(BORDER);

            doc.font("Helvetica-Bold").fontSize(8).fillColor(BRAND)
                .text("MEDICAL PRESCRIPTION", MARGIN, MARGIN + 62, {
                    width: PAGE_W, align: "center", characterSpacing: 1.5,
                });

            let y = MARGIN + 96;

            // ── Helper: section label ─────────────────────────────────────────────
            function sectionLabel(text: string) {
                doc.font("Helvetica-Bold").fontSize(8).fillColor(BRAND)
                    .text(text, MARGIN, y, { characterSpacing: 1 });
                y = doc.y + 4;
            }

            // ── Helper: key/value row ─────────────────────────────────────────────
            function kv(label: string, value: string) {
                const labelW = 90;
                doc.font("Helvetica-Bold").fontSize(9.5).fillColor(MUTED)
                    .text(label, MARGIN, y, { width: labelW, continued: false });
                const textY = y;
                doc.font("Helvetica").fontSize(9.5).fillColor(DARK)
                    .text(value, MARGIN + labelW, textY, { width: PAGE_W - labelW });
                y = doc.y + 4;
            }

            // ── Helper: thin divider ──────────────────────────────────────────────
            function divider() {
                y += 4;
                doc.moveTo(MARGIN, y).lineTo(MARGIN + PAGE_W, y)
                    .strokeColor(DIVIDER).lineWidth(0.5).stroke();
                y += 10;
            }

            // ── Doctor info ───────────────────────────────────────────────────────
            sectionLabel("PRESCRIBING DOCTOR");
            kv("Name", `Dr. ${doctor.name}`);
            kv("Email", doctor.email);
            kv("Specialty", "Nephrology & Kidney Care");
            kv("Clinic", "Apollo Health City, Jubilee Hills, Hyderabad");
            divider();

            // ── Patient info ──────────────────────────────────────────────────────
            sectionLabel("PATIENT");
            kv("Name", patient.name);
            kv("Email", patient.email);
            kv("Date Issued", new Date().toLocaleDateString("en-IN", {
                day: "2-digit", month: "long", year: "numeric",
            }));
            divider();

            // ── Prescription heading ──────────────────────────────────────────────
            doc.font("Helvetica-Bold").fontSize(13).fillColor(BRAND)
                .text("Rx  Prescription", MARGIN, y);
            y = doc.y + 10;

            // ── Prescription box ──────────────────────────────────────────────────
            // Calculate text height FIRST — always set font/size before heightOfString
            doc.font("Helvetica").fontSize(10.5);
            const PAD = 14;
            const textW = PAGE_W - PAD * 2 - 4; // 4pt for left accent bar
            const textHeight = doc.heightOfString(prescription, { width: textW, lineGap: 3 });
            const boxHeight = textHeight + PAD * 2;

            // Check if box fits on current page — if not, add a new page first
            const pageBottom = doc.page.height - MARGIN;
            if (y + boxHeight > pageBottom) {
                doc.addPage();
                y = MARGIN;
            }

            // Draw background and accent bar at FIXED y (not doc.y)
            doc.rect(MARGIN, y, PAGE_W, boxHeight).fill("#f8fafc");
            doc.rect(MARGIN, y, 4, boxHeight).fill(BRAND);

            // Draw text — use explicit x,y so doc.y tracks correctly
            doc.font("Helvetica").fontSize(10.5).fillColor(DARK)
                .text(prescription, MARGIN + PAD + 4, y + PAD, {
                    width: textW,
                    lineGap: 3,
                });

            // Advance y past the box (doc.y is now after the text, but may have flowed
            // across pages — use whichever is lower)
            y = Math.max(doc.y, y + boxHeight) + 28;

            // Guard: if y is past bottom of current page, add a new page
            if (y > pageBottom - 60) {
                doc.addPage();
                y = MARGIN;
            }

            // ── Signature line ────────────────────────────────────────────────────
            doc.moveTo(MARGIN, y).lineTo(MARGIN + 160, y)
                .strokeColor("#94a3b8").lineWidth(0.5).stroke();

            doc.font("Helvetica-Bold").fontSize(9).fillColor(DARK)
                .text(`Dr. ${doctor.name}`, MARGIN, y + 5);
            doc.font("Helvetica").fontSize(8).fillColor(MUTED)
                .text("Nephrology & Kidney Care", MARGIN, doc.y + 1)
                .text("Authorised Signature", MARGIN, doc.y + 1);

            y = doc.y + 28;

            // ── Footer ────────────────────────────────────────────────────────────
            // Pin footer to page bottom
            const footerY = doc.page.height - MARGIN - 30;
            doc.rect(MARGIN, footerY, PAGE_W, 0.5).fillColor(DIVIDER);

            doc.font("Helvetica").fontSize(7.5).fillColor(MUTED)
                .text(
                    "This is a digitally generated prescription issued via the Dr. Satyanarayana Garre Health Platform. " +
                    "Follow the prescribed instructions carefully and contact your doctor for any concerns.",
                    MARGIN, footerY + 6,
                    { width: PAGE_W, align: "center" }
                );

            doc.end();
        } catch (err) {
            reject(err);
        }
    });
}