import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../";

export const selectCount = (state: RootState) => state.counterReducer.value;

export const countSelector = createSelector(selectCount, (state) => state);
