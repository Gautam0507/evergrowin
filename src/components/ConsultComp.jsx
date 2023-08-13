import React from "react";

const ConsultComp = (props) => {
  return (
    <>
      <div className="container m-auto">
        <div className="bg-White min-w-full rounded-[1.25rem] flex align-middle justify-center mb-3">
          <div className="text-Black font-normal text-2xl my-3">
            {props.item.title}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultComp;
