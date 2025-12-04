import { NextResponse } from "next/server";
import { isValidCPF } from "@brazilian-utils/brazilian-utils";

export async function POST(req: Request) {
  const { cpf }: { cpf: string } = await req.json();
  const valid = isValidCPF(cpf);
  return NextResponse.json({ valid });
}
