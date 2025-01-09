import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";

// const jost_init = Jost({
//   subsets: ["latin"],
//   weight: ["100", "400", "500"],
//   variable: "--font-jost",
// });

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
});

// const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimal Single Page Portfolio",
  description: "Created by Nati Demelash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
