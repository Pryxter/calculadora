import "../../styles/Desktop/Home.css";
import { useNavigate } from "react-router-dom";

export const Icon = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`${props.navigate}`)}
        style={{
          display: "inline-flex",
          cursor: "pointer",
          width: "100%",
          padding: "12px 0",
          marginTop: 10,
        }}
        className="icon_hover"
      >
        <img
          src={`${props.url}`}
          alt={`${props.alt}`}
          style={{ height: props.height, marginLeft: 15 }}
        />
        <p style={{ marginLeft: 20 }} className="p_hover">
          {props.name}
        </p>
      </div>
    </>
  );
};
