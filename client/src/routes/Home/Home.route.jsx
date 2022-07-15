import { useEffect, useState } from "react";
import axios from "axios";
import DetailsCard from "../../components/DetailsCard/DetailsCard.component";
import "./styles.scss";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    axios
      .get("/api/workouts")
      .then((response) => {
        setWorkouts(response.data.allWorkouts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home">
      <div className="workout">
        {workouts &&
          workouts.map((workout) => (
            <DetailsCard key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};
export default Home;
