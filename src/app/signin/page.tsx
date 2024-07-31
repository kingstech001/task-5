'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';



const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    router.push('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-full max-w-md bg-card rounded p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
        <p className="text-center text-gray-400">Welcome back, you have been missed!</p>

        <div className="mt-4 sm:flex items-center gap-2 ">
          <div className="w-full text-black  py-2 rounded border mb-2 flex items-center gap-2 justify-center">
          <Image src="/images/flat-color-icons_google.png" alt="Logo" width={20} height={20} />
          <button
            onClick={() => signIn('google')}
          >
            Sign Up with Google
          </button>
          </div>
          <div className="w-full text-black py-2 rounded border mb-2 flex items-center gap-2 justify-center">
          <Image src="/images/vector.png" alt="Logo" width={20} height={0} />
          <button
            onClick={() => signIn('facebook')}
          >
            Sign Up with Facebook
          </button>
          </div>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-foreground mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label className="block text-foreground mb-2" htmlFor="email">
              Password
            </label>
          <div className="mb-4 relative flex">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-primary-foreground py-2 rounded hover:bg-orange-400 "
          >
            Sign In
          </button>
          <p className="text-center mt-4">
            Don't have an account?&apos;{' '}
            <Link href="/signup" className="text-orange-500">
              Sign Up
            </Link>
          </p>
        </form>
        
      </div>
    </div>
  );
};

export default SignIn;
