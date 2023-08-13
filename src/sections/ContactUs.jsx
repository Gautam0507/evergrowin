import React from "react";
import Phone from "../assets/images/phone-solid.png";
import Email from "../assets/images/envelope-solid.png";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <div className="bg-Black text-White">
        <div className="container m-auto">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="container m-auto space-y-1 ">
              <h1 className="font-semibold text-4xl text-center lg:text-left">
                Contact Us
              </h1>
              <div className="text-lg text-center lg:text-left">
                158 A, Pillayar Koil St.,
                <br /> Pazhanthandalam
                <br /> Thirumudivakkam
                <br /> Chennai - 600044
              </div>
              <div className="flex justify-center lg:justify-start">
                <img src={Phone} alt="A phone logo" className="h-6" />
                <div className="mx-4 text-lg">8610701341</div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <img src={Phone} alt="A phone logo" className="h-6" />
                <div className="mx-4 text-lg">9940168853</div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <img src={Email} alt="An Email Logo" className="h-6" />
                <div className="mx-4  text-lg">evergrowin@gmal.com</div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <img src={Email} alt="An Email Logo" className="h-6" />
                <div className="mx-4 text-lg">pandian.nagarajan@gmail.com</div>
              </div>
            </div>
            <div className="w-full">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
