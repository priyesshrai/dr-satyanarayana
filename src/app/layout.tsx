import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/utils/SmoothScroll";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Dr. Satyanarayan",
  description: "Dr. Satyanarayan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
        <link rel="shortcut icon" href="/images/logo/fav-icon.svg" type="image/x-icon" />
      </head>
      <body className="overflow-x-hidden">
        <SmoothScrollProvider>
          <NavBar />
          {children}
          <ContactForm />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
