import styled from "@emotion/styled";
import EmptyFrame6Cut from "components/EmptyFame6Cut";
import EmptyFrame4Cut from "components/EmptyFrame4Cut";
import "styles/selectCutPage.css";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  align-items: center;
`;

const Label = styled.p`
  font-family: "Pretendard-ExtraBold";
  size: 20px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
    bottom: 19px;
    border: 10px solid transparent;
    pointer-events: none;
  }

  &:hover::before {
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

interface Props {
  readonly nextUrl: string;
}

const SelectCutPage = ({ nextUrl }: Props) => {
  const navigate = useNavigate();
  const GoToShootingPage = () => {
    navigate(nextUrl);
  };
  return (
    <Container>
      <Label style={{ marginBottom: "33px" }}>프레임 개수를 선택하세요</Label>
      <Row>
        <Selection onClick={GoToShootingPage}>
          <EmptyFrame4Cut scale={0.5} />
          <Label>4 cut</Label>
        </Selection>
        <Selection onClick={GoToShootingPage}>
          <EmptyFrame6Cut scale={0.5} />
          <Label>6 cut</Label>
        </Selection>
      </Row>
    </Container>
  );
};

export default SelectCutPage;
