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
              name="Buy"
              height={20}
              navigate="/calculadora"
            />
            <Icon
              url="/Icons/Percentage.svg"
              alt="Percentaje"
              name="Percentage"
              height={20}
              navigate="/porcentaje"
            />
            {/* <div>
              <p className="navbar_left_p_color">CONTACTOS</p>
            </div>
            <Icon
              url="/Icons/Frecuentes.svg"
              alt="Frecuentes"
              name="Recent"
              height={20}
              navigate="/frecuentes"
            /> */}
            <div>
              <p className="navbar_left_p_color">WORLD OF WARCRAFT</p>
            </div>
            <Icon
              url="/Icons/WoW.svg"
              alt="historial"
              name="Payments"
              height={20}
              navigate="/historial"
            />
            <Icon
              url="/Historial/Job.svg"
              alt="Jobs"
              name="Jobs"
              height={20}
              navigate="/jobs"
            />
            <Icon
              url="/Icons/Add.svg"
              alt="agregar"
              name="New"
              height={20}
              navigate="/agregar"
            />
            <div>
              <p className="navbar_left_p_color">DIABLO IV</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
