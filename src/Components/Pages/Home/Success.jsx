import React from 'react';
import img from "../../../assets/jacketB.avif";
import img2 from "../../../assets/sweterB.jpg";

const Success = () => {
  return (
    <div className='my-10 space-y-10'>

      <div className="text-center mb-6" data-aos="fade-down">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-2">
          You Can Make A Success Story
        </h1>
      </div>

      <div className="hero bg-sky-200 rounded-xl py-8 px-4 md:px-10">
        <div className="hero-content flex-col lg:flex-row items-center gap-8">

          {/* Left Side Image */}
          <img
            data-aos="zoom-in"
            src={img2}
            alt="Winter Donation"
            className="w-full lg:w-1/2 rounded-lg shadow-2xl object-cover"
          />

          {/* Right Side Text */}
          <div data-aos="fade-up" className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-sky-800">
              The Season of Giving Back
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
              How Your Support Carries Hope Into the New Year
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              December marks the end of the calendar year, yet it also signifies
              the beginning of what becomes possible in the months ahead. It is a
              season defined by giving; a time for warmth, compassion, and reflection,
              when many seek meaningful ways to uplift others. For nonprofits such
              as the Promise Hill Project, this period carries even greater significance.
            </p>
          </div>

        </div>
      </div>

      <div className="hero bg-sky-200 rounded-xl py-8 px-4 md:px-10">
        <div className="hero-content flex-col lg:flex-row items-center gap-8">

          {/* Left Side Text */}
          <div data-aos="fade-up" className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-sky-800">
              A Day of Thanks
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
              Honoring Every Individual We’ve Served So Far
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every person we meet leaves an imprint on our hearts. Every story, every handshake, every moment of connection stays with us.
              At Promise Hill Project, those we serve are the very reason we exist - our inspiration, our purpose, and our driving force.
              Today, we pause to honor each and every individual whose life has touched ours.
            </p>
          </div>

          {/* Right Side Image */}
          <img
            data-aos="zoom-in"
            src={img}
            alt="Winter Donation"
            className="w-full lg:w-1/2 rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default Success;