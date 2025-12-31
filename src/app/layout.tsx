import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Decker Urbano",
  description:
    "CTO @Commet. Open source contributor and startup enthusiast with a passion for building innovative technology solutions.",
  keywords: ["Decker Urbano", "CTO", "Commet", "open source", "startup", "developer", "tech"],
  authors: [{ name: "Decker Urbano" }],
  openGraph: {
    title: "Decker Urbano | CTO @Commet",
    description: "CTO @Commet. Open source contributor and startup enthusiast.",
    url: "https://decker.sh",
    siteName: "Decker Urbano",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decker Urbano | CTO @Commet",
    description: "CTO @Commet. Open source contributor and startup enthusiast.",
    creator: "@0xDecker",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontMono.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
