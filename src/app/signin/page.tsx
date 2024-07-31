"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-full max-w-md bg-card rounded p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
        <p className="text-center text-gray-400">
          Welcome back, you have been missed!
        </p>

        <div className="mt-4 sm:flex items-center gap-2 ">
          <div className="w-full text-black py-2 rounded border-gray-300 border mb-2 flex items-center gap-2 justify-center text-xs font-medium">
            <Image
              src="/images/flat-color-icons_google.png"
              alt="Logo"
              width={20}
              height={20}
            />
            <button onClick={() => signIn("google")}>
              Sign in with Google
            </button>
          </div>
          <div className="w-full text-black py-2 rounded border border-gray-300 mb-2 flex items-center gap-2 justify-center text-xs font-medium">
            <Image src="/images/Vector.png" alt="Logo" width={20} height={20} />
            <button onClick={() => signIn("facebook")}>
              Sign  with Facebook
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-300 h-[1px]"></div>
          <p>OR</p>
          <div className="w-full bg-gray-400 h-[1px]"></div>
        </div>

        <form onSubmit={handleSignIn}>
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
              required
            />
          </div>
          <label className="block text-foreground mb-2" htmlFor="password">
            Password
          </label>
          <div className="mb-4 relative flex">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent border-gray-300"
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
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-400 mb-4"
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full bg-transparent border-[1.5px] border-gray-300 py-2 rounded"
          >
            Signin with magic link
          </button>
          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
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
