import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrdersMain() {
  const [ScheduleDetailsId, setScheduleDetailsId] = useState(1869007);
  const navigate = useNavigate();
  const handleOpenClick = () => {
    navigate("/Customer/TaskSheet", {
      state: { ScheduleDetailsId },
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
