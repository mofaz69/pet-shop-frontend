import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./pages/Search/Search";
import Pet from "./pages/Pet/Pet";
import Profile from "./Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import { AddEditPet } from "./Admin/AddEditPet/AddEditPet";
import { Dashboard } from "./Admin/Dashboard/Dashboard";
import { MyPets } from "./pages/MyPets/MyPets";
import Login from "./SignIn/SignIn";

function App() {
  return (
    <div>
      <NavBar path="/" />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/login"
          element={
            <div className="container" style={{ maxWidth: "500px" }}>
              <Login setShowLogin={() => {}} />
            </div>
          }
        ></Route>
        <Route path="/my-pets" element={<MyPets />}></Route>
        <Route path="/mypet/:petId" element={<Pet />}></Route>
        <Route path="/add-pet" element={<AddEditPet />}></Route>
        <Route path="/edit/:petId" element={<AddEditPet />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
