import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RetainIQ",
  description: "Generated by create next app",icons: {
    icon: "https://framerusercontent.com/images/E4ASOtv32Ln0x5c9sOJ8aUHtQYg.png"},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
