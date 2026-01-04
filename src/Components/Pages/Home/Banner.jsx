import React, { useEffect } from 'react';
import jacket from "../../../assets/jacketB.avif";
import blanket from "../../../assets/blanketB.jpg";
import sweter from "../../../assets/sweterB.jpg";
import Alldata from "../../../../public/banner.json";
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";

const Banner = () => {

  const campaign1 = Alldata[0];
  const campaign2 = Alldata[1];
  const campaign3 = Alldata[2];

  const navigate = useNavigate()


  useEffect(() => {
    const toSlide2 = setTimeout(() => {
      window.location.hash = "slide2";
    }, 2000);

    const backToSlide1 = setTimeout(() => {
      window.location.hash = "slide1";
    }, 4000);
    const backToNav = setTimeout(() => {
      window.location.hash = "nav";
    }, 6000);

    return () => {
      clearTimeout(toSlide2);
      clearTimeout(backToNav);
      clearTimeout(backToSlide1);
    };
  }, []);

  return (
    <div className="carousel w-full h-[260px] sm:h-[320px] md:h-[450px] lg:h-[600px]">

      {/* Slide 1 */}
      <div data-aos="fade-right" id="slide1" className="carousel-item relative w-full">
        <img src={jacket} className="w-full h-full object-cover" alt={campaign1.campaignName} />

        <div data-aos="fade-left" className="
          absolute bottom-0 sm:bottom-6 md:bottom-10
          left-10 
          bg-black/30
          md:bg-black/50
          px-3 sm:px-4 md:px-6
          py-4
          rounded-xl
          md:w-[420px] lg:w-[450px] w-[80%]
        ">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
            {campaign1.campaignName}
          </h2>
          <p className="text-sm  sm:text-base text-base-300 md:mt-2">
            {campaign1.details}
          </p>
          <button onClick={() => {
            toast.success("Jacket Campaigns")
            navigate("/donation/", { state: { category: "Jacket" } });
          }}
            className="
            mt-3
            px-4 py-2
            text-sm sm:text-base
            bg-sky-500 text-white rounded
          ">
            Donate Now
          </button>
        </div>

        <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex justify-between -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❮</a>
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={blanket} className="w-full h-full object-cover" alt={campaign2.campaignName} />

        <div data-aos="fade-left" className="
          absolute bottom-0 sm:bottom-6 md:bottom-10
          left-10
          bg-black/30
          md:bg-black/50
          px-3 sm:px-4 md:px-6
          py-4
          rounded-xl
          w-[80%] md:w-[420px] lg:w-[450px]
        ">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
            {campaign2.campaignName}
          </h2>
          <p className="text-sm sm:text-base text-base-300 md:mt-2">
            {campaign2.details}
          </p>
          <button onClick={() => {
            toast.success("Sweater Campaigns")
            navigate("/donation/", { state: { category: "Sweater" } });
          }} className="
            mt-3
            px-4 py-2
            text-sm sm:text-base
            bg-sky-500 text-white rounded
          ">
            Donate Now
          </button>
        </div>

        <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex justify-between -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❮</a>
          <a href="#slide3" className="btn btn-circle btn-sm sm:btn-md">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={sweter} className="w-full h-full object-cover" alt={campaign3.campaignName} />

        <div className="
          absolute bottom-0 sm:bottom-6 md:bottom-10
          left-10
          px-3 sm:px-4 md:px-6
          bg-black/30
          md:bg-black/50
          py-4
          rounded-xl
          w-[80%] sm:w-[70%] md:w-[420px] lg:w-[450px]
        ">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
            {campaign3.campaignName}
          </h2>
          <p className="text-sm sm:text-base text-base-300 md:mt-2">
            {campaign3.details}
          </p>
          <button onClick={() => {
            toast.success("Blanket Campaigns")
            navigate("/donation/", { state: { category: "Blanket" } });
          }} className="
            mt-3
            px-4 py-2
            text-sm sm:text-base
            bg-sky-500 text-white rounded
          ">
            Donate Now
          </button>
        </div>

        <div className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex justify-between -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle btn-sm sm:btn-md">❮</a>
          <a href="#slide1" className="btn btn-circle btn-sm sm:btn-md">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Banner;