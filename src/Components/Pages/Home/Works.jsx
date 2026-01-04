import React from "react";
import { FaUserCheck, FaHandsHelping, FaTruck } from "react-icons/fa";

const Works = () => {
  return (
    <section className="py-14 bg-white my-8 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Title */}
        <h2
          data-aos="fade-down"
          className="text-2xl md:text-4xl font-bold text-center mb-4 text-sky-600"
        >
          How It <span className="text-black">Works</span>
        </h2>

        <p
          data-aos="fade-up"
          className="text-center text-gray-600 max-w-3xl mx-auto mb-10"
        >
          Donating winter clothes is simple. Follow these easy steps and help
          bring warmth to lives across Bangladesh.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            data-aos="flip-left"
            className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <FaUserCheck className="text-4xl text-sky-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-2">Step 1: Login</h3>
            <p className="text-gray-600 text-center">
              Create an account or login using email or Google authentication.
            </p>
          </div>

          <div
            data-aos="flip-up"
            data-aos-delay="200"
            className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <FaHandsHelping className="text-4xl text-sky-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-2">Step 2: Choose Campaign</h3>
            <p className="text-gray-600 text-center">
              Browse donation campaigns based on divisions and select one.
            </p>
          </div>

          <div
            data-aos="flip-right"
            data-aos-delay="400"
            className="bg-sky-50 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <FaTruck className="text-4xl text-sky-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-2">Step 3: Donate</h3>
            <p className="text-gray-600 text-center">
              Fill in the donation form and our volunteers will collect it.
            </p>
          </div>
        </div>

        {/* Collection Info */}
        <div
          data-aos="zoom-in"
          className="mt-12 bg-sky-100 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-3 text-center">Collection & Distribution</h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto">
            Donations are collected by our volunteers and distributed to
            underprivileged people in rural and low-income areas during winter.
          </p>
        </div>

        {/* Supported Divisions */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-10"
        >
          <h3 className="text-xl font-semibold text-center mb-4">Supported Divisions</h3>
          <div className="flex justify-center gap-4">
            {["Dhaka", "Chittagong", "Rajshahi"].map((division) => (
              <span
                key={division}
                className="px-5 py-2 bg-sky-200 text-sky-800 rounded-full text-sm font-semibold"
              >
                {division}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>

  );
};

export default Works;
