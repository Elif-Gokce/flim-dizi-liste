import { Routes, Route, Link } from "react-router-dom";
import AnaSayfa from "./pages/AnaSayfa";
import Hakkinda from "./pages/Hakkinda";
import IzlemeListesi from "./pages/IzlemeListesi";
import UrunDetay from "./pages/UrunDetay";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <nav style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
        <Link to="/">Ana Sayfa</Link> |{" "}
        <Link to="/hakkinda">Hakkında</Link> |{" "}
        <Link to="/izleme-listesi">İzleme Listesi</Link> |{" "}
        <button onClick={toggleTheme}>
          Tema: {theme === "light" ? "Açık ☀️" : "Koyu 🌙"}
        </button>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/hakkinda" element={<Hakkinda />} />
        <Route path="/izleme-listesi" element={<IzlemeListesi />} />
        <Route path="/urun/:id" element={<UrunDetay />} />
      </Routes>
    </div>
  );
}

export default App;