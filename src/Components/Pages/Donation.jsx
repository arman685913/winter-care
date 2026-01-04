import React, { useState } from 'react';
import Campaign from './Campaigns/Campaign';
import { useLoaderData, useLocation } from 'react-router';
import { toast } from "react-toastify";

const Donation = () => {
    const location = useLocation();
    const state = location.state;

    const loadedData = useLoaderData();

    const initialData = state?.category
        ? loadedData.filter(data => data.title === state.category)
        : loadedData;

    const [campaigns, setCampaigns] = useState(initialData);
    const [activeFilter, setActiveFilter] = useState(state?.category || "All");

    const handleFilter = (filter) => {
        setActiveFilter(filter);
        toast.success(`${filter} Campaigns`);

        if (filter === "All") {
            setCampaigns(loadedData);
        } else if (["Jacket", "Blanket", "Sweater"].includes(filter)) {
            setCampaigns(loadedData.filter(d => d.title === filter));
        } else {
            setCampaigns(loadedData.filter(d => d.division === filter));
        }
    };

    const getBtnClass = (name) =>
        `btn ${activeFilter === name ? "btn-info" : "btn-outline btn-info"}`;

    const getBtnClass2 = (name) =>
        `${activeFilter === name ? "text-red-500 outline" : "underline"}`;

    return (
        <div className="my-6">

            {/* Division Buttons */}
            <div className="text-center grid grid-cols-2 gap-4 lg:grid-cols-4">
                <button
                    className={getBtnClass("All")}
                    onClick={() => handleFilter("All")}
                >
                    All Campaigns
                </button>
                <button
                    className={getBtnClass("Dhaka")}
                    onClick={() => handleFilter("Dhaka")}
                >
                    Dhaka's Campaigns
                </button>
                <button
                    className={getBtnClass("Chittagong")}
                    onClick={() => handleFilter("Chittagong")}
                >
                    Chittagong's Campaigns
                </button>
                <button
                    className={getBtnClass("Rajshahi")}
                    onClick={() => handleFilter("Rajshahi")}
                >
                    Rajshahi's Campaigns
                </button>
            </div>

            {/* Category Buttons */}
            <div className="m-4 mx-auto w-8/12 text-center grid grid-cols-3 gap-2">
                <button
                    className={getBtnClass2("Jacket")}
                    onClick={() => handleFilter("Jacket")}
                >
                    Jacket
                </button>
                <button
                    className={getBtnClass2("Sweater")}
                    onClick={() => handleFilter("Sweater")}
                >
                    Sweater
                </button>
                <button
                    className={getBtnClass2("Blanket")}
                    onClick={() => handleFilter("Blanket")}
                >
                    Blanket
                </button>
            </div>

            {/* Campaigns Grid */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {campaigns.length > 0 ? (
                    campaigns.map(data => (
                        <Campaign key={data.id} data={data} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        No campaigns found
                    </p>
                )}
            </div>
        </div>
    );
};

export default Donation;


