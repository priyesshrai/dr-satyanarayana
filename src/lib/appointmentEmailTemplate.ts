type BaseEmailProps = {
  patientName: string;
  doctorName: string;
  startTime: string | Date;
  endTime: string | Date;
  meetLink: string;
};

type DoctorEmailProps = BaseEmailProps & {
  reason?: string;
  symptoms?: string;
  notes?: string;
  documents?: {
    fileName?: string;
    fileUrl: string;
    documentType: string;
  }[];
};

// ─── Shared helpers ───────────────────────────────────────────────────────────

const escape = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function formatDateTime(startTime: string | Date, endTime: string | Date) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const date = start.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  const timeStr = `${start.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  })} – ${end.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
  })}`;

  return { date, timeStr };
}

const dashboardUrl = "https://www.drsatyanarayanagarre.in/login";

// ─── Shared layout fragments ──────────────────────────────────────────────────

function emailWrapper(content: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0"
          style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;
            overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.09);">

          <!-- Top accent bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#0f766e 0%,#0d9488 100%);
              height:5px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          ${content}

          <!-- Bottom accent bar -->
          <tr>
            <td style="background:linear-gradient(90deg,#0d9488 0%,#0f766e 100%);
              height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

function headerBlock(badgeLabel: string, badgeIcon: string) {
  return `
  <!-- Header -->
  <tr>
    <td style="background:#0f766e;padding:28px 40px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="vertical-align:middle;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;
              color:#99f6e4;text-transform:uppercase;">
              Dr. Satyanarayana Garre
            </p>
            <p style="margin:4px 0 0;font-size:18px;font-weight:700;color:#ffffff;">
              Nephrology &amp; Kidney Care
            </p>
            <p style="margin:4px 0 0;font-size:12px;color:#ccfbf1;">
              Apollo Health City, Jubilee Hills, Hyderabad
            </p>
          </td>
          <td align="right" style="vertical-align:middle;">
            <div style="background:rgba(255,255,255,0.12);border:1px solid
              rgba(255,255,255,0.25);border-radius:8px;padding:8px 14px;text-align:center;">
              <p style="margin:0;font-size:18px;">${badgeIcon}</p>
              <p style="margin:3px 0 0;font-size:10px;font-weight:700;
                color:#ccfbf1;text-transform:uppercase;letter-spacing:0.08em;">
                ${badgeLabel}
              </p>
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- Divider strip -->
  <tr>
    <td style="background:#f0fdfa;border-bottom:1px solid #ccfbf1;padding:10px 40px;">
      <p style="margin:0;font-size:11px;color:#0f766e;font-weight:700;
        letter-spacing:0.08em;text-transform:uppercase;">
        Appointment Confirmation
      </p>
    </td>
  </tr>`;
}

