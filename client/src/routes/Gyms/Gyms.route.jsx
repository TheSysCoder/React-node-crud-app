import axios from "axios";
import { useEffect, useState } from "react";
import GymCard from "../../components/GymCard/GymCard.component";

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
    <div>{gyms && gyms.map((gym) => <GymCard key={gym._id} gym={gym} />)}</div>
  );
};

export default Gyms;
