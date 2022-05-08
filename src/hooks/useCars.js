import { useEffect, useState } from "react";

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://evening-falls-80277.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return [cars];
};
export default useCars;
