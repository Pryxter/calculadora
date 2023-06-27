import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Calculadora } from "./pages/Calculadora";
import { Porcentaje } from "./components/Home/Porcentaje";
import { Agregar } from "./pages/Agregar";
import { Historial } from "./pages/Historial";
import { Jobs } from "./pages/Jobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/porcentaje" element={<Porcentaje />} />
        <Route path="/agregar" element={<Agregar />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
