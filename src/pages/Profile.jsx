import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Avatar,
  Progress,
  Tooltip,
} from "@material-tailwind/react";
import { UserPlusIcon, BriefcaseIcon, ClockIcon } from "@heroicons/react/24/solid";

// Mock data for the profile
const profileData = {
  name: "Jane Doe",
  avatar: "/placeholder.svg?height=100&width=100",
  title: "Full Stack Developer",
  badges: ["React Expert", "Node.js Guru", "AWS Certified"],
  level: 7,
  points: 3500,
  maxPoints: 5000,
  contributions: [
    { date: "2023-05-01", count: 5 },
    { date: "2023-05-02", count: 3 },
    { date: "2023-05-03", count: 7 },
    // Add more dates and counts as needed
  ],
  companies: [
    { name: "TechCorp", duration: "2 years" },
    { name: "InnoSoft", duration: "1.5 years" },
    { name: "WebWizards", duration: "3 years" },
  ],
  totalContributionTime: "6.5 years",
};

const Heatmap = ({ contributions }) => {
  // This is a simplified heatmap. In a real application, you'd use a library like react-calendar-heatmap
  return (
    <div className="grid grid-cols-7 gap-1">
      {contributions.map((day, index) => (
        <Tooltip key={index} content={`${day.count} contributions on ${day.date}`}>
          <div
            className={`w-4 h-4 rounded-sm ${
              day.count > 5 ? 'bg-purple-700' : day.count > 3 ? 'bg-purple-500' : day.count > 0 ? 'bg-purple-300' : 'bg-gray-200'
            }`}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Card className="w-full max-w-4xl mx-auto bg-gray-900 text-white shadow-xl">
        <CardHeader floated={false} className="h-80">
          <img
            src="/placeholder.svg?height=320&width=1280"
            alt="profile-picture"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Avatar
            src={profileData.avatar}
            alt="avatar"
            size="xxl"
            className="ring-4 ring-purple-500 border-2 border-black -mt-20 mb-4"
          />
          <Typography variant="h4" color="white" className="mb-2">
            {profileData.name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {profileData.title}
          </Typography>
          <div className="flex justify-center gap-2 mt-4 mb-8">
            {profileData.badges.map((badge, index) => (
              <span key={index} className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <Button className="flex items-center gap-2" color="purple">
              <UserPlusIcon className="h-5 w-5" /> Follow
            </Button>
            <Button className="flex items-center gap-2" variant="outlined" color="purple">
              Collaborate
            </Button>
          </div>
          <div className="mb-8">
            <Typography variant="h6" color="white" className="mb-2">
              Contribution Level
            </Typography>
            <Progress value={(profileData.points / profileData.maxPoints) * 100} color="purple" />
            <Typography color="gray" className="mt-2">
              Level {profileData.level} - {profileData.points}/{profileData.maxPoints} points
            </Typography>
          </div>
          <div className="mb-8">
            <Typography variant="h6" color="white" className="mb-4">
              Contribution Heatmap
            </Typography>
            <Heatmap contributions={profileData.contributions} />
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Work History
            </Typography>
            {profileData.companies.map((company, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <BriefcaseIcon className="h-5 w-5 mr-2 text-purple-500" />
                  <Typography>{company.name}</Typography>
                </div>
                <Typography color="gray">{company.duration}</Typography>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2 text-purple-500" />
                <Typography>Total Contribution Time</Typography>
              </div>
              <Typography color="purple">{profileData.totalContributionTime}</Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
