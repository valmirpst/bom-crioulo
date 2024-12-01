import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Book from "./pages/Book/Book";
import Universidade from "./pages/Universidade/Universidade";
import { Personagens } from "./pages/Personagens/Personagens";
import Menu from "./components/Menu/Menu";
import Base from "./components/Base/Base";
import { AppContextProvider } from "./context/AppContext";
import Alunos from "./pages/Alunos/Alunos";
import Cartas from "./pages/Cartas/Cartas";

export default function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Base>
          <Menu />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/book" element={<Book />} />
            <Route index path="/universidade" element={<Universidade />} />
            <Route index path="/personagens" element={<Personagens />} />
            <Route index path="/alunos" element={<Alunos />} />
            <Route index path="/cartas" element={<Cartas />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </AppContextProvider>
  );
}
