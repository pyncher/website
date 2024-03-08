import "./GigCard.css";

const GigCard = (props) => {
  return (
    <div className="gigCardContainer">
      <h2 className="cardText">{props.name}</h2>
      <p className="cardText">{props.date}</p>
      <p>
        <a
          className="ticketLink"
          href={props.ticketLink}
          target="_blank"
          rel="noreferrer"
        >
          Buy Tickets Here
        </a>
      </p>
    </div>
  );
};

export default GigCard;
