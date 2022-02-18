import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Cafteria from './Components/CafteriaComponent/components/Cafteria';
import { Button} from 'react-bootstrap';
import CafeButton from './Components/CafteriaComponent/components/CafeButton';
import Login from './Components/LoginComponent/Login';

const Home = () => {
  return (
  <div>

           <Routes>
           <Route path="/" element={<CafeButton />} />

           <Route path="/cafteria" element={<Cafteria />} />
           <Route path="/login" element={<Login />} />

</Routes>
  </div>
        
  )
}

export default Login(Home);