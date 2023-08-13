import React, { useState } from "react";
import { items } from "../assets/Items";

import Product from "../components/product";

const Products = () => {
  return (
    <div className="bg-Purple">
      <div className="container m-auto">
        <h1 className="text-3xl text-White text-center font-bold py-4 lg:text-4xl">
          Products
        </h1>
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
