import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AnaSayfa from "./pages/AnaSayfa";
import Hakkinda from "./pages/Hakkinda";
import IzlemeListesi from "./pages/IzlemeListesi";
import UrunDetay from "./pages/UrunDetay";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Ana Sayfa</Link> |{" "}
        <Link to="/hakkinda">Hakkında</Link> |{" "}
        <Link to="/izleme-listesi">İzleme Listesi</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/hakkinda" element={<Hakkinda />} />
        <Route path="/izleme-listesi" element={<IzlemeListesi />} />
        <Route path="/urun/:id" element={<UrunDetay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
