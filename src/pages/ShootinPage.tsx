import "styles/global.css";
import styled from "@emotion/styled";
import { useState } from "react";
import Camera from "components/Camera";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100vw;
  height: var(--vh);
`;

const Counter = styled.p`
  font-family: "Pretendard-ExtraBold";
  font-size: 20px;
  margin: 10px;
`;

const CameraLocation = styled.div`
  max-height: calc(100vh - 260px);
  display: flex;
  height: 100vmin;
  width: 100%;
  background-color: black;
  justify-content: center;
`;

const CameraView = styled.div`
  position: relative;
  aspect-ratio: 1;
  height: 100%;
  display: flex;
  overflow: hidden;
  background-color: gray;
`;

const Button = styled.div`
  margin: 60px 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 0 15px #000 inset;
  border: 10px;
`;

const ShootingPage = () => {
  const [count, setCount] = useState(0);

  const buttonClick = () => {
    setCount((x) => x + 1);
    if (count >= 8) {
    }
  };
  return (
    <Container>
      <Counter>{count}/8</Counter>
      <CameraLocation>
        <CameraView>
          <Camera />
        </CameraView>
      </CameraLocation>
      <Button onClick={buttonClick}></Button>
    </Container>
  );
};

export default ShootingPage;
