import React from 'react';

export default function ResponseList() {
  // Mock data for freelancer responses
  const responses = [
    { id: 1, baseName: 'rachit.dalla', walletId: '0x9176647509', level: 12 },
    { id: 2, baseName: 'john.doe', walletId: '0x9176647509', level: 12 },
    { id: 3, baseName: 'jane.smith', walletId: '0x9176647509', level: 12 },
    { id: 4, baseName: 'alex.johnson', walletId: '0x9176647509', level: 12 },
    { id: 5, baseName: 'emma.wilson', walletId: '0x9176647509', level: 12 },
    { id: 6, baseName: 'michael.brown', walletId: '0x9176647509', level: 12 },
  ];

  const handleAccept = (id) => {
    console.log('Accepted freelancer:', id);
  };

  const handleReject = (id) => {
    console.log('Rejected freelancer:', id);
  };

  return (
    <div className="min-h-screen bg-black bg-opacity-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl p-6 relative border border-white">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          ✕
        </button>

        {/* Header */}
        <h2 className="text-white text-xl font-semibold mb-6">Response List</h2>

        {/* Response Items */}
        <div className="space-y-4">
          {responses.map((response) => (
            <div 
              key={response.id}
              className="flex items-center justify-between p-3 border-b border-zinc-800"
            >
              <div className="flex items-center space-x-4">
                {/* Profile Picture */}
                <div className="w-10 h-10 bg-zinc-700 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* User Info */}
                <div className="flex flex-col overflow-hidden">
                  <span className="text-white text-sm truncate">{response.baseName}</span>
                  <span className="text-white text-sm truncate">{response.walletId}</span>
                  <span className="text-white text-sm">Level {response.level}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button 
                  onClick={() => handleAccept(response.id)}
                  className="w-8 h-8 rounded-full bg-green-500/20 hover:bg-green-500/30 flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </button>
                <button 
                  onClick={() => handleReject(response.id)}
                  className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center"
                >
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

