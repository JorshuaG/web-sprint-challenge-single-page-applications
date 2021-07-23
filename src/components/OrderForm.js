import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function OrderForm(props) {
  const [pizzaOrder, setPizzaOrder] = useState({
    name: "",
    size: "",
    sauce: "",
    special: "",
    toppings: [],
  });

  const handleChecklist = (evt) => {
    const toppingsSelected = Array.from(
      document.querySelectorAll("input.toppings:checked")
    ).map((element) => {
      console.log(element);
      return element.value;
    });
    console.log("for toppings selected prior to set state", toppingsSelected);

    setPizzaOrder({ ...pizzaOrder, toppings: toppingsSelected });
  };
  console.log("toppings order after setToppings", pizzaOrder);

  const handleInput = (evt) => {
    const target = evt.target;
    const value = target.type === "radio" ? target.value : target.value;
    const name = target.name;
    setPizzaOrder({ ...pizzaOrder, [name]: value });
  };
  console.log("logged after handleinput", pizzaOrder);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // setPizzaOrder({ ...pizzaOrder, toppings: toppings });
    axios.post("https://reqres.in/api/orders", pizzaOrder).then((resp) => {
      console.log("after submit", resp.data);
      setPizzaOrder({
        name: "",
        size: "",
        sauce: "",
        special: "",
        toppings: [],
      });
    });
  };

  return (
    <form onSubmit={(evt) => handleSubmit(evt)}>
      <h2>Build Your Own Pizza</h2>
      <label>
        Name:
        <input
          onChange={handleInput}
          id="name-input"
          type="text"
          placeholder="Name for the Order"
          name="name"
        ></input>
      </label>
      <div>
        <div class="formHeader">
          <h3>Choice of Size</h3>
          <p>*Required</p>
        </div>

        <label>
          <select name="size" onChange={handleInput} id="size-dropdown">
            <option value="">--Select a Size--</option>
            <option value="small">Small</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>

      <div>
        <div class="formHeader">
          <h3>Choice of Sauce</h3>
          <p>*Required</p>
        </div>
        <label>
          Original Red:
          <input
            onChange={handleInput}
            value="Original Red"
            type="radio"
            name="sauce"
          ></input>
        </label>
        <label>
          Garlic Ranch:
          <input
            onChange={handleInput}
            value="Garlic Ranch"
            type="radio"
            name="sauce"
          ></input>
        </label>
        <label>
          BBQ Sauce:
          <input
            onChange={handleInput}
            value="BBQ Sauce"
            type="radio"
            name="sauce"
          ></input>
        </label>
        <label>
          Spinach Alfredo:
          <input
            onChange={handleInput}
            value="Spinach Alfredo"
            type="radio"
            name="sauce"
          ></input>
        </label>
      </div>
      <div>
        <div class="formHeader">
          <h3>Add Toppings</h3>
          <p>Choose up to 4</p>
        </div>
        <div class="checklistStyle">
          <label>
            <input
              onChange={handleChecklist}
              class="toppings"
              value="Pepperoni"
              name="pepperoni"
              type="checkbox"
            ></input>
            Pepperoni
          </label>
          <label>
            <input
              onChange={handleChecklist}
              class="toppings"
              value="Sausage"
              name="sausage"
              type="checkbox"
            ></input>
            Sausage
          </label>
          <label>
            <input
              onChange={handleChecklist}
              className="toppings"
              value="Mushroom"
              name="mushroom"
              type="checkbox"
            ></input>
            Mushroom
          </label>
          <label>
            <input
              onChange={handleChecklist}
              className="toppings"
              value="Pineapple"
              name="pineapple"
              type="checkbox"
            ></input>
            Pineapple
          </label>
          <label>
            <input
              onChange={handleChecklist}
              className="toppings"
              value="Green Pepper"
              name="greenPepper"
              type="checkbox"
            ></input>
            Green Pepper
          </label>
          <label>
            <input
              onChange={handleChecklist}
              className="toppings"
              value="Diced Tomatos"
              name="dicedTomatos"
              type="checkbox"
            ></input>
            Diced Tomatos
          </label>
          <label>
            <input
              onChange={handleChecklist}
              className="toppings"
              value="Canadian Bacon"
              name="canadianBacon"
              type="checkbox"
            ></input>
            Canadian Bacon
          </label>
          <label>
            <input
              onChange={handleChecklist}
              className="toppings"
              value="Roasted Garlic"
              name="roastedGarlic"
              type="checkbox"
            ></input>
            Roasted Garlic
          </label>
          <label>
            <input
              onChange={handleChecklist}
              className="toppings"
              value="Black Olives"
              name="blackOlives"
              type="checkbox"
            ></input>
            Black Olives
          </label>
        </div>
      </div>
      <div>
        <div class="formHeader">
          <h3>Special Instructions</h3>
        </div>
        <input
          id="special-text"
          placeholder="Any specials instructions?"
          type="text"
          name="special"
          onChange={handleInput}
        ></input>
      </div>
      <button id="order-button">Submit</button>
    </form>
  );
}

export default OrderForm;
