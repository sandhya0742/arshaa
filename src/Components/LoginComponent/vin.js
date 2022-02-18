import React from "react";


const App = () => {
    return <React.Fragment>
        <h1 className="text-center text-danger text-capitalize my-" style={{'marginTop':'150px'}}>
            { " "} welcome to arshaa {" "} </h1><br/><br/>
        <div class="container">
  <div class="row">
    <div class="col"> <div class="card" >
  <img src="./images/Employee.jpg" class="card-img-top" alt="Employee" style={{'height':'310px'}}/>
  <div class="card-body">
    <h5 class="card-title">Employee List</h5>
    <a href="#" class="btn btn-primary">Employee Details</a>
  </div>
</div></div>
    <div class="col"><div class="card">
  <img src="./images/Cafeteria.jpg" class="card-img-top" alt="Cafeteria"/>
  <div class="card-body">
    <h5 class="card-title">Cafteria List</h5>
   <a href="#" class="btn btn-primary">Cafteria Details</a>
  </div>
</div> </div>
    <div class="col"> <div class="card">
  <img src="./images/Parking.jpg" class="card-img-top" alt="Parking"/>
  <div class="card-body">
    <h5 class="card-title">Parking List</h5>
    <a href="#" class="btn btn-primary">Parking Details</a>
  </div>
</div></div>
  </div>
</div>
</React.Fragment>
}
    
export default App;
