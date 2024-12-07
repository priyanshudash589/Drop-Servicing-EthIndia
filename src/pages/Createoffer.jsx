import React, { useState } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

export default function CreateOffer() {
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const projects = [
    "Memor Connect",
    "Alpha One",
    "Eth Link",
    "Vartaloop",
    "Nothing"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Offer created successfully!");
    setTimeout(() => {
      setSuccessMessage("");
      setOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-zinc-900/50 backdrop-blur-sm">
        <div className="flex items-center space-x-6">
          {/* <span className="text-zinc-400">Home</span> */}
          <span className="text-zinc-400">Market Place</span>
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-4 h-4 text-blue-500" />
            <span className="text-blue-500">My Service</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* <span className="text-zinc-400">0x9176647509</span> */}
          <div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="w-64 bg-zinc-900/30 p-6">
          <h2 className="text-lg font-semibold mb-4 text-blue-500">Your Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project}
                className="p-2 hover:bg-zinc-800/50 rounded-lg cursor-pointer"
              >
                {project}
              </div>
            ))}
          </div>
        </aside>

        {/* Form Area */}
        <main className="flex-1 p-6 text-white">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Create Offer</h1>
            <button 
              className="px-4 py-2 bg-blue-500/20 text-blue-500 border border-blue-500/20 rounded hover:bg-blue-500/30"
              onClick={() => setOpen(true)}
            >
              + Add New
            </button>
          </div>

          {open && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg w-full max-w-[600px]">
                <h2 className="text-xl font-bold text-white mb-4">Create Offer</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="title" className="block text-zinc-400">Offer Title</label>
                    <input
                      id="title"
                      className="w-full bg-zinc-800 border border-zinc-700 text-black rounded p-2"
                      placeholder="Enter offer title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="block text-zinc-400">Description</label>
                    <textarea
                      id="description"
                      className="w-full min-h-[150px] bg-zinc-800 border border-zinc-700 text-black rounded p-2"
                      placeholder="Enter offer description"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="price" className="block text-zinc-400">Price</label>
                      <input
                        id="price"
                        type="number"
                        className="w-full bg-zinc-800 border border-zinc-700 text-black rounded p-2"
                        placeholder="Enter price"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="currency" className="block text-zinc-400">Currency</label>
                      <select
                        id="currency"
                        className="w-full bg-zinc-800 border border-zinc-700 text-black rounded p-2"
                        required
                      >
                        <option value="">Select currency</option>
                        <option value="usd">USD</option>
                        <option value="eth">ETH</option>
                        <option value="btc">BTC</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="people" className="block text-zinc-400">Number of People Required</label>
                      <input
                        id="people"
                        type="number"
                        className="w-full bg-zinc-800 border border-zinc-700 text-black rounded p-2"
                        placeholder="Enter number of people"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="days" className="block text-zinc-400">Number of Days</label>
                      <input
                        id="days"
                        type="number"
                        className="w-full bg-zinc-800 border border-zinc-700 text-black rounded p-2"
                        placeholder="Enter number of days"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                  >
                    Create Offer
                  </button>
                </form>
                {successMessage && (
                  <div className="mt-4 p-2 bg-green-500/20 text-green-500 rounded">
                    {successMessage}
                  </div>
                )}
                <button 
                  className="mt-4 w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

