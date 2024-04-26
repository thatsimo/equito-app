import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { chains, coins } from "@/lib/model";
import CoinSelect from "./coin-select";
import ChainSelect from "./chain-select";

type SwapLineCardProps = {
  mode: "from" | "to";
};

export function SwapLineCard({ mode }: SwapLineCardProps) {
  const title = mode === "from" ? "You Send" : "You Receive";
  return (
    <div className="pt-4 relative">
      <div className="absolute z-10 top-0 left-6">
        <ChainSelect items={chains} />
      </div>
      <Card className="w-96 max-w-sm relative">
        <CardHeader className="pt-8 flex flex-row items-baseline justify-between space-y-0">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="text-muted-foreground text-md">
            Balance: 0.003 ETH
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex flex-row gap-2">
              <Input
                id="from"
                type="number"
                placeholder="10"
                required
                className="text-md"
              />
              <CoinSelect items={coins} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
