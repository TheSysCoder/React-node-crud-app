import axios from "axios";
import { useState } from "react";
import "./styles.scss";

const Forms = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const createWorkout = async (e) => {
    e.preventDefault();
    await axios
      .post("api/workouts", {
        title: title,
        load: load,
        reps: reps,
      })
      .then((response) => {
        if (response) {
          setTitle("");
          setLoad("");
          setReps("");
          console.log("workout added!!");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <form className="create">
        <h3>Add new workout</h3>
        <label>Excersize Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Loads (KG)</label>
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
        <label>Reps</label>
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <button onClick={createWorkout}>Add Workout</button>
        <div>{error && <div className="error">{error}</div>}</div>
      </form>
    </div>
  );
};

export default Forms;
