import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadab Khan | AI Architect | shadkhan.io",
  description:
    "Professional AI Architect portfolio for Shadab Khan, focused on agentic AI, production AI systems, healthcare AI, GovTech, and product-minded engineering leadership.",
  metadataBase: new URL("https://shadkhan.io"),
  openGraph: {
    title: "Shadab Khan | AI Architect",
    description:
      "Production AI systems, agentic AI architecture, healthcare AI, GovTech, and senior engineering judgment.",
    url: "https://shadkhan.io",
    siteName: "shadkhan.io",
    images: [
      {
        url: "/images/ai-architecture-hero.png",
        width: 1200,
        height: 630,
        alt: "Shadab Khan AI architecture portfolio visual",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
