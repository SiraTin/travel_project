"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import travels from "../data/travel-place";

import { useEffect, useRef } from "react";

register();

export default function Homepage() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      autoplay: true,
      injectStyles: [
        `
                  .swiper-button-next,
                  .swiper-button-prev {
                    width: 5rem;
                    color: #fff;
                    display: none;
                  }
                  .swiper-pagination-bullet{
                    width: 10px;
                    height: 10px;
                    background-color: #fff;
                  }
                    .swiper{
                    width:100%;
                    height: 35rem
                    }

                    @media only screen and (min-width: 768px){
                        .swiper-button-next,
                        .swiper-button-prev {
                            display: block;
                        }
                    }

                    @media only screen and (min-width: 1024px){
                        .swiper{
                            width:100%;
                            border-radius: 1.5rem;
                            height: 45rem;
                        }
                    }
              `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const travelElements = travels.map((travels, index) => {
    return (
      <swiper-slide className="relative text-white z-30 ">
        <div
          className={`absolute grayscale-[25%] w-full h-full z-0 bg-cover bg-no-repeat bg-center rounded-3xl ${travels.image}`}
        ></div>
        <div className="flex flex-col justify-between h-full p-8 ">
          <div className="relative lg:p-14">
            <h2 className="capitalize text-4xl font-bold xl:text-6xl font-playfairDisplay">
              {travels.name},
              <span className="capitalize font-playfairDisplay">{travels.district}</span>
            </h2>
            <h2 className="uppercase text-3xl font-bold mt-4 xl:text-6xl font-playfairDisplay">{travels.city}</h2>
            <button className="bg-white px-10 py-2 text-black rounded-3xl my-8 hover:bg-black hover:text-white font-playfairDisplay">
              Booking
            </button>
          </div>
          <div className="relative w-full flex justify-end items-end p-4 bottom-0 bg-[rgba(0,0,0,0.4)] lg:bg-[rgba(0,0,0,0)] rounded-3xl">
            <div className="swiper-button-next "></div>
            <div>
              <p className="text-sm text-white lg:w-6/12 lg:text-xl lg:p-10 lg:bg-[rgba(0,0,0,0.4)] rounded-3xl ml-auto font-playfairDisplay">{travels.description}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    );
  });

  return (
    <section className="w-11/12 mx-auto lg:w-full h-auto py-20 lg:pb-48  ">
      <div className="w-full h-auto mx-auto ">
        <div className="lg:w-11/12 lg:h-[40rem] mx-auto">
          <swiper-container
            navigation={true}
            ref={swiperRef}
            loop={true}
            modules={[Autoplay, Navigation]}
            init="false"
            
          >
            {travelElements}
          </swiper-container>
        </div>
      </div>
    </section>
  );
}
