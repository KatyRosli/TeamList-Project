import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthDetails } from '../types/User';
import { useLocalStorage } from './useLocalStorage';
const AuthContext = createContext({} as IAuthDetails);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();

    const login = async (data: string): Promise<void> => {
        setUser(data);
        navigate('/deposit');
    };

    const logout = (): void => {
        setUser(null);
        navigate('/', { replace: true});
    };

    const value: IAuthDetails = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext);
};
