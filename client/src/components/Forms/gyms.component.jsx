import axios from "axios";
import { useState } from "react";

const GymForm = () => {
  const [gymName, setGymName] = useState("");
  const [gynCity, setGymCity] = useState("");
  const [gymContact, setGymContact] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    console.log(gymName, gynCity);
    e.preventDefault();
    await axios
      .post("api/gyms", {
        gymName: gymName,
        gymCity: gynCity,
        gymContact: gymContact,
      })
      .then((response) => {
        if (response) {
          console.log(response);
          setGymName("");
          setGymCity("");
          setGymContact("");
          console.log("Gym added");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };
  console.log(error);

  return (
    <div className="gymForm">
      <form>
        <h3>Add new gym</h3>
        <label>Gym Name</label>
        <input
          type="text"
          onChange={(e) => setGymName(e.target.value)}
          value={gymName}
        />
        <label htmlFor="">Gym City</label>
        <input
          type="text"
          onChange={(e) => setGymCity(e.target.value)}
          value={gynCity}
        />
        <label htmlFor="">Gym Contact</label>
        <input
          type="number"
          onChange={(e) => setGymContact(e.target.value)}
          value={gymContact}
        />
        <button onClick={submitHandler}>Add Gym</button>
        <div>{error && <div className="error">{error}</div>}</div>
      </form>
    </div>
  );
};

export default GymForm;
