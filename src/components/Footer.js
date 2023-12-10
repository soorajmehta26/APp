import Home31 from "./Home31";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div style={{position:'fixed'}} className="footer2">
      <div className="home2" onClick={()=> navigate('/logged-in-frame')}>
        <div className="home-3-1-frame">
          <Home31 />
        </div>
      </div>
      <div className="refer2">
        <div className="group-div">
          <div className="group-div">
            <img className="salesman-3-12" alt="" src="/salesman31@2x.png" />
          </div>
        </div>
      </div>
      <div className="menu2">
        <div className="menu-2-1-frame">
          <img className="menu-2-12" alt="" src="/menu-2-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
