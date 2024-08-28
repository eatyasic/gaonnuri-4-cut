import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  justify-content: end;
  align-items: center;
`;

const Picture = styled.img`
  height: 100%;
  object-fit: contain;
`;

const PictureList = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  row-gap: 10px;
  min-height: 20vh;
  gap: 10px;
  width: 100%;
  overflow: scroll;
  margin: 20px 0;
`;

const Frame = styled.img`
  margin-top: 10px;
  object-fit: contain;
  min-height: 50vh;
  height: 70vh;
`;

const Button = styled.button`
  width: 100vw;
  height: 10vh;
  background-color: skyblue;
  border: none;
`;

interface Props {
  readonly nextURL: string;
  readonly pictures: string[];
  readonly frame: any;
}

const SelectPhotoPage = ({ nextURL, pictures, frame }: Props) => {
  return (
    <Container>
      <Frame src={frame}></Frame>
      <PictureList>
        {pictures.map((pic) => (
          <Picture src={pic}></Picture>
        ))}
      </PictureList>
      <Button>완료</Button>
    </Container>
  );
};

export default SelectPhotoPage;
