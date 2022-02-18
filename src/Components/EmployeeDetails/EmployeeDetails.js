
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EmployeeDetails.css";

const EmployeeDetails = (props) => {
  const { name, mobile, mail,company} = props.data;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="employee-info">
      <div className="employee-name">
        <h3>{name}</h3>
      </div>
      <Button variant="primary"  onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Name:{name}</li>
            <li>Number:{mobile}</li>
            <li>Email-Id:{mail}</li>
            <li>company:{company}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  
  );
};
export default EmployeeDetails;