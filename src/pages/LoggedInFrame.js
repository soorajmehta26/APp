import ReferralEarningCard from "../components/ReferralEarningCard";
import Footer from "../components/BottomFooter";
import "./LoggedInFrame.css";
import Header from "../components/header";
const LoggedInFrame = () => {
  return (
    <div>
    <div className="logged-in-frame">
    <Header />
      <ReferralEarningCard />
      
      <div className="login-button1">
        <b className="login2">Login</b>
      </div>
      <div className="game4">
      <img className="ludo-1-icon3" alt="" src="/ludo11@2x.png" />
      </div>
      <div className="game5">
        <img className="ludo-1-icon3" alt="" src="/ludo11@2x.png" />
      </div>
      <div className="game6">
        <img className="ludo-1-icon3" alt="" src="/ludo11@2x.png" />
      </div>
      <div className="game7">
        <img className="ludo-1-icon3" alt="" src="/ludo11@2x.png" />
      </div>
    
    </div>
    <Footer />
    </div>
  );
};

export default LoggedInFrame;
