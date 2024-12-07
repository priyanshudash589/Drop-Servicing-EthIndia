
import React from 'react';
export default function Jobdetails() {
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-zinc-900 rounded-xl p-8 relative">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-zinc-400 hover:text-white">
            ✕
          </button>
  
          {/* Wallet ID */}
          <div className="text-right text-sm text-zinc-400 mb-6">
            Wallet Id: 0x9176647509
          </div>
  
          {/* Client Details */}
          <div className="mb-8">
            <h2 className="text-blue-500 text-xl mb-2">Client Details</h2>
            <div className="space-y-1">
              <p className="text-zinc-400">
                Pay: <span className="text-white">$200 USDC</span>
              </p>
              <p className="text-zinc-400">
                Team: <span className="text-white">2-4</span>
              </p>
            </div>
          </div>
  
          {/* Job Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-zinc-400 mb-1">Job Title</h3>
              <p className="text-white">Front-End Developer</p>
            </div>
  
            <div>
              <h3 className="text-zinc-400 mb-1">Job Description</h3>
              <p className="text-white">
                We are seeking a skilled Front-End Developer to create and maintain intuitive, responsive web
                interfaces. You will work closely with designers and developers to ensure seamless user experiences.
              </p>
            </div>
  
            <div>
              <h3 className="text-zinc-400 mb-2">Responsibilities:</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Develop and maintain front-end code using HTML, CSS, and JavaScript.</li>
                <li>Collaborate with teams to integrate designs and APIs.</li>
                <li>Optimize web applications for performance and cross-device compatibility.</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-zinc-400 mb-2">Requirements:</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Proficiency in HTML5, CSS3, and JavaScript.</li>
                <li>Experience with frameworks like React.js, Vue.js, or Angular.</li>
                <li>Understanding of responsive design and version control tools like Git.</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-zinc-400 mb-2">What We Offer:</h3>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Competitive salary and flexible work options.</li>
                <li>Opportunities for growth and professional development.</li>
                <li>A collaborative, innovative work environment.</li>
              </ul>
            </div>
          </div>
  
          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Apply
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
              Collaborate
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  