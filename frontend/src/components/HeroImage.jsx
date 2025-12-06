import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetBannersQuery } from "@/redux/features/adminApi";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3001";

export default function HeroImage() {
  const navigate  = useNavigate()
  const { data: bannersData, isLoading } = useGetBannersQuery();
  const banners = bannersData?.data || [];

  if (isLoading) {
    return (
      <section className="w-full h-[270px] lg:h-[501px] bg-gray-200 animate-pulse" />
    );
  }

  if (banners.length === 0) return null;

  return (
    <section className="w-full relative">
      {/* Navigation overlay */}
      <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">

            {/* LEFT SIDE → About (dropdown) + Contact (simple) */}
            <div className="flex items-center gap-6">

              {/* ABOUT — ShadCN Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white hover:opacity-80 text-sm lg:text-base bg-transparent">
                      About
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className="bg-white rounded-md shadow-lg p-4 min-w-[250px]">
                      <ul className="flex flex-col gap-2">

                        <li>
                          <NavigationMenuLink
                            href="/about-shubham-developer"
                            className="block px-3 py-2 hover:bg-gray-100 rounded text-black"
                          >
                            About Shubham Developers
                          </NavigationMenuLink>
                        </li>

                        <li>
                          <NavigationMenuLink
                            href="/our-team"
                            className="block px-3 py-2 hover:bg-gray-100 rounded text-black"
                          >
                            Our Founder
                          </NavigationMenuLink>
                        </li>

                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              {/* CONTACT — Simple link (No dropdown) */}
              <a
                href="/contact"
                className="text-white text-sm lg:text-base hover:opacity-80"
              >
                Contact
              </a>

            </div>

            {/* CENTER - LOGO */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <a href="/" className="text-white text-xl lg:text-2xl font-bold">
                <img
                  src="./SHUBHAM DEVELOPER LOGO.png"
                  className="w-[200px] mt-8"
                />
              </a>
            </div>

            {/* RIGHT SIDE - HOME & PRODUCTS */}
            <ul className="flex gap-6 lg:gap-8">
              <li>
                <a
                  href="/products"
                  className="text-white text-sm lg:text-base font-medium hover:opacity-80 transition-opacity"
                >
                  Products
                </a>
              </li>
               <li>
                <a
                  href="/join-venture"
                  className="text-white text-sm lg:text-base font-medium hover:opacity-80 transition-opacity"
                >
                  Join Venture
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-white text-sm lg:text-base font-medium hover:opacity-80 transition-opacity"
                >
                  Careers
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      {/* Banner Swiper */}
   {/* Banner Swiper With Dark Overlay */}
<div className="relative w-full h-[270px] lg:h-[501px]">

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/50 z-[5]" />

  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000, disableOnInteraction: false }}
    loop={banners.length > 1}
    className="w-full h-full"
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
</div>

    </section>
  );
}
