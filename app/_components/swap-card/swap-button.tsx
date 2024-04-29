"use client";

import { Button } from "@/components/ui/button";
import { useSwap } from "../../../components/providers/swap.provider";
export const SwapButton = () => {
  const swap = useSwap();
  const disabled = !swap.from?.amount || !swap.to?.amount;

  return <Button disabled={disabled}>Swap</Button>;
};
