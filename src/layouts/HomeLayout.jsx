import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeftAside from "../components/LeftAside";
// import CategoryItems from '../components/CategoryItems';
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import hero1 from "../assets/Hero (1).png";
import hero2 from "../assets/Hero (2).png";
import hero3 from "../assets/Hero (3).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TopRatedSkills from "../components/TopRatedSkills";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>

        <section className="mb-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation]}
            navigation
          >
            <SwiperSlide>
              <img
                className="w-full h-[calc(100vh-80px)] object-cover"
                src={hero1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[calc(100vh-80px)] object-cover"
                src={hero2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[calc(100vh-80px)] object-cover"
                src={hero3}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </header>

      <main>
        <div className="grid grid-cols-12 w-11/12 mx-auto">
          <aside className="col-span-3">
            <LeftAside></LeftAside>
          </aside>
          <section className="col-span-9">
            <Outlet></Outlet>
          </section>
        </div>
        <section className="space-y-5 my-10">
          <TopRatedSkills></TopRatedSkills>
        </section>
      </main>

      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
};

export default HomeLayout;
