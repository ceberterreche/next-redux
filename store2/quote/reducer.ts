import { createReducer } from "@reduxjs/toolkit";
import { getKanyeQuote } from "./actions";

export interface KanyeState {
  data: { quote: string };
  pending: boolean;
  error: boolean;
}

export const initialState: KanyeState = {
  data: { quote: "click that button" },
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
    });
});

export default quoteReducer;
