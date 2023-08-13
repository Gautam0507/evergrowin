import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactUsForm = () => {
  const schema = yup.object().shape({
    name: yup.string("Enter a valid string").required("Your Name is required"),
    phoneNumber: yup
      .string("Enter a valid string")
      .required("Your Phone Number is required"),
    email: yup
      .string("Enter a valid string")
      .email("Please enter a valid email")
      .required("Your email is required"),
    query: yup
      .string("Enter a valid string")
      .required("Please fill in your Query"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmmit)}
        className="text-White text-lg mx-2 mb-3 md:mx-20"
      >
        <div className="w-full">
          <div>
            <div>Name:</div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="rounded-md mt-1 text-Black font-medium min-w-full px-1"
            />
            <p className="text-White font-medium">{errors.name?.message}</p>
          </div>
          <div>
            <div>Phone Number:</div>
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber")}
              className="rounded-md mt-1 text-Black font-medium min-w-full px-1"
            />
            <p className="text-White font-medium">
              {errors.phoneNumber?.message}
            </p>
          </div>
        </div>
        <div>Email:</div>
        <input
          type="text"
          placeholder="Email"
          {...register("email")}
          className="font-medium text-Black min-w-full rounded-md mb-3 px-1"
        />
        <p className="text-White font-medium">{errors.email?.message}</p>
        <div>Query:</div>
        <textarea
          type="text"
          placeholder="Query"
          {...register("query")}
          className="font-medium text-Black min-w-full rounded-md mb-3 px-1"
        />
        <p className="text-White font-medium">{errors.query?.message}</p>
        <input
          type="submit"
          className="bg-White min-w-full text-Black rounded-lg text-lg my-3 font-semibold"
        />
      </form>
    </>
  );
};

export default ContactUsForm;
