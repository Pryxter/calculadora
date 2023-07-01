import { useEffect, useState } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";

export const Agregar = () => {
  const [order, setOrder] = useState(0);
  const [valor, setValor] = useState(0);
  const [cliente, setCliente] = useState("");
  const [mate, setMate] = useState("");
  const [advertising, setAdvertising] = useState("");
  const [nivel, setNivel] = useState("");

  const jobCollection = collection(db, "db_1");

  const time = Date.now();
  const now = new Date(time);

  const addClient = async (e) => {
    e.preventDefault();

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
      game: Number(1),
    });

    alert("¡Cliente Registrado!");

    setOrder("");
    setValor(0);
    setCliente("");
    setMate("");
    setAdvertising("");
    setNivel("");
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
                  <div>
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
                  <div style={{ display: "flex" }}>
                    <div>
                      <i className="login_icon_agregar">
                        <img src="/Icons/UserIcon.svg" alt="User" />
                      </i>
                      <input
                        type="text"
                        placeholder="Acompañante"
                        className="input_agregar"
                        onChange={(e) => setMate(e.target.value)}
                      />
                    </div>
                    <div>
                      <i className="login_icon_agregar">
                        <img src="/Icons/UserIcon.svg" alt="User" />
                      </i>
                      <input
                        type="text"
                        placeholder="Advertising"
                        className="input_agregar"
                        onChange={(e) => setAdvertising(e.target.value)}
                      />
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
                    <div>
                      <button className="input_agregar btn_agregar">
                        Registrar
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
