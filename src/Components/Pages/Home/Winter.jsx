import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../../../assets/people1.jpg";
import img2 from "../../../assets/people2.jpg";

const Winter = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, // 2 seconds animation
      once: true,     // animate only once
    });
  }, []);

  return (
    <div className="my-10">

      {/* Section Main Title */}
      <div data-aos="fade-down" className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-2">
          Stories of Struggle in Winter
        </h1>
      </div>

      {/* First Story */}
      <div className="my-10 bg-sky-100 py-10 px-4 md:px-10 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Left Side Image */}
          <div data-aos="flip-left" className="lg:w-1/2">
            <img
              src={img}
              alt="People struggling in winter"
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>

          {/* Right Side Text Card */}
          <div data-aos="fade-up" className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-sky-800">
              Winter Without Warmth
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
              Stories of Those Who Struggle
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every winter, many underprivileged people in Bangladesh face harsh cold without adequate clothing.
              Children in rural areas, elderly people in cities, and helpless families suffer silently.
              Their stories remind us of the urgent need for compassion, community support, and timely aid.
            </p>
            <button className="px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
              Learn How You Can Help
            </button>
          </div>

        </div>
      </div>

      {/* Second Story */}
      <div className="my-10 bg-sky-100 py-10 px-4 md:px-10 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Left Side Text Card */}
          <div data-aos="fade-up" className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-sky-800">
              Winter Without Warmth
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
              True Stories of Those Struggling in Winter
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Meet Rina, a 10-year-old girl from a village near Rajshahi, who walks to school
              every day in freezing mornings without a warm jacket.
              Elderly Mr. Karim in Dhaka survives on minimal blankets, shivering every night.
              Families in rural Chittagong huddle together to keep their children warm with whatever they have.
              These are real people facing winter without proper clothing, and they need our help.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every donation of jackets, sweaters, or blankets can bring warmth and hope
              to someone like Rina, Mr. Karim, and countless others across Bangladesh.
            </p>
            <button className="px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
              Learn How You Can Help
            </button>
          </div>

          {/* Right Side Image */}
          <div data-aos="flip-left" className="lg:w-1/2">
            <img
              src={img2}
              alt="People struggling in winter"
              className="w-full rounded-lg shadow-2xl object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Winter;
