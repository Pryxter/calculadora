import { useEffect } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import { HistorialCard } from "../components/Cards/HistorialCard";
// import { List } from "../components/List";

export const Historial = () => {
  useEffect(() => {
    document.title = "WoW - Payments";
  }, []);
  return (
    <>
      <div className="payments">
        <div className="grid">
          <div className="direction_home">
            <div style={{ position: "fixed" }}>
              <NavbarLeft />
            </div>
            <div>
              <div className="historial_container">
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginLeft: 235 }}>
                    <div style={{ marginTop: 30 }}>
                      <HistorialCard
                        name="David"
                        norder="RT7557"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="25,01"
                        status="Pending"
                        selector={0}
                      />
                    </div>
                    <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Ruth"
                        norder="SK7554"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="62,46"
                        status="Pending"
                        selector={0}
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
                        selector={0}
                      />
                    </div>
                    {/* <div style={{ marginTop: 13 }}>
                      <List />
                    </div> */}
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
