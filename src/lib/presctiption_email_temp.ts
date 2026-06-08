export function buildEmailHtml({
  patientName,
  doctorName,
  prescription,
}: {
  patientName: string;
  doctorName: string;
  prescription: string;
}): string {
  const escape = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Medical Prescription — Dr. Satyanarayana Garre</title>
</head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.09);">

          <!-- ── TOP ACCENT BAR ── -->
          <tr>
            <td style="background:linear-gradient(90deg,#0f766e 0%,#0d9488 100%);height:5px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- ── HEADER ── -->
          <tr>
            <td style="background:#0f766e;padding:28px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <!-- Wordmark / logo text -->
                    <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.12em;color:#99f6e4;text-transform:uppercase;">
                      Dr. Satyanarayana Garre
                    </p>
                    <p style="margin:4px 0 0;font-size:18px;font-weight:700;color:#ffffff;line-height:1.3;">
                      Nephrology &amp; Kidney Care
                    </p>
                    <p style="margin:4px 0 0;font-size:12px;color:#ccfbf1;">
                      Apollo Health City, Jubilee Hills, Hyderabad
                    </p>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <!-- Rx badge -->
                    <div style="display:inline-block;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:8px;padding:8px 16px;">
                      <p style="margin:0;font-size:26px;font-weight:900;color:#ffffff;font-style:italic;letter-spacing:-1px;">℞</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── DIVIDER WITH LABEL ── -->
          <tr>
            <td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#f0fdfa;border-bottom:1px solid #ccfbf1;padding:10px 40px;">
                    <p style="margin:0;font-size:12px;color:#0f766e;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
                      Medical Prescription
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="padding:36px 40px 28px;">

              <!-- Greeting -->
              <p style="margin:0 0 6px;font-size:15px;color:#64748b;">Dear</p>
              <p style="margin:0 0 24px;font-size:22px;font-weight:700;color:#0f172a;">
                ${escape(patientName)}
              </p>

              <p style="margin:0 0 28px;font-size:14px;color:#475569;line-height:1.7;">
                Your consultation with <strong style="color:#0f172a;">Dr. ${escape(doctorName)}</strong>
                at Apollo Health City, Hyderabad has been completed. Your prescription is
                provided below and also enclosed as a PDF attachment for your records.
              </p>

              <!-- Prescription card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:10px;padding:24px;">

                    <!-- Card header -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td>
                          <p style="margin:0;font-size:11px;font-weight:700;color:#0f766e;text-transform:uppercase;letter-spacing:0.1em;">
                            Prescribed By
                          </p>
                          <p style="margin:3px 0 0;font-size:15px;font-weight:700;color:#0f172a;">
                            Dr. ${escape(doctorName)}
                          </p>
                          <p style="margin:2px 0 0;font-size:12px;color:#64748b;">
                            Nephrologist &amp; Kidney Specialist
                          </p>
                        </td>
                        <td align="right" style="vertical-align:top;">
                          <!-- Date badge -->
                          <p style="margin:0;display:inline-block;background:#0f766e;color:#ffffff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;">
                            Apollo Health City
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Hairline -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td style="border-top:1px dashed #99f6e4;font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>

                    <!-- Rx content -->
                    <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#0f766e;text-transform:uppercase;letter-spacing:0.1em;">
                      Prescription Details
                    </p>
                    <pre style="margin:0;white-space:pre-wrap;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#1e293b;line-height:1.75;">${escape(prescription)}</pre>

                  </td>
                </tr>
              </table>

              <!-- PDF note -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#f8fafc;border-left:3px solid #94a3b8;border-radius:0 6px 6px 0;padding:12px 16px;">
                    <p style="margin:0;font-size:13px;color:#475569;">
                      📎 &nbsp;A <strong>PDF copy</strong> of this prescription is attached to this email. Please keep it for your pharmacy and future reference.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Warning -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:14px 18px;">
                    <p style="margin:0;font-size:13px;color:#9a3412;line-height:1.6;">
                      <strong>⚠ Important Notice:</strong>&nbsp; Please follow the prescribed
                      dosage and instructions carefully. Do not self-medicate or alter the
                      prescription. Contact the clinic immediately if you experience any
                      adverse reactions or side effects.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Sign-off -->
              <p style="margin:0 0 4px;font-size:14px;color:#475569;">With regards,</p>
              <p style="margin:0 0 2px;font-size:16px;font-weight:700;color:#0f172a;">
                Dr. ${escape(doctorName)}
              </p>
              <p style="margin:0;font-size:13px;color:#64748b;">Nephrologist &amp; Kidney Specialist</p>
              <p style="margin:0;font-size:13px;color:#64748b;">Apollo Health City, Jubilee Hills, Hyderabad</p>

            </td>
          </tr>

          <!-- ── CONTACT STRIP ── -->
          <tr>
            <td style="background:#f0fdfa;padding:16px 40px;border-top:1px solid #ccfbf1;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;color:#0f766e;">
                    📞 &nbsp;<a href="tel:+919844181188" style="color:#0f766e;text-decoration:none;font-weight:600;">+91 98441 81188</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    📧 &nbsp;<a href="mailto:satyakishoregarre@gmail.com" style="color:#0f766e;text-decoration:none;font-weight:600;">satyakishoregarre@gmail.com</a>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    🌐 &nbsp;<a href="https://www.drsatyanarayanagarre.in" style="color:#0f766e;text-decoration:none;font-weight:600;">drsatyanarayanagarre.in</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background:#0f766e;padding:16px 40px;">
              <p style="margin:0;font-size:11px;color:#ccfbf1;text-align:center;line-height:1.7;">
                This is an automated message from the Dr. Satyanarayana Garre Health Platform.
                Please do not reply to this email. For appointments, call or visit our website.<br/>
                Mon – Sat &nbsp;|&nbsp; 10:30 AM – 6:00 PM &nbsp;|&nbsp; Apollo Health City, Road No. 72, Jubilee Hills, Hyderabad – 500033
              </p>
            </td>
          </tr>

          <!-- ── BOTTOM ACCENT BAR ── -->
          <tr>
            <td style="background:linear-gradient(90deg,#0d9488 0%,#0f766e 100%);height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}