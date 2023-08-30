import { configureStore } from "@reduxjs/toolkit";
import { FTGAPI } from "./services/FreeToGamesAPI";
import { searchFilterReducer } from "./features/searchFilter";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    [FTGAPI.reducerPath]: FTGAPI.reducer,
    searchFilter: searchFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(FTGAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
