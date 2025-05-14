import express from "express";
import { app } from "./app";
import { consultarVeiculoController } from "./controllers";

app.use(express.json());

app.get("/consultarVeiculo", consultarVeiculoController);
