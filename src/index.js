import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/tailwind.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./context/context";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
