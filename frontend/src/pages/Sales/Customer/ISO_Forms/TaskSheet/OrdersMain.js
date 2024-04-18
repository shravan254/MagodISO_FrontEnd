import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrdersMain() {
  const [NcId, SetNcId] = useState(424017);
  const navigate = useNavigate();
  const handleOpenClick = () => {
    navigate("/Customer/TaskSheet", {
      state: { NcId },
    });
  };
  return (
    <div>
      <button
        className="button-style"
        style={{ width: "100px" }}
        onClick={handleOpenClick}
      >
        Task Sheet
      </button>
    </div>
  );
}

export default OrdersMain;
