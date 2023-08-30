import { configureStore } from "@reduxjs/toolkit";
import { FTGAPI } from "./services/FreeToGamesAPI";

export const store = configureStore({
  reducer: {
    [FTGAPI.reducerPath]: FTGAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(FTGAPI.middleware),
});
