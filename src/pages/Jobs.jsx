import { useEffect } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import { HistorialCard } from "../components/Cards/HistorialCard";
import "../styles/Desktop/Historial.css";

export const Jobs = () => {
  useEffect(() => {
    document.title = "WoW - Jobs";
  }, []);
  return (
    <>
      <div className="jobs">
        <div className="grid">
          <div className="direction_home">
            <div style={{ position: "fixed" }}>
              <NavbarLeft />
            </div>
            <div>
              <div className="job_container">
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginLeft: 235 }}>
                    <div style={{ marginTop: 30 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="73,96"
                        status="Pending"
                        selector={2}
                      />
                    </div>
                    <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="73,96"
                        status="Pending"
                      />
                    </div>
                    <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="73,96"
                        status="Pending"
                      />
                    </div>
                    <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="73,96"
                        status="Pending"
                      />
                    </div>
                    <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="73,96"
                        status="Pending"
                      />
                    </div>
                    <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="73,96"
                        status="Pending"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
