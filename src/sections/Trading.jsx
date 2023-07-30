import React from "react";
import TradeBox from "../components/TradeBox";

const Trading = () => {
  const items = [
    {
      id: 1,
      title: "Shoe Industry",
      description: ["Mould release agents","Liquid pigments for shoes"],
    },
    {
      id: 2,
      title: "Solvent Mix",
      description: [
        "For cleaning the mould release agent used for making PU components, to ease in sticking some leather clothing or painting",
      ],
    },
    {
      id: 3,
      title: "Polyols",
      description: [
        "Polyether polyols for rigid foam",
        "Polymer polyols for both flexible slabstock and moulded",
      ],
    },
    {
      id: 4,
      title: "Solvent",
      description: ["Ecofriendly Solvent for thinning the pesticides"],
    },
  ];
  return (
    <>
      <div className="container m-auto">
        <h1 className="text-5xl text-center my-4 font-semibold">Trading</h1>
        <div className="grid grid-cols-2 gap-5 place-items-center">
          {items.map((item) => {
            return <TradeBox item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Trading;
