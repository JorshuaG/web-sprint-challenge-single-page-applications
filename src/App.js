import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <header>
        <h2>Lambda Eats</h2>
        <div>
          <Link path to="/">
            <button>Home</button>
          </Link>
          <button>Help</button>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <OrderForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
