import { useNavigate } from "react-router-dom";
import "../../styles/Desktop/Home.css";
import { Icon } from "./Icon";

export const NavbarLeft = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="navbarleft_container">
          <div>
            <div className="navbarleft_navbar">
              <img src="/Icons/Logo.svg" alt="Logo" style={{ height: 50 }} />
            </div>
            <div className="navbar_left_home" onClick={() => navigate("/")}>
              <img src="/Icons/Home.svg" alt="Home" />
              <p>Home</p>
            </div>
            <div>
              <p className="navbar_left_p_color">PAYPAL</p>
            </div>
            <Icon
              url="/Icons/Calculadora.svg"
              alt="Calculadora"
              name="Compra"
              height={20}
              navigate="/calculadora"
            />
            <Icon
              url="/Icons/Percentage.svg"
              alt="Percentaje"
              name="Percentaje"
              height={20}
              navigate="/porcentaje"
            />
            <div>
              <p className="navbar_left_p_color">CONTACTOS</p>
            </div>
            <Icon
              url="/Icons/Frecuentes.svg"
              alt="Frecuentes"
              name="Frecuentes"
              height={20}
              navigate="/frecuentes"
            />
            <Icon
              url="/Icons/Add.svg"
              alt="agregar"
              name="Agregar"
              height={20}
              navigate="/agregar"
            />
          </div>
        </div>
      </div>
    </>
  );
};
