import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function Home() {
  return (
    <main className="mt-4">
      <h2 className="scroll-m-20 pb-4 text-3xl font-extrabold tracking-tight first:mt-0 text-center">
        Ferramentas Populares
      </h2>
      <div className="flex flex-col gap-4 items-center">
        {[1, 2, 3].map((item) => (
          <Item
            className="w-5/6"
            key={item}
            variant="outline"
            size="sm"
            asChild
          >
            <a href="#">
              <ItemMedia>
                <BadgeCheckIcon className="size-5" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Gerador {item}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          </Item>
        ))}
      </div>
    </main>
  );
}
