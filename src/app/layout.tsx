import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

const jost_init = Jost({
  subsets: ["latin"],
  weight: ["100", "400", "500"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Natnael Demelash",
  description: "Created by Nati Demelash",
  icons: {
    icon: "/favicon.ico", // Automatically includes the favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost_init.variable}>{children}</body>
    </html>
  );
}
