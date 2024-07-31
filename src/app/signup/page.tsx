'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const validateForm = () => {
    const newErrors = { name: '', email: '', password: '' };

    if (!name) newErrors.name = 'Name is required.';
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    // Handle sign up logic here
    router.push('/signin');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-full max-w-[30rem] bg-card rounded p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <p className="text-center text-gray-400">Create an account to get started with us.</p>
        <div className="mt-4 sm:flex items-center gap-2 ">
          <div className="w-full text-black py-2 rounded border mb-2 flex items-center gap-2 justify-center">
            <Image src="/images/flat-color-icons_google.png" alt="Google Logo" width={20} height={20} />
            <button onClick={() => signIn('google')}>Sign Up with Google</button>
          </div>
          <div className="w-full text-black py-2 rounded border mb-2 flex items-center gap-2 justify-center">
            <Image src="/images/vector.png" alt="Facebook Logo" width={20} height={20} />
            <button onClick={() => signIn('facebook')}>Sign Up with Facebook</button>
          </div>
        </div>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-foreground mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-foreground mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-foreground mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-primary-foreground py-2 rounded hover:bg-orange-400"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?&apos;{' '}
            <Link href="/signin" className="text-orange-500">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
