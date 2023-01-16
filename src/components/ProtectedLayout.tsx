import React from 'react';
import { Link, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if(!user) {
        //return <Navigate to='/' />;
    }

    return  (
        <nav className='navbar'>
            <ul className='navbar__container'>
                <li className='navbar__links'><Link to='/games/deposit'>Deposit</Link></li>
                <li className='navbar__links'><Link to='/games/livecasino'>Live Casino</Link></li>
            </ul>
            {outlet}
        </nav>
    );
};