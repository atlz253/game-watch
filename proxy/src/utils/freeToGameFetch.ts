import { Game } from "../../../types/game";
import { curryFetch } from "./curryFetch";

const BASE = "https://www.freetogame.com";

export const FTGFetchGames = (params = {}) =>
  curryFetch(BASE, "/api/games", params) as Promise<Game[]>;
