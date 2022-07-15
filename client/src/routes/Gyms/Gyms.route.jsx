import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card.component";
import "./styles.scss";
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
    <div className="gym">
      <div>
        {gyms &&
          gyms.map((gym) => (
            <div key={gym._id}>
              <Card>
                <h4>{gym.gymName}</h4>
                <p>
                  <strong>City: </strong>
                  {gym.gymCity}
                </p>
                <p>
                  <strong>Contact: </strong>
                  {gym.gymContact}
                </p>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gyms;
