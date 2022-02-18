import App from "../App";
import './parking_details.css';
import { Link } from "react-router-dom";
import { Button } from "bootstrap";


function EmpParking(props) {

    
    return (
        
        <div className="emps">
            
            <div>{props.emp_id}</div>
            <div className="emps_parks">
                <h2>&nbsp;Name:&nbsp;&nbsp;{props.emp_name}  <center>Vehicle_NO:&nbsp;&nbsp;{props.vehicle_number}</center></h2>
                <div className="emps_parks_slot">parking-slot:{props.parking_slot}</div>
            </div>
        </div>
    )
}

export default EmpParking;