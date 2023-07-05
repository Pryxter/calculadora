import { useEffect, useState } from "react";
import { NavbarLeft } from "../components/Home/NavbarLeft";
import { HistorialCard } from "../components/Cards/HistorialCard";
import "../styles/Desktop/Historial.css";
import { collection, doc, getDocs, updateDoc } from "@firebase/firestore";
import { db } from "../firebase";
import { HistorialJobCard } from "../components/Cards/HistorialJobCard";

export const Jobs = () => {
  const [clientes, setClientes] = useState([]);

  const jobCollection = collection(db, "db_1");

  const updateJob = async (id) => {
    const jobDoc = doc(db, "db_1", id);

    const datosNuevos = {
      status: Number(1),
      paymentStatus: Number(1),
    };
    await updateDoc(jobDoc, datosNuevos);

    // alert("¡Cliente Actualizado!");
  };

  useEffect(() => {
    document.title = "WoW - Jobs";

    const getClientes = async () => {
      const data = await getDocs(jobCollection);
      setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getClientes();
  }, [jobCollection]);
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
                    <div style={{ marginTop: 30 }}></div>

                    {clientes.map((cliente) => {
                      const dateClient = cliente.date;
                      return (
                        <>
                          <div style={{ marginTop: 13 }}>
                            <div onDoubleClick={() => updateJob(cliente.id)}>
                              <HistorialJobCard
                                norder={cliente.order}
                                client={cliente.cliente}
                                date={dateClient.substring(0, 15)}
                                mate={cliente.mate}
                                urlIcon={cliente.game}
                                amount={cliente.valor}
                                selector={cliente.status}
                                selectorPayments={cliente.paymentStatus}
                                nivel={cliente.nivel}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {/* <div style={{ marginTop: 13 }}>
                      <HistorialCard
                        name="Marcelo"
                        norder="CT7525"
                        date="Jun 27, 1:41 A.M"
                        deadline="Jun 30, 1:41 A.M"
                        payment="Binance"
                        amount="73,96"
                        status="Pending"
                      />
                    </div> */}
                    {/* <div style={{ marginTop: 13 }}>
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
