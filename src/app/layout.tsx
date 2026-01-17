import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EnviroVision | Breathing New Life Into the Environment",
  description: "EnviroVision turns everyday waste into valuable resources, promoting cleaner cities and sustainable living in India. Innovate, Inspire, Impact.",
  keywords: ["sustainability", "waste management", "recycling", "India", "green technology", "environment"],
  authors: [{ name: "EnviroVision" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "EnviroVision | Breathing New Life Into the Environment",
    description: "EnviroVision turns everyday waste into valuable resources, promoting cleaner cities and sustainable living in India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
