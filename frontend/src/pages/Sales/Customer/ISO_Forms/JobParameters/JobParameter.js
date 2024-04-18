import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobParameter() {
  const [NcId, SetNcId] = useState(422756);
  const navigate = useNavigate();
  const handleOpenClick1 = () => {
    navigate("/Customer/SolidStateForm", {
      state: { NcId },
    });
  };

  const handleOpenClick2 = () => {
    navigate("/Customer/CO2Form", {
      state: { NcId },
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
