import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Book from "./pages/Book/Book";
import Universidade from "./pages/Universidade/Universidade";
import { Personagens } from "./pages/Personagens/Personagens";
import Menu from "./components/Menu/Menu";
import Base from "./components/Base/Base"; 


export default function App() {
  return (
    <BrowserRouter>
      <Base>
        <Menu />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/book" element={<Book />} />
          <Route index path="/Universidade" element={<Universidade />} />
          <Route index path="/Personagens" element={<Personagens />} />

          
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
