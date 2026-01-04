import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router';
import { FaHandHoldingHeart } from 'react-icons/fa';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200 px-4 -my-24 md:-my-0">
            <div className="card w-full max-w-md shadow-xl bg-base-100">

                <div className="bg-gradient-to-r from-sky-400 to-sky-200 text-white text-center py-6 rounded-t-xl">
                    <div data-aos="zoom-in" className='flex justify-center items-center gap-2'>
                    <h1  className="text-2xl font-bold ">
                        Welcome, {user?.displayName.split(" ")[0] || "User"}
                    </h1>
                        <FaHandHoldingHeart className='w-6 h-6 text-red-500' />
                    </div>
                </div>

                {/* Body */}
                <div className="card-body items-center text-center">

                    {/* Profile Image */}
                    <div className="avatar -mt-10 mb-4">
                        <div data-aos="zoom-in" className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-lg">
                            <img
                                src={user?.photoURL}
                                alt="Profile"
                            />
                        </div>
                    </div>

                    {/* Info Box */}
                    <div data-aos="flip-left" className="w-full bg-base-200 rounded-lg p-4 space-y-2 text-left">
                        <p><strong>Name:</strong> {user?.displayName}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                        {user?.uid && (
                            <p className="text-xs break-all">
                                <strong>User ID:</strong> {user.uid}
                            </p>
                        )}
                    </div>

                    {/* Button  */}
                    <Link data-aos="fade-up" to="/auth/update-profile" className="w-full mt-5">
                        <button className="btn bg-sky-500 text-white w-full">
                            Update Profile
                        </button>
                    </Link>

                </div>
            </div>
        </div>
        // <div></div>

    );
};

export default Dashboard;
