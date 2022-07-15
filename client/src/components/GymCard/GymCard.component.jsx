import "./styles.scss";

const GymCard = ({ gym }) => {
  return (
    <div className="gym-card">
      <h4>{gym.gymName}</h4>
      <p>
        <strong>City: </strong> {gym.gymCity}
      </p>
      <p>
        <strong>Contact: </strong>
        {gym.gymContact}
      </p>
    </div>
  );
};

export default GymCard;
