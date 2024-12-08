import React from 'react';


const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#161616] bg-gradient-to-r from-[#161616] via-purple-900/10 to-[#161616]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white">
            Orbit<span className="text-blue-500">US</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Market', 'Services', 'Blog'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Sign up
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
