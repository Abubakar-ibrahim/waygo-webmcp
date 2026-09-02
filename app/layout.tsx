import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WAYGO — Agent-Native Travel Marketplace",
  description: "Discover, verify and compare trusted African travel packages with your AI agent while you stay in control.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
