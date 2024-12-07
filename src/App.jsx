import { ComplexNavbar } from "./components/Navbar"
import Marketplace from "./pages/Market"
import Profile from "./pages/Profile"
import ProfileForm from "./pages/Profile-form"
import SearchProfile from "./pages/SearchProfile"
import Signup from "./pages/Singup"
import SplitLogin from "./pages/SplitLogin"


function App() {
  

  return (
    <>
    <div className="bg-black w-screen h-screen">

      <ComplexNavbar />
      <SplitLogin />
      <Signup />
      <ProfileForm />
      <Marketplace />
      <Profile />
      <SearchProfile /> 

    </div>

    </>
  )
}

export default App
