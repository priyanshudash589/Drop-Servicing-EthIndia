import React from 'react';
import { Button, Checkbox } from "@material-tailwind/react";
// Removed incorrect import of `navbar` as it's not used.
import { Input } from "@material-tailwind/react"; // Use Input for text fields instead of plain HTML inputs.
 // Import img from Next.js for SVG imgs.

export default function Clientlogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        {/* Card Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl text-white">Gm, Welcome! Create Account</h2>
          <p className="text-zinc-400 text-white">Enter your details below</p>
        </div>

        {/* Card Content */}
        <div className="space-y-4 mt-6">
          {/* Wallet Address Field */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400 text-white">Wallet Address</label>
            <Input
              type="text"
              placeholder="Eg : 0x"
              className="bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400 text-white">Base Name</label>
            <Input
              type="text"
              placeholder="Eg : .blockchain"
              className="bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 "
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-400 text-white">Password</label>
            <Input
              type="password"
              placeholder="Password"
              className="bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500"
            />
          </div>

          {/* Sign-Up Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>

          {/* Login Link */}
          <div className="text-center text-sm">
            <span className="text-white">Have an account? </span>
            <a href="#" className="text-blue-500 hover:text-blue-800">
              Login
            </a>
          </div>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-700"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900 px-2 text-zinc-400">or</span>
            </div>
          </div>

          {/* MetaMask and Coinbase Buttons */}
          <div className="space-y-2 text-white">
            <Button
              variant="outlined"
              className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 flex items-center justify-center"
            >
              <img
                src="/metamask-logo.svg"
                alt="MetaMask"
                width={20}
                height={20}
                className="mr-2"
              />
             OKTO
            </Button>
            <Button
              variant="outlined"
              className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 flex items-center justify-center"
            >
              <img
                src="/coinbase-logo.svg"
                alt="Coin Base"
                width={20}
                height={20}
                className="mr-2"
              />
              Coin Base
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
