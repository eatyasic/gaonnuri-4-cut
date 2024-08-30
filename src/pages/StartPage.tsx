import { useNavigate } from "react-router-dom";
import "styles/startPage.css";

interface Props {
  readonly nextUrl: string;
}

const StartPage = ({ nextUrl }: Props) => {
  const navigate = useNavigate();
  const GoToSelectCutPage = () => {
    navigate(nextUrl, { replace: true });
  };

  return (
    <div className="Background" onClick={GoToSelectCutPage}>
      <div className="Title">
        <h1 className="Title__header">가온 네 컷</h1>
        <label className="Title__label">press screen to continue</label>
      </div>
    </div>
  );
};

export default StartPage;
