import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageInventory from "./ManageInventory/ManageInventory";

const ManageInventories = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://evening-falls-80277.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
        const url = `https://evening-falls-80277.herokuapp.com/carDelete/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           // console.log(data);
            const remaining = cars.filter(car => car._id !== id);
            setCars(remaining);
        })
    }
};
  return (
    <div>
      <h2 className="text-center my-5">Manage Your inventory</h2>
      <div className="d-flex flex-column">
        {cars.map((car) => (
         <ManageInventory key={car._id} car={car}>
         <button
           onClick={() => handleDelete(car._id)}
           className="btn btn-danger"
         >
           X
         </button>
       </ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default ManageInventories;