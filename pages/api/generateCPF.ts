import { NextApiRequest, NextApiResponse } from "next";
import { generateCPF } from "@brazilian-utils/brazilian-utils";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ cpf: string } | { message: string }>
) {
  if (req.method === "GET") {
    const cpf = generateCPF();
    res.status(200).json({ cpf: cpf });
  } else res.status(405).send({ message: "Method Not Allowed" });
}
