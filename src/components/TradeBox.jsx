import React from "react";

const TradeBox = (props) => {
  return (
    <>
      <div className="border-4 border-Purple min-w-full rounded-xl h-32 xl:h-40 flex flex-col justify-center align-middle space-y-1 hover:bg-Purple hover:text-White shadow-lg hover:transition-all duration-200 ease-linear">
        <h1 className="text-3xl text-center font-medium ">
          {props.item.title}
        </h1>
        <ul>
          {props.item.description.map((desc, index) => {
            return (
              <li
                className="text-center text-md font-medium list-disc list-item list-inside md:text-lg xl:text-xl"
                key={index}
              >
                {desc}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TradeBox;
