import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cafteria from './Components/CafteriaComponent/components/Cafteria';
import CafeButton from './Components/CafteriaComponent/components/CafeButton';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/LoginComponent/Login.jsx';

function App() {
  return (
    <div>
<Home/>
    </div>
  );
}

export default App;
