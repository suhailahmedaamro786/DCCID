import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dccidadu.org.pk"),
  title: { default: "Dadu Chamber of Commerce & Industry", template: "%s | DCCI Dadu" },
  description: "Official digital platform of Dadu Chamber of Commerce & Industry — chamber information, leadership, membership, news, events and business resources.",
  keywords: ["Dadu Chamber of Commerce", "DCCI Dadu", "Dadu business community", "Dadu Sindh", "Chamber of Commerce Pakistan"],
  openGraph: { title: "Dadu Chamber of Commerce & Industry", description: "A modern digital platform for Dadu's business community.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}