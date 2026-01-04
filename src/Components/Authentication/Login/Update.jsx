import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Update = () => {

    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value || user.displayName;
        const photoURL = form.photo.value || user.photoURL;


        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        }).then(() => {
            setUser(user);
            toast.success("Profile Updated Successfully");
            navigate("/dashboard");
        }).catch((error) => {
            if(error.message == "userInternal.getIdToken is not a function")
            toast.error("Please Input Valid Data")
        });
    }

    return (
        <div className='flex justify-center items-center lg:my-24 my-10 md:my-16'>
            <form onSubmit={handleUpdate} className='shadow-md'>
                <fieldset className="fieldset bg-sky-50 border-base-300 rounded-box w-xs border p-4 ">
                    <legend className="fieldset-legend text-2xl">Update Profile</legend>

                    <label className="label">Name</label>
                    <input type="text" name='name' className="input focus:border-0 outline-sky-500" placeholder="Name" />


                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="input focus:border-0 outline-sky-500" placeholder="PhotoUrl" />

                    <input type="submit" className=' mt-4 btn bg-sky-500 text-white w-full' value="Update" />
                </fieldset>
            </form>
        </div>
    );
};

export default Update;