import React from 'react';
import { Link, Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if(!user) {
        return <Navigate to='/' />;
    }

    return  (
        <div>
            <nav>
                <Link to='/deposit'>Deposit</Link>
                <Link to='/livecasino'>LiveCasino</Link>
            </nav>
            {outlet}
        </div>
    );
};