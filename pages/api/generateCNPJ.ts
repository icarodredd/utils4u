import { NextApiRequest, NextApiResponse } from "next";
import { generateCNPJ } from "@brazilian-utils/brazilian-utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ cnpj: string } | { message: string }>
) {
  if (req.method === "GET") {
    const cnpj = generateCNPJ();
    res.status(200).json({ cnpj: cnpj });
  } else res.status(405).send({ message: "Method Not Allowed" });
}
