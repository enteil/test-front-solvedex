// 1. Librerías y módulos externos
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// 2. Tus propios componentes y archivos
import "../src/assets/styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

// 3. Código de ejecución
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
