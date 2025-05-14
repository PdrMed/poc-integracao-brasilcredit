import { httpServer } from "./app";
import * as dotenv from "dotenv";
dotenv.config();

import("./routes");
httpServer.listen(process.env.PORT || 3500);
console.log(`Running at ${process.env.PORT}`);
