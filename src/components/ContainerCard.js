import "./ContainerCard.css";

const ContainerCard = () => {
  return (
    <div className="line-group">
      <div className="frame-inner" />
      <div className="challenge-from-deep-container">
        <span>{`Challenge from `}</span>
        <span className="deep">{`Deep  `}</span>
      </div>
      <div className="prize1">Prize</div>
      <div className="entry-fee1">Entry Fee</div>
      <div className="container">
        <div className="div3">100</div>
        <img
          className="global-rupeeicon-12"
          alt=""
          src="/globalrupeeicon-12@2x.png"
        />
      </div>
      <div className="frame-div">
        <div className="div3">190</div>
        <img
          className="global-rupeeicon-12"
          alt=""
          src="/globalrupeeicon-12@2x.png"
        />
      </div>
      <button className="accept-wrapper">
        <div className="accept">Accept</div>
      </button>
      <button className="reject-wrapper">
        <div className="reject">Reject</div>
      </button>
    </div>
  );
};

export default ContainerCard;
