import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Shivaji Raut",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${spaceGrotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
