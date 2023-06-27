import { NavbarLeft } from "./NavbarLeft";
import "../../styles/Desktop/Home.css";
import { useState } from "react";
export const Porcentaje = () => {
  const [envian, setEnvia] = useState(0);

  const porcentaje = (envian * 5.4) / 100 + 0.3;
  const recibe = envian - porcentaje;

  useState(() => {
    document.title = "PayPal - Porcentaje";
  }, []);

  return (
    <>
      <div className="porcentaje">
        <div className="grid">
          <div className="direction_home">
            <NavbarLeft />
            <div>
              <div className="porcentaje_container">
                <form style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ marginTop: 200 }}>
                    <p>5.4% + 0.30$</p>
                  </div>
                  <div>
                    <i className="login_icon_user">
                      <img src="/Icons/Send.svg" alt="Send" />
                    </i>
                    <input
                      type="number"
                      placeholder="Si se envian"
                      className="input_style"
                      onChange={(e) => setEnvia(e.target.value)}
                    />
                  </div>

                  <div>
                    <p className="bg_porcentaje_text">
                      La Comisión es de:{" "}
                      <span className="details_span">
                        {porcentaje.toFixed(2)}{" "}
                      </span>
                      $
                    </p>
                  </div>
                  <div>
                    <p className="bg_porcentaje_text">
                      Se Reciben:{" "}
                      <span className="details_span">{recibe.toFixed(2)}</span>$
                    </p>
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
