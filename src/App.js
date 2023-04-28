import React from "react";
import "./App.css";

import AppRoter from "./router/AppRoter";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppRoter />
    </BrowserRouter>
  );
}

export default App;
