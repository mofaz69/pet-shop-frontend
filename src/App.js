import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./pages/Search/Search";
import Pet from "./pages/Pet/Pet";
import Profile from "./Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import { MyPets } from "./pages/MyPets/MyPets";

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
        {/* <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route> */}
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/my-pets" element={<MyPets />}></Route>
        <Route path="/mypet/:petId" element={<Pet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
