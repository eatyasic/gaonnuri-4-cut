import styled from "@emotion/styled";

const Container = styled.div<Props>`
  width: 280px;
  height: 428px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  transform: scale(${({ scale }) => scale || 1});
  transform-origin: top left;
  padding: 10px 10px 12px 10px;
  margin-right: ${({ scale }) => (scale ? -scale * 300 + "px" : "0")};
  margin-bottom: ${({ scale }) => (scale ? -scale * 450 + "px" : "0")};
`;

const Picture = styled.div`
  background-color: #d9d9d9;
  border-radius: 4px;
  width: 136.5px;
  height: 123px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
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
      <Row>
        <Column>
          <Picture />
          <Picture />
          <Picture />
        </Column>
        <Column>
          <Picture />
          <Picture />
          <Picture />
        </Column>
      </Row>
      <Logo />
    </Container>
  );
};

export default EmptyFrame4Cut;
