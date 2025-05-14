import { Request, Response } from "express";
import { badRequest, ok, serverError } from "../utils/http-helper";
import { consultarVeiculo } from "../services/consultarVeiculo";
import { ConsultarVeiculoDTO } from "../dto/consultarVeiculo.dto";

export const consultarVeiculoController = async (
  request: Request,
  response: Response
) => {
  try {
    const requiredFields = ["consulta"];
    for (const requiredField of requiredFields) {
      if (!request.query[requiredField]) {
        return badRequest(response, `${requiredField} is required`);
      }
    }

    const result = await consultarVeiculo(request.query as ConsultarVeiculoDTO);
    if (result instanceof Error) {
      return badRequest(response, response.statusMessage);
    }

    return ok(response, result);
  } catch (error) {
    return serverError(response);
  }
};
