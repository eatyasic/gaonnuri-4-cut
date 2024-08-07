interface Props {
  readonly nextURL: string;
  readonly pictures: string[];
}

const SelectPhotoPage = ({ nextURL, pictures }: Props) => {
  return (
    <div>
      {pictures.map((pic) => (
        <img src={pic}></img>
      ))}
    </div>
  );
};

export default SelectPhotoPage;
