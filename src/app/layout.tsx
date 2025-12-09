import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/utils/SmoothScroll";
const NavBar = dynamic(() => import("@/components/NavBar"), {
  loading: () => <p>Loading…</p>
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading…</p>
});
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <p>Loading…</p>
});
import { Montserrat, Open_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";

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
        <link rel="canonical" href="https://www.drsatyanarayanagarre.in/" />
      </head>
      <body className="overflow-x-hidden relative">
        <SmoothScrollProvider>
        <NavBar />
          {children}
        </SmoothScrollProvider>
        <ContactForm />
        <Footer />
      </body>
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
