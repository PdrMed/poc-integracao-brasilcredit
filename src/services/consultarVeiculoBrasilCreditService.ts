import axios from "axios";
import * as dotenv from "dotenv";
import { XMLParser } from "fast-xml-parser";
import { ConsultarVeiculoDTO } from "../dto/consultarVeiculo.dto";

dotenv.config();

export const consultarVeiculoBrasilCreditService = async ({
  consulta,
  placa,
  chassi,
}: ConsultarVeiculoDTO) => {
  if (!placa && !chassi) {
    throw new Error("Informe ao menos a placa ou o chassi");
  }

  const login = process.env.BRASIL_CREDIT_LOGIN;
  const senha = process.env.BRASIL_CREDIT_SENHA;

  if (!login || !senha) {
    throw new Error("Login ou senha da BrasilCredit não configurados no .env");
  }

  const queryParams = new URLSearchParams({
    login,
    senha,
    consulta,
    ...(placa ? { placa } : {}),
    ...(chassi ? { chassi } : {}),
  });

  const url = `https://v2.brasilcredit.com.br/api/consulta?${queryParams.toString()}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        Accept: "application/xml",
      },
      responseType: "text",
    });

    const parser = new XMLParser();
    const json = parser.parse(data);

    return json;
  } catch (error) {
    console.error("Erro ao consultar veículo:", error);
    throw error;
  }
};
