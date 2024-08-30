import styled from "@emotion/styled";
import { toPng } from "html-to-image";
import html2canvas from "html2canvas";
import React, { useRef, useState } from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: var(--vh);
  justify-content: center;
  align-items: center;
`;

const Frame = styled.img`
  object-fit: contain;
  height: 100%;
`;

const BigFrameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 450px;
`;

const SmallFrameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 450px;
`;

const PhotoPosition = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 57px 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 7px;
  z-index: -9;
`;

const PhotoRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  height: auto;
`;

const BigPhoto = styled.img`
  object-fit: cover;
  height: 100%;
  width: 137px;
  transform: scaleX(-1);
`;

const SmallPhoto = styled.img`
  object-fit: cover;
  height: 90.5px;
  width: 130px;
  transform: scaleX(-1);
`;

const Result = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

const Shadow = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: fit-content;
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 10px solid transparent;
    pointer-events: none;
  }

  &::before {
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

const Button = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  margin-top: 20px;
  color: white;
  border-radius: 10px;
`;

const Footer = styled.div`
  font-family: "Pretendard-ExtraLight";
  color: #999999;
  position: fixed;
  display: flex;
  height: 50px;
  width: 100vw;
  align-items: start;
  justify-content: end;
  text-align: right;
  z-index: -1;
  bottom: 0;
  right: 10px;
`;

interface Props {
  readonly pictures: string[];
  readonly frame: any;
  readonly isBigFrame: boolean;
}

const SelectPhotoPage = ({ pictures, frame, isBigFrame }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [dataurl, setDataurl] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#3e3ca5");

  const handleCaptureClick = async () => {
    setBackgroundColor("#666666");
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current);
      const imgData = canvas.toDataURL("image/png");
      setDataurl(imgData);

      // 이미지 다운로드 링크 생성
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "captured.png";
      link.click();
    }
  };

  return (
    <Container>
      <Shadow>
        <Result ref={divRef} id="ResultImage">
          {isBigFrame ? (
            <BigFrameContainer>
              <Frame src={frame}></Frame>
              <PhotoPosition>
                <PhotoRow>
                  <BigPhoto src={pictures[0]}></BigPhoto>
                  <BigPhoto src={pictures[1]}></BigPhoto>
                </PhotoRow>
                <PhotoRow>
                  <BigPhoto src={pictures[2]}></BigPhoto>
                  <BigPhoto src={pictures[3]}></BigPhoto>
                </PhotoRow>
              </PhotoPosition>
            </BigFrameContainer>
          ) : (
            <SmallFrameContainer>
              <Frame src={frame}></Frame>
              <PhotoPosition>
                <SmallPhoto src={pictures[0]}></SmallPhoto>
                <SmallPhoto src={pictures[1]}></SmallPhoto>
                <SmallPhoto src={pictures[2]}></SmallPhoto>
                <SmallPhoto src={pictures[3]}></SmallPhoto>
              </PhotoPosition>
            </SmallFrameContainer>
          )}
        </Result>
      </Shadow>
      <Button
        onClick={handleCaptureClick}
        style={{ backgroundColor: backgroundColor }}
      >
        이미지 다운로드
      </Button>
      <Footer>
        Developed by 김종호<br></br> Painted by 김현영
      </Footer>
    </Container>
  );
};

export default SelectPhotoPage;
