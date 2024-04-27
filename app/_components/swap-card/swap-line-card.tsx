"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Chain, Coin, chains, coins } from "@/lib/model";
import CoinSelect from "./coin-select";
import ChainSelect from "./chain-select";
import { useSwap } from "./swap.provider";

type SwapLineCardProps = {
  mode: "from" | "to";
};

export function SwapLineCard({ mode }: SwapLineCardProps) {
  const side = useSwap()[mode];
  if (!side) {
    throw new Error("SwapLineCard must be used within a SwapProvider");
  }

  const { chain, setChain, coin, setCoin } = side;

  const title = mode === "from" ? "You send" : "You receive";

  return (
    <div className="pt-4 relative">
      <div className="absolute z-10 top-0 left-6">
        <ChainSelect items={chains} selected={chain} setSelect={setChain} />
      </div>
      <Card className="relative">
        <CardHeader className="pt-8 flex flex-row items-baseline justify-between space-y-0">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="text-muted-foreground text-md">
            Balance: 0.003 ETH
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex flex-row gap-2 items-center">
              <Input
                id="from"
                type="number"
                placeholder="0.00"
                required
                className="text-4xl font-jetbrains-mono"
                variant={"ghost"}
                disabled={!coin}
              />
              <CoinSelect
                items={coins}
                setSelect={setCoin}
                selected={coin}
                disabled={!chain}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
