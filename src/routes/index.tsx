import React from "react";
import { Switch } from "react-router-dom";
import Clientes from "../pages/Clientes";
import Localizacao from "../pages/Localizacao";
import Login from "../pages/Login";
import Mover from "../pages/Mover";
import NotFound from "../pages/NotFound";
import Route from "./route";
import Registration from "../pages/Registration";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/registrar" exact component={Registration} />
    <Route path="/local" exact component={Localizacao} />
    <Route path="/mover" exact component={Mover} />
    <Route path="/criancas" exact component={Clientes} />
    <Route path="/404" component={NotFound} />
  </Switch>
);

export default Routes;
