import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./Stores";

/**
 * This is where we want to inject the redux store into the entire application.
 * We use the `Provider` component (which is actually just a Context provider) to pass this down.
 * Since we use `createSlice` and `configureStore` from the reduxjs toolkits, we also automatically
 * get access to the Redux Developer Tools (download from chrome extension store).
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
