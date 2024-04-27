"use client";

import { Chain, Coin } from "@/lib/model";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type SwapLine = {
  coin?: Coin;
  chain?: Chain;
  setCoin: Dispatch<SetStateAction<Coin | undefined>>;
  setChain: Dispatch<SetStateAction<Chain | undefined>>;
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

  const value = {
    from: {
      coin: fromCoin,
      chain: fromChain,
      setCoin: setFromCoin,
      setChain: setFromChain,
    },
    to: {
      coin: toCoin,
      chain: toChain,
      setCoin: setToCoin,
      setChain: setToChain,
    },
  };

  return <swapContext.Provider value={value}>{children}</swapContext.Provider>;
};

export const useSwap = () => {
  const context = useContext(swapContext);
  if (!context) {
    throw new Error("useSwap must be used within a SwapProvider");
  }

  return context;
};
