import CommomImg from "@/components/CommonBackgroundImg";
import HeroImage from "@/components/HeroImage";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import about1 from "../assets/image 17.png";
import Contact from "@/components/Contact";
import buildingImg from "../assets/photo-1486406146926-c627a92ad1ab.jfif"

const AboutShubhamDeveloper = () => {
  return (
    <div>
      <HeroImage />

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

      {/* ABOUT CONTENT SECTION */}
      <div className="container mx-auto px-4  mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE PARAGRAPH */}
        <div className="space-y-4 text-gray-700 mb-[250px] leading-relaxed">
          <h3 className="text-2xl font-bold text-black">
            About Subham Developers
          </h3>

          <p>
            Established in 2019, Subham Developers is one of Rajasthan's most
            respected and trusted real estate developers in Jodhpur. With over
            three decades of experience, we have transformed the skyline of
            Jodhpur Our commitment to quality, innovation, and customer
            satisfaction sets us apart, making us a preferred choice for
            homebuyers and investors alike.
          </p>

          <p>
            Our projects are a perfect blend of innovation, durability, and
            sustainable development, ensuring long-term value and satisfaction
            for our customers.
          </p>

          <p>
            With a legacy of excellence, we continue to build properties that
            stand the test of time and create vibrant living communities for
            generations.
          </p>
        </div>

        {/* RIGHT SIDE SWIPER IMAGE SLIDER */}
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="w-full h-[300px] md:h-[545px] rounded-xl overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <img
                src={buildingImg}
                className="w-full h-full object-cover"
                alt="About Image 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={buildingImg}
                className="w-full h-full object-cover"
                alt="About Image 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={buildingImg}
                className="w-full h-full object-cover"
                alt="About Image 3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* MISSION + VISION SECTION */}
      <div className="max-w-[1370px] mx-auto px-4 mt-20 space-y-16">
        {/* MISSION — ALWAYS LEFT */}
        <div className="w-full lg:w-1/2">
          <h3 className="flex items-end gap-2 mb-4 border-b-2 border-[#D2AB48] w-fit pb-1">
            <span className="text-[60px] sm:text-[80px] lg:text-[96px] font-normal text-[#D2AB48] leading-none">
              01
            </span>
            <span className="text-[18px] sm:text-[20px] lg:text-[24px] font-normal text-[#D2AB48] leading-none mb-2">
              Mission
            </span>
          </h3>

          <h4 className="text-lg lg:text-xl font-medium mb-4 max-w-[650px]">
            To Deliver High Quality, Sustainable And Innovative Real Estate
            Developments That Enhance Communities And Enrich Lives.
          </h4>
        </div>

        {/* VISION — RIGHT SIDE */}
        <div className="w-full flex justify-end">
          <div className="lg:w-1/2 w-full">
            <h3 className="flex items-end gap-2 mb-4 border-b-2 border-[#D2AB48] w-fit pb-1">
              <span className="text-[60px] sm:text-[80px] lg:text-[96px] font-normal text-[#D2AB48] leading-none">
                02
              </span>
              <span className="text-[18px] sm:text-[20px] lg:text-[24px] font-normal text-[#D2AB48] leading-none mb-2">
                Vision
              </span>
            </h3>

            <h4 className="text-lg lg:text-xl font-medium mb-4">
              To Transform City Landscape By Crafting Innovative Real Estate
              Developments That Elevate Life Styles, Where People Live, Work,
              And Play.
            </h4>
          </div>
        </div>
      </div>

      {/* OUR VALUES SECTION */}
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 mt-20">
        <div className="max-w-[1370px] mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  mb-4">
              Our Values
            </h2>
            <div className="flex items-center justify-center mt-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D2AB48] to-transparent"></div>
            </div>
            <p className=" mt-6 text-lg max-w-2xl mx-auto">
              The principles that guide us in building excellence and trust
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* INTEGRITY */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D2AB48]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB48] to-[#B8953D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D2AB48] transition-colors">
                  INTEGRITY
                </h3>
                <p className="leading-relaxed">
                  Being honest, ethical and accountable in all actions and
                  decisions.
                </p>
              </div>
            </div>

            {/* EMPATHY */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D2AB48]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB48] to-[#B8953D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <h3 className="text-2xl font-bold  mb-3 group-hover:text-[#D2AB48] transition-colors">
                  EMPATHY
                </h3>
                <p className=" leading-relaxed">
                  Treating colleagues, vendors, associates and customers with
                  acceptance and compassion.
                </p>
              </div>
            </div>

            {/* QUALITY CENTRIC */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D2AB48]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB48] to-[#B8953D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">Q</span>
                </div>
                <h3 className="text-2xl font-bold  mb-3 group-hover:text-[#D2AB48] transition-colors">
                  QUALITY CENTRIC
                </h3>
                <p className=" leading-relaxed">
                  Following high standards of planning and execution in our work
                  delivery.
                </p>
              </div>
            </div>

            {/* INNOVATION */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D2AB48]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB48] to-[#B8953D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-2xl font-bold  mb-3 group-hover:text-[#D2AB48] transition-colors">
                  INNOVATION
                </h3>
                <p className=" leading-relaxed">
                  Foster a culture of introspection and passion for continuous
                  improvement.
                </p>
              </div>
            </div>

            {/* TRUST */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D2AB48]/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D2AB48] to-[#B8953D] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">T</span>
                </div>
                <h3 className="text-2xl font-bold  mb-3 group-hover:text-[#D2AB48] transition-colors">
                  TRUST
                </h3>
                <p className="leading-relaxed">
                  Transparency, communication, collaboration and respect amongst
                  all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1370px] mx-auto">
        <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold  mb-4">
          Contact Us
        </h2>
        <Contact />
      </div>
    </div>
  );
};

export default AboutShubhamDeveloper;
