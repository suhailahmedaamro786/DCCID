import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://dccidadu.org.pk"),
  title: { default: "Dadu Chamber of Commerce & Industry", template: "%s | DCCI Dadu" },
  description: "Official digital platform of Dadu Chamber of Commerce & Industry — chamber information, leadership, membership, news, events and business resources.",
  keywords: ["Dadu Chamber of Commerce", "DCCI Dadu", "Dadu business community", "Dadu Sindh", "Chamber of Commerce Pakistan"],
  openGraph: { title: "Dadu Chamber of Commerce & Industry", description: "A modern digital platform for Dadu's business community.", type: "website", url: "https://dccidadu.org.pk" },
  alternates: { canonical: "https://dccidadu.org.pk" },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: "Dadu Chamber of Commerce & Industry", description: "Official digital platform for Dadu's business community." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization", name: "Dadu Chamber of Commerce & Industry", url: "https://dccidadu.org.pk", email: "info@dccidadu.org.pk", telephone: "+92-333-7063343", address: { "@type": "PostalAddress", streetAddress: "1st Floor, Al Qadir Trade Centre, New Chowk", addressLocality: "Dadu", addressRegion: "Sindh", addressCountry: "PK" }
        }) }} />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
