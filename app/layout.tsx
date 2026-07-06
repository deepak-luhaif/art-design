import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Contour — sketchbook drawing tutorials",
  description:
    "A beginner-friendly, step-by-step drawing tutorial site. Pick a subject and sketch along one line at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen antialiased flex flex-col">
        <header
          className="w-full flex items-center justify-between px-6 py-4 mx-auto max-w-6xl"
          style={{
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
            }}
          >
            Contour.
          </Link>
          <span
            className="text-xs italic tracking-wider uppercase opacity-75"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}
          >
            An Artist&apos;s Guide
          </span>
        </header>
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
