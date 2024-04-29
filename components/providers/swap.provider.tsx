"use client";

import { Chain, Coin } from "@/lib/model";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useMemo,
} from "react";

type SwapLine = {
  coin?: Coin;
  chain?: Chain;
  amount?: string;
  setCoin: Dispatch<SetStateAction<Coin | undefined>>;
  setChain: Dispatch<SetStateAction<Chain | undefined>>;
  setAmount: Dispatch<SetStateAction<string | undefined>>;
};

type SwapContext = {
  from?: SwapLine;
  to?: SwapLine;
};

const swapContext = createContext<SwapContext>({});

export const SwapProvider = ({ children }: PropsWithChildren<SwapContext>) => {
  const [fromCoin, setFromCoin] = useState<Coin | undefined>();
  const [fromChain, setFromChain] = useState<Chain | undefined>();
  const [toCoin, setToCoin] = useState<Coin | undefined>();
  const [toChain, setToChain] = useState<Chain | undefined>();
  const [fromAmount, setFromAmount] = useState<string | undefined>();
  const [toAmount, setToAmount] = useState<string | undefined>();

  const value = useMemo(
    () => ({
      from: {
        coin: fromCoin,
        chain: fromChain,
        amount: fromAmount,
        setCoin: setFromCoin,
        setChain: setFromChain,
        setAmount: setFromAmount,
      },
      to: {
        coin: toCoin,
        chain: toChain,
        amount: toAmount,
        setCoin: setToCoin,
        setChain: setToChain,
        setAmount: setToAmount,
      },
    }),
    [fromAmount, fromChain, fromCoin, toAmount, toChain, toCoin]
  );

  return <swapContext.Provider value={value}>{children}</swapContext.Provider>;
};

export const useSwap = () => {
  const context = useContext(swapContext);
  if (!context) {
    throw new Error("useSwap must be used within a SwapProvider");
  }

  return context;
};
