import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectQuote = (state: RootState) => state.quoteReducer;

export const kanyeQuoteSelector = createSelector(selectQuote, (state) => state);
