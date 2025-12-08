import { NextApiRequest, NextApiResponse } from "next";
import { isValidCNPJ } from "@brazilian-utils/brazilian-utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ valid: boolean } | { message: string }>
) {
  if (req.method === "POST") {
    const { cnpj }: { cnpj: string } = req.body;
    const isValid = isValidCNPJ(cnpj);
    res.status(200).json({ valid: isValid });
  } else res.status(405).send({ message: "Method Not Allowed" });
}
