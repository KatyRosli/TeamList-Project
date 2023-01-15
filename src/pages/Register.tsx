import React from 'react';
import { useForm } from 'react-hook-form';
import { TeamList } from '../components/TeamList';

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      mode: 'onBlur'
    });
    const handleRegistration = (data: any) => console.log(data);

    const registerOptions = {
      name: { required: 'Name is required'},
      email: { required: 'Email is required'},
    }

  return (
    <main>
    <TeamList />
    <form onSubmit={handleSubmit(handleRegistration)}>
    <h2>Register</h2>
    <h3>Team player - Be positive - Beat yesterday</h3>
    <p>Together we re-define the experience of online gaming through gamification and novel technical solutions.</p>
    <input type='text' placeholder='Name' id='name' {...register('name', registerOptions.name )} />
    {errors?.name && errors.name.message && 
      <small className='text-danger'>
        {errors?.name.message.toString()}
      </small>
    }
    <input type='email' placeholder='Email' id='email' {...register('email', registerOptions.email)} />
    {errors?.email && errors.email.message &&
      <small className='text-danger'>
        {errors.email.message.toString()}
      </small>
    }
    <label>
    <input type='checkbox' defaultChecked/>
    I agree to the terms
    </label>
    <button>I'm in, sign me up!</button>
    </form>
    </main>
  )
};