import type { Metadata } from "next";
import "./globals.css";
import { Niramit } from "next/font/google";

const niramit = Niramit({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-unica",
});

export const metadata: Metadata = {
  title: "Natnael Demelash",
  description: "Created by Nati Demelash",
  icons: {
    icon: "/favicon.png", // Automatically includes the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={niramit.className}>{children}</body>
    </html>
  );
}
