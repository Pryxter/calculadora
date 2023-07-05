import { useEffect, useState } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { Loader } from "../components/Loader/Loader";

export const Agregar = () => {
  const [order, setOrder] = useState(0);
  const [valor, setValor] = useState(0);
  const [cliente, setCliente] = useState("");
  const [mate, setMate] = useState("");
  const [advertising, setAdvertising] = useState("");
  const [nivel, setNivel] = useState("");
  const [game, setGame] = useState(0);
  const [status, setStatus] = useState(0);
  const [msg, setMsg] = useState("");

  const imgPath = ["Money.svg", "WoW_Logo.svg", "Diablo_Logo.svg"];

  const jobCollection = collection(db, "db_1");

  const time = Date.now();
  const now = new Date(time);

  const msgBox = () => {
    setMsg("¡Usuario Registrado Correctamente!💵");

    setInterval(() => {
      setMsg("");
    }, 2000);
  };

  const addClient = async (e) => {
    e.preventDefault();

    try {
      await addDoc(jobCollection, {
        date: String(now),
        order: order,
        valor: Number(valor),
        cliente: cliente,
        mate: mate,
        advertising: advertising,
        nivel: nivel,
        status: Number(2),
        paymentStatus: Number(0),
        game: Number(game),
      });

      setStatus(1);

      setInterval(() => {
        setStatus(0);
        msgBox();
      }, 2000);

      setOrder("");
      setValor(0);
      setCliente("");
      setMate("");
      setAdvertising("");
      setNivel("");
    } catch (error) {}
  };

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
              <div className="agregar_container" style={{ marginLeft: 210 }}>
                <form className="form_agregar" onSubmit={addClient}>
                  {/* <form className="form_agregar" onSubmit={addClient}> */}
                  <div>
                    <h1 style={{ marginLeft: 32, padding: "16px 0" }}>
                      Agregar nuevo cliente
                    </h1>
                  </div>
                  <div>
                    <div style={{ display: "flex" }}>
                      <div style={{ flexDirection: "column" }}>
                        <div>
                          <i className="login_icon_agregar">
                            <img src="/Icons/UserIcon.svg" alt="User" />
                          </i>
                          <input
                            type="text"
                            placeholder="N° Order"
                            className="input_agregar"
                            onChange={(e) => setOrder(e.target.value)}
                          />
                        </div>
                        <div>
                          <i className="login_icon_agregar">
                            <img src="/Icons/UserIcon.svg" alt="User" />
                          </i>
                          <input
                            type="number"
                            step="any"
                            placeholder="Valor"
                            className="input_agregar"
                            onChange={(e) => setValor(e.target.value)}
                          />
                        </div>
                        <div>
                          <i className="login_icon_agregar">
                            <img src="/Icons/UserIcon.svg" alt="User" />
                          </i>
                          <input
                            type="text"
                            placeholder="Nombre del cliente"
                            className="input_agregar"
                            onChange={(e) => setCliente(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <i className="login_icon_agregar">
                                <img src="/Icons/UserIcon.svg" alt="User" />
                              </i>
                              <select
                                className="select_agregar_ac"
                                onChange={(e) => setMate(e.target.value)}
                              >
                                <option value="None">Acompañante</option>
                                <option value="Miguel">Miguel</option>
                                <option value="David">David</option>
                                <option value="Perez">Perez</option>
                                <option value="Marcelo">Marcelo</option>
                                <option value="Ruth">Ruth</option>
                              </select>
                            </div>
                          </div>

                          <div style={{ flexDirection: "column" }}>
                            <div>
                              <i className="login_icon_agregar">
                                <img src="/Icons/UserIcon.svg" alt="User" />
                              </i>
                              <select
                                className="select_agregar"
                                onChange={(e) => setAdvertising(e.target.value)}
                              >
                                <option value="None">Advertising</option>
                                <option value="Miguel">Miguel</option>
                                <option value="David">David</option>
                                <option value="Perez">Perez</option>
                                <option value="Marcelo">Marcelo</option>
                                <option value="Ruth">Ruth</option>
                              </select>
                            </div>
                            <div>
                              <i className="login_icon_agregar">
                                <img src="/Icons/UserIcon.svg" alt="User" />
                              </i>
                              <input
                                type="text"
                                placeholder="Nivel a Nivel"
                                className="input_agregar"
                                onChange={(e) => setNivel(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ flexDirection: "column" }}>
                        <div>
                          <i className="login_icon_agregar">
                            <img src="/Icons/UserIcon.svg" alt="User" />
                          </i>
                          <select
                            className="select_agregar"
                            onChange={(e) => setGame(e.target.value)}
                          >
                            <option value={0}>Juego</option>
                            <option value={1}>WoW</option>
                            <option value={2}>Diablo IV</option>
                          </select>
                        </div>
                        <div
                          style={{ display: `${game === 0 ? "none" : "flex"}` }}
                        >
                          <img
                            src={`/Historial/${imgPath[game]}`}
                            alt="Icon"
                            className="img_logo_selector"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      {status === 0 ? (
                        <Loader selector={0} />
                      ) : (
                        <Loader selector={1} />
                      )}
                      {msg === "" ? "" : <p className="user_success">{msg}</p>}
                      <button
                        className={`input_agregar ${
                          status === 0
                            ? "btn_agregar_registrar"
                            : "btn_agregar_enviando"
                        }`}
                      >
                        {status === 0 ? "Registrar" : "Enviando"}
                      </button>
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
