import "styles/global.css";
import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100vw;
  height: 100vh;
`;

const Counter = styled.p`
  font-family: "Pretendard-ExtraBold";
  font-size: 20px;
  margin: 10px;
`;

const CameraLocation = styled.div`
  width: 100vw;
  max-height: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const CameraView = styled.div`
  aspect-ratio: 1;
  max-width: 100vw;
  max-height: 100vw;
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
        <CameraView></CameraView>
      </CameraLocation>
      <Button onClick={buttonClick}></Button>
    </Container>
  );
};

export default ShootingPage;
