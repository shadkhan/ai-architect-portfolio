import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadab Khan | AI Architect",
  description:
    "AI Architect building production-grade agentic AI and healthcare AI platforms.",
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
