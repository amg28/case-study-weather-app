import React from "react";
import { Provider } from "react-redux";
import Home from "./home/Home";
import configureStore from "./store";

export default function Root(props) {
  return (
    <Provider store={configureStore()}>
      <Home />
    </Provider>
  );
}
