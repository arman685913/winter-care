import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ErrorPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 2000, // 2 seconds animation
            once: true
        });
    }, []);

    return (
        <div
            data-aos="fade-up"
            className='min-h-screen flex justify-center items-center flex-col px-4'
        >
            <h1 className="text-6xl font-bold text-sky-800 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-700">
                Page Not Found
            </h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
                Oops! The page you are looking for doesn’t exist or has been moved.
            </p>
            <button 
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
            >
                Go Back Home
            </button>
        </div>
    );
};

export default ErrorPage;
