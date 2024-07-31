'use client';

import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const Confirmation: React.FC = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || ''; // Retrieve the email from search parameters

  const handleOpenEmail = () => {
    // Logic to open the default email client can be added here if needed
    console.log('Opening email client...');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-full max-w-md bg-card rounded p-6 text-center">
        <p className=" mb-4">Sent! Please check your email for the magic link.</p>
        <Image
          src="/images/Vectorgood.png" // Add the path to your success image
          alt="Success"
          width={100}
          height={100}
          className="mx-auto mb-4"
        />
        <p className="text-gray-400 mb-4">
          We have sent an email to <span className="font-semibold">{email}</span> with instructions on how to get started.
        </p>
        <button
          onClick={handleOpenEmail}
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400"
        >
          Open Email
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
