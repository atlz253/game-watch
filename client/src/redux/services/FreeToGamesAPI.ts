import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../../../../types/game";

export const FTGAPI = createApi({
  reducerPath: "FTGAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getGamesList: builder.query<Game[], { category: string; platform: string }>(
      {
        query: (options) => {
          const searchParams = new URLSearchParams();

          for (const key in options) {
            const value = options[key];

            if (value === "all") continue;

            searchParams.set(key, value);
          }

          return "games?" + searchParams;
        },
      }
    ),
  }),
});

export const { useGetGamesListQuery } = FTGAPI;
