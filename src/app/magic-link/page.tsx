'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MagicLink: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const router = useRouter();

  const validateEmail = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Enter a valid email.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail()) {
      // Handle sending magic link logic here, e.g., making an API request
      // Redirect to the confirmation page with email as a query parameter
      router.push(`/confirmation?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-full max-w-md bg-card rounded p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In with Magic Link</h1>
        <p className="text-center text-gray-400">Enter your email to receive a magic link.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-foreground mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-400"
          >
            Get Magic Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default MagicLink;
