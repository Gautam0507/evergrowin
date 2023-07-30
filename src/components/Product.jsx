import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="flex flex-row justify-around">
      <img src={props.item.image} className="max-w-md pb-8 mx-20" />
      <div className="flex flex-col ontainer mx-20 justify-evenly">
        <h1 className="font-bold text-3xl text-center text-White">
          {props.item.title}
        </h1>
        <div className="text-White">{props.item.description}</div>
        <Link
          to="/products/chamoisLeather"
          className=" text-White text-lg text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Product;
