import { useEffect, useState } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import { personas } from "../components/DataBase/Personas";

export const Calculadora = () => {
  const [venta, setVenta] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [paypal, setPaypal] = useState(0);
  const [data, setData] = useState(0);

  const porcentajeVenta = (venta * porcentaje) / 100;
  const precioCompra = venta - porcentajeVenta;
  const montoPago = paypal * precioCompra;
  const ganancia = (paypal * porcentaje) / 100;

  // const personas = [
  //   {
  //     id: 0,
  //     nombre: "",
  //     telefono: "",
  //     banco: "",
  //     cedula: "",
  //   },
  //   {
  //     id: 1,
  //     nombre: "Ysbelis",
  //     telefono: "04121714276",
  //     banco: "Mercantil",
  //     cedula: "19.120.145",
  //   },
  //   {
  //     id: 2,
  //     nombre: "Valerio",
  //     telefono: "04124329182",
  //     banco: "Banesco",
  //     cedula: "22.858.282",
  //   },
  //   {
  //     id: 3,
  //     nombre: "José",
  //     telefono: "04120415439",
  //     banco: "Venezuela",
  //     cedula: "27.985.144",
  //   },
  // ];

  useEffect(() => {
    document.title = "PayPal - Compra";
  }, []);

  return (
    <>
      <div className="calculadora">
        <div className="grid">
          <div className="calculadora_grid">
            <div className="direction_home">
              <NavbarLeft />
              <div className="calculator_container">
                <div className="form_container">
                  <form>
                    <div className="inputs_container">
                      <div className="inputs_positions">
                        <div>
                          <i className="login_icon_user">
                            <img src="/Icons/Money.svg" alt="money" />
                          </i>
                          <input
                            type="number"
                            placeholder="Tasa de venta"
                            className="input_style"
                            onChange={(e) => setVenta(e.target.value)}
                          />
                        </div>
                        <div>
                          <i className="login_icon_user">
                            <img src="/Icons/Porcentaje.svg" alt="money" />
                          </i>
                          <input
                            type="number"
                            placeholder="% de compra"
                            className="input_style"
                            onChange={(e) => setPorcentaje(e.target.value)}
                          />
                        </div>
                        <div>
                          <i className="login_icon_user">
                            <img
                              src="/Icons/Pp.svg"
                              alt="money"
                              style={{ height: 20, marginTop: 32 }}
                            />
                          </i>
                          <input
                            type="number"
                            placeholder="Monto PayPal"
                            className="input_style"
                            onChange={(e) => setPaypal(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="details_form">
                    <h2 className="details_resumen">Resumen</h2>
                    <h3 className="details_compra">
                      Tasa de Compra:{" "}
                      <span className="details_span">
                        {precioCompra.toFixed(2)}Bs
                      </span>
                    </h3>
                    <h3 className="details_pagar">
                      Monto a Pagar:{" "}
                      <span className="details_span">
                        {montoPago.toFixed(2)}Bs
                      </span>
                    </h3>
                    <h3 className="details_pagar">
                      Ganancia:{" "}
                      <span className="details_span">
                        {ganancia.toFixed(2)}$
                      </span>
                    </h3>
                  </div>
                  <div className="paypal">
                    <h2 className="details_resumen">PayPal</h2>
                    <h3
                      className="details_compra"
                      onClick={() =>
                        navigator.clipboard.writeText("Hardcorebassh@gmail.com")
                      }
                      style={{ cursor: "pointer" }}
                    >
                      Hardcorebassh@gmail.com
                    </h3>
                  </div>
                </div>
                <div className="selec_container">
                  <p
                    style={{
                      color: "white",
                      marginLeft: 32,
                      padding: "10px 0",
                    }}
                  >
                    Contactos Frecuentes
                  </p>
                  <select
                    onChange={(e) => setData(e.target.value)}
                    className="selector_data"
                  >
                    {personas.map((persona) => (
                      <>
                        <option key={persona.id} value={persona.id}>
                          {persona.nombre}
                        </option>
                      </>
                    ))}
                  </select>
                  <div
                    style={{ display: "flex", marginTop: 18, marginLeft: 20 }}
                  >
                    <p className="data_select">
                      Nombre: {personas[data].nombre}
                    </p>
                    <p className="data_select">
                      Telefono: {personas[data].telefono}
                    </p>
                    <p className="data_select">Banco: {personas[data].banco}</p>
                    <p className="data_select">
                      Cedula: {personas[data].cedula}
                    </p>
                    <button
                      onClick={() => setData(0)}
                      className="pagado_select"
                    >
                      Pagado
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
