import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: "all",
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setGenre: (state, { payload }: PayloadAction<string>) => {
      state.genre = payload;
    },
  },
});

export const searchFilterReducer = searchFilterSlice.reducer;
export const searchFilterActions = searchFilterSlice.actions;
