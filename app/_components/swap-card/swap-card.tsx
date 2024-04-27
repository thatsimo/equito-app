import { SwapLineCard } from "./swap-line-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SwapCardProps = React.HtmlHTMLAttributes<HTMLDivElement>;

export const SwapCard = ({ className, ...props }: SwapCardProps) => {
  return (
    <div className={cn("flex flex-col gap-8 max-w-md", className)} {...props}>
      <SwapLineCard mode="from" />
      <SwapLineCard mode="to" />
      <Button>Swap</Button>
    </div>
  );
};
