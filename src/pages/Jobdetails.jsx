import React from 'react';

  export default function JobDetailsResume() {
    return (
      <div className="min-h-screen bg-black p-4 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-zinc-900 rounded-xl p-8 shadow-lg border border-zinc-800">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl font-bold text-white">Front-End Developer</h1>
            <div className="text-right">
              <p className="text-sm text-zinc-400">Wallet Id: 0x9176647509</p>
              <p className="text-blue-500 font-semibold mt-1">$200 USDC</p>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-blue-500 mb-2">Job Summary</h2>
              <p className="text-white">
                We are seeking a skilled Front-End Developer to create and maintain intuitive, responsive web
                interfaces. You will work closely with designers and developers to ensure seamless user experiences.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-blue-500 mb-2">Key Details</h2>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Team Size: 2-4 members</li>
                <li>Position: Front-End Developer</li>
                <li>Location: Remote</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-blue-500 mb-2">Responsibilities</h2>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Develop and maintain front-end code using HTML, CSS, and JavaScript.</li>
                <li>Collaborate with teams to integrate designs and APIs.</li>
                <li>Optimize web applications for performance and cross-device compatibility.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-blue-500 mb-2">Requirements</h2>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Proficiency in HTML5, CSS3, and JavaScript.</li>
                <li>Experience with frameworks like React.js, Vue.js, or Angular.</li>
                <li>Understanding of responsive design and version control tools like Git.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-blue-500 mb-2">Benefits</h2>
              <ul className="list-disc list-inside text-white space-y-1">
                <li>Competitive salary and flexible work options.</li>
                <li>Opportunities for growth and professional development.</li>
                <li>A collaborative, innovative work environment.</li>
              </ul>
            </section>
          </div>

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
    );
  }

