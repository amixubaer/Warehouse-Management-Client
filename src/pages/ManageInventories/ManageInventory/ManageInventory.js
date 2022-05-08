import axios from "axios";
import React from "react";
import { Container, Row } from "react-bootstrap";

const ManageInventory = ({ car }) => {
  const handleDelete = (id) => {
    const url = `http://localhost:5000/${id}`;
    axios.post(url).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-8 mx-auto">
            <div className="d-flex mb-3 border justify-content-center align-items-center p-2">
              <img src={car.img} alt="" width="100" height="100" />
              <div className="w-100 ms-3">
                <h3>{car.name}</h3>
                <p className="p-0 m-0">Price: ${car.price}</p>
                <p>Quantity: {car.quantity}</p>
              </div>
              <div>
              <button
                  onClick={() => handleDelete(car._id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ManageInventory;