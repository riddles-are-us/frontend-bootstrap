import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import * as serviceWorker from "./serviceWorker";
import {
  DelphinusReactProvider,
  setProviderConfig,
} from "zkwasm-minirollup-browser";

const container = document.getElementById("root");
const root = createRoot(container!);

// Configure RainbowKit provider type before rendering
setProviderConfig({ type: "rainbow" });

root.render(
  <React.StrictMode>
    <DelphinusReactProvider appName="0xBootstrap" store={store}>
      <App />
    </DelphinusReactProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
