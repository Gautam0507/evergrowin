import React, { useState } from "react";
import { items } from "../assets/Items";

import Product from "../components/product";

const Products = () => {
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
