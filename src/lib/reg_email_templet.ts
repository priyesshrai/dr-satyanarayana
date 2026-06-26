type RegistrationDetails = {
    name: string;
    email: string;
    phone: string | null;
};

export function doctorRegistrationTemplate({ name, email, phone }: RegistrationDetails): string {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    const registeredAt = new Date().toLocaleString("en-IN", {
        dateStyle: "long",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
    });

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Patient Registration — Dr. Satyanarayana Garre Portal</title>
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

          <!-- Header -->
          <tr>
            <td style="background:#0f766e;padding:28px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;font-weight:700;
                      letter-spacing:0.12em;color:#99f6e4;text-transform:uppercase;">
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
                      rgba(255,255,255,0.25);border-radius:8px;padding:8px 14px;
                      text-align:center;">
                      <p style="margin:0;font-size:18px;color:#ffffff;">🏥</p>
                      <p style="margin:3px 0 0;font-size:10px;font-weight:700;
                        color:#ccfbf1;text-transform:uppercase;letter-spacing:0.08em;">
                        Portal Alert
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
                🔔 &nbsp;New Patient Registration Alert
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">

              <p style="margin:0 0 6px;font-size:13px;color:#64748b;">Dear Doctor,</p>
              <p style="margin:0 0 24px;font-size:15px;color:#475569;line-height:1.7;">
                A new patient has successfully registered on your portal. Their details
                are listed below for your reference.
              </p>

              <!-- Patient details card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#f0fdfa;border:1px solid #99f6e4;
                    border-radius:10px;padding:24px 28px;">

                    <p style="margin:0 0 18px;font-size:11px;font-weight:700;
                      color:#0f766e;text-transform:uppercase;letter-spacing:0.1em;">
                      Patient Details
                    </p>

                    <!-- Avatar + name inline -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="margin-bottom:18px;">
                      <tr>
                        <td style="vertical-align:middle;">
                          <div style="display:inline-block;width:44px;height:44px;
                            background:#0f766e;border-radius:50%;text-align:center;
                            line-height:44px;font-size:16px;font-weight:700;
                            color:#ffffff;vertical-align:middle;">
                            ${initials}
                          </div>
                          <span style="display:inline-block;vertical-align:middle;
                            margin-left:12px;">
                            <span style="display:block;font-size:11px;color:#64748b;
                              text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">
                              Patient Name
                            </span>
                            <span style="display:block;font-size:16px;font-weight:700;
                              color:#0f172a;margin-top:2px;">
                              ${name}
                            </span>
                          </span>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <div style="height:1px;background:#ccfbf1;margin-bottom:16px;"></div>

                    <!-- Email row -->
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="margin-bottom:${phone ? "16px" : "0"};">
                      <tr>
                        <td style="width:28px;vertical-align:top;padding-top:1px;">
                          <span style="font-size:14px;">📧</span>
                        </td>
                        <td>
                          <p style="margin:0;font-size:11px;color:#64748b;
                            text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">
                            Email Address
                          </p>
                          <p style="margin:3px 0 0;font-size:15px;font-weight:700;
                            color:#0f172a;">
                            <a href="mailto:${email}"
                              style="color:#0f766e;text-decoration:none;">
                              ${email}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>

                    ${phone ? `
                    <!-- Divider -->
                    <div style="height:1px;background:#ccfbf1;margin-bottom:16px;"></div>

                    <!-- Phone row -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:28px;vertical-align:top;padding-top:1px;">
                          <span style="font-size:14px;">📞</span>
                        </td>
                        <td>
                          <p style="margin:0;font-size:11px;color:#64748b;
                            text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">
                            Contact Number
                          </p>
                          <p style="margin:3px 0 0;font-size:15px;font-weight:700;
                            color:#0f172a;">
                            <a href="tel:${phone}"
                              style="color:#0f766e;text-decoration:none;">
                              ${phone}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>
                    ` : ""}

                  </td>
                </tr>
              </table>

              <!-- Registered at timestamp -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#f8fafc;border:1px solid #e2e8f0;
                    border-radius:8px;padding:12px 18px;">
                    <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6;">
                      🕐 &nbsp;Registered on:&nbsp;
                      <strong style="color:#0f172a;">${registeredAt} (IST)</strong>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Info note -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#f0f9ff;border:1px solid #bae6fd;
                    border-radius:8px;padding:14px 18px;">
                    <p style="margin:0;font-size:13px;color:#0369a1;line-height:1.6;">
                      <strong>ℹ Note:</strong>&nbsp; This patient's account is now active on
                      the portal. You can view their profile, manage appointments, and upload
                      prescriptions from your dashboard.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Contact strip -->
          <tr>
            <td style="background:#f0fdfa;padding:13px 40px;border-top:1px solid #ccfbf1;">
              <p style="margin:0;font-size:11px;color:#0f766e;">
                📞 &nbsp;<a href="tel:+919844181188"
                  style="color:#0f766e;text-decoration:none;font-weight:600;">
                  +91 98441 81188
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                📧 &nbsp;<a href="mailto:satyakishoregarre@gmail.com"
                  style="color:#0f766e;text-decoration:none;font-weight:600;">
                  satyakishoregarre@gmail.com
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                🌐 &nbsp;<a href="https://www.drsatyanarayanagarre.in"
                  style="color:#0f766e;text-decoration:none;font-weight:600;">
                  drsatyanarayanagarre.in
                </a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f766e;padding:16px 40px;">
              <p style="margin:0;font-size:11px;color:#ccfbf1;text-align:center;
                line-height:1.7;">
                This is an automated notification from the Dr. Satyanarayana Garre Health Platform.
                Please do not reply to this email.<br/>
                Mon – Sat &nbsp;|&nbsp; 10:30 AM – 6:00 PM &nbsp;|&nbsp;
                Apollo Health City, Road No. 72, Jubilee Hills, Hyderabad – 500033
              </p>
            </td>
          </tr>

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
</html>
  `.trim();
}