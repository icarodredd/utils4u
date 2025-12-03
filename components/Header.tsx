"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Search, SearchIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const isMdUp = useMediaQuery("(min-width: 768px)");
  return (
    <header className="flex justify-between items-center p-4 md:p-0 md:py-4">
      <div className="flex gap-4">
        <Link href="/">
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            utils4u
          </h1>
        </Link>
        <ModeToggle />
      </div>

      <div className="flex gap-2">
        {isMdUp ? (
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        ) : (
          <>
            <Button>
              <Search />
            </Button>
            <Button>
              <Menu />
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
