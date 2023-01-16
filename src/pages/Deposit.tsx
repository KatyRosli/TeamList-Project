import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TeamList } from '../components/TeamList';
import { ITeam } from '../types/Team';

export const DepositPage = ( ) => {
  const [ team, setTeam ] = useState<ITeam>({} as ITeam);
  const { state } = useLocation();

  useEffect(() => {
    setTeam(state)
  }, []);

  return (
    <main className='deposit'>
      <TeamList teamProp={ team } page='Deposit'/>
      <h4 className='deposit__header'>This is the Deposit Page</h4>
    </main>
  );
}