import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobParameter() {
  const [ScheduleDetailsId, setScheduleDetailsId] = useState(1869007);
  const navigate = useNavigate();
  const handleOpenClick1 = () => {
    navigate("/Customer/SolidStateForm", {
      state: { ScheduleDetailsId },
    });
  };

  const handleOpenClick2 = () => {
    navigate("/Customer/CO2Form", {
      state: { ScheduleDetailsId },
    });
  };
  return (
    <div>
      <button
        className="button-style"
        style={{ width: "100px" }}
        onClick={handleOpenClick1}
      >
        Solid State
      </button>

      <button
        className="button-style"
        style={{ width: "100px" }}
        onClick={handleOpenClick2}
      >
        CO2 Form
      </button>
    </div>
  );
}

export default JobParameter;
