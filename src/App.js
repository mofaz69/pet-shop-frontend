import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Search from "./Search/Search";
import Pet from "./Pet/Pet";
import Profile from "./Profile/Profile";
import MyPet from "./MyPet/MyPet";
import NavBar from "./NavBar/NavBar";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/pet/")
      .then((res) => res.json())
      .then((pets) => {
        console.log(pets);
      });
  }, []);

  return (
    <div>
      <NavBar path="/" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/pet" element={<Pet />}></Route>
        <Route path="/mypet" element={<MyPet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
