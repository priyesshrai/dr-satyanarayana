import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/utils/SmoothScroll";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Montserrat, Open_Sans } from "next/font/google";

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
          <ContactForm />
          <Footer />
        </SmoothScrollProvider>
      </body>
      <GoogleAnalytics gaId="G-G963FVQ89C" />
    </html>
  );
}
