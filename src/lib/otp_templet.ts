export function otpTemplate(otp: string): string {
  const digits = otp.split("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Verification Code — Dr. Satyanarayana Garre</title>
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
                      <p style="margin:0;font-size:18px;color:#ffffff;">🔐</p>
                      <p style="margin:3px 0 0;font-size:10px;font-weight:700;
                        color:#ccfbf1;text-transform:uppercase;letter-spacing:0.08em;">
                        Secure
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
                Email Verification
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">

              <p style="margin:0 0 6px;font-size:13px;color:#64748b;">Hello,</p>
              <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
                Use the one-time password below to verify your identity on the
                Dr. Satyanarayana Garre patient portal. This code is valid for
                <strong style="color:#0f172a;">10 minutes</strong>.
              </p>

              <!-- OTP card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#f0fdfa;border:1px solid #99f6e4;
                    border-radius:10px;padding:28px 20px;text-align:center;">

                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;
                      color:#0f766e;text-transform:uppercase;letter-spacing:0.1em;">
                      Your one-time password
                    </p>

                    <!-- Individual digit boxes -->
                    <table cellpadding="0" cellspacing="0" align="center">
                      <tr>
                        ${digits.map((d) => `
                          <td style="padding:0 4px;">
                            <div style="width:44px;height:54px;background:#ffffff;
                              border:2px solid #0f766e;border-radius:8px;font-size:26px;font-weight:700;
                              color:#0f766e;letter-spacing:0;line-height:54px;
                              text-align:center;">
                              ${d}
                            </div>
                          </td>
                        `
  )
      .join("")
    }
                      </tr>
                    </table>

                    <p style="margin:16px 0 0;font-size:12px;color:#64748b;">
                      Expires in 10 minutes
                    </p>

                  </td>
                </tr>
              </table>

              <!-- Security note -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#fff7ed;border:1px solid #fed7aa;
                    border-radius:8px;padding:14px 18px;">
                    <p style="margin:0;font-size:13px;color:#9a3412;line-height:1.6;">
                      <strong>⚠ Security notice:</strong>&nbsp; We will never ask for this
                      code over the phone or email. If you did not request this code,
                      please ignore this message — your account remains secure.
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
                This is an automated message from the Dr. Satyanarayana Garre Health Platform.
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