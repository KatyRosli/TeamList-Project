import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const HomeLayout = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to='/games/deposit' />;
    }

    return (
        <nav className='navbar'>
            <ul className='navbar__container'>
                <li className='navbar__links'><Link to='/'>Home</Link></li>
                <li className='navbar__links'><Link to='/login'>Login</Link></li>
                <li className='navbar__links'><Link to='/register'>Register</Link></li>
            </ul>
            <Outlet />
        </nav>
    )
};
