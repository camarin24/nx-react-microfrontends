import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";
import { AuthProvider } from "@ss/auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <BrowserRouter>
      <p>hello</p>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
