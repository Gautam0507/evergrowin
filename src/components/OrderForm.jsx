import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { items } from "../assets/Items";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const OrderForm = () => {
  // TODO: replace the ref properly when deploying
  const OrderRef = collection(db, "Order");
  const schema = yup.object().shape({
    Name: yup
      .string("Please enter a valid name")
      .required("Please enter your name"),
    Email: yup
      .string("Please enter a valid email ")
      .email("Please enter a valid email")
      .required("Please enter your email"),
    Phone: yup
      .number("Please enter a valid phone number")
      .required("Please enter your phone number"),
    City: yup
      .string("Please enter a valid city")
      .required("Please enter your city"),
    Item: yup
      .string("Please select a valid item")
      .required("Please select an item"),
    Quantity: yup
      .string("Please enter a valid quantity")
      .required("Please enter the quantity"),
    Query: yup.string("Please enter a valid Query"),
    Preference: yup
      .string("Please select a valid preference for mode of conatact")
      .required("Please select a preference"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await addDoc(OrderRef, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container m-auto">
        <p className="text-center px-2 text-xl font-medium leading-6 md:text-2xl lg:text-3xl lg:my-4 2xl:text-4xl">
          We're thrilled that you're interested in our products. Please fill out
          the form below with your details, and we will get back to you as soon
          as possible to assist you with your purchase.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-2 md:text-xl lg:text-2xl "
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-5">
            <div className="container m-auto">
              <h3 className="font-medium">Name:</h3>
              <input
                type="text"
                name="Name"
                placeholder="John Doe"
                className="border border-Black px-1 rounded-md bg-Grey placeholder-DarkGrey min-w-full lg:px-3"
                {...register("Name")}
              />
              {errors.Name && <p>{errors.Name.message}</p>}
            </div>
            <div className="container m-auto">
              <h3 className="font-medium">Email:</h3>
              <input
                type="text"
                name="Email"
                className="border border-Black px-1 rounded-md bg-Grey placeholder-DarkGrey min-w-full lg:px-3"
                placeholder="xyz@example.com"
                {...register("Email")}
              />
              {errors.Email && <p>{errors.Email.message}</p>}
            </div>
            <div className="container m-auto">
              <h3 className="font-medium">Phone:</h3>
              <input
                type="text"
                name="Phone"
                placeholder="eg: 9940168853"
                className="border border-Black px-1 rounded-md bg-Grey placeholder-DarkGrey min-w-full lg:px-3"
                {...register("Phone")}
              />
              {errors.Phone && <p>{errors.Phone.message}</p>}
            </div>

            <div className="container m-auto">
              <h3 className="font-medium">City:</h3>
              <input
                type="text"
                name="City"
                placeholder="eg: Chennai"
                className="border border-Black px-1 rounded-md bg-Grey placeholder-DarkGrey min-w-full lg:px-3"
                {...register("City")}
              />
              {errors.City && <p>{errors.City.message}</p>}
            </div>
            <div className="container m-aut">
              <h3 className="font-medium">Item:</h3>
              <select
                name="Item"
                {...register("Item")}
                className="border border-Black px-1 rounded-md bg-Grey placeholder-DarkGrey min-w-full lg:px-3"
              >
                {items.map((item) => {
                  return (
                    <option value={item.title} key={item.id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
              {errors.Item && <p>{errors.Item.message}</p>}
            </div>
            <div className="container m-auto">
              <h3 className="font-medium">Quantity(No of units):</h3>
              <input
                type="text"
                name="Quantity"
                placeholder="eg: 100 units"
                className="border border-Black px-1 rounded-md bg-Grey placeholder-DarkGrey min-w-full lg:px-3"
                {...register("Quantity")}
              />
              {errors.Quantity && <p>{errors.Quantity.message}</p>}
            </div>
            <div className="container m-auto ">
              <h3 className="font-medium">Query:</h3>
              <textarea
                name="Query"
                placeholder="eg: I would like to know more about the product"
                className="border border-Black px-1 rounded-md bg-Grey placeholder-DarkGrey min-w-full lg:h-32 lg:px-3 md:h-20 sm:"
                {...register("Query")}
              />
              {errors.Query && <p>{errors.Query.message}</p>}
            </div>
            <div className="container m-auto">
              <h3 className="font-medium">Preferred Mode of Contact:</h3>
              <div className="md:flex-row flex flex-col md:justify-between lg:flex-col ">
                <label>
                  <input
                    type="radio"
                    name="Preference"
                    value="Email"
                    className="mx-2"
                    defaultChecked={true}
                    {...register("Preference")}
                  />
                  Email
                </label>
                <label>
                  <input
                    type="radio"
                    name="Preference"
                    value="Phone"
                    className="mx-2"
                    {...register("Preference")}
                  />
                  Phone
                </label>
                <label>
                  <input
                    type="radio"
                    name="Preference"
                    value="Whatsapp"
                    className="mx-2"
                    {...register("Preference")}
                  />
                  Whatsapp
                </label>
                <label>
                  <input
                    type="radio"
                    name="Preference"
                    value="Other"
                    className="mx-2"
                    {...register("Preference")}
                  />
                  Other
                </label>
                {errors.Preference && <p>{errors.Preference.message}</p>}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" my-2 rounded-lg font-semibold text-2xl text-center py-1 bg-Purple text-White lg:mt-3  hover:bg-White hover:border-2 hover:border-Purple  hover:text-Purple hover:shadow-lg hover:transition-all duration-500 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default OrderForm;
