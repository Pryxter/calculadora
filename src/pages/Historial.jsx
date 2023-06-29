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
                        name="Ruth"
                        norder="RT7557"
                        date="Jun 28, 6:26 P.M"
                        deadline="Jun 29, 6:26 P.M"
                        payment="Binance"
                        amount="1,43"
                        selector={3}
                        selectorPayments={1}
                      />
                    </div>
                    <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 28, 6:26 P.M"
                        deadline="Jun 29, 6:26 P.M"
                        payment="Binance"
                        amount="1,43"
                        selector={3}
                        selectorPayments={1}
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
