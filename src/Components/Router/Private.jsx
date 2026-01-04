import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const Private = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation()


    if (loader) {
        return (
            <div className='flex justify-center items-center min-h-screen'><span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-xl"></span></div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/auth/login" replace />;
};

export default Private;
