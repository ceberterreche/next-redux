import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { KanyeState } from "../quote";

const getKanyeQuoteResponse: KanyeState = {
  data: { quote: "This is a quote" },
  pending: false,
  error: false,
};

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(`https://api.kanye.rest/`).reply(200, getKanyeQuoteResponse);
};

export { mockNetWorkResponse, getKanyeQuoteResponse };