function dateTimeBlock(date: string, timeStr: string) {
  return `
  <!-- Date & time card -->
  <tr>
    <td style="padding:20px 40px;">
      <table width="100%" cellpadding="0" cellspacing="0"
        style="background:#0f766e;border-radius:10px;overflow:hidden;">
        <tr>
          <td width="60%" style="padding:20px 24px;vertical-align:middle;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;
              color:#99f6e4;text-transform:uppercase;letter-spacing:0.1em;">Date</p>
            <p style="margin:0;font-size:15px;font-weight:700;color:#ffffff;line-height:1.4;">
              ${date}
            </p>
          </td>
          <td width="1px" style="background:rgba(255,255,255,0.2);width:1px;padding:0;">&nbsp;</td>
          <td style="padding:20px 24px;vertical-align:middle;text-align:center;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;
              color:#99f6e4;text-transform:uppercase;letter-spacing:0.1em;">Time (IST)</p>
            <p style="margin:0;font-size:17px;font-weight:700;color:#ffffff;">${timeStr}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function ctaBlock(meetLink: string) {
  return `
  <!-- CTA buttons -->
  <tr>
    <td style="padding:0 40px 28px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding-right:6px;">
            <a href="${meetLink}"
              style="display:block;text-align:center;background:#0f766e;color:#ffffff;
                padding:13px 16px;border-radius:8px;text-decoration:none;
                font-size:14px;font-weight:700;">
              Join Video Call
            </a>
          </td>
          <td style="padding-left:6px;">
            <a href="${dashboardUrl}"
              style="display:block;text-align:center;background:#ffffff;color:#0f766e;
                padding:13px 16px;border-radius:8px;text-decoration:none;
                font-size:14px;font-weight:700;border:1px solid #99f6e4;">
              My Dashboard
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function contactFooterBlock() {
  return `
  <!-- Contact strip -->
  <tr>
    <td style="background:#f0fdfa;padding:13px 40px;border-top:1px solid #ccfbf1;">
      <p style="margin:0;font-size:11px;color:#0f766e;">
        📞 &nbsp;<a href="tel:+919844181188"
          style="color:#0f766e;text-decoration:none;font-weight:600;">+91 98441 81188</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        📧 &nbsp;<a href="mailto:satyakishoregarre@gmail.com"
          style="color:#0f766e;text-decoration:none;font-weight:600;">satyakishoregarre@gmail.com</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        🌐 &nbsp;<a href="https://www.drsatyanarayanagarre.in"
          style="color:#0f766e;text-decoration:none;font-weight:600;">drsatyanarayanagarre.in</a>
      </p>
    </td>
  </tr>

  <!-- Footer -->
  <tr>
    <td style="background:#0f766e;padding:16px 40px;">
      <p style="margin:0;font-size:11px;color:#ccfbf1;text-align:center;line-height:1.7;">
        This is an automated message from the Dr. Satyanarayana Garre Health Platform.
        Please do not reply to this email.<br/>
        Mon – Sat &nbsp;|&nbsp; 10:30 AM – 6:00 PM &nbsp;|&nbsp;
        Apollo Health City, Road No. 72, Jubilee Hills, Hyderabad – 500033
      </p>
    </td>
  </tr>`;
}

// ─── Patient email template ───────────────────────────────────────────────────

function formatDuration(startTime: string | Date, endTime: string | Date): string {
  const diffMs = new Date(endTime).getTime() - new Date(startTime).getTime();
  const totalMins = Math.round(diffMs / 60000);
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;

  if (hrs === 0) return `${totalMins} min`;
  if (mins === 0) return `${hrs} hr`;
  return `${hrs} hr ${mins} min`;
}

export function patientAppointmentEmailTemplate({
  patientName,
  doctorName,
  startTime,
  endTime,
  meetLink,
}: BaseEmailProps) {
  const { date, timeStr } = formatDateTime(startTime, endTime);
  const duration = formatDuration(startTime, endTime);

  const body = `
    ${headerBlock("Confirmed", "✓")}

    <!-- Greeting -->
    <tr>
      <td style="padding:28px 40px 0;">
        <p style="margin:0 0 6px;font-size:13px;color:#64748b;">Dear</p>
        <p style="margin:0 0 18px;font-size:22px;font-weight:700;color:#0f172a;">
          ${escape(patientName)}
        </p>
        <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;">
          Your appointment with <strong style="color:#0f172a;">Dr. ${escape(doctorName)}</strong>
          has been confirmed. Please find the details below.
        </p>
      </td>
    </tr>

    ${dateTimeBlock(date, timeStr)}

    <!-- Patient row -->
    <tr>
      <td style="padding:0 40px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0"
          style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
          <tr>
            <td style="padding:12px 18px;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#64748b;
                text-transform:uppercase;letter-spacing:0.08em;">Patient</p>
              <p style="margin:4px 0 0;font-size:15px;font-weight:700;color:#0f172a;">
                ${escape(patientName)}
              </p>
            </td>
            <td align="right" style="padding:12px 18px;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#64748b;
                text-transform:uppercase;letter-spacing:0.08em;">Specialist</p>
              <p style="margin:4px 0 0;font-size:13px;font-weight:600;color:#0f172a;">
                Nephrology
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${ctaBlock(meetLink)}

    <!-- Reminder note -->
    <tr>
      <td style="padding:0 40px 28px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 8px;">
 
          <!-- Join early note -->
          <tr>
            <td style="background:#f0fdfa;border-left:3px solid #0f766e;
              padding:11px 14px;border-radius:0 6px 6px 0;">
              <p style="margin:0;font-size:13px;color:#0f766e;line-height:1.6;">
                🕐 &nbsp;Please join <strong>5 minutes before</strong> your
                scheduled time. Keep your medical reports ready.
              </p>
            </td>
          </tr>
 
          <!-- Wait note -->
          <tr>
            <td style="background:#fff7ed;border-left:3px solid #f59e0b;
              padding:11px 14px;border-radius:0 6px 6px 0;">
              <p style="margin:0;font-size:13px;color:#92400e;line-height:1.6;">
                ⏳ &nbsp;Your consultation slot is <strong>${duration}</strong>.
                If the doctor has not joined yet, please <strong>wait up to 10–15 minutes</strong>
                — they will join within your scheduled meeting window.
              </p>
            </td>
          </tr>
 
        </table>
      </td>
    </tr>

    ${contactFooterBlock()}
  `;

  return emailWrapper(body);
}

// ─── Doctor email template ────────────────────────────────────────────────────

export function doctorAppointmentEmailTemplate({
  patientName,
  doctorName,
  startTime,
  endTime,
  meetLink,
  reason,
  symptoms,
  notes,
  documents,
}: DoctorEmailProps) {
  const { date, timeStr } = formatDateTime(startTime, endTime);

  const contextSection =
    reason || symptoms || notes || documents?.length
      ? `
      <tr>
        <td style="padding:0 40px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0"
            style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:10px;overflow:hidden;">
            <tr>
              <td style="background:#ccfbf1;padding:10px 18px;border-bottom:1px solid #99f6e4;">
                <p style="margin:0;font-size:11px;font-weight:700;color:#0f766e;
                  text-transform:uppercase;letter-spacing:0.1em;">Consultation Details</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 18px;">

                ${reason ? `
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
                    <tr>
                      <td style="width:110px;vertical-align:top;font-size:12px;
                        font-weight:700;color:#0f766e;padding-top:1px;">Reason</td>
                      <td style="font-size:13px;color:#1e293b;line-height:1.6;">${escape(reason)}</td>
                    </tr>
                  </table>
                ` : ""}

                ${symptoms ? `
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
                    <tr>
                      <td style="width:110px;vertical-align:top;font-size:12px;
                        font-weight:700;color:#0f766e;padding-top:1px;">Symptoms</td>
                      <td style="font-size:13px;color:#1e293b;line-height:1.6;">${escape(symptoms)}</td>
                    </tr>
                  </table>
                ` : ""}

                ${notes ? `
                  <table width="100%" cellpadding="0" cellspacing="0"
                    style="${documents?.length ? "margin-bottom:14px;" : ""}">
                    <tr>
                      <td style="width:110px;vertical-align:top;font-size:12px;
                        font-weight:700;color:#0f766e;padding-top:1px;">Notes</td>
                      <td style="font-size:13px;color:#1e293b;line-height:1.6;">${escape(notes)}</td>
                    </tr>
                  </table>
                ` : ""}

                ${documents?.length ? `
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td colspan="2" style="padding-bottom:8px;">
                        <p style="margin:0;font-size:11px;font-weight:700;color:#0f766e;
                          text-transform:uppercase;letter-spacing:0.08em;">
                          Attached Documents (${documents.length})
                        </p>
                      </td>
                    </tr>
                    ${documents.map((doc) => `
                      <tr>
                        <td style="padding-bottom:6px;">
                          <table width="100%" cellpadding="0" cellspacing="0"
                            style="background:#ffffff;border:1px solid #ccfbf1;
                              border-radius:8px;overflow:hidden;">
                            <tr>
                              <td style="padding:10px 14px;">
                                <p style="margin:0 0 2px;font-size:11px;color:#64748b;">
                                  ${doc.documentType.replace(/_/g, " ")}
                                </p>
                                <p style="margin:0;font-size:13px;font-weight:600;color:#0f172a;
                                  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
                                  max-width:280px;">
                                  ${escape(doc.fileName ?? "Document")}
                                </p>
                              </td>
                              <td align="right" style="padding:10px 14px;">
                                <a href="${doc.fileUrl}"
                                  style="display:inline-block;font-size:12px;font-weight:700;
                                    color:#0f766e;text-decoration:none;border:1px solid #99f6e4;
                                    background:#f0fdfa;padding:5px 12px;border-radius:6px;">
                                  View
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    `).join("")}
                  </table>
                ` : ""}

              </td>
            </tr>
          </table>
        </td>
      </tr>`
      : "";

  const body = `
    ${headerBlock("New Appt", "🗓")}

    <!-- Greeting -->
    <tr>
      <td style="padding:28px 40px 0;">
        <p style="margin:0 0 6px;font-size:13px;color:#64748b;">New appointment booked with</p>
        <p style="margin:0 0 18px;font-size:22px;font-weight:700;color:#0f172a;">
          ${escape(patientName)}
        </p>
        <p style="margin:0;font-size:14px;color:#475569;line-height:1.7;">
          A consultation has been confirmed and paid for. The patient's details are below.
        </p>
      </td>
    </tr>

    ${dateTimeBlock(date, timeStr)}

    <!-- Patient row -->
    <tr>
      <td style="padding:0 40px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0"
          style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">
          <tr>
            <td style="padding:12px 18px;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#64748b;
                text-transform:uppercase;letter-spacing:0.08em;">Patient</p>
              <p style="margin:4px 0 0;font-size:15px;font-weight:700;color:#0f172a;">
                ${escape(patientName)}
              </p>
            </td>
            <td align="right" style="padding:12px 18px;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#64748b;
                text-transform:uppercase;letter-spacing:0.08em;">Specialist</p>
              <p style="margin:4px 0 0;font-size:13px;font-weight:600;color:#0f172a;">
                Nephrology
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${ctaBlock(meetLink)}

    ${contextSection}

    ${contactFooterBlock()}
  `;

  return emailWrapper(body);
}