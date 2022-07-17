import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";
import Card from "../../components/Card/Card.component";
import Forms from "../../components/Forms/Forms.component";

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
            <div key={workout._id}>
              <Card>
                <h4>{workout.title}</h4>
                <p>
                  <strong>Loads:</strong>
                  {workout.load}
                </p>
                <p>
                  <strong>Reps: </strong>
                  {workout.reps}
                </p>
              </Card>
            </div>
          ))}
      </div>
      <Forms />
    </div>
  );
};
export default Home;
