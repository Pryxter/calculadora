import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Calculadora } from "./pages/Calculadora";
import { Porcentaje } from "./components/Home/Porcentaje";
import { Agregar } from "./pages/Agregar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/porcentaje" element={<Porcentaje />} />
        <Route path="/agregar" element={<Agregar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
