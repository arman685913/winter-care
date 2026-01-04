import React, { useEffect } from 'react';
import Navber from '../Navbar/Navber';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true 
        });
    }, []);

    return (
        <div className='lg:w-11/12 mx-auto min-h-screen px-2'>
            <Navber></Navber>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default root;