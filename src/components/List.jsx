import { useNavigate } from "react-router-dom";
import "../styles/Desktop/Historial.css";

export const List = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <li className="list_history">
          <ul onClick={() => navigate("/historial")}>1</ul>
          <ul
            onClick={() => navigate("/historial2")}
            style={{ marginLeft: 15 }}
          >
            2
          </ul>
          <ul
            onClick={() => navigate("/historial3")}
            style={{ marginLeft: 15 }}
          >
            3
          </ul>
          <ul
            onClick={() => navigate("/historial4")}
            style={{ marginLeft: 15 }}
          >
            4
          </ul>
          <ul
            onClick={() => navigate("/historial5")}
            style={{ marginLeft: 15 }}
          >
            5
          </ul>
        </li>
      </div>
    </>
  );
};
