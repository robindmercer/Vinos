import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
const scope = process.env.REACT_APP_AUTH0_SCOPE;

root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <ToastContainer />
        <BrowserRouter>
          <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            audience={audience}
            scope={scope}
          >
            <App />
          </Auth0Provider>
        </BrowserRouter>      
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
