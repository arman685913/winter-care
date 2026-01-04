import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    const [timer, setTimer] = useState(true);

    setTimeout(() => {
        setTimer(false)
    }, 2000);

    return (
        <footer >

            {
                !timer && <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"> <aside data-aos="zoom-in" >
                    <img className='w-10' src={logo} alt="Logo" />
                    <Link to="/" className="hover:cursor-pointer font-bold text-xl italic">Winter-Care</Link>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right reserved by <i className='font-semibold'>Winter-Care.</i>
                    </p>
                    <p>Nasirabad, Chattogram, BD.</p>
                </aside>
                    <nav data-aos="fade-left" data-aos-delay="200">
                        <h6 className="footer-title">Contacts US</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <FaFacebookF className='w-6 h-6' />
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                <FaTwitter className='w-6 h-6' />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <FaInstagram className='w-6 h-6' />
                            </a>
                        </div>
                        <p>Phone : 📞 +880123456789</p>
                        <p>Email : ✉ info@example.com</p>
                    </nav>
                </div>
            }

        </footer>
    );
};

export default Footer;
