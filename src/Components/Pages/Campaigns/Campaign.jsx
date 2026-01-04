import React, { use } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { toast } from "react-toastify";
import { AuthContext } from '../../../Provider/AuthProvider';


const Campaign = ({ data }) => {
    const navigate = useNavigate();
    const {user} = use(AuthContext)


    const handleDonate = () => {
        navigate(`/donation/${data.id}`)
        if(user){
            toast.success("Welcome to Details");
        } else {
            toast.warning("Please Login First");
        }
    }

    return (
        <div className="card bg-sky-100 shadow-sm border border-gray-300 p-2 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 hover:shadow-red-200 ">
            <div data-aos="zoom-in">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-48 md:h-52 lg:h-56"
                />
            </div>
            <div className="card-body">
                <h2 data-aos="fade-right" className="card-title text-2xl text-sky-900">{data.title}</h2>
                <p data-aos="flip-right" className="">{data.description}</p>
                <p data-aos="fade-right" className="text-sm font-semibold text-gray-600">
                    Division: {data.division}
                </p>
                <div className="card-actions justify-end">
                    <button data-aos="fade-up"
                        className="btn btn-primary rounded-lg"
                        onClick={handleDonate}
                    >
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
