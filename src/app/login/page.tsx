"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (user.email.length>0 && user.password.length>0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/login', user);
            console.log("Login successful: ", response.data);
            router.push('/profile');

        } catch (error:any) {
            console.log("Login failed: ", error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col items-center
        justify-center min-h-screen py-2'>
            <h1>{loading?"Processing":"Login"}</h1>
            <hr />
            <label htmlFor='email'>Email</label>
            <input
            className='border border-gray-300 p-2 mb-4 rounded-lg text-black'
                id='email'
                type='text'
                placeholder='Email'
                value={user.email}
                onChange={(e) => setUser({...user, email:
                    e.target.value})}
            />
            <label htmlFor='password'>Password</label>
            <input
            className='border border-gray-300 p-2 mb-4 rounded-lg text-black'
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
            >{buttonDisabled?"No Login":"Login"}</button>
            <p>Don't have an account? <Link href='/signup'>Visit Sign Up</Link></p>
        </div>
    )
}