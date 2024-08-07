import "styles/global.css";
import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import PictureProvider from "App";
import { Navigate, useNavigate } from "react-router-dom";

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

interface Props {
  readonly nextURL: string;
  readonly setPictures: ([]: string[]) => void;
}

const picArr: string[] = [];

const ShootingPage = ({ nextURL, setPictures }: Props) => {
  const camera = useRef<any>(null);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const GoToNextPage = () => {
    navigate(nextURL);
  };

  const buttonClick = () => {
    picArr.push(camera.current.takePhoto());
    setCount((x) => x + 1);
    if (count >= 8) {
      setPictures(picArr);
      GoToNextPage();
    }
  };
  return (
    <Container>
      <Counter>{count}/8</Counter>
      <CameraLocation>
        <CameraView>
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
        </CameraView>
      </CameraLocation>
      <Button onClick={buttonClick}></Button>
    </Container>
  );
};

export default ShootingPage;
