import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavbarUserBtn from "./navbar-user-btn";
import { Menu, Mountain, ShoppingCart } from "lucide-react";
import { ModeToggle } from "../ui/mode-toggle";

export default function NavbarUi() {
  return (
    <header className="z-20 flex items-center justify-between px-4 py-3 shadow-sm sm:px-6 md:py-4 sticky top-0 w-full bg-muted ">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Mountain className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <NavbarUserBtn />
        <Link href="#" className="relative" prefetch={false}>
          <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
            3
          </span>
          <span className="sr-only">Cart</span>
        </Link>
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <Menu className="size-5" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:hidden">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Shop
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
