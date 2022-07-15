import "./styles.scss";
const DetailsCard = ({ workout }) => {
  return (
    <div className="details-card">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (KG): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default DetailsCard;
