"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function SignUpPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: ''
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (user.email.length>0 && user.password.length>0 && user.username.length>0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            console.log("Sign up successful: ", response.data);
            router.push('/login');

        } catch (error:any) {
            console.log("Sign up failed: ", error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col items-center
        justify-center min-h-screen py-2'>
            <h1>{loading? "Processing" : "Signup"}</h1>
            <hr />
            <label htmlFor='username'>Username</label>
            <input
                className='border border-gray-300 p-2 mb-4 rounded-lg text-black'
                id='username'
                type='text'
                placeholder='username'
                value={user.username}
                onChange={(e) => setUser({...user, username:
                    e.target.value})}
            />
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
            onClick={onSignup}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >{buttonDisabled ? 'No Signup' : 'Signup'}
            </button>
            <p>Already have an account? <Link href='/login'>Visit Login</Link></p>
        </div>
    )
}