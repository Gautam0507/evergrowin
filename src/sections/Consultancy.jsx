import React from "react";
import ConsultComp from "../components/ConsultComp";
const Consultancy = () => {
  const items = [
    {
      id: 1,
      title: "Metecno India Pvt. Ltd",
    },
    {
      id: 2,
      title: "Krishna antioxidants Pvt. Ltd.",
    },
    {
      id: 3,
      title: "Dorf Ketal",
    },
    {
      id: 4,
      title: "Malaysian company",
    },
  ];
  return (
    <div className="bg-Purple">
      <div className="container mx-auto">
        <h1 className="text-3xl text-White text-center font-bold my-4 lg:text-4xl py-2">
          Consultancy
        </h1>
        <div className="flex flex-col justify-between gap-3 mx-3 lg:grid lg:grid-cols-2 ">
          {items.map((item) => {
            return <ConsultComp item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
