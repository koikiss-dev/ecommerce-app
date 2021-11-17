import React from "react";
import MainRoute from "./routes/MainRoute";
import { BrowserRouter } from "react-router-dom";
import { Global } from "./Global";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Global />
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
