import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter}from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
    </ BrowserRouter>
  </StrictMode>,
  rootElement
);
