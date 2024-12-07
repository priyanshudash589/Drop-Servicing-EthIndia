import React from 'react';
import { Button } from "@material-tailwind/react";
import navbar from '../components/Navbar';

export default function SplitLogin() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      
      {/* Freelancer Side */}
      <div className="flex w-1/2 flex-col items-center justify-center px-8 text-center">
        <h1 className="mb-4 text-6xl font-bold">
          <span className="text-white">For </span>
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            FreeLancer
          </span>
        </h1>
        <p className="mb-8 max-w-md text-lg text-gray-300">
          Showcase your skills, connect with clients, and grow your career.
        </p>
        <Button
          className="mb-4 w-64 bg-gradient-to-r from-purple-400 to-purple-600 py-3 text-lg normal-case"
          color="purple"
          size="lg"
        >
          Login
        </Button>
        <div className="text-sm text-gray-400">
          Don't have an account?{" "}
          <a 
            href="/create-account" 
            className="text-purple-400 hover:text-purple-300"
          >
            Create Account !
          </a>
        </div>
      </div>

      {/* Client Side */}
      <div className="flex w-1/2 flex-col items-center justify-center px-8 text-center">
        <h1 className="mb-4 text-6xl font-bold">
          <span className="text-white">For </span>
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Client
          </span>
        </h1>
        <p className="mb-8 max-w-md text-lg text-gray-300">
          Find top talent, manage projects seamlessly, and bring your ideas to life.
        </p>
        <Button
          className="mb-4 w-64 bg-gradient-to-r from-purple-400 to-purple-600 py-3 text-lg normal-case"
          color="purple"
          size="lg"
        >
          Login
        </Button>
        <div className="text-sm text-gray-400">
          Don't have an account?{" "}
          <a 
            href="/create-account" 
            className="text-purple-400 hover:text-purple-300"
          >
            Create Account !
          </a>
        </div>
      </div>
    </div>
  );
}

