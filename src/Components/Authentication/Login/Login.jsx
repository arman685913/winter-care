import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from "react-toastify";
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';


const Login = () => {

    const { setUser, signInGoogle, logIn } = use(AuthContext)

    const [eye, setEye] = useState(true);
    const [emailValue, setEmailValue] = useState('');

    const navigate = useNavigate();

    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setEmailValue(email)

        logIn(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // ...
                setUser(user)
                toast.success("Login Successful");
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                if (errorMessage == "Firebase: Error (auth/invalid-credential).") {
                    toast.error("Wrong E-mail or Password")
                }
            });

    }

    const handleGoogle = () => {
        signInGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success("Login Successful");
                navigate(`${location.state ? location.state : "/"}`)
            }).catch((error) => {
                console.log(error.message)
                
            });
    }

    return (
        <div className='flex justify-center flex-col gap-3 items-center lg:my-14 my-6 md:my-10'>
            <form onSubmit={handleLogin} className="fieldset bg-sky-50 border-base-300 rounded-box w-xs border p-6 relative">
                <legend className="fieldset-legend text-2xl md:text-3xl absolute left-4 -top-6 text-sky-700">Login</legend>

                <label className="label">Email</label>
                <input name='email' type="email" className="input focus:border-0 outline-sky-500" placeholder="Email" />

                <label className="label">Password</label>
                <input name='password'
                    type={eye ? "password" : "text"} className="input focus:border-0 outline-sky-500" placeholder="Password" />
                <div className='absolute top-33 left-67'>
                    {
                        eye ? <FaEye onClick={() => { setEye(!eye) }} /> : <FaEyeSlash onClick={() => { setEye(!eye) }} />
                    }
                </div>


                <Link state={{ email: emailValue }} to='/auth/forget/password' className="text-red-500 italic font-medium">Forget Password ?</Link>

                <button type='submit' className="btn text-white bg-sky-600 my-2 hover:shadow-lg hover:shadow-red-100">Login</button>


                <p>New here? Please <Link to="/auth/register" className='text-red-500'>Register.</Link></p>
            </form>

            {/* Google */}
            <button onClick={handleGoogle} className="btn bg-white hover:shadow-lg hover:shadow-sky-200 w-xs text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>
    );
};

export default Login;