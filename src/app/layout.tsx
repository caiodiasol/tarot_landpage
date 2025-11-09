import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider, ThemeScript } from "@/components/providers/theme-provider";
import { LiquidEtherDark } from "@/components/background/LiquidEtherDark";
import { LiquidEtherLight } from "@/components/background/LiquidEtherLight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Raissa Tarot | Terapias Integrativas",
    template: "%s | Raissa Tarot",
  },
  description:
    "Consultas de Tarot e terapias holísticas com acolhimento, intuição e direcionamento para decisões conscientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="relative">
            <LiquidEtherLight className="dark:hidden opacity-90" />
            <LiquidEtherDark className="hidden dark:block" />
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
