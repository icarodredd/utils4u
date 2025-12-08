"use client";

import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GenerateData() {
  const params = useParams<{ name: string }>();
  const [generatedData, setGeneratedData] = useState("");

  const handleGenerate = async () => {
    const res = await fetch(`/api/generate${params?.name.toUpperCase()}`);
    const data = await res.json();
    setGeneratedData(data[params?.name as string]);
  };

  return (
    <main className="mt-4 flex items-center flex-col">
      <h2 className="scroll-m-20 pb-4 text-3xl font-extrabold tracking-tight first:mt-0 text-center">
        Gerador de {params?.name.toUpperCase()}
      </h2>
      <Input
        className="w-4/6"
        readOnly
        value={generatedData}
        placeholder={params?.name.toUpperCase()}
      />
      <Button onClick={handleGenerate} className="mt-4 w-3/6">
        Gerar {params?.name.toUpperCase()}
      </Button>
    </main>
  );
}
