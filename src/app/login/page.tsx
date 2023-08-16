"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import {axios} from 'axios';


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });

    const onLogin = async () => {}

    return (
        <div className='flex flex-col items-center
        justify-center min-h-screen py-2'>
            <h1>Login</h1>
            <hr />
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
            onClick={onLogin}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >Login</button> 
            <p>Don't have an account? <Link href='/signup'>Visit Sign Up</Link></p>
        </div>
    )
}