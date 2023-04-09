import { useState } from "react";
import { Footer } from "../components/Home/Footer";
import { Navbar } from "../components/Home/Navbar";
import "../styles/Desktop/Home.css";
import "../styles/Mobile/Home.css";

export const Home = () => {
  const [venta, setVenta] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [paypal, setPaypal] = useState(0);

  const porcentajeVenta = (venta * porcentaje) / 100;
  const precioCompra = venta - porcentajeVenta;
  const montoPago = paypal * precioCompra;
  const ganancia = (paypal * porcentaje) / 100;

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="grid">
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
                        placeholder="Tasa de venta.."
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
                        placeholder="% de compra.."
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
                        placeholder="Monto PayPal.."
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
                  <span className="details_span">{montoPago.toFixed(2)}Bs</span>
                </h3>
                <h3 className="details_pagar">
                  Ganancia:{" "}
                  <span className="details_span">{ganancia.toFixed(2)}$</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
