import { useState } from "react";

import "./App.css";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
