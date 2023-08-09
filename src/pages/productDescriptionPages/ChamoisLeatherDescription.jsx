import React from "react";
import Leather from "../../assets/images/Chamois_Leather.jpg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const ChamoisLeatherDescription = () => {
  return (
    <>
      <Navbar />
      <div className="container m-auto">
        <div className="flex flex-row justify-stretch gap-x-10 items-center">
          <div className="mt-6">
            <img
              src={Leather}
              alt="Chamois Leather photo"
              className="max-w-3xl"
            />
          </div>
          <div>
            <div className="">
              <h1 className="font-bold text-4xl">Natural Chamois Leather</h1>
              <h2 className="font-bold text-3xl">Description</h2>
              <p className="text-lg">
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
              <h2 className="font-bold text-3xl">Uses</h2>
              <h3 className="font-semibold text-2xl">Wet Condition</h3>
              <ul className="text-lg list-outside list-disc">
                <li>
                  It is best used as a drying towel for automobiles due to its
                  soft texture and water absorbent nature. Streak-free and
                  spotless, the car and windows will quickly dry without leaving
                  any water marks
                </li>
              </ul>
              <h3 className="font-semibold text-2xl">Dry Condition</h3>
              <ul className="text-lg list-outside list-disc">
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
              <h2 className="font-bold text-3xl">Proper Care</h2>
              <ul className=" list-outside list-disc text-lg">
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
              <button className="min-w-full bg-Purple mt-3 rounded-xl py-1">
                <Link to="/order" className="text-xl text-White font-semibold">
                  Order
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChamoisLeatherDescription;
