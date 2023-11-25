import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.listen(3100, () => {
  console.log("Server running on port 3100");
})