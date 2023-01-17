import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthContextProvider } from "./context/authContext";
import { PetContextProvider } from "./context/petContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <PetContextProvider>
          <App />
        </PetContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
