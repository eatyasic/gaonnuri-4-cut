import {
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
  Router,
} from "react-router-dom";
import StartPage from "pages/StartPage";
import SelectCutPage from "pages/SelectCutPage";
import ShootingPage from "pages/ShootingPage";
import Test from "components/Test";
import { useState, useEffect } from "react";
import SelectPhotoPage from "pages/SelectPhotoPage";
import NavBar from "components/Nav";

function App() {
  const [pictures, setPictures] = useState<string[]>([]);
  const [selectedFrame, setSelectedFrame] = useState<any>();
  const [isCharacter, setIsCharacter] = useState<boolean>();
  const [photoRatio, SetPhotoRatio] = useState<string>();
  const [isBigFrame, setIsBigFrame] = useState<boolean>();

  const setVh = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight}px`
    );
  };

  window.addEventListener("resize", setVh);
  setVh();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar setPictures={setPictures}></NavBar>

      <Routes>
        <Route path="/" element={<StartPage nextUrl="/selectCut" />} />
        <Route
          path="/selectCut"
          element={
            <SelectCutPage
              nextUrl="/shooting"
              setSelectedFrame={setSelectedFrame}
              setIsCharacter={setIsCharacter}
              setPhotoRatio={SetPhotoRatio}
              setIsBigFrame={setIsBigFrame}
            />
          }
        />
        <Route
          path="/shooting"
          element={
            <ShootingPage
              nextURL="/selectPhoto"
              setPictures={setPictures}
              isCharacter={isCharacter!}
              photoRatio={photoRatio!}
            />
          }
        />
        <Route
          path="/selectPhoto"
          element={
            <SelectPhotoPage
              setPictures={setPictures}
              pictures={pictures}
              frame={selectedFrame}
              isBigFrame={isBigFrame!}
            />
          }
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
