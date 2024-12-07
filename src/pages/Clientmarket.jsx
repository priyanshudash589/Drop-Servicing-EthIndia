import React, { useState, useEffect, useRef } from 'react';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";


// Mock data for jobs and users (unchanged)
const jobsData = [
  { id: 1, name: "DeFi Project", company: "CryptoFin", wallet: "0x1234...5678", jobProfile: "Solidity Developer", price: "5 ETH", teamSize: 3 },
  { id: 2, name: "NFT Marketplace", company: "ArtChain", wallet: "0xabcd...efgh", jobProfile: "Frontend Developer", price: "3 ETH", teamSize: 2 },
  { id: 3, name: "DAO Governance", company: "DecentralGov", wallet: "0x9876...5432", jobProfile: "Smart Contract Auditor", price: "7 ETH", teamSize: 1 },
  // Add more mock data as needed
];

const usersData = [
  { id: 1, name: "Alice", earnedTokens: 120, contributionType: "Group" },
  { id: 2, name: "Bob", earnedTokens: 85, contributionType: "Individual" },
  { id: 3, name: "Charlie", earnedTokens: 200, contributionType: "Group" },
  { id: 4, name: "David", earnedTokens: 150, contributionType: "Individual" },
  { id: 5, name: "Eve", earnedTokens: 180, contributionType: "Group" },
  // Add more mock data as needed
];

const TABLE_HEAD = ["ID", "Name", "Company", "Wallet", "Job Profile", "Price", "Team Size", ""];

export default function ClientMarket() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const userListRef = useRef(null);

  useEffect(() => {
    const userList = userListRef.current;
    if (!userList) return;

    const scrollHeight = userList.scrollHeight;
    const clientHeight = userList.clientHeight;
    const maxScroll = scrollHeight - clientHeight;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition > maxScroll ? 0 : newPosition;
      });
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    if (userListRef.current) {
      userListRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white p-4 gap-4">
      {/* Job Listings Table */}
      <Card className="h-full w-full lg:w-3/4 bg-gray-900 text-white overflow-hidden">
        <CardHeader floated={false} shadow={false} className="rounded-none bg-gray-900">
          <div className="mb-4 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="white">
                Job Listings
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all available jobs
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" color="purple" size="sm">
                view all
              </Button>
              <Button className="bg-purple-500" size="sm">
                Add job
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-auto px-0 h-[calc(100vh-300px)]">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-gray-700 bg-gray-800 p-4">
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobsData.map(({ id, name, company, wallet, jobProfile, price, teamSize }, index) => {
                const isLast = index === jobsData.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-700";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography variant="small" color="white" className="font-normal">
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="white" className="font-normal">
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="white" className="font-normal">
                        {company}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="white" className="font-normal">
                        {wallet}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="white" className="font-normal">
                        {jobProfile}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="purple" className="font-medium">
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" color="white" className="font-normal">
                        {teamSize}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Apply for Job">
                        <IconButton variant="text" color="purple">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-gray-700 p-4">
          <Typography variant="small" color="gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="purple" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="purple" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* User Earnings Panel */}
      {/* <Card className="h-full w-full lg:w-1/4 bg-gray-900 text-white">
        <CardHeader floated={false} shadow={false} className="rounded-none bg-gray-900">
          <Typography variant="h6" color="white">
            Recent Earnings
          </Typography>
        </CardHeader>
        <CardBody className="h-[calc(100vh-200px)] overflow-hidden">
          <div 
            ref={userListRef}
            className="h-full overflow-hidden"
          >
            <ul className="divide-y divide-gray-700">
              {[...usersData, ...usersData].map((user, index) => (
                <li key={`${user.id}-${index}`} className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-400 truncate">
                        {user.contributionType}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-purple-400">
                      {user.earnedTokens} tokens
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card> */}
    </div>
  );
}

