import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};
export default Home;
