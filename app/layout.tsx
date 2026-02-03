import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Caveat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: "Atul Kumar | Full Stack Developer - React, Node.js, Next.js",
  description: "Atul is a full stack web developer specializing in React, Node.js, and Next.js. Available for freelance or full-time opportunities.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "Node.js", "Portfolio", "Atul"],
  authors: [{ name: "Atul", url: "https://atulsingh.pro/" }],
  creator: "Atul",
  openGraph: {
    title: "Atul | Full Stack Developer",
    description: "Explore Atul's portfolio showcasing full stack projects built with React, Node.js, and Next.js.",
    url: "https://atulsingh.pro/",
    siteName: "Atul Portfolio",
    type: "website",
    images: [
      {
        url: "https://atulsingh.pro/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shivam | Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul | Full Stack Developer",
    description: "React, Node.js, Next.js developer — check out my projects!",
    creator: "@k_atul0307",
    images: ["https://atulsingh.pro/og-image.png"],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        {/* Microsoft Clarity - Only load in production */}

        <Script id='microsoft-clarity' strategy='afterInteractive'>
          {`
        (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ujyxg00uvm");
        `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased dark:bg-neutral-900 text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
