import { useEffect } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";

export const Agregar = () => {
  useEffect(() => {
    document.title = "WoW - New";
  }, []);
  return (
    <>
      <div className="agregar">
        <div className="grid">
          <div className="direction_home">
            <div style={{ position: "fixed" }}>
              <NavbarLeft />
            </div>
            <div>
              <div className="agregar_container" style={{ marginLeft: 230 }}>
                <form className="form_agregar">
                  {/* <div>
                    <h1 style={{ marginLeft: 32, padding: "16px 0" }}>
                      Agregar nuevo cliente
                    </h1>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <i className="login_icon_agregar">
                        <img src="/Icons/UserIcon.svg" alt="User" />
                      </i>
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="input_agregar"
                      />
                    </div>
                    <div>
                      <i className="login_icon_agregar">
                        <img src="/Icons/UserIcon.svg" alt="User" />
                      </i>
                      <input
                        type="text"
                        placeholder="Banco"
                        className="input_agregar"
                      />
                    </div>
                    <div>
                      <i className="login_icon_agregar">
                        <img src="/Icons/UserIcon.svg" alt="User" />
                      </i>
                      <input
                        type="text"
                        placeholder="Telefono"
                        className="input_agregar"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <i className="login_icon_agregar">
                        <img src="/Icons/UserIcon.svg" alt="User" />
                      </i>
                      <input
                        type="text"
                        placeholder="Cedula"
                        className="input_agregar"
                      />
                    </div>
                    <div>
                      <i className="login_icon_agregar">
                        <img src="/Icons/UserIcon.svg" alt="User" />
                      </i>
                      <input
                        type="text"
                        placeholder="Red Social"
                        className="input_agregar"
                      />
                    </div>
                    <div>
                      <button className="input_agregar btn_agregar">
                        Registrar
                      </button>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
