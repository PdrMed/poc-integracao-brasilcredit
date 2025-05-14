import { ConsultarVeiculoDTO } from "../dto/consultarVeiculo.dto";
import { consultarVeiculoBrasilCreditService } from "./consultarVeiculoBrasilCreditService";

export const consultarVeiculo = async ({
  consulta,
  placa,
  chassi,
}: ConsultarVeiculoDTO) => {
  return await consultarVeiculoBrasilCreditService({ consulta, placa, chassi });
};
