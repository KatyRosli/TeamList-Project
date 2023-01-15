import React from 'react';
import { Link, Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if(!user) {
        //return <Navigate to='/' />;
    }

    return  (
        <div>
            <nav>
                <Link to='/games/deposit'>Deposit</Link>
                <Link to='/games/livecasino'>LiveCasino</Link>
            </nav>
            {outlet}
        </div>
    );
};