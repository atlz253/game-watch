import { RootState } from "../../store";

export const selectGenre = (state: RootState) => state.searchFilter.genre;
