import type { Metadata } from "next";
import { Poppins, Rajdhani, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahees Ahmed | AI Engineer & Full Stack Developer",
  description: "AI Engineer, Full Stack Developer, and Chatbot Specialist with expertise in building custom AI solutions and scalable web applications.",
  keywords: "AI Engineer, Full Stack Developer, Chatbot Specialist, React, Next.js, Node.js, Python, OpenAI, LangChain, RAG",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: { url: '/apple-icon.png', type: 'image/png' },
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${poppins.variable} ${rajdhani.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
