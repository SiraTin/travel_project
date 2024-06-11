'use client'

import reviews from "../data/review";


export default function Thirdsection(){

    const imageElements = reviews.map((images, index) => {
        return (
            <div key={images.id} className={`w-60 h-20 rounded-lg bg-cover bg-center bg-no-repeat ${images.image}
                lg:w-4/12 lg:h-52
                `}></div>
        );
    });

    return(
        <section className="w-full h-full py-4 ">
            <div className="w-11/12 mx-auto text-black flex flex-col">
                <div className="lg:flex lg:justify-between lg:gap-5 lg:items-center">
                <div className="text-3xl font-bold lg:w-6/12">
                    <h2 className="lg:text-5xl font-playfairDisplay">Travel reviews blogs </h2>
                </div>
                <div className="py-8 lg:w-6/12 font-playfairDisplay">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="py-4">
                    <a href="#" className="font-bold font-playfairDisplay">Read more</a>
                    </div>
                </div>
                </div>

                <div className="flex gap-2 justify-center py-8">
                        {imageElements}
                </div>
            </div>
            <div className="w-11/12 mx-auto py-20">
                <div className="w-full h-40 rounded-2xl bg-cover flex flex-col justify-center bg-no-repeat bg-center bg-[url('/assets/reviews/thai.jpg')] lg:h-96">
                    <a href="#" className="text-center text-4xl animate-bounce lg:text-6xl font-playfairDisplay">Booking Now!</a>
                </div>
            </div>
        </section>
    );
}