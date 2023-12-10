import ReferralEarningForm from "../components/ReferralEarningForm";
import "./NonLoggedInFrame.css";
import { useNavigate } from "react-router-dom";

const NonLoggedInFrame = () => {
  const navigate = useNavigate();
  return (
    <div className="non-logged-in-frame">
      <ReferralEarningForm />
      <div className="landing-page-header">
        <a className="ringing-1-1" />
        <a className="wallet-1-1" />
        <img className="epicwin-9-1" alt="" src="/epicwin-9-1@2x.png" />
      </div>
      <a className="login-button" onClick={() => navigate('/login')} >
        <b className="login">Login</b>
      </a>
      <div className="game">
        <a className="ludo-1" />
      </div>
      <div className="game1">
        <img className="ludo-1-icon" alt="" src="/ludo1@2x.png" />
      </div>
      <div className="game2">
        <img className="ludo-1-icon" alt="" src="/ludo1@2x.png" />
      </div>
      <div className="game3">
        <img className="ludo-1-icon" alt="" src="/ludo1@2x.png" />
      </div>
      <div className="footer">
        <div className="home">
          <div className="home-3-1-wrapper">
            <a className="home-3-1" />
          </div>
        </div>
        <div className="refer">
          <div className="refer-inner">
            <div className="refer-inner">
              <a className="salesman-3-1" />
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu-2-1-wrapper">
            <a className="menu-2-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonLoggedInFrame;
