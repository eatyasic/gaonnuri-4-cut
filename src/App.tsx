import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import StartPage from "pages/StartPage";
import SelectCutPage from "pages/SelectCutPage";
import ShootingPage from "pages/ShootinPage";
import Test from "components/Test";
import { useEffect } from "react";

function App() {
  const setVh = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", setVh);
  setVh();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage nextUrl="/selectCutPage" />} />
        <Route
          path="/selectCutPage"
          element={<SelectCutPage nextUrl="/shootingPage" />}
        />
        <Route path="/shootingPage" element={<ShootingPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
