import "styles/global.css";
import "styles/fullpage.css";
import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";
import { Navigate, useNavigate } from "react-router-dom";
import character_1 from "assets/frame-character-1.png";
import character_2 from "assets/frame-character-2.png";
import character_3 from "assets/frame-character-3.png";
import character_4 from "assets/frame-character-4.png";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: var(--vh);
`;

const Counter = styled.p`
  font-family: "Pretendard-ExtraBold";
  font-size: 20px;
  margin: 10px;
  z-index: 99;
`;

const CameraLocation = styled.div<CameraProps>`
  display: flex;
  aspect-ratio: ${({ photoRatio }) => photoRatio};
  width: 100%;
  background-color: black;
  justify-content: center;
`;

const CameraView = styled.div<CameraProps>`
  position: relative;
  aspect-ratio: ${({ photoRatio }) => photoRatio};
  height: 100%;
  display: flex;
  overflow: hidden;
  background-color: gray;
`;

interface CameraProps {
  photoRatio: string;
}

const Button = styled.button`
  margin: 60px 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 0 15px #000 inset;
  border: 10px;
`;

const Timer = styled.div`
  display: flex;
  margin: 60px 0;
  width: 100vw;
  height: 100px;
  font-family: "Pretendard-ExtraBold";
  font-size: 50px;
  justify-content: center;
  align-items: center;
`;

const Character = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 9999;
`;

interface Props {
  readonly nextURL: string;
  readonly setPictures: ([]: string[]) => void;
  readonly isCharacter: boolean;
  readonly photoRatio: string;
}

const picArr: string[] = [];

const ShootingPage = ({
  nextURL,
  setPictures,
  isCharacter,
  photoRatio,
}: Props) => {
  const camera = useRef<any>(null);
  const [count, setCount] = useState(1);
  const [curCharacter, setCurCharacter] = useState<any>();

  const navigate = useNavigate();
  const GoToNextPage = () => {
    navigate(nextURL, { replace: true });
  };

  const buttonClick = () => {
    picArr.push(camera.current.takePhoto());
    setCount(count + 1);
    if (count >= 4) {
      setPictures(picArr);
      GoToNextPage();
    }
    console.log("takePhoto" + count);
  };

  const changeCharacter = (count: number) => {
    console.log("Change" + count);

    if (count === 1) setCurCharacter(character_1);
    else if (count === 2) setCurCharacter(character_2);
    else if (count === 3) setCurCharacter(character_3);
    else if (count === 4) setCurCharacter(character_4);
  };

  const [seconds, setSeconds] = useState(10);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(true);
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      setSeconds(10);
      buttonClick();
      setIsVisible(false);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    changeCharacter(count);
  }, [count]);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Counter>{count}/4</Counter>
      <CameraLocation
        className={`fade-in ${isVisible ? "visible" : ""}`}
        photoRatio={photoRatio}
      >
        <CameraView photoRatio={photoRatio}>
          <Camera
            errorMessages={{
              noCameraAccessible:
                "카메라 계열 장치에 접근할 수 없습니다. 카메라를 연결하거나 다른 브라우저에서 시도해보세요.",
              permissionDenied:
                "카메라 액세스 권한이 거부되었습니다. 권한을 허용한 뒤 리로드 해보세요.",
              switchCamera:
                "It is not possible to switch camera to different one because there is only one video device accessible.",
              canvas: "Canvas is not supported.",
            }}
            ref={camera}
          />
          {isCharacter && <Character src={curCharacter} />}
        </CameraView>
      </CameraLocation>
      {/* <Button onClick={buttonClick}></Button> */}
      <Timer>{seconds}</Timer>
    </Container>
  );
};

export default ShootingPage;
