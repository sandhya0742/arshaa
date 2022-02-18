import Employee from './Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Data.css';
import { Link } from 'react-router-dom';


  const Data=()=>
  {
  const employee=[
  {
    
    name:'Vineela',
  },
  {
    
    name:'Snehal',
  },
  {
  
    name:'Murali',
  },
  {
    
    name:'Sandhya',
  },
  {
    
    name:'Chetan',
  },
  {
    
    name:'Chiranjeevi',
  },
  {
    
    name:'Nikhil',
  },
  {
    
    name:'Mohan Murali',
  },
];


  return (
    <body>
    <div>
      <h2 className='head'>Employee Details </h2>
      <Link to ="/cafe"><button className='home' >Back To Home</button></Link>
      

      
    <Employee items={employee} />
    
    </div>
    </body>
    
  );
}

export default Data;