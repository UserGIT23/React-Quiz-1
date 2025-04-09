import React from "react";
import "./CSS/Cards.css";
import espresso from "./Images/espresso.jpg";
import americano from "./Images/americano.jpg";
import latte from "./Images/latte.jpg";
import cappuccino from "./Images/cappuccino.jpg";
import mocha from "./Images/mocha.png";

function Cards() {
  const coffees = [
    {
      id: 1,
      name: "Espresso",
      desc: "A strong and bold coffee shot with a rich, intense flavor.",
      price: 80,
      img: espresso,
    },
    {
      id: 2,
      name: "Cappuccino",
      desc: "Espresso topped with steamed milk and a thick layer of foam.",
      price: 120,
      img: cappuccino,
    },
    {
      id: 3,
      name: "Latte",
      desc: "Smooth blend of espresso and steamed milk, slightly creamy.",
      price: 110,
      img: latte,
    },
    {
      id: 4,
      name: "Americano",
      desc: "Espresso diluted with hot water, perfect for a milder coffee taste.",
      price: 90,
      img: americano,
    },
    {
      id: 5,
      name: "Mocha",
      desc: "Chocolate-flavored espresso with steamed milk and whipped cream.",
      price: 130,
      img: mocha,
    },
  ];

  return (
    <div className="coffes">
      {coffees.map((c) => (
        <div className="card" key={c.id}>
          <img className="img-class" src={c.img} alt={`${c.name}`} />
          <h2>{c.name}</h2>
          <h3>
            <small>Description : {c.desc}</small>
          </h3>
          <h3>
            <small>Price: $ {c.price}</small>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Cards;
