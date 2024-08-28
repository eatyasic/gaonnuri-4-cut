import "styles/global.css";
import "styles/fullpage.css";
import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";
import PictureProvider from "App";
import { Navigate, useNavigate } from "react-router-dom";
import character_1 from "assets/frame-character-1.png";
import character_2 from "assets/frame-character-2.png";
import character_3 from "assets/frame-character-3.png";
import character_4 from "assets/frame-character-4.png";

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
  const [count, setCount] = useState(0);
  const [curCharacter, setCurCharacter] = useState<any>();

  const navigate = useNavigate();
  const GoToNextPage = () => {
    navigate(nextURL);
  };

  const buttonClick = () => {
    picArr.push(camera.current.takePhoto());
    setCount((x) => x + 1);
    if (count >= 7) {
      setPictures(picArr);
      GoToNextPage();
    }
    changeCharacter();
  };

  const changeCharacter = () => {
    console.log(count);
    if (~~(count / 2) === 0) setCurCharacter(character_1);
    else if (~~(count / 2) === 1) setCurCharacter(character_2);
    else if (~~(count / 2) === 2) setCurCharacter(character_3);
    else if (~~(count / 2) === 3) setCurCharacter(character_4);
  };
  console.log("캐릭터 모드: ", isCharacter);
  useEffect(() => {
    changeCharacter();
  }, [count]);
  return (
    <Container>
      <Counter>{count}/8</Counter>
      <CameraLocation>
        <CameraView photoRatio={photoRatio}>
          <Camera
            aspectRatio={"cover"}
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
      <Button onClick={buttonClick}></Button>
    </Container>
  );
};

export default ShootingPage;
