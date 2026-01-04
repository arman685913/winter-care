import React, { useRef } from 'react';
import { toast } from "react-toastify";
import { useLoaderData } from 'react-router';
const CampaignDetails = () => {
    const data = useLoaderData();
    const formRef = useRef(null);

    const handleFrom = (e) => {
        e.preventDefault();
        toast.success("Donation submitted successfully!");
        formRef.current.reset();
    }

    return (
        <div className='space-y-3'>
            <div className="my-4 sm:my-6 px-2 sm:px-4 lg:px-8">
                <div className="card bg-sky-100 shadow-sm border border-gray-300 
                flex flex-col md:flex-row 
                gap-4 md:gap-6 lg:gap-8 
                items-center p-3 sm:p-4 lg:p-6">

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="
                            w-full 
                            h-[240px] sm:h-[300px] md:h-[320px] lg:h-[380px]
                            
                            rounded-lg
                        "
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2">
                        <div className="flex justify-between md:justify-start items-center gap-2 mb-3">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-900 md:my-1 lg:my-2">
                                {data.title}
                            </h2>

                            <span className="border border-sky-600 bg-green-50 text-green-600 
                            px-4 py-1 text-sm font-semibold rounded-full">
                                {data.status}
                            </span>
                        </div>

                        <p className="text-lg text-gray-700 mb-3">
                            {data.description}
                        </p>

                        <p className="font-semibold text-gray-600 ">
                            Division: {data.division}
                        </p>

                        <p className="
                        mt-4 
                        text-center text-sky-600 font-medium
                        border border-sky-600 rounded-xl
                        py-2 px-3
                        text-sm sm:text-base
                    ">
                            Contact Us: {data.contactInfo}
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-11/12 border border-gray-300 mx-auto md:my-6 my-4 p-4 bg-white shadow-md rounded-lg">
                <form ref={formRef} onSubmit={handleFrom} className="flex flex-col gap-4">

                    <div className='flex md:flex-row flex-col gap-3 justify-between'>
                    <div className="flex flex-col md:w-full">
                        <label htmlFor="quantity" className="font-semibold text-gray-700">
                            Quantity of Items <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="e.g. 1"
                            required
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    <div className="flex flex-col md:w-full">
                        <label htmlFor="itemType" className="font-semibold text-gray-700">
                            Item Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="itemType"
                            name="itemType"
                            required
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            <option value="">Select Your Items</option>
                            <option value="blanket">Blanket</option>
                            <option value="jacket">Jacket</option>
                            <option value="sweater">Sweater</option>
                        </select>
                    </div>

                    <div className="flex flex-col md:w-full">
                        <label htmlFor="location" className="font-semibold text-gray-700">
                            Pickup Location <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            id="location"
                            name="location"
                            placeholder="Enter pickup location"
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="notes" className="font-semibold text-gray-700">
                            Notes
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            placeholder="“Please call before coming” , “Pickup after 6 PM.....” "
                            className="mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                            rows="5"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-4 py-2 px-4 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CampaignDetails;
