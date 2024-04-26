import { SwapCard } from "./_components/swap-card";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center p-8">
      <div className="text-4xl flex font-bold font-jetbrains-mono">
        CROSS-CHAIN Swap
      </div>
      <div className="flex">
        <SwapCard />
      </div>
    </div>
  );
}
