import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { TeamLoaderData } from '../App';
import { TeamList } from '../components/TeamList';
import '../styles.css';
import { ITeam } from '../types/Team';

export const RegisterPage = () => {
  const [ team, setTeam ] = useState<ITeam>({} as ITeam);
  const navigate = useNavigate();
  const { data } = useLoaderData() as TeamLoaderData;

  useEffect(() => {
    setTeam(data);
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const handleRegistration = (newTeamMember: any) => {
    team.team.push(newTeamMember.name);
    setTeam(team);
    navigate('/games/deposit', {
      state: team
    });
  }

  const registerOptions = {
    name: { required: '*Name is required'},
    email: { required: '*Email is required'}
  }

  return (
    <main className='register'>
      <TeamList teamProp={ team.team } />
      <form  className='register__form' onSubmit={handleSubmit(handleRegistration)}>
        <h2 className='register__header'>Register</h2>
        <h3 className='register__subheader'>Team player - Be positive - Beat yesterday</h3>
        <p className='register__instructions'>Together we re-define the experience of online gaming through gamification and novel technical solutions.</p>
          <input type='text' placeholder='Name' id='name' className='register__input__name' {...register('name', registerOptions.name )} />
          <br />
          {errors?.name && errors.name.message && 
            <small className='register__errormessage'>
              {errors?.name.message.toString()}
            </small>
          }
          <br />
          <input type='email' placeholder='Email' id='email' className='register__input__email' {...register('email', registerOptions.email)} />
          <br />
          {errors?.email && errors.email.message &&
            <small className='register__errormessage'>
              {errors.email.message.toString()}
            </small>
          }
          <br />
        <label className='register__checkbox'>
          <input type='checkbox' className='register__checkbox__checked' defaultChecked/>
          I agree to the terms
        </label>
        <br />
        <button className='register__submit'>I'm in, sign me up!</button>
      </form>
    </main>
  )
};