import React, { useState } from 'react';
import { Button, Chip, Input, Textarea } from "@material-tailwind/react";
import navbar from '../components/Navbar';

export default function ProfileForm() {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState('');

  const addSkill = () => {
    if (currentSkill && !skills.includes(currentSkill)) {
      setSkills([...skills, currentSkill]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl border-white border-[1.5px] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Freelancer Profile
          </span>
        </h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              label="First Name"
              color="purple"
              className="text-white"
            />
            <Input
              type="text"
              label="Last Name"
              color="purple"
              className="text-white"
            />
          </div>
          <Input
            type="email"
            label="Email Address"
            color="purple"
            className="text-white"
          />
          <Input
            type="tel"
            label="Phone Number"
            color="purple"
            className="text-white"
          />
          <Input
            type="text"
            label="Professional Title"
            color="purple"
            className="text-white"
          />
          <Textarea
            label="Bio"
            color="purple"
            className="text-white"
            rows={4}
          />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-purple-400">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  value={skill}
                  onClose={() => removeSkill(skill)}
                  className="bg-purple-500 text-white"
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                label="Add a skill"
                color="purple"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                className="text-white"
              />
              <Button
                color="purple"
                onClick={addSkill}
                className="px-4"
              >
                Add
              </Button>
            </div>
          </div>
          <Input
            type="url"
            label="Portfolio URL"
            color="purple"
            className="text-white"
          />
          <Input
            type="text"
            label="LinkedIn Profile"
            color="purple"
            className="text-white"
          />
          <Textarea
            label="Work Experience"
            color="purple"
            className="text-white"
            rows={4}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white py-2 rounded-md transition duration-300 hover:from-purple-500 hover:to-purple-700"
          >
            Save Profile
          </Button>
        </form>
      </div>
    </div>
  );
}

