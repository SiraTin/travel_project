'use client'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagramSquare, faXTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Footer(){

    const [onClickId, setOnclickId] = useState(0);
    const clickId = (id)=>{
        setOnclickId(id);
    };

    return (
        <footer className="w-full text-black h-auto py-4 pb-10 bg-white ">
            <div className="w-11/12 mx-auto bg-[#F6F6F6] p-10 rounded-xl">
            <div className="py-8 lg:flex lg:justify-between ">
                <div className="lg:w-4/12">
                    <a href="#" className="font-pacifico text-3xl">Travel</a>
                    <p className="font-playfairDisplay py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className="py-4 lg:py-0">
                    <div className="flex flex-col lg:flex-row">
                        <div className="relative lg:mx-8">
                            <div onClick={() => clickId(1)} className={` flex items-center justify-between cursor-pointer lg:cursor-default`} id="1"> 
                                <h3 className="font-bold my-2 font-playfairDisplay">About us</h3>
                                <FontAwesomeIcon icon={faAngleUp} className={`duration-500 ${(onClickId == 1) ? "rotate-180":"rotate-0"} lg:hidden`}/>
                            </div>
                       
                        <ul className={`bg-[#F6F6F6] ${(onClickId == 1) ? "opactiy-1 duration-500 relative top-0":"absolute opacity-0 -z-10 lg:opacity-[100%] lg:relative lg:z-30"} `}>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Our guide</a></li>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Blogs</a></li>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Contact us</a></li>
                        </ul>
                        </div>
                        <div className="lg:mx-8">
                        <div onClick={() => clickId(2)} className="flex items-center justify-between cursor-pointer lg:cursor-default">
                            <h3 className="font-bold my-2">FAQ</h3>
                            <FontAwesomeIcon icon={faAngleUp} className={`duration-500 ${(onClickId == 2) ? "rotate-180":"rotate-0"} lg:hidden`}/>
                        </div>
                        <ul className={`bg-[#F6F6F6] ${(onClickId == 2) ? "opactiy-1 duration-300 relative":"absolute opacity-0 -z-10 lg:opacity-[100%] lg:relative lg:z-30"} `}>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Personal trip</a></li>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Group trip</a></li>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Payment</a></li>
                        </ul>
                        </div>
                        <div className="lg:mx-8">
                        <div onClick={() => clickId(3)} className="flex items-center justify-between cursor-pointer lg:cursor-default">
                            <h3 className="font-bold my-2">Further infomation</h3>
                            <FontAwesomeIcon icon={faAngleUp} className={`duration-500 ${(onClickId == 3) ? "rotate-180":"rotate-0"} lg:hidden`}/>
                        </div>
                        <ul className={`bg-[#F6F6F6] ${(onClickId == 3) ? "opactiy-1 duration-300 relative":"absolute opacity-0 -z-10 lg:opacity-[100%] lg:relative lg:z-30"} `}>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Terms of use</a></li>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Health and Safety</a></li>
                            <li><a href="#" className="block my-2 px-4 rounded-xl hover:bg-black hover:text-white lg:px-2 font-playfairDisplay">Privacy policy</a></li>
                        </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="h-0.5 bg-black"></div>
                <div className="py-4 flex justify-between items-center gap-5">
                    <div>
                        <p className="font-playfairDisplay">Copyright © 2024 </p>
                    </div>
                    <div className="flex gap-5 text-xl">
                        <a href="#" className="block"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="block"><FontAwesomeIcon icon={faInstagramSquare}/></a>
                        <a href="#" className="block"><FontAwesomeIcon icon={faXTwitter}/></a>
                    </div>
                </div>
            </div>
   


        </footer>
    );
}