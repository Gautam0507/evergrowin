import React, { useState } from "react";

import Product from "../components/product";
import Leather from "../assets/images/Chamois_Leather.jpg";

const Products = () => {
  const items = [
    {
      id: 1,
      title: "Chamois Leather",
      description:
        'Chamois leather, also known as "shammy" or "chammy," is a type of leather made from the skin of the chamois, a small European mountain goat. Chamois leather is highly valued for its softness, flexibility, and absorbent properties, making it ideal for a variety of applications, including cleaning and polishing surfaces, such as car bodies, windows, and musical instruments. Chamois leather is often used as a cleaning cloth because it has natural oils and waxes that make it highly absorbent and able to pick up and hold onto dirt and dust particles. It is also gentle on surfaces, making it a popular choice for cleaning delicate items, such as camera lenses and antique furniture. To maintain its softness and absorbent properties, chamois leather should be washed in cool water with a mild soap and then air-dried. It should not be exposed to heat or direct sunlight, which can cause it to dry out and become stiff.',
      image: Leather,
    },
  ];
  return (
    <div className="bg-Purple">
      <div className="container m-auto">
        <div className="text-5xl text-White text-center font-bold py-4">
          Products
        </div>
        <div>
          {items.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
