import { useEffect } from "react";
import { Card } from "../components/Cards/Card";
// import { data } from "../components/DataBase/Data";
import { personas } from "../components/DataBase/Personas";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import "../styles/Desktop/Home.css";
import "../styles/Mobile/Home.css";

export const Home = () => {
  useEffect(() => {
    document.title = "PayPal - Home";
  }, []);

  return (
    <>
      <div className="home">
        <div className="grid">
          <div className="direction_home">
            <div style={{ position: "fixed" }}>
              <NavbarLeft />
            </div>
            <div className="home_container" style={{ marginLeft: 230 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div>
                  <div style={{ display: "flex" }}>
                    <Card
                      title={personas.length - 1}
                      name="Frecuentes"
                      color="rgb(202, 0, 158)"
                      url="/Icons/Frecuentes.svg"
                      alt="Frecuentes"
                    />
                    <Card
                      title={`${localStorage.getItem("Venta")}Bs`}
                      name="Ultima Tasa"
                      color="#00c97c"
                      url="/Icons/Tasa.svg"
                      alt="Ultima Tasa"
                    />
                    <Card
                      title={`${localStorage.getItem("Porcentaje")}%`}
                      name="Ultimo Porcentaje"
                      color="#c98300"
                      url="/Icons/Porciento.svg"
                      alt="Ultimo Porcentaje"
                    />
                    <Card
                      title={`${localStorage.getItem("date")}`}
                      name="Ultima actualización"
                      color="#ab0000"
                      url="/Historial/Job.svg"
                      alt="Ultimo actualización"
                    />
                  </div>
                </div>
                {/* <div>
                  <img
                    src="/Historial/Owner.jpg"
                    alt="Logo"
                    style={{ height: 280 }}
                    className="home_img"
                  />
                </div> */}
                {/* <p className="home_owner_p">Payments by Marcelo Hernandez</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
