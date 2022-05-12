import { createReducer } from "@reduxjs/toolkit";
import { getKanyeQuote, setValue } from "./actions";

export interface KanyeState {
  data: { quote: string };
  pending: boolean;
  error: boolean;
}

export const initialState: KanyeState = {
  data: { quote: "" },
  pending: false,
  error: false,
};

export const quoteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getKanyeQuote.pending, (state) => {
      state.pending = true;
    })
    .addCase(getKanyeQuote.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
    })
    .addCase(getKanyeQuote.rejected, (state) => {
      state.pending = false;
      state.error = true;
    })
    .addCase(setValue, (state, { payload }) => {
      state.data.quote = payload;
    });
});

export default quoteReducer;
