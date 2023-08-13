import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="flex flex-col justify-around lg:flex-row">
      <img
        src={props.item.image}
        className="self-center sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl "
      />
      <div className="flex flex-col ontainer mx-20 justify-evenly">
        <h1 className="font-bold text-3xl text-center text-White xl:text-5xl">
          {props.item.title}
        </h1>
        <div className="text-White xl:text-2xl">{props.item.description}</div>
        <Link
          to="/products/chamoisLeather"
          className=" text-White text-md text-center xl:text-2xl font-semibold 2xl:font-bold p-3 hover:text-Purple hover:bg-White hover:rounded-full hover:shadow-lg hover:transition-all duration-500 ease-in-out"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Product;
