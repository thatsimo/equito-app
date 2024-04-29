import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { Metadata } from "next";
import { Barlow, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Shell } from "@/components/ui/shell";
import { Header } from "@/components/header";
import { ChainBackground } from "./_components/chain-svg";
import { SwapProvider } from "../components/providers/swap.provider";
import { WalletProvider } from "@/components/providers/wallet.provider";

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
        <WalletProvider>
          <SwapProvider>
            <Header />
            <ChainBackground />
            <Shell>{children}</Shell>
            <Toaster />
          </SwapProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
