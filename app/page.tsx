import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const popularTools = [
  { name: "Gerador de CPF", href: "/gerador-de-cpf" },
  { name: "Gerador de CPNJ", href: "/gerador-de-cnpj" },
  { name: "Validador de CPF", href: "/validador-de-cpf" },
  { name: "Validador de CPNJ", href: "/validador-de-cnpj" },
];

export default function Home() {
  return (
    <main className="mt-4">
      <h2 className="scroll-m-20 pb-4 text-3xl font-extrabold tracking-tight first:mt-0 text-center">
        Ferramentas Populares
      </h2>
      <div className="flex flex-col gap-4 items-center">
        {popularTools.map(({ name, href }) => (
          <Item
            className="w-5/6"
            key={name}
            variant="outline"
            size="sm"
            asChild
          >
            <a href={href}>
              <ItemMedia>
                <BadgeCheckIcon className="size-5 text-primary" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{name}</ItemTitle>
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
