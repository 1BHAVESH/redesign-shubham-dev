import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetBannersQuery } from "@/redux/features/adminApi";

const BASE_URL = "http://localhost:3001";

export default function HeroImage() {
  const { data: bannersData, isLoading } = useGetBannersQuery();
  const banners = bannersData?.data || [];



  if (isLoading) {
    return (
      <section className="w-full h-[270px] lg:h-[501px] bg-gray-200 animate-pulse" />
    );
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <section className="w-full relative">
      {/* Navigation overlay */}
      <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Left side - About & Contact */}
            <ul className="flex gap-6 lg:gap-8">
              <li>
                <a
                  href="/about"
                  className="text-white text-sm lg:text-base font-medium hover:opacity-80 transition-opacity"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white text-sm lg:text-base font-medium hover:opacity-80 transition-opacity"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Center - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="text-white text-xl lg:text-2xl font-bold">
                <img src="./SHUBHAM DEVELOPER LOGO.png" className="w-[200px] mt-8"  />
              </a>
            </div>

            {/* Right side - Home & Products */}
            <ul className="flex gap-6 lg:gap-8">
              <li>
                <a
                  href="/"
                  className="text-white text-sm lg:text-base font-medium hover:opacity-80 transition-opacity"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-white text-sm lg:text-base font-medium hover:opacity-80 transition-opacity"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={banners.length > 1}
        className="w-full h-[270px] lg:h-[501px]"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <img
              src={`${BASE_URL}${banner.imageUrl}`}
              alt={banner.title || "Banner"}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}