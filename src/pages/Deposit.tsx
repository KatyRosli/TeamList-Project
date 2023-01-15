import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TeamList } from '../components/TeamList';
import { ITeam } from '../types/Team';

export const DepositPage = ( ) => {
  const [ team, setTeam ] = useState<ITeam>({} as ITeam);
  const { state } = useLocation();

  useEffect(() => {
    console.log('Deposit state', state)
    setTeam(state)
  }, []);

  return (
    <div>
      <TeamList teamProp={ team.team } />
      <h4>This is the Deposit Page</h4>
    </div>
  );
}