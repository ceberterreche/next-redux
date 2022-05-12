import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { quoteReducer } from "./quote";

export const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      counterReducer,
      quoteReducer,
    },
    preloadedState,
  });
};
let store;
export const initialiseStore = (preloadedState) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
