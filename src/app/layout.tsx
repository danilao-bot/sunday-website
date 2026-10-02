import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DayRail from "@/components/DayRail";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sunday Ojima Onalo",
  description: "Personal website of Sunday Ojima Onalo, known creatively as Sunny. Businessman, poet, speaker, mentor.",
  metadataBase: new URL("https://TODO_DOMAIN_URL"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sunday Ojima Onalo",
    description: "A life of purpose, possibility and positive impact.",
    type: "profile",
    images: ["/assets/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="bg-chalk text-ink antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-ink focus:text-chalk focus:border-2 focus:border-amber">
          Skip to content
        </a>
        <Navigation />
        <DayRail />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
