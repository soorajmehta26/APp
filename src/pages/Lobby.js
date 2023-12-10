import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import ContainerCard from "../components/ContainerCard";
import ContainerCard1 from "../components/ContainerCard1";
import OpenBattlesContainer from "../components/OpenBattlesContainer";
import "./Lobby.css";
import Header from "../components/header";
import Footer from "../components/Footer";

const Lobby = () => {
  return (
    <div className="lobby">
      <Header />
      <div className="running-battles-parent">
        <div className="running-battles">Running Battles</div>
        <ContainerCardFormFilter
          dimensionCode="/globalrupeeicon-1@2x.png"
          dimensionCodeText="/globalrupeeicon-11@2x.png"
        />
        <ContainerCardFormFilter
          dimensionCode="/globalrupeeicon-11@2x.png"
          dimensionCodeText="/globalrupeeicon-1@2x.png"
          prizeTop="155px"
        />
        <img className="athletics-1-icon" alt="" src="/athletics-1@2x.png" />
      </div>
      
      <div className="frame-parent">
        <input className="frame-child" placeholder="Amount" type="text" />
        <div className="create-a-battle">CREATE A BATTLE</div>
        <button className="set-wrapper">
          <div className="set">Set</div>
        </button>
      </div>
      <div className="open-1-1-parent">
        <img className="open-1-1" alt="" src="/open-1-1@2x.png" />
        <div className="open-battles">Open Battles</div>
        <ContainerCard />
        <ContainerCard1 />
        <button className="info-1" />
      </div>
      <OpenBattlesContainer />
      <Footer />
     
    </div>
  );
};

export default Lobby;
