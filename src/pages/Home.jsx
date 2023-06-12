import { Card } from "../components/Cards/Card";
import { data } from "../components/DataBase/Data";
import { personas } from "../components/DataBase/Personas";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import "../styles/Desktop/Home.css";
import "../styles/Mobile/Home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="grid">
          <div className="direction_home">
            <NavbarLeft />
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
                  title={data.ultimaTasa}
                  name="Ultima Tasa"
                  color="#00c97c"
                  url="/Icons/Tasa.svg"
                  alt="Ultima Tasa"
                />
                <Card
                  title={data.porcentaje}
                  name="Ultimo Porcentaje"
                  color="#c98300"
                  url="/Icons/Porciento.svg"
                  alt="Ultimo Porcentaje"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
