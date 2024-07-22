import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./componentes/header/Header";
import Footer from "./componentes/footer/Footer";
import Seccion from "./componentes/seccion/Seccion";
import Menu from "./componentes/menu/Menu";
import ListaCasas from "./componentes/casas/ListaCasas";
import GestionPociones from './componentes/pociones/GestionPociones';


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Menu />
        <main>
          <Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/casas" element={<ListaCasas />} />
          <Route path="/pociones" element={<GestionPociones />} />
          <Route path="/personajes" element={<ListaCasas />} />

          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
