import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StoreContext from "./context";
import Store from "./store/store";

const store = new Store();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={{ store }}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
);
