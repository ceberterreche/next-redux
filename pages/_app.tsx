import App, { AppContext, AppProps } from "next/app";

import { createStore, initialiseStore } from "../store2";
import { Provider, useStore } from "react-redux";
import { incrementByAmount } from "../store2/counter";
import axios from "axios";
import { setValue } from "../store2/quote";
import quoteReducer from "../store2/quote/reducer";

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  //initialise redux store on server side
  const reduxStore = initialiseStore({});
  const { dispatch } = reduxStore;
  const response = await axios.get("https://api.kanye.rest/");
  dispatch(setValue(response.data));
  appProps.pageProps = {
    ...appProps.pageProps,
    initialReduxState: reduxStore.getState(),
  };

  return appProps;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps.initialReduxState.quoteReducer.data.quote);
  const reduxStore = createStore(pageProps.initialReduxState);
  console.log(reduxStore.getState());
  console.log(reduxStore.getState().quoteReducer.data.quote);

  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />;
    </Provider>
  );
}
