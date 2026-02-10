import { useNavigate } from "react-router-dom";
import evoraLogo from "../assets/evora-logo.jpeg";
import "../styles/intro.css"; // ✅ THIS WAS MISSING / BROKEN

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      <img
        src={evoraLogo}
        alt="Evora Logo"
        className="intro-image"
      />

      <div className="intro-buttons">
        <button
          className="primary"
          onClick={() => navigate("/home")}
        >
          EXPLORE EVORA
        </button>

        <button
          className="secondary"
          onClick={() => navigate("/auth")}
        >
          LOGIN / REGISTER
        </button>
      </div>
    </div>
  );
};

export default Intro;