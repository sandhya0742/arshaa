import React from "react";
import {
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Cafteria from "./Components/CafteriaComponent/components/Cafteria";
// import { Button} from 'react-bootstrap';
import MainHome from "./Components/CafteriaComponent/components/MainHome";
import Login from "./Components/LoginComponent/Login";
import Park from "./parking-details/Park";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/cafteria" element={<Cafteria />} />
        <Route path="/mainhome" element={<MainHome />} />
        <Route path="/park" element={<Park/>}/>
      </Routes>
    </div>
  );
};

export default Home;
