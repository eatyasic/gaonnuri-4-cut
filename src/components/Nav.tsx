import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
  position: fixed;
  display: flex;
  height: 50px;
  top: 0;
  width: 100vw;
  align-items: center;
  justify-content: end;
  z-index: 999;
`;

const Button = styled.button`
  font-family: "Pretendard-ExtraBold";
  border: none;
  background: none;
  padding-right: 10px;
  font-size: 16px;

  &::before {
    content: "< ";
  }
`;

interface Props {
  readonly setPictures: (arg0: string[]) => void;
}

const Navbar = ({ setPictures }: Props) => {
  const navigate = useNavigate();
  const GoToHomePage = () => {
    navigate("/");
    setPictures([]);
    console.log("GoToHomePage");
    window.location.reload();
  };
  return (
    <Nav>
      <Button onClick={GoToHomePage}>처음으로</Button>
    </Nav>
  );
};

export default Navbar;
