import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Routes/login";
import Home from "./Routes/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);
