import React, { use, useState } from 'react';
import { toast } from "react-toastify";
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation } from 'react-router';


const Forget = () => {

    const location = useLocation();

    const { forgetPass } = use(AuthContext)

    const [emailValue, setEmailValue] = useState(
        location.state?.email || ""
    );

    const handleReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!email) {
            toast.error("Please type your email");
            return;
        }

        forgetPass(email)
            .then(() => {
                toast.success("A reset link has been sent. Please Check Inbox or Spam");
            })
            .catch((error) => {
                if (error.code === "auth/invalid-email") {
                    toast.error("Invalid email address");
                } else if (error.code === "auth/user-not-found") {
                    toast.error("No account found with this email");
                } else {
                    toast.error("Something went wrong");
                } console.log(error.code , error.message)
            } 
        );



        setEmailValue(email);

        setTimeout(() => {

            //redirect to Gmail
            window.location.href = "https://mail.google.com";
        }, 4000);
    };

    return (
        <div className='flex justify-center items-center lg:my-52 my-32 md:my-40'>
            <form onSubmit={handleReset} className="join">
                <div>
                    <label className="input validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>

                        <input
                            name="email"
                            type="email"
                            placeholder="mail@site.com"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                        />
                    </label>
                </div>

                <button type='submit' className="btn border-0 text-white bg-sky-600 join-item">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default Forget;
