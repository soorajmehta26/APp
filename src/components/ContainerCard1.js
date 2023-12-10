import "./ContainerCard1.css";

const ContainerCard1 = () => {
  return (
    <div className="line-container">
      <div className="line-div" />
      <div className="challenge-from-deep-container1">
        <span>{`Challenge from `}</span>
        <span className="deep1">{`Deep  `}</span>
      </div>
      <div className="prize2">Prize</div>
      <div className="entry-fee2">Entry Fee</div>
      <div className="parent1">
        <div className="div5">100</div>
        <img
          className="global-rupeeicon-14"
          alt=""
          src="/globalrupeeicon-12@2x.png"
        />
      </div>
      <div className="parent2">
        <div className="div5">190</div>
        <img
          className="global-rupeeicon-14"
          alt=""
          src="/globalrupeeicon-12@2x.png"
        />
      </div>
      <button className="play-wrapper">
        <div className="play">Play</div>
      </button>
    </div>
  );
};

export default ContainerCard1;
