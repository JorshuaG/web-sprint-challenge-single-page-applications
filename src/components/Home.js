import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Delivered straight to your desk!</h2>
      <Link path to="/pizza">
        <button id="order-pizza">Pizza</button>
      </Link>
    </div>
  );
}

export default Home;
