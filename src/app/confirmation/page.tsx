'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const ConfirmationContent: React.FC = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || ''; // Retrieve the email from search parameters

  const handleOpenEmail = () => {
    // Logic to open the default email client can be added here if needed
    console.log('Opening email client...');
  };

  return (
    <div className="flex justify-center items-center h-[85vh] bg-background">
      <div className="w-full max-w-[33rem] bg-card rounded p-6 text-center">
        <h1 className=" mb-4 text-xl font-bold">Sent! Check your email.</h1>
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
          className="border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-400 w-full"
        >
          Open Email
        </button>
      </div>
    </div>
  );
};

const Confirmation: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
};

export default Confirmation;
