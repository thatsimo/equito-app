import "@/styles/globals.css";
import type { Metadata } from "next";
import { Barlow, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Shell } from "@/components/ui/shell";
import { Header } from "@/components/header";
import { ChainBackground } from "./_components/chain-svg";

export const metadata: Metadata = {
  title: "Equito App",
  description: "Cross-chain swap platform",
};

export const revalidate = 0;

const barlow = Barlow({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-barlow",
});

const jedbrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get user from context
  const user = null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-barlow antialiased",
          barlow.variable,
          jedbrainsMono.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <ChainBackground />
          <main className="flex-1">
            <Shell>{children}</Shell>
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
