import React from 'react'
import { Link } from 'react-router-dom'

const CafeButton = () => {
  return (
    <React.Fragment>
    <h1 className="text-center text-danger text-capitalize my-" style={{'margin-top':'150px'}}>
        { " "} <b>Welcome to Arshaa </b>{" "} </h1><br/><br/>
    <div class="container">
<div class="row">
<div class="col"> <div class="card">
<img src="./images/Employee.jpg" class="card-img-top" style={{'height':'310px'}} alt="..."/>
<div class="card-body">
<h5 class="card-title"><b>Employee List</b></h5>
<a href="#" class="btn btn-primary">Employee Details</a>
</div>
</div></div>
<div class="col-sm"><div class="card">
<img src="./images/Cafeteria.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title"><b>Cafteria</b></h5>
<Link to='/cafteria'><a href="#" class="btn btn-primary">Cafteria Details</a></Link>
</div>
</div> </div>
<div class="col"> <div class="card">
<img src="./images/Parking.jpg" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title"><b>Parking Slot</b></h5>
<a href="#" class="btn btn-primary">Parking Details</a>
</div>
</div></div>
</div>
</div>

</React.Fragment>
  )
}


export default CafeButton