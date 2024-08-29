import styled from "@emotion/styled";
import { toPng } from "html-to-image";
import React, { useRef, useState } from "react";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
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
`;

const SmallPhoto = styled.img`
  object-fit: cover;
  height: 90.5px;
  width: 130px;
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
  background-color: #3e3ca5;
  color: white;
  border-radius: 10px;
`;

interface Props {
  readonly pictures: string[];
  readonly frame: any;
  readonly isBigFrame: boolean;
}

const SelectPhotoPage = ({ pictures, frame, isBigFrame }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  const htmlToImageConvert = () => {
    toPng(divRef.current!, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "가온네컷.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
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
                  <BigPhoto src={pictures[2]}></BigPhoto>
                </PhotoRow>
                <PhotoRow>
                  <BigPhoto src={pictures[4]}></BigPhoto>
                  <BigPhoto src={pictures[6]}></BigPhoto>
                </PhotoRow>
              </PhotoPosition>
            </BigFrameContainer>
          ) : (
            <SmallFrameContainer>
              <Frame src={frame}></Frame>
              <PhotoPosition>
                <SmallPhoto src={pictures[0]}></SmallPhoto>
                <SmallPhoto src={pictures[2]}></SmallPhoto>
                <SmallPhoto src={pictures[4]}></SmallPhoto>
                <SmallPhoto src={pictures[6]}></SmallPhoto>
              </PhotoPosition>
            </SmallFrameContainer>
          )}
        </Result>
      </Shadow>
      <Button onClick={htmlToImageConvert}>이미지 다운로드</Button>
    </Container>
  );
};

export default SelectPhotoPage;
