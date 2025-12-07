import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetBannersQuery } from "@/redux/features/adminApi";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

export default function HeroImage({visible, setVisible}) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="container mx-auto px-4 py-4 lg:py-6">
          <div className="flex items-center justify-between lg:justify-between w-full">
            
            {/* LEFT SIDE - Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {/* ABOUT - ShadCN Dropdown */}
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

              {/* CONTACT - Simple link */}
              <a
                href="/contact"
                className="text-white text-sm lg:text-base hover:opacity-80"
              >
                Contact
              </a>
            </div>

            {/* CENTER - LOGO */}
            <div className="flex-1 flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
              <a href="/" className="text-white text-xl lg:text-2xl font-bold">
                <img
                  src="./SHUBHAM DEVELOPER LOGO.png"
                  alt="Shubham Developer Logo"
                  className="w-[120px] sm:w-[150px] lg:w-[200px] mt-2 lg:mt-8"
                />
              </a>
            </div>

            {/* RIGHT SIDE - Desktop Navigation & Mobile Menu Button */}
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Desktop Navigation */}
              <ul className="hidden lg:flex gap-6 lg:gap-8">
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

              {/* Mobile Menu Button */}
              <button
                onClick={() => {setMobileMenuOpen(!mobileMenuOpen), setVisible(!visible)}}
                className="lg:hidden text-white z-20"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm">
            <ul className="flex flex-col p-4 space-y-4">
              {/* About Section */}
              <li className="border-b border-white/20 pb-2">
                <div className="text-white font-semibold mb-2">About</div>
                <ul className="pl-4 space-y-2">
                  <li>
                    <a
                      href="/about-shubham-developer"
                      className="text-white/90 hover:text-white block py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Shubham Developers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-team"
                      className="text-white/90 hover:text-white block py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Founder
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-white font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="text-white font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/join-venture"
                  className="text-white font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Venture
                </a>
              </li>

              <li>
                <a
                  href="/careers"
                  className="text-white font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Banner Swiper With Dark Overlay */}
      <div className="relative w-full h-[270px] sm:h-[350px] md:h-[400px] lg:h-[501px]">
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