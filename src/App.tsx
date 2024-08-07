import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import StartPage from "pages/StartPage";
import SelectCutPage from "pages/SelectCutPage";
import ShootingPage from "pages/ShootinPage";
import Test from "components/Test";
import { useState } from "react";
import SelectPhotoPage from "pages/SelectPhotoPage";

function App() {
  const [pictures, setPictures] = useState<string[]>([]);
  const [cutNum, setCutNum] = useState(0);

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
        <Route path="/" element={<StartPage nextUrl="/selectCut" />} />
        <Route
          path="/selectCut"
          element={<SelectCutPage nextUrl="/shooting" setCutNum={setCutNum} />}
        />
        <Route
          path="/shooting"
          element={
            <ShootingPage nextURL="/selectPhoto" setPictures={setPictures} />
          }
        />
        <Route
          path="/selectPhoto"
          element={<SelectPhotoPage nextURL="/" pictures={pictures} />}
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
