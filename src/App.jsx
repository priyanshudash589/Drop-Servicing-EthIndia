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

function App() {
  return (
      <div className="bg-black w-screen h-screen">
        <ComplexNavbar />
        <Routes>
          <Route path="/" element={<SplitLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-profile" element={<SearchProfile />} />
          <Route path="/client-market" element={<ClientMarket />} />
        </Routes>
      </div>
  );
}

export default App;
