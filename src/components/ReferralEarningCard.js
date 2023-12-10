import "./ReferralEarningCard.css";

const ReferralEarningCard = () => {
  return (
    <div className="mini-wallet-com1">
      <div className="referral-earning1">Referral Earning</div>
      <div className="total-balance1">
        Total Balanc
        <span className="e1">e</span>
      </div>
      <div className="balance2">
        <img className="rupee-1-icon2" alt="" src="/rupee-1@2x.png" />
        <b className="b2">0.00</b>
      </div>
      <div className="balance3">
        <img className="rupee-1-icon2" alt="" src="/rupee-1@2x.png" />
        <b className="b2">0.00</b>
      </div>
      <a className="b1-green-button1">
        <div className="recharge1">Recharge</div>
      </a>
      <a className="b1-grey-button1">
        <div className="withdraw1">Withdraw</div>
      </a>
    </div>
  );
};

export default ReferralEarningCard;
