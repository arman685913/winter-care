import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from "react-toastify";
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [errors, setErrors] = useState([]);
    const [eye, setEye] = useState(true);
    const navigate = useNavigate();

    const { setUser, signInGoogle, createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const newErrors = [];

        if (!/[A-Z]/.test(password)) newErrors.push("Password must contain at least 1 uppercase letter");
        if (!/[a-z]/.test(password)) newErrors.push("Password must contain at least 1 lowercase letter");
        if (!/[0-9]/.test(password)) newErrors.push("Password must contain at least 1 number");
        if (password.length < 6) newErrors.push("Password must be minimum 6 characters long");

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    setUser(result.user);
                    toast.success("Registration Successful");
                    navigate("/");
                });
            })
            .catch(error => {
                if(error.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error("Email-already-in-use");
                }
            });

        setErrors([]);
    };

    const handleGoogle = () => {
        signInGoogle()
            .then(result => {
                setUser(result.user);
                toast.success("Login Successful");
                navigate("/");
            })
            .catch(error => toast.error(error.message));
    };

    return (
        <div className='flex justify-center flex-col gap-3 items-center lg:my-14 my-6 md:my-10'>
            <form onSubmit={handleRegister} className="fieldset bg-sky-50 border-base-300 rounded-box w-xs border p-6 relative">
                <legend className="fieldset-legend text-2xl md:text-3xl absolute left-4 -top-6 text-sky-700">Register</legend>

                <label className="label">Name</label>
                <input name='name' type="text" required className="input focus:border-0 outline-sky-500" placeholder="Name" />

                <label className="label">Photo URL</label>
                <input name='photo' type="text" required className="input focus:border-0 outline-sky-500" placeholder="Photo URL" />

                <label className="label">Email</label>
                <input name='email' type="email" required className="input focus:border-0 outline-sky-500" placeholder="Email" />

                <label className="label">Password</label>
                <div className="relative">
                    <input
                        name='password'
                        type={eye ? "password" : "text"}
                        className="input w-full focus:border-0 outline-sky-500"
                        placeholder="Password"
                    />
                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setEye(!eye)}
                    >
                        {eye ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>

                {errors.map((err, index) => (
                    <p key={index} className="text-red-500 text-sm">{err}</p>
                ))}

                <button type='submit' className="btn text-white bg-sky-600 my-2 hover:shadow-lg hover:shadow-red-100">
                    Register
                </button>

                <p>
                    Already have an account?
                    <Link to="/auth/login" className='text-red-500'> Login</Link>
                </p>
            </form>

            <button onClick={handleGoogle} className="btn bg-white hover:shadow-lg hover:shadow-sky-200 w-xs text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>
    );
};

export default Register;
