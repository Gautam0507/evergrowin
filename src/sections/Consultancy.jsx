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
        <h1 className="text-5xl text-center my-4 font-semibold text-White">
          Consultancy
        </h1>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => {
            return <ConsultComp item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
