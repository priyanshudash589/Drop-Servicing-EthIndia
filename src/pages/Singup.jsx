import React from 'react';
import { Button, Checkbox } from "@material-tailwind/react";

export default function Signup() {
  return (
    <div className="flex min-h-screen bg-black text-white items-center justify-center">
      <div className="w-full max-w-md p-8 border-[1.5px] border-white rounded-lg">
        <h1 className="text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Sign Up
          </span>
        </h1>
        <p className="text-gray-400 mb-8">
          Nice to meet you! Enter your details to register.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-900 text-white placeholder-gray-500 text-sm rounded-md px-3 py-2 border border-gray-700 focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-900 text-white placeholder-gray-500 text-sm rounded-md px-3 py-2 border border-gray-700 focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-900 text-white placeholder-gray-500 text-sm rounded-md px-3 py-2 border border-gray-700 focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Your Password"
            />
          </div>
          <div className="flex items-center">
            <Checkbox 
              color="purple" 
              className="border-gray-700 checked:border-purple-500"
              ripple={false}
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
              Remember Me
            </label>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white py-2 rounded-md transition duration-300 hover:from-purple-500 hover:to-purple-700"
          >
            Sign Up
          </Button>
        </form>
        <p className="text-center mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <a href="#login" className="text-purple-400 hover:text-purple-300">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

