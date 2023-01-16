import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { ITeam } from '../types/Team';
import image from '../images/backgroundImage.svg';

interface PropsTeam {
    teamProp?: ITeam
    page: string
}

export const TeamList = ( props: PropsTeam ) => {
    const { teamProp, page } = props;
    const [ teamList, setValue ] = useLocalStorage('teamList', {} as ITeam);
    const [ teamState, setTeam ] = useState<ITeam>({} as ITeam)
    
    useEffect(() => {
        if (teamProp && Object.keys(teamProp).length !== 0) {
            updateTeam(teamProp);
        } else {
            setTeam(teamList)
        }
    }, [])
    
    useEffect(() => {
        if (teamProp && Object.keys(teamProp).length !== 0) {
            updateTeam(teamProp);
        } else {
            setTeam(teamList)
        }
    }, [teamProp])

    const updateTeam = (teamUpdated: ITeam) => {
        setTeam(teamUpdated);
        setValue(teamUpdated);
    }

    return (
        <section className='teamList' style={{ backgroundImage:`url(${image})` }}>
            <h1 className='teamList__header'>Join<br />the<br />team</h1>
            <ul className='teamList__members'>{teamState && teamState.team && teamState.team?.map((member, index) => <li className='teamList__members__names' key={index}>{member}</li>)}</ul>
        </section>
    )
};