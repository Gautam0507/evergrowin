import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactUsForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Your Name is required"),
    phoneNumber: yup.string().required("Your Phone Number is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Your email is required"),
    query: yup.string().required("Please fill in your Query"),
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
      <form onSubmit={handleSubmit(onSubmmit)} className="text-White text-lg">
        <div className="flex justify-between mb-3">
          <div>
            <div>Name:</div>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="rounded-md w-[20rem] mt-1 text-Black font-medium"
            />
            <p className="text-White font-medium">{errors.name?.message}</p>
          </div>
          <div>
            <div>Phone Number:</div>
            <input
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber")}
              className="rounded-md w-[20rem] mt-1 text-Black font-medium "
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
          className="font-medium text-Black min-w-full rounded-md mb-3"
        />
        <p className="text-White font-medium">{errors.email?.message}</p>
        <div>Query:</div>
        <input
          type="text"
          placeholder="Query"
          {...register("query")}
          className="font-medium text-Black min-w-full rounded-md mb-3"
        />
        <p className="text-White font-medium">{errors.query?.message}</p>
        <input
          type="submit"
          className="bg-White w-32 text-Black rounded-lg text-lg mt-3"
        />
      </form>
    </>
  );
};

export default ContactUsForm;
