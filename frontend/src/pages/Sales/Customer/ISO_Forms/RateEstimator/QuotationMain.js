import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuotationMain() {
  const [QtnID, setQtnID] = useState(7106);
  const navigate = useNavigate();
  const handleOpenClick = () => {
    navigate("/Customer/RateEstimator", {
      state: { QtnID },
    });
  };
  return (
    <div>
      <button
        className="button-style"
        style={{ width: "100px" }}
        onClick={handleOpenClick}
      >
        Rate Estimator
      </button>
    </div>
  );
}

export default QuotationMain;
