import { SwapCard } from "./_components/swap-card/swap-card";
import { SwapProvider } from "./_components/swap-card/swap.provider";

export default function Home() {
  return (
    <div className="grid grid-cols-1 justify-between gap-8 items-center py-10">
      <div className="grid gap-2">
        <p className="lg:text-5xl text-4xl text-bold text-center font-jetbrains-mono">
          CROSS-CHAIN SWAP
        </p>
        <p className="grid lg:text-2xl text-xl text-center text-muted-foreground">
          The fastest cross-chain interoperability protocol
        </p>
      </div>

      <div className="grid justify-items-center">
        <SwapProvider>
          <SwapCard />
        </SwapProvider>
      </div>
    </div>
  );
}
