import reducer, { initialState } from "./reducer";

import { getKanyeQuote } from "./actions";

import {
  mockNetWorkResponse,
  getKanyeQuoteResponse,
} from "../utils/quote.data";
import { store } from "../";

/**
 * Testing the initial state
 */

test("Should return initial state", () => {
  expect(
    reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState);
});

/**
 * Testing the getKanyeQuote thunk
 */

describe("Quote state tests", () => {
  beforeAll(() => {
    mockNetWorkResponse();
  });

  it("Should be able to fetch the kanye quote", async () => {
    const result = await store.dispatch(getKanyeQuote());
    const quote = result.payload;

    expect(result.type).toBe("kanye/kanyeQuote/fulfilled");
    expect(quote).toEqual(getKanyeQuoteResponse);

    const state = store.getState().quoteReducer;

    expect(state.pending).toBe(false);
    expect(state.data).toEqual(getKanyeQuoteResponse);
  });
});
