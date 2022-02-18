import EmployeeDetails from "./EmployeeDetails";
import "./Employee.css";
import data from "../data.json";

const Employee = () => {
  return (
    <div className="employee">
      {data.map((info) => (
        <EmployeeDetails
          data={info}
        />
      ))}
    </div>
  );
};
export default Employee;
