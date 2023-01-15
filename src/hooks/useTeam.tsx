import React from 'react';
import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITeamDetails } from '../types/User';
import { useLocalStorage } from './useLocalStorage';
const TeamContext = createContext({} as ITeamDetails);

export const TeamProvider = ({ children }: any) => {
    const [teamMembers, setTeamMembers] = useLocalStorage('user', null);
    const navigate = useNavigate();

    const signUp = async (data: string): Promise<void> => {
        setTeamMembers(data);
        navigate('/deposit');
    };

    const value: ITeamDetails = useMemo(
        () => ({
            teamMembers
        }),
        [teamMembers]
    );
    return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
};

export const useTeam = () => {
    return useContext(TeamContext);
};
