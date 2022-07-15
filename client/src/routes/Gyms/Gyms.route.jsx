import axios from "axios";
import { useEffect, useState } from "react";

const Gyms = () => {
  const [gyms, setGyms] = useState(null);
  useEffect(() => {
    axios
      .get("/api/gyms")
      .then((response) => {
        setGyms(response.data.allGyms);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>{gyms && gyms.map((gym) => <p key={gym._id}>{gym.gymName}</p>)}</div>
  );
};

export default Gyms;
