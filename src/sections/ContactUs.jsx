import React from "react";
import Phone from "../assets/images/phone-solid.png";
import Email from "../assets/images/envelope-solid.png";
import ContactUsForm from "../components/ContactUsForm";

const ContactUs = () => {
  return (
    <>
      <div className="bg-Black text-White">
        <div className="container m-auto">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="font-semibold text-4xl">Contact Us</h1>
              <div className="text-lg">
                158 A, Pillayar Koil St.,
                <br /> Pazhanthandalam
                <br /> Thirumudivakkam <br />
                Chennai - 600044
              </div>
              <div className="flex">
                <img src={Phone} alt="A phone logo" className="h-6" />
                <div className="mx-4 text-lg">8610701341</div>
              </div>
              <div className="flex">
                <img src={Phone} alt="A phone logo" className="h-6" />
                <div className="mx-4 text-lg">9940168853</div>
              </div>
              <div className="flex">
                <img src={Email} alt="An Email Logo" className="h-6" />
                <div className="mx-4  text-lg">evergrowin@gmal.com</div>
              </div>
              <div className="flex">
                <img src={Email} alt="An Email Logo" className="h-6" />
                <div className="mx-4 text-lg">pandian.nagarajan@gmail.com</div>
              </div>
            </div>
            <div className="">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
