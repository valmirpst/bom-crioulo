import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Book from "./pages/Book/Book";
import Universidade from "./pages/Universidade/Universidade";
import { Personagens } from "./pages/Personagens/Personagens";
import Menu from "./components/Menu/Menu";
import Base from "./components/Base/Base";
import { AppContextProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppContextProvider>
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
    </AppContextProvider>
  );
}
