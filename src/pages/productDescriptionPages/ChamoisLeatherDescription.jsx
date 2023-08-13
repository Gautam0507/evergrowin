import React from "react";
import Leather from "../../assets/images/Chamois_Leather.jpg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const ChamoisLeatherDescription = () => {
  return (
    <>
      <Navbar />
      <div className="container m-auto ">
        <div className="flex flex-col justify-stretch items-center lg:flex-row lg:gap-x-10 xl:">
          <div>
            <img
              src={Leather}
              alt="Chamois Leather photo"
              className="max-w-full mb-2 md:max-w-md md:mt-4 lg:ml-5 lg:max-w-lg 2xl:max-w-2xl xl:max-w-xl "
            />
          </div>
          <div>
            <div className="mx-2">
              <h1 className="font-bold text-3xl 2xl:text-5xl">
                Natural Chamois Leather
              </h1>
              <h2 className="font-bold text-2xl 2xl:text-3xl">Description</h2>
              <p className="text-base 2xl:text-xl ">
                Chamois leather is a versatile and eco-friendly material, made
                from Indian goat leather. Its soft and natural beige hue comes
                from fish oil tanning, ensuring a gentle touch on various
                surfaces. With remarkable water absorbency, it's perfect for
                drying cars, and its biodegradable nature makes it easy to wring
                out, dry, and store. Moreover, chamois leather showcases its
                polishing prowess by flawlessly buffing glass, plastics,
                jewelry, and diamonds, leaving a scratch-free shine. Embrace the
                elegance of chamois leather for all your cleaning and polishing
                needs.
              </p>
              <h2 className="font-bold text-2xl 2xl:text-3xl">Uses</h2>
              <h3 className="font-semibold text-xl 2xl:text-2xl">
                Wet Condition
              </h3>
              <ul className="text-base list-inside list-disc 2xl:text-xl">
                <li>
                  It is best used as a drying towel for automobiles due to its
                  soft texture and water absorbent nature. Streak-free and
                  spotless, the car and windows will quickly dry without leaving
                  any water marks
                </li>
              </ul>
              <h3 className="font-semibold text-xl 2xl:text-2xl">
                Dry Condition
              </h3>
              <ul className="text-base list-inside list-disc 2xl:text-xl">
                <li>
                  To clean the interior of the automobile, effectively, by
                  removing dust, fingerprints from the dashboard, console,
                  instruments and windows.
                </li>
                <li>
                  Additional uses comprise―cleaning household products, polish
                  jewelry , mobile phone, camera, mirror, glasses, watch, silver
                  wear, plastic, chrome, aluminum, wood, glass, and other
                  reflective surfaces, etc.
                </li>
              </ul>
              <h2 className="font-bold text-2xl">Proper Care</h2>
              <ul className=" list-inside list-disc text-base 2xl:text-xl">
                <li>
                  Before use wash thoroughly thrice with lukewarm water with the
                  mild / car wash soap, mainly to remove any excess oil left out
                  in the leather. Afterwards rinse in normal water.
                </li>
                <li>
                  Clean in mild soap water to remove the dirt and wring out.
                  Then dry the cloth in the shade by completely spreading it
                  out.
                </li>
                <li>
                  It tends to turn stiff after drying. So just rub the cloth on
                  itself to restore its softness, then fold it and store it in a
                  dry place away from chemicals, heat and sunlight.
                </li>
                <li>
                  Always remember not to fold or store it in an airtight
                  container, while it is wet
                </li>
              </ul>
              <Link to="/order" className="text-xl text-White font-semibold ">
                <button className="min-w-full bg-Purple mt-3 rounded-xl py-1 mb-3">
                  Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChamoisLeatherDescription;
