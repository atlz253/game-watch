import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../../../../types/game";

interface getGamesListOptions {
  category: string;
  platform: string;
}

export const FTGAPI = createApi({
  reducerPath: "FTGAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getGamesList: builder.query<Game[], getGamesListOptions>({
      query: (options) => {
        const searchParams = new URLSearchParams();

        let key: keyof getGamesListOptions;
        for (key in options) {
          const value = options[key];

          if (value === "all") continue;

          searchParams.set(key, value);
        }

        return "games?" + searchParams;
      },
    }),
  }),
});

export const { useGetGamesListQuery } = FTGAPI;
