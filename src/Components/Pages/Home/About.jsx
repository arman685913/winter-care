import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from "../../../assets/donate.jpg";
import img2 from "../../../assets/donate2.webp";
import img3 from "../../../assets/donate3.jpg";

const About = () => {

  useEffect(() => {
    setTimeout(() => {
      AOS.init({ 
      duration: 2000, 
      once: true,     
    });
    }, 6000);
    
  }, []);

  return (
    <div className="py-12 px-4 md:px-10 bg-gradient-to-r from-sky-100 to-sky-200 my-5 rounded-xl">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 
          data-aos="fade-down"
          className="text-2xl md:text-4xl italic font-bold text-center mb-6 underline text-sky-600"
        >
          About <span className='text-black'>Us</span>
        </h1>

        {/* Mission */}
        <p 
          data-aos="fade-up"
          className="text-center text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-semibold"
        >
          During winter, many underprivileged and low-income people in Bangladesh
          suffer due to a lack of warm clothing. The main goal of our Winter
          Donation platform is to connect donors and volunteers to ensure that
          winter clothes reach those who need them the most.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10">
          
          <div 
            data-aos="flip-left"
            className="bg-white p-6 rounded-xl shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div><img src={img1} alt="" /></div>
            <h2 className="text-xl font-semibold my-2">🧥 What You Can Donate</h2>
            <p className="text-gray-600">
              You can donate jackets, sweaters, and blankets to help people stay
              warm during the winter.
            </p>
          </div>

          <div 
            data-aos="flip-up"
            data-aos-delay="200"
            className="bg-white p-6 rounded-xl shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div><img src={img2} alt="" /></div>
            <h2 className="text-xl font-semibold my-2">📝 How to Donate</h2>
            <p className="text-gray-600">
              Log in to the platform, explore donation campaigns, and complete a
              simple form to make your donation.
            </p>
          </div>

          <div 
            data-aos="flip-right"
            data-aos-delay="400"
            className="bg-white p-6 rounded-xl shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <div><img src={img3} alt="" /></div>
            <h2 className="text-xl font-semibold my-2">🤝 Our Role</h2>
            <p className="text-gray-600">
              Our volunteers collect donated clothes and deliver them to people
              in need across different regions.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
