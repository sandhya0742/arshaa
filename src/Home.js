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

const Home = () => {
  return (
  <div>

           <Routes>
           <Route path="/" element={<CafeButton />} />

<Route path="/cafteria" element={<Cafteria />} />

</Routes>
  </div>
        
  )
}

export default Home