import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/utils/SmoothScroll";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import AuthBoundary from "@/context/auth_boundry";
import { QueryProvider } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Nephrologist in Hyderabad | Dr. Satyanarayana Garre - Kidney Specialist",
  description: "Dr. Satyanarayana Garre, top nephrologist in Hyderabad, provides expert kidney care including dialysis, transplants, stone treatment & preventive health services",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="shortcut icon" href="/images/logo/fav-icon.svg" type="image/x-icon" />
      </head>
      <body className="overflow-x-hidden relative">
        <SmoothScrollProvider>
          <QueryProvider>
            <AuthBoundary>
              {children}
            </AuthBoundary>
          </QueryProvider>
        </SmoothScrollProvider>
      </body>
      <Script src="https://cdn.razorpay.com/static/cx/razorpay-risk-detection/bundle.js" async  />
      <Script
        id="gtm"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-G963FVQ89C"
      />
  
      <Script id="gtm-config" strategy="lazyOnload">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-G963FVQ89C', { page_path: window.location.pathname });
`}
      </Script>


    </html>
  );
}
