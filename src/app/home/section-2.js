"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faComputer,
  faPlaneDeparture,
  faClock,
  faStar,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import chooses from "../data/chooses";
import { register } from "swiper/element/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";

register();

export default function Secondsection() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      autoplay: true,
      breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        },
      },
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
                      height: 30rem;

                      }

                      .swiper-slide{
                        border-radius: 1.5rem;
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
                              height: 45rem;
                          }
                      }
                `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const chooseElements = chooses.map((city, index) => {
    return (
      <swiper-slide>
        <div
          className={`w-full h-full bg-no-repeat bg-cover bg-center rounded-3xl ${city.image} flex flex-col justify-between`}
        >
            <div className="flex justify-end p-4">
                <div className="flex justify-center gap-1 bg-[rgba(0,0,0,0.8)] rounded-3xl py-1 px-4">
                <h2 className="text-sm">{city.rating}</h2>
                <FontAwesomeIcon icon={faStar} className="mt-0.5 text-sm"/>
                </div>
            </div>
            <div className="p-10 ">
                <div className="bg-[rgba(0,0,0,0.5)] w-10/12 p-4 rounded-3xl">
                <h2>{city.name}, <span>{city.district}</span></h2>
                <h2 className="my-1 uppercase">{city.city}</h2>
                <p>{city.price}</p>
                </div>

            </div>
        </div>
      </swiper-slide>
    );
  });
  return (
    <>
      <section className="w-11/12 mx-auto h-auto text-black text-center">
        <h2 className="text-3xl font-bold lg:text-5xl font-playfairDisplay">Booking with us</h2>
        <p className="pt-4 text-md font-playfairDisplay">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex flex-col gap-10 justify-around py-10 md:flex-row lg:w-10/12 lg:mx-auto lg:py-20">
          <div>
            <FontAwesomeIcon icon={faPaperPlane} />
            <h3 className="font-bold mt-2 font-playfairDisplay text-xl">Airport pickup</h3>
            <p className="text-sm w-full mx-auto my-4 font-playfairDisplay">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComputer} />
            <h3 className="font-bold mt-2 text-xl font-playfairDisplay">Easy booking</h3>
            <p className="text-sm w-full mx-auto my-4 font-playfairDisplay">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <h3 className="font-bold mt-2 text-xl font-playfairDisplay">Best tour guide</h3>
            <p className="text-sm w-full mx-auto my-4 font-playfairDisplay">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} />
            <h3 className="font-bold mt-2 text-xl font-playfairDisplay">Lots of promos</h3>
            <p className="text-sm w-full mx-auto my-4 font-playfairDisplay">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-20">
        <div className="w-11/12 mx-auto gap-5 flex items-end pb-10">
          <h2 className=" text-black text-3xl lg:text-4xl font-bold font-playfairDisplay">Choose your destination</h2>
        </div>

        <div className="w-11/12 mx-auto">
        <swiper-container
          navigation={true}
          ref={swiperRef}
          loop={true}
          modules={[Autoplay, Navigation]}
          init="false"
        >
          {chooseElements}
        </swiper-container>
        </div>
          <div className="w-full text-center py-10">
              <a href="#" className="text-black border-2 p-2 rounded-3xl border-black hover:bg-black hover:text-white">See more</a>
          </div>
      </section>
    </>
  );
}
