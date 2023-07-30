import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import AboutUs from "../sections/AboutUs";
import Products from "../sections/Products";
import Trading from "../sections/Trading";
import Consultancy from "../sections/Consultancy";
import ContactUs from "../sections/ContactUs";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <Trading />
      <Consultancy />
      <ContactUs />
    </>
  );
};

export default Homepage;
