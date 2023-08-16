"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';


export default function SignUpPage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: ''
    });

    const onSignup = async () => {}

    return (
        <div className='flex flex-col items-center
        justify-center min-h-screen py-2'>
            <h1>Signup</h1>
            <hr />
            <label htmlFor='username'>Username</label>
            <input
            className='border border-gray-300 p-2 mb-4 rounded-lg'
                id='username'
                type='text'
                placeholder='Username'
                value={user.username}
                onChange={(e) => setUser({...user, username: 
                    e.target.value})}
            />
            <label htmlFor='email'>Email</label>
            <input
            className='border border-gray-300 p-2 mb-4 rounded-lg'
                id='email'
                type='text'
                placeholder='Email'
                value={user.email}
                onChange={(e) => setUser({...user, email: 
                    e.target.value})}
            />
            <label htmlFor='password'>Password</label>
            <input
            className='border border-gray-300 p-2 mb-4 rounded-lg'
                id='password'
                type='password'
                placeholder='Password'
                value={user.password}
                onChange={(e) => setUser({...user, password: 
                    e.target.value})}
            />
            <button
            onClick={onSignup}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >Sign Up</button> 
            <p>Already have an account? <Link href='/login'>Visit Login</Link></p>
        </div>
    )
}