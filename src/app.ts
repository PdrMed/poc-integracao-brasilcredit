import express from "express";
import cors from "cors";
import { createServer } from "http";

const app = express();
app.use(cors());

const httpServer = createServer(app);

export { app, httpServer };
