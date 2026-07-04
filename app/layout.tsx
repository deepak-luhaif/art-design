import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-gallery-display", subsets: ["latin"] });
const sourceSerif4 = Source_Serif_4({ variable: "--font-gallery-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contour — draw along, step by step",
  description:
    "A beginner-friendly, step-by-step drawing tutorial site. Pick a subject and draw along one frame at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif4.variable}`}>
      <body className="min-h-screen antialiased">
        <header
          className="sticky top-0 z-50 flex items-center justify-between gap-3 px-4 py-3 sm:px-6"
          style={{
            background: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
            backdropFilter: "blur(8px)",
            borderBottomWidth: "var(--border-width)",
            borderBottomColor: "var(--color-border)",
            borderBottomStyle: "solid",
          }}
        >
          <Link
            href="/"
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
          >
            Contour
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
