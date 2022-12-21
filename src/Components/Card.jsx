import "./Card.css";

const Card = ({ name, image, chosen }) => {
  return (
    <div className="card">
      <img src={image} alt={name} onClick={chosen} />
    </div>
  );
};

export default Card;
