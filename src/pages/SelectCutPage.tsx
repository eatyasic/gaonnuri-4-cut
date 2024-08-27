import styled from "@emotion/styled";
import "styles/selectCutPage.css";
import { useNavigate } from "react-router-dom";
import bigDefaultBlack from "assets/big-default-black.svg";
import smallDefaultBlack from "assets/small-default-black.svg";
import bigDefaultWhite from "assets/big-default-white.svg";
import smallDefaultWhite from "assets/small-default-white.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
  text-align: center;
  row-gap: 20px;
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

  &:hover::before {
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

interface Props {
  readonly nextUrl: string;
  readonly setCutNum: (num: number) => void;
}

const SelectCutPage = ({ nextUrl, setCutNum }: Props) => {
  const navigate = useNavigate();
  const GoToShootingPage = () => {
    navigate(nextUrl);
  };
  return (
    <Container>
      <Header>프레임을 선택하세요</Header>
      <Row>
        <Selection>
          <FrameImg src={smallDefaultBlack} onClick={GoToShootingPage} />
        </Selection>
        <Selection>
          <FrameImg src={bigDefaultBlack} onClick={GoToShootingPage} />
        </Selection>
      </Row>
      <Row>
        <Selection>
          <FrameImg src={smallDefaultWhite} onClick={GoToShootingPage} />
        </Selection>
        <Selection>
          <FrameImg src={bigDefaultWhite} onClick={GoToShootingPage} />
        </Selection>
      </Row>
    </Container>
  );
};

export default SelectCutPage;
