import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Mock data for users
const usersData = [
  { id: 1, name: "Alice Johnson", avatar: "/placeholder.svg?height=50&width=50", role: "Frontend Developer", contributions: 250, isActive: true },
  { id: 2, name: "Bob Smith", avatar: "/placeholder.svg?height=50&width=50", role: "Backend Developer", contributions: 180, isActive: true },
  { id: 3, name: "Charlie Brown", avatar: "/placeholder.svg?height=50&width=50", role: "Full Stack Developer", contributions: 320, isActive: false },
  { id: 4, name: "Diana Prince", avatar: "/placeholder.svg?height=50&width=50", role: "UI/UX Designer", contributions: 150, isActive: true },
  { id: 5, name: "Ethan Hunt", avatar: "/placeholder.svg?height=50&width=50", role: "DevOps Engineer", contributions: 200, isActive: false },
];

const UserCard = ({ user, onClick }) => (
  <Card className="w-full bg-gray-800 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardBody className="flex items-center space-x-4">
      <Avatar src={user.avatar} alt={user.name} size="lg" />
      <div className="flex-grow">
        <Typography variant="h6" color="white">
          {user.name}
        </Typography>
        <Typography color="gray" className="font-medium">
          {user.role}
        </Typography>
      </div>
      <div className="text-right">
        <Typography color="purple" className="font-medium">
          {user.contributions} contributions
        </Typography>
        <Typography color={user.isActive ? "green" : "red"} className="text-sm">
          {user.isActive ? "Active" : "Inactive"}
        </Typography>
      </div>
    </CardBody>
  </Card>
);

export default function SearchProfile() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  const handleSearch = () => {
    const filtered = usersData.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Card className="w-full max-w-4xl mx-auto bg-gray-900 text-white shadow-xl p-6">
        <Typography variant="h4" color="white" className="mb-6">
          Search Profiles
        </Typography>
        <div className="flex gap-4 mb-8">
          <Input
            type="text"
            placeholder="Search by name or job role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Button color="purple" className="flex items-center gap-2" onClick={handleSearch}>
            <MagnifyingGlassIcon className="h-5 w-5" /> Search
          </Button>
        </div>
        <div className="space-y-4">
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} onClick={() => {/* Navigate to profile */}} />
          ))}
        </div>
      </Card>
    </div>
  );
}

