import { Response } from "express";

const ok = (response: Response, data: any) => response.status(200).json(data);

const created = (response: Response, data: any) =>
  response.status(201).json(data);

const noContent = (response: Response) => response.status(204).send();

const badRequest = (response: Response, message: string) =>
  response.status(400).json({ message });

const unauthorized = (response: Response, message: string) =>
  response.status(401).json({ message });

const notFound = (response: Response, message: string) =>
  response.status(404).json({ message });

const serverError = (response: Response) =>
  response.status(500).json({ message: "Internal Server Error" });

export {
  ok,
  created,
  noContent,
  badRequest,
  unauthorized,
  notFound,
  serverError,
};
