"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

  const [scrollValue, setScrollValue] = useState(0);
  const [onClick, setOnClick] = useState(null);
  const [onClick2, setOnClick2] = useState(null);
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setScrollValue(window.scrollY)
    });
  });

  const scroll_value = Math.ceil(scrollValue/100);

  let isScroll;
  if(scroll_value > 0){
    isScroll = true;
  }else{
    isScroll = false
  }

  const isClick = () =>{
    setOnClick(!onClick);
  }
  const isClick2 = () =>{
    setOnClick2(!onClick2);
  }



  return (
    <header className={`w-full h-auto fixed text-black z-50 duration-300 ${isScroll ? "bg-white drop-shadow-lg":""}`}>
      <nav className="flex justify-between items-center w-11/12 mx-auto my-6">
        <a href="#" className="text-2xl font-pacifico">Travel</a>
        <ul className="gap-5 hidden md:flex font-playfairDisplay">
          <li>
            <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">About us</a>
          </li>
          <li>
            <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">Booking</a>
          </li>
          <li>
            <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">Tours</a>
          </li>
          <li>
            <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">FAQ</a>
          </li>
        </ul>
        <div className="md:hidden">
          <div>
            <FontAwesomeIcon onClick={isClick} icon={faBars} className={`cursor-pointer text-xl relative z-50 ${onClick ? "hidden":"block"}`}/>
          </div>
          <div className="">
            <FontAwesomeIcon onClick={isClick} icon={faXmark} className={`cursor-pointer text-xl relative z-50 ${onClick ? "block":"hidden"}`} />
          </div>
        </div>

        {/* bars Desktop */}
        <div className="hidden relative  w-auto md:block">
          <div>
            <FontAwesomeIcon onClick={isClick2} icon={faBars} className={`cursor-pointer text-xl relative z-50 ${onClick2 ? "hidden":"block"}`} />
          </div>
          <div className="hidden md:block">
            <FontAwesomeIcon onClick={isClick2} icon={faXmark} className={`cursor-pointer text-xl relative z-50 ${onClick2 ? "block":"hidden"}`} />
          </div>

          {/* Login */}
          <div className={`absolute  w-24 bg-black text-white rounded-3xl text-center right-0 ${onClick2 ? "block":"hidden"}`}>
            <a href="#" className="block">Log in</a>
          </div>
        </div>

        {/* responsive navbar */}
        <div className={`font-playfairDisplay shadow-lg font-medium absolute h-screen w-6/12  top-0 z-40 bg-white md:hidden duration-300 ${onClick ? "right-0" : "right-[-100%]"}`}>
         
          <ul className="px-4 py-16 ">
          <h2 className="text-xl text-center font-pacifico font-medium">Travel</h2>
            <li className="py-2">
              <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">About us</a>
            </li>
            <li className="py-2">
              <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">Booking</a>
            </li>
            <li className="py-2">
              <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">Tours</a>
            </li>
            <li className="py-2">
              <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">FAQ</a>
            </li>
            <li className="py-2">
              <a href="#" className="block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black  after:duration-300 hover:after:w-full">Log in</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
