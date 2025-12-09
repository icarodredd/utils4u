"use client";

import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GenerateData() {
  const params = useParams<{ name: string }>();
  const urlParam = params?.name;
  const [data, setData] = useState("");
  const [isValidData, setIsValidData] = useState<boolean>();

  const handleValidate = async () => {
    const res = await fetch(`/api/validate${params?.name.toUpperCase()}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ [urlParam as string]: data }),
    });
    const json: { valid: boolean } = await res.json();

    const { valid } = json;

    setIsValidData(valid);
  };

  return (
    <main className="mt-4 flex items-center flex-col gap-4 h-screen">
      <h2 className="scroll-m-20 pb-4 text-3xl font-extrabold tracking-tight first:mt-0 text-center">
        Validador de {urlParam?.toUpperCase()}
      </h2>
      <div className="w-full flex justify-center gap-4">
        <Input
          onChange={(e) => setData(e.target.value)}
          className="w-4/6"
          placeholder={`Digite o ${urlParam?.toUpperCase()} sem pontuação`}
        />
      </div>
      <Button onClick={handleValidate} className=" w-3/6">
        Validar {urlParam?.toUpperCase()}
      </Button>
      {isValidData && (
        <span className="text-primary font-medium">
          {urlParam?.toUpperCase()} Válido
        </span>
      )}
      {isValidData === false && (
        <span className="text-destructive font-medium">
          {urlParam?.toUpperCase()} Inválido
        </span>
      )}
    </main>
  );
}
