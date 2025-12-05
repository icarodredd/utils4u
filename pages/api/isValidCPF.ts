import { NextApiRequest, NextApiResponse } from "next";
import { isValidCPF } from "@brazilian-utils/brazilian-utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ valid: boolean } | { message: string }>
) {
  if (req.method === "POST") {
    const { cpf }: { cpf: string } = req.body;
    const isValid = isValidCPF(cpf);
    res.status(200).json({ valid: isValid });
  } else res.status(405).send({ message: "Method Not Allowed" });
}
