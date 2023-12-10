import { useMemo } from "react";
import "./ContainerCardFormFilter.css";

const ContainerCardFormFilter = ({
  dimensionCode,
  dimensionCodeText,
  prizeTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: prizeTop,
    };
  }, [prizeTop]);

  return (
    <div className="line-parent" style={frameDivStyle}>
      <div className="frame-item" />
      <div className="entry-fee">Entry Fee</div>
      <div className="prize">Prize</div>
      <div className="parent">
        <div className="div1">100</div>
        <img className="global-rupeeicon-1" alt="" src={dimensionCode} />
      </div>
      <div className="group">
        <div className="div1">190</div>
        <img className="global-rupeeicon-1" alt="" src={dimensionCodeText} />
      </div>
      <div className="ava-1-parent">
        <img className="ava-1-icon" alt="" src="/ava-1@2x.png" />
        <div className="amit">Amit</div>
      </div>
      <div className="ava-1-group">
        <img className="ava-1-icon" alt="" src="/ava-1@2x.png" />
        <div className="amit">Amit</div>
      </div>
      <img className="versus-1-icon" alt="" src="/versus-1@2x.png" />
    </div>
  );
};

export default ContainerCardFormFilter;
