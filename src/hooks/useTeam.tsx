import React from 'react';
import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITeamDetails } from '../types/Team';
import { useLocalStorage } from './useLocalStorage';
const TeamContext = createContext({} as ITeamDetails);

export const TeamProvider = ({ children }: any) => {
    const [team, setTeam] = useLocalStorage('team', null);
    const navigate = useNavigate();

    const updateTeam = async (data: string[]): Promise<void> => {
        setTeam({ team: data });
    };

    const signUp = async (data: string[]): Promise<void> => {
        updateTeam(data);
        navigate('/deposit');
    }

    const value: ITeamDetails = useMemo(
        () => ({
            team: team,
            updateTeam: updateTeam,
            signUp: signUp
        }),
        [team]
    );
    return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
};

export const useTeam = () => {
    return useContext(TeamContext);
};
