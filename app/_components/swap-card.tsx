import { SwapLineCard } from "./swap-line-card";
import { Button } from "@/components/ui/button";

export const SwapCard = () => {
  return (
    <div className="flex flex-col gap-8">
      <SwapLineCard mode="from" />
      <SwapLineCard mode="to" />
      <Button>Swap</Button>
    </div>
  );
};
