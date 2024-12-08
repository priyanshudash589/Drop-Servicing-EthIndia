import React from "react";
import { Routes, Route } from "react-router-dom";
import ComplexNavbar from "./components/Navbar";
import Marketplace from "./pages/Market";
import Profile from "./pages/Profile";
import ProfileForm from "./pages/Profile-form";
import SearchProfile from "./pages/SearchProfile";
import Signup from "./pages/Signup";
import SplitLogin from "./pages/SplitLogin";
import ClientMarket from "./pages/clientmarket";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import LoginForm from "./pages/Clientlogin";
import Clientlogin from "./pages/Clientlogin";
import CreateOffer from "./pages/Createoffer";
import JobDetails from "./pages/Jobdetails";
import ResponseList from "./pages/ResponseList";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
      <div className="bg-black w-screen h-screen">
        <ComplexNavbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/sp" element={<SplitLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-profile" element={<SearchProfile />} />
          <Route path="/client-market" element={<ClientMarket />} />
          <Route path="/client-login" element={<Clientlogin/>} />
          <Route path="/create-offer" element={<CreateOffer/>} />
          <Route path="/Job-details" element={<JobDetails/>} />
          <Route path="/ResponseList" element={<ResponseList/>} />
          
        </Routes>
      </div>
  );
}

export default App;
