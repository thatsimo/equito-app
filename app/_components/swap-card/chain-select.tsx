"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown, Link } from "lucide-react";
import Image from "next/image";
import { Chain } from "@/lib/model";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type ChainSelectProps = PopoverTriggerProps & {
  items: Chain[];
  selected?: Chain;
  setSelect: React.Dispatch<React.SetStateAction<Chain | undefined>>;
  disabled?: boolean;
};

export default function ChainSelect({
  className,
  items,
  selected,
  setSelect,
  disabled,
}: ChainSelectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          className={cn("flex items-center gap-2", className)}
          disabled={disabled}
        >
          {selected ? (
            <>
              <Image
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${selected.id}.png`}
                width={24}
                height={24}
                alt="logo"
              />
              {selected.name}
            </>
          ) : (
            <>
              <Link className={"h-4 w-4"} />
              Select chain
            </>
          )}
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder={`Search...`} />
            <CommandEmpty>No results found.</CommandEmpty>
            {items.map((item) => (
              <CommandItem
                className="text-md hover:cursor-pointer gap-2"
                onSelect={() => {
                  setOpen(false);
                  setSelect(item);
                }}
                key={item.id}
              >
                <Image
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
                  width={24}
                  height={24}
                  alt="logo"
                />
                <div className="flex flex-col">
                  <span>{item.name}</span>
                </div>
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    selected?.id === item.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
