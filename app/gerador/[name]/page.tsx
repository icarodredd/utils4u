"use client";

import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { formatCPF, formatCNPJ } from "@brazilian-utils/brazilian-utils";
import { Copy } from "lucide-react";

const formatters: Record<string, (value: string) => string> = {
  cpf: formatCPF,
  cnpj: formatCNPJ,
};

export default function GenerateData() {
  const params = useParams<{ name: string }>();
  const [generatedData, setGeneratedData] = useState("");
  const [pontuaction, setPontuation] = useState("with");

  const handleGenerate = async () => {
    const res = await fetch(`/api/generate${params?.name.toUpperCase()}`);
    const data = await res.json();
    const rawData: string = data[params?.name as string];

    if (pontuaction === "without") return setGeneratedData(rawData);

    const formattedData = formatters[params?.name as string](rawData);

    setGeneratedData(formattedData);
  };

  return (
    <main className="mt-4 flex items-center flex-col gap-4 h-screen">
      <h2 className="scroll-m-20 pb-4 text-3xl font-extrabold tracking-tight first:mt-0 text-center">
        Gerador de {params?.name.toUpperCase()}
      </h2>
      <div className="w-full flex justify-center gap-4">
        <Input
          className="w-4/6"
          readOnly
          value={generatedData}
          placeholder={params?.name.toUpperCase()}
        />
        <Button onClick={() => navigator.clipboard.writeText(generatedData)}>
          <Copy />
        </Button>
      </div>

      <div className="flex gap-4 w-4/6 justify-center">
        <small className="text-sm leading-none font-medium">
          Gerar com pontuação?
        </small>
        <RadioGroup defaultValue="with" className="flex">
          <div className="flex items-center gap-3">
            <RadioGroupItem
              onClick={(e) => setPontuation(e.currentTarget.value)}
              value="with"
              id="r1"
            />
            <Label htmlFor="r1">Com pontuação</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem
              onClick={(e) => setPontuation(e.currentTarget.value)}
              value="without"
              id="r2"
            />
            <Label htmlFor="r2">Sem pontuação</Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleGenerate} className=" w-3/6">
        Gerar {params?.name.toUpperCase()}
      </Button>
    </main>
  );
}
