import './globals.css'
import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";

const font = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "k3ng",
  description: "k3ng's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-stone-900 text-stone-50 bg-[linear-gradient(to_right,#57534e05_1px,transparent_1px),linear-gradient(to_bottom,#57534e05_1px,transparent_1px)] bg-[size:36px_36px]`}
      >
        {children}
      </body>
    </html>
  );
}
