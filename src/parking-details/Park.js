import EmpParking from './parking_details';
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Park() {

  const parkings = [
    { emp_id: 11, emp_name: 'vineela', vehicle_number: 'TS-02-D-0005', parking_slot: '1D' },
    { emp_id: 12, emp_name: 'MURALI', vehicle_number: 'TS-01-D-0009', parking_slot: '2E' },
    { emp_id: 13, emp_name: 'SANDHYA', vehicle_number: 'TS-02-D-0007', parking_slot: '1F' },
    { emp_id: 14, emp_name: 'CHETAN', vehicle_number: 'TS-02-D-1111', parking_slot: '2R' },
    { emp_id: 15, emp_name: 'CHIRANJEEVI', vehicle_number: 'TS-05-D-9999', parking_slot: '1E' },
    { emp_id: 16, emp_name: 'NIKHIL', vehicle_number: 'TS-11-D-5555', parking_slot: '1G' },
    { emp_id: 17, emp_name: 'MURALI-KRISHNA', vehicle_number: 'TS-02-D-8888', parking_slot: '4T' },
    { emp_id: 18, emp_name: 'SNEHAL', vehicle_number: 'MH-01-D-1234', parking_slot: '5S' }


];

  return (      //an html function component

    <div className='parkng'>
          <Link to ="/home"><BsFillArrowLeftSquareFill className='back-home-icon'>Home</BsFillArrowLeftSquareFill></Link>
    <div className='headng'><center><h2>EMPLOYEE'S PARKING DETAILS</h2></center>
      <EmpParking        // returns js code into html
      emp_id={parkings[0].emp_id}
      emp_name={parkings[0].emp_name}
      vehicle_number={parkings[0].vehicle_number}
      parking_slot={parkings[0].parking_slot}                      //used html<> tag so that js can be converted into html.
      />     
<EmpParking 
      emp_id={parkings[1].emp_id}
      emp_name={parkings[1].emp_name}
      vehicle_number={parkings[1].vehicle_number}
      parking_slot={parkings[1].parking_slot}
      />

<EmpParking 
      emp_id={parkings[2].emp_id}
      emp_name={parkings[2].emp_name}
      vehicle_number={parkings[2].vehicle_number}
      parking_slot={parkings[2].parking_slot}
      />

<EmpParking 
      emp_id={parkings[3].emp_id}
      emp_name={parkings[3].emp_name}
      vehicle_number={parkings[3].vehicle_number}
      parking_slot={parkings[3].parking_slot}
      />

<EmpParking 
      emp_id={parkings[4].emp_id}
      emp_name={parkings[4].emp_name}
      vehicle_number={parkings[4].vehicle_number}
      parking_slot={parkings[4].parking_slot}
      />

<EmpParking 
      emp_id={parkings[5].emp_id}
      emp_name={parkings[5].emp_name}
      vehicle_number={parkings[5].vehicle_number}
      parking_slot={parkings[5].parking_slot}
      />

<EmpParking 
      emp_id={parkings[6].emp_id}
      emp_name={parkings[6].emp_name}
      vehicle_number={parkings[6].vehicle_number}
      parking_slot={parkings[6].parking_slot}
      />

<EmpParking 
      emp_id={parkings[7].emp_id}
      emp_name={parkings[7].emp_name}
      vehicle_number={parkings[7].vehicle_number}
      parking_slot={parkings[7].parking_slot}
      />



      </div>
      </div>
  );
}

export default Park;
