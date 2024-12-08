import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const COMPANIES = [
  'Base', 'Anon Aadhaar', 'Base', 'Anon Aadhaar',
  'Base', 'Anon Aadhaar', 'Base', 'Anon Aadhaar',
  'Base', 'Anon Aadhaar',
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-900 text-white">
    
      <Hero />
      <Companies />
    </div>
  );
}

// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <a href="/" className="text-2xl font-bold">
//             Orbit<span className="text-blue-500">US</span>
//           </a>
//           <div className="hidden md:flex items-center space-x-8">
//             {['Home', 'About', 'Market', 'Services', 'Blog'].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors">
//                 {item}
//               </a>
//             ))}
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="px-4 py-2 rounded hover:bg-purple-700 transition-colors">
//               Sign up
//             </button>
//             <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

function Hero() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            ORBIT<span className="text-blue-500">US</span> : Bridging Talent and Opportunity Seamlessly
          </h1>
          <p className="text-lg text-gray-400 max-w-xl">
            Empowering freelancers and clients with a streamlined drop-servicing platform for effortless collaboration and unmatched results
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-lg flex items-center">
            Get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <OrbitAnimation />
        </div>
      </div>
    </div>
  );
}

function OrbitAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-[80%] aspect-square">
        <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border-2 border-blue-500/30 rounded-full animate-spin-slow-reverse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 aspect-square bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-md"></div>
        </div>
      </div>
    </div>
  );
}

function Companies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= container.scrollWidth / 2) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full bg-black/50 py-16 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Target Prizes
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex space-x-8 overflow-hidden whitespace-nowrap"
          >
            {[...COMPANIES, ...COMPANIES].map((company, index) => (
              <div
                key={index}
                className="flex-none bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm px-8 py-4 rounded-lg border border-purple-500/20"
              >
                <span className="text-lg font-medium">{company}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;