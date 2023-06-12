import "../../styles/Desktop/Home.css";

export const Card = (props) => {
  return (
    <>
      <div className="card" style={{ background: props.color }}>
        <p className="card_title">{props.title}</p>
        <p>{props.name}</p>
        <img src={props.url} alt={props.alt} />
      </div>
    </>
  );
};
