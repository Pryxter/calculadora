import { useState } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import { HistorialCard } from "../components/Cards/HistorialCard";

export const Historial = () => {
  useState(() => {
    document.title = "WoW - Historial";
  }, []);
  return (
    <>
      <div className="porcentaje">
        <div className="grid">
          <div className="direction_home">
            <NavbarLeft />
            <div>
              <div className="historial_container">
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginTop: 30 }}>
                    <HistorialCard
                      name="David"
                      norder="RT7557"
                      date="Jun 27, 1:41 A.M"
                      deadline="Jun 30, 1:41 A.M"
                      payment="Binance"
                      amount="25,01"
                      status="Pending"
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
                      name="Ruth"
                      norder="SK7554"
                      date="Jun 27, 1:41 A.M"
                      deadline="Jun 30, 1:41 A.M"
                      payment="Binance"
                      amount="62,46"
                      status="Pending"
                    />
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
