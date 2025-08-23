import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header"; // ✅ make sure this path resolves

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* Load Calendly once, site-wide */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Header />   {/* ✅ this prints the header on every page */}
        {children}
      </body>
    </html>
  );
}
