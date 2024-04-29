"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
  getDefaultConfig,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { localhost, sepolia } from "wagmi/chains";

const config = (() => {
  if (!process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID) {
    throw new Error("Missing NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID");
  }

  return getDefaultConfig({
    appName: "Equito",
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    wallets: [
      ...getDefaultWallets().wallets,
      {
        groupName: "Other",
        wallets: [argentWallet, trustWallet, ledgerWallet],
      },
    ],
    chains: [sepolia, localhost],
    ssr: true,
  });
})();

const queryClient = new QueryClient();

export const WalletProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider
        theme={midnightTheme({
          accentColor: "#5d6af9",
          accentColorForeground: "white",
          borderRadius: "small",
        })}
      >
        {children}
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
