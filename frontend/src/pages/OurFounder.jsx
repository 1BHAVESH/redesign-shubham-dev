import HeroImage from "@/components/HeroImage";
import React from "react";
import chairman from "../assets/chairman.png"; // same image used for both
import Contact from "@/components/Contact";

const OurFounder = () => {
  return (
    <div>
      <HeroImage />

      {/* Heading Overlay */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
        <h2
          className="
            text-[28px] sm:text-[36px] md:text-[48px] lg:text-[48px]
            font-serif italic font-bold tracking-wide text-white
            drop-shadow-lg
          "
        >
          About us
        </h2>

        <div className="flex items-center justify-center mt-3 mx-auto max-w-[300px]">
          <div
            className="w-3 h-3 bg-white"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>

          <div className="h-[2px] bg-white flex-grow mx-2"></div>

          <div
            className="w-3 h-3 bg-white"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          ></div>
        </div>
      </div>

      {/* ================= CHAIRMAN SECTION ================= */}
      <div className="max-w-[1370px] mx-auto px-4 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* LEFT IMAGE → auto height according to text */}
        <div className="w-full h-full flex justify-center">
          <img
            src={chairman}
            alt="Founder"
            className="w-full max-w-[450px] h-full object-cover shadow-lg"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Mr. Sheshmal Sanklecha</h3>

          <h4 className="text-2xl font-semibold text-gray-700">Chairman</h4>

          <p className="text-gray-600 leading-relaxed">
            Mr. Sheshmal Sanklecha, Chairman and Managing Director of Subham
            Developers, is the visionary behind the brand’s deep-rooted
            understanding of the real estate industry. With 25 years of
            experience in the property business along with 30 years in Finance,
            he is the driving force behind The Fort—his dream project for
            Jodhpur.
          </p>

          <p className="text-gray-600 leading-relaxed">
            His dedication to deliver this project within 30 months reflects his
            passion, commitment, and exceptional leadership.
          </p>
        </div>
      </div>

      {/* ================= MANAGING DIRECTOR SECTION ================= */}
      <div className="max-w-[1370px] mx-auto px-4 mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* LEFT IMAGE → auto height */}
        <div className="w-full h-full flex justify-center">
          <img
            src={chairman}
            alt="Managing Director"
            className="w-full max-w-[450px] h-full object-cover shadow-lg"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Mr. Dhansukh Sanklecha</h3>

          <h4 className="text-2xl font-semibold text-gray-700">
            Managing Director
          </h4>

          <p className="text-gray-600 leading-relaxed">
            Mr. Dhansukh Sanklecha has 15 years of experience in the Real Estate
            business and 10 years in Finance. Well–versed with the needs of
            today’s customers and equipped with the right understanding of the
            industry, he has delivered high-quality projects.
          </p>

          <p className="text-gray-600 leading-relaxed">
            He strongly believes in timely project delivery, which builds trust
            with customers—a principle he is deeply committed to.
          </p>
        </div>
      </div>

      {/* ================= OUR TEAM SECTION ================= */}
      {/* ================= OUR TEAM SECTION ================= */}
      <div className="max-w-[1370px] mx-auto px-4 mt-28 mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 ">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {/* TEAM CARD 1 */}
          <div className="bg-white shadow-md rounded-xl p-4 border border-[#d2ab48]/40 w-[280px] hover:shadow-xl transition-all duration-300">
            {/* IMAGE */}
            <img
              src={chairman} // 👉 team image — change if you get real images
              alt="Finance Head"
              className="w-full h-[220px] object-cover rounded-lg mb-4"
            />

            {/* CONTENT */}
            <h3 className="text-xl font-semibold text-[#D2AB48]">
              Mahendra Rakhecha
            </h3>

            <p className="text-sm font-medium text-gray-700">Finance Head</p>

            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Having 20+ years of experience in the Finance field.
            </p>
          </div>

          {/* TEAM CARD 2 */}
          <div className="bg-white shadow-md rounded-xl p-4 border border-[#d2ab48]/40 w-[280px] hover:shadow-xl transition-all duration-300">
            {/* IMAGE */}
            <img
              src={chairman} // 👉 same for now
              alt="General Manager Sales"
              className="w-full h-[220px] object-cover rounded-lg mb-4"
            />

            {/* CONTENT */}
            <h3 className="text-xl font-semibold text-[#D2AB48]">
              Anirudh Kakkar
            </h3>

            <p className="text-sm font-medium text-gray-700">
              General Manager Sales
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              Having 13+ years of Real Estate Sales experience and has worked
              with reputed builders of Rajasthan.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default OurFounder;
