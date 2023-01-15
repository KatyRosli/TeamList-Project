import React, { useEffect, useState } from 'react';
import { ITeam } from '../types/Team';
import image from '../images/backgroundImage.svg';

interface PropsTeam {
    teamProp?: string[]
}

export const TeamList = ( props: PropsTeam ) => {
    const { teamProp } = props;
    const [ teamState, setTeam ] = useState<string[]>([])
    //const { team, updateTeam } = useTeam();
    
    useEffect(() => {
        console.log('TeamList state', teamState)
        if (teamProp) {
            setTeam(teamProp);
        }
    }, [])
    
    useEffect(() => {
        console.log('TeamList#2', teamProp)
        if (teamProp) {
            setTeam(teamProp);
        }
    }, [teamProp])

    return (
        <section className='teamList' style={{ backgroundImage:`url(${image})` }}>
            <h1 className='teamList__header'>Join<br />the<br />team</h1>
            <ul className='teamList__members'>{teamState && teamState.map((member, index) => <li className='teamList__members__names' key={index}>{member}</li>)}</ul>
        </section>
    )
};