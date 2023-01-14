import { Navigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const HomeLayout = () => {
    const { user } = useAuth();

    if (user) {
        return <Navigate to='/games/deposit' />;
    }

    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
            <Outlet />
        </div>
    )
};
