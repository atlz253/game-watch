import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../../../../types/game";

export const FTGAPI = createApi({
  reducerPath: "FTGAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getGamesList: builder.query<Game[], void>({ query: () => "games" }),
  }),
});

export const { useGetGamesListQuery } = FTGAPI;
