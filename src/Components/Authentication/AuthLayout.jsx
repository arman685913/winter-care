import React from 'react';
import Navber from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='lg:w-11/12 mx-auto min-h-screen px-2'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;
