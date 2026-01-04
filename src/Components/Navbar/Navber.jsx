import React, { use } from 'react';
import logo from "../../assets/logo.png"
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';


const Navber = () => {


    const navigate = useNavigate();

    const { user, logOut, setUser } = use(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser(null)
                toast.success("Log-out Successful")
                navigate("/auth/login")
            }).catch((error) => {
                console.log(error.message)
            });
    }

    const links = (
        <>
            <li data-aos="fade-down">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-sky-500 font-semibold" : ""}>
                    Home
                </NavLink>
            </li>
            <li data-aos="fade-left">
                <NavLink to="/donation" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
                    Donation Campaigns
                </NavLink>
            </li>
            <li data-aos="fade-right">
                <NavLink to="/contacts" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
                    Contacts
                </NavLink>
            </li>
            <li data-aos="fade-up">
                <NavLink onClick={() => { user ? toast.success("Welcome To Dashboard") : toast.info("Please Login First") }} to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div id="nav" className=" navbar py-5 bg-base-100 shadow-sm rounded-xl px-3 md:px-4">
                <div className="navbar-start">
                    <div className="dropdown tooltip tooltip-bottom" data-tip="Menu">
                        <div tabIndex={0} role="button" data-aos="flip-left" className="btn p-0 hover:bg-white btn-ghost lg:hidden">
                            <img className='h-7 w-7' src={logo} alt="" />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu border border-base-300 menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div data-aos="flip-left" className='w-9 lg:flex hidden'>
                        <img src={logo} alt="" />
                    </div>
                    <Link to="/" data-aos="zoom-in" className="hover:cursor-pointer ml-2 font-bold text-2xl lg:text-3xl italic">Winter-Care</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul  className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-3  ">
                    <div className='w-7 lg:w-9'>
                        {
                            user ? <img  src={user.photoURL
                            } alt="" /> : <img src={logo} alt="" />
                        }

                    </div>
                    {
                        user ? <button data-aos="fade-right" onClick={handleLogout} className='btn btn-primary btn-soft rounded-lg'>Logout</button> : <Link className='btn btn-primary btn-soft rounded-lg' to="/auth/login">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navber;