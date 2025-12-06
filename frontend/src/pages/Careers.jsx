import React from "react";
import { Briefcase, MapPin, Users } from "lucide-react";
import HeroImage from "@/components/HeroImage";

// Mock CommonBackgroundImg component - replace with your actual import
const CommomImg = ({ page }) => (
  <div className="relative h-64 bg-gradient-to-r from-amber-600 to-amber-800 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold">{page}</h1>
    </div>
  </div>
);

const jobList = [
  {
    title: "Telecaller",
    place: "Jodhpur, Pali, Pune",
    position: 2
  },
  {
    title: "Sale Executive",
    place: "Jodhpur, Pali, Pune, Banglore, Chennai, Pune",
    position: 5
  },
  {
    title: "Customer Relation Manager",
    place: "Jodhpur",
    position: 2
  },
  {
    title: "H.R MANAGER",
    place: "Jodhpur",
    position: 1
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* PAGE HERO SECTION */}
            <HeroImage />
      
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
              <h2
                className="
            text-[28px] sm:text-[36px] md:text-[48px] lg:text-[48px]
            font-serif italic font-bold tracking-wide text-white
            drop-shadow-lg
          "
              >
                Career
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

      {/* MAIN CONTENT */}
      <section className="max-w-[1370px] mx-auto px-4 md:px-8 py-12">
        
      

        {/* HEADING */}
        {/* <h2 className="text-[20px] md:text-[24px] font-normal mb-3">
          Build Your Future With Us
        </h2>

        <p className="leading-relaxed mb-10 max-w-[1140px] text-justify">
          At <strong>Your Company Name</strong>, we don't just build properties —
          we build people, careers, and long-term success stories. As a fast-growing
          real estate company, we are always looking for passionate, driven, and
          talented individuals to join our team. If you're ready to grow in an
          exciting industry filled with opportunities, you've come to the right place.
        </p> */}

        {/* CURRENT OPENINGS */}
        <h3 className="text-[24px] font-medium mb-6">Current Openings</h3>

        {/* GRID OF JOBS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobList.map((job, index) => (
            <div
              key={index}
              className="bg-[#FFFBF2] p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-amber-100"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D2AB48] p-2 rounded-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-[18px] text-gray-800">{job.title}</h4>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="text-[#D2AB48] mt-1 flex-shrink-0" size={18} />
                <p className="text-[14px] text-gray-600 leading-relaxed">{job.place}</p>
              </div>

              {/* POSITIONS */}
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-[#D2AB48]" size={18} />
                <p className="text-[14px] text-gray-600">
                  {job.position} {job.position === 1 ? 'Position' : 'Positions'} Available
                </p>
              </div>

              {/* APPLY BUTTON */}
              <a 
                href="tel:+917597074381"
                className="block w-full bg-[#D2AB48] hover:bg-[#C19A3A] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                Call Now
              </a>
            </div>
          ))}
        </div>

        
      </section>
    </div>
  );
};

export default Careers;