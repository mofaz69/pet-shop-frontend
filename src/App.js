import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home";

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
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
