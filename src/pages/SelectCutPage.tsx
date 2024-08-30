import styled from "@emotion/styled";
import "styles/selectCutPage.css";
import { useNavigate } from "react-router-dom";
import bigDefaultBlack from "assets/big-default-black.svg";
import smallDefaultBlack from "assets/small-default-black.svg";
import bigDefaultWhite from "assets/big-default-white.svg";
import smallDefaultWhite from "assets/small-default-white.svg";
import smallCharacterSky from "assets/small-character-sky.png";
import bigCharacterSky from "assets/big-character-sky.png";
import smallCharacterGreen from "assets/small-character-green.png";
import bigCharacterGreen from "assets/big-character-green.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100vw;
  align-items: center;
  text-align: center;
`;

const Header = styled.p`
  font-family: "Pretendard-ExtraBold";
  font-size: 20px;
  width: 100%;
  margin: 70px 0 30px 0;
  vertical-align: middle;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
`;

const FrameImg = styled.img`
  height: 250px;
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  margin-bottom: 30px;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 10px solid transparent;
    pointer-events: none;
    box-shadow: 0px 4px 4px 0px #a8a8a8;
  }
  &:has(:checked) {
    &::before {
      box-shadow: 0px 0px 0 5px #3e3ca5;
    }
  }
`;

const Button = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  background-color: #3e3ca5;
  color: white;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const Radio = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
`;

interface Props {
  readonly nextUrl: string;
  readonly setSelectedFrame: (arg0: any) => void;
  readonly setIsCharacter: (arg0: boolean) => void;
  readonly setPhotoRatio: (arg0: string) => void;
  readonly setIsBigFrame: (arg0: boolean) => void;
}

type NowSelect = {
  readonly setSelectedFrame: any;
  readonly setIsCharacter: boolean;
  readonly setPhotoRatio: string;
  readonly setIsBigFrame: boolean;
};

const SelectCutPage = ({
  nextUrl,
  setSelectedFrame,
  setIsCharacter,
  setPhotoRatio,
  setIsBigFrame,
}: Props) => {
  const navigate = useNavigate();
  const GoToShootingPage = (
    selectedFrame: any,
    isCharacter: boolean,
    ratio: string,
    isBigFrame: boolean
  ) => {
    setSelectedFrame(selectedFrame);
    setIsCharacter(isCharacter);
    setPhotoRatio(ratio);
    setIsBigFrame(isBigFrame);
    navigate(nextUrl, { replace: true });
  };

  const FrameList: Array<[any, boolean, string, boolean]> = [
    [smallCharacterSky, false, "260/181", false],
    [bigCharacterSky, true, "273/376", true],
    [smallCharacterGreen, false, "260/181", false],
    [bigCharacterGreen, true, "273/376", true],
    [smallDefaultBlack, false, "260/181", false],
    [bigDefaultBlack, false, "273/376", true],
    [smallDefaultWhite, false, "260/181", false],
    [bigDefaultWhite, false, "273/376", true],
  ];

  let nowSelect: NowSelect = {
    setSelectedFrame: FrameList[0][0],
    setIsCharacter: FrameList[0][1],
    setPhotoRatio: FrameList[0][2],
    setIsBigFrame: FrameList[0][3],
  };

  const toTwoRowList = (array: Array<[any, boolean, string, boolean]>) => {
    const row = [];
    for (let i = 0; i < array.length; i += 2) {
      row.push(array.slice(i, i + 2));
    }
    return row;
  };

  const twoRowList = toTwoRowList(FrameList);

  return (
    <Container>
      <Header>프레임을 선택하세요</Header>
      {twoRowList.map((row, index) => (
        <Row key={index}>
          {row.map(([frame, isCharacter, photoRatio, isBigFrame]) => (
            <Selection>
              <Radio
                type="radio"
                name="frame"
                onClick={() => {
                  console.log("frame", frame);
                  nowSelect = {
                    setSelectedFrame: frame,
                    setIsCharacter: isCharacter,
                    setPhotoRatio: photoRatio,
                    setIsBigFrame: isBigFrame,
                  };
                }}
              />
              <FrameImg src={frame} />
            </Selection>
          ))}
        </Row>
      ))}
      <Button
        onClick={() =>
          GoToShootingPage(
            nowSelect.setSelectedFrame,
            nowSelect.setIsCharacter,
            nowSelect.setPhotoRatio,
            nowSelect.setIsBigFrame
          )
        }
      >
        다음
      </Button>
    </Container>
  );
};

export default SelectCutPage;
