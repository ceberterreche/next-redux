import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { quoteReducer } from "./quote";

export const store = configureStore({
  reducer: {
    counterReducer,
    quoteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
