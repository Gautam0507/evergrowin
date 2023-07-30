import React from "react";

const ConsultComp = (props) => {
  return (
    <>
      <div className="container m-auto">
        <div className="bg-White min-w-full border border-Purple rounded-[1.25rem] flex align-middle justify-center">
          <div className="text-Black font-normal text-3xl my-3">
            {props.item.title}
          </div>
        </div>
        ;
      </div>
    </>
  );
};

export default ConsultComp;
