import { useNavigate } from "react-router-dom";
import evoraImage from "../assets/evora-splash.png";
import "../styles/intro.css";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-wrapper">

      <img
        src={evoraImage}
        alt="Evora"
        className="intro-image"
      />

      <div className="button-group">
        <button
          className="btn-explore"
          onClick={() => navigate("/home")}
        >
          EXPLORE EVORA
        </button>

        <button
          className="btn-login"
          onClick={() => navigate("/auth")}
        >
          LOGIN / REGISTER
        </button>
      </div>

    </div>
  );
};

export default Intro;
