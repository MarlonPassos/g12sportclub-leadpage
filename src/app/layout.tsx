import type { Metadata } from "next";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'], // Only include subsets you need
  weight: ['400', '700'], // Add the required font weights
});

export const metadata: Metadata = {
  title: "G12 Sport Club",
  description: "Generated by G12 Sport Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
