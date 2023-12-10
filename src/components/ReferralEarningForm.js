import "./ReferralEarningForm.css";

const ReferralEarningForm = () => {
  return (
    <div className="mini-wallet-com">
      <div className="referral-earning">Referral Earning</div>
      <div className="total-balance">
        Total Balanc
        <span className="e">e</span>
      </div>
      <div className="balance">
        <img className="rupee-1-icon" alt="" src="/rupee-1@2x.png" />
        <b className="b">0.00</b>
      </div>
      <div className="balance1">
        <img className="rupee-1-icon" alt="" src="/rupee-1@2x.png" />
        <b className="b">0.00</b>
      </div>
      <div className="b1-green-button">
        <div className="recharge">Recharge</div>
      </div>
      <div className="b1-grey-button">
        <div className="withdraw">Withdraw</div>
      </div>
    </div>
  );
};

export default ReferralEarningForm;
