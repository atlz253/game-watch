import dotenv from "dotenv";
import express, { Response } from "express";
import { FTGFetchGames } from "./utils/freeToGameFetch";
import { Game } from "../../types/game";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/games", async (req, res: Response<Game[]>) => {
  const data = await FTGFetchGames(req.query);

  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Local: http://localhost:${PORT}`);
});
