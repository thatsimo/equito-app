import { MainNav } from "./main-nav";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 h-16 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </header>
  );
}
