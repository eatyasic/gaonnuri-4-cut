import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import StartPage from "pages/StartPage";
import SelectCutPage from "pages/SelectCutPage";
import ShootingPage from "pages/ShootinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage nextUrl="/selectCutPage" />} />
        <Route
          path="/selectCutPage"
          element={<SelectCutPage nextUrl="/shootingPage" />}
        />
        <Route path="/shootingPage" element={<ShootingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
