import React from "react";

const TradeBox = (props) => {
  return (
    <>
      <div className="border-4 border-Purple min-w-full rounded-lg h-32 flex flex-col justify-center align-middle ">
        <h1 className="text-3xl text-center mb-1 font-medium ">
          {props.item.title}
        </h1>
        <ul>
          {props.item.description.map((desc, index) => {
            return (
              <>
                <li
                  className="text-center text-lg font-medium list-disc list-item list-inside"
                  key={index}
                >
                  {desc}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TradeBox;
