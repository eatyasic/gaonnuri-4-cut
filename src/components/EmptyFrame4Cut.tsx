import styled from "@emotion/styled";

const Container = styled.div<Props>`
  background-color: #000;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transform: scale(${({ scale }) => scale || 1});
  transform-origin: top left;
  margin-bottom: ${({ scale }) => (scale ? -scale * 450 + "px" : "0")};
  margin-right: ${({ scale }) => (scale ? -scale * 150 + "px" : "0")};
`;

const Picture = styled.div`
  background-color: #d9d9d9;
  border-radius: 4px;
  width: 130px;
  height: 90.5px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 10px;
`;

const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  margin-bottom: 12px;
`;

interface Props {
  readonly scale?: number;
}

const EmptyFrame4Cut = ({ scale = 0 }: Props) => {
  return (
    <Container scale={scale}>
      <Column>
        <Picture />
        <Picture />
        <Picture />
        <Picture />
      </Column>
      <Logo />
    </Container>
  );
};

export default EmptyFrame4Cut;
