import React, { useEffect, useState } from 'react';
import { useTeam } from '../hooks/useTeam';
import { getAll } from '../services/TeamService';
import ITeam from '../types/Team';

export const TeamList = () => {
    const [team, setTeam] = useState<ITeam>({} as ITeam);
    //const {teamList, setTeamList} = useTeam<

    useEffect(() => {
        retrieveTeam();
    }, [])

    const retrieveTeam = () => {
        console.log('hellooooo')
        getAll()
        .then((response: any) => {
            console.log('retrieveTeam()', response.data);
            setTeam(response.data);
        })
        .catch((e: Error) => {
            console.error(e);
        });
    }

    return (
        <>
            <h1>Join<br />the<br />team</h1>
            <ul>{team && team.team && team.team?.map((member, index) => <li key={index}>{member}</li>)}</ul>
        </>
    )
};