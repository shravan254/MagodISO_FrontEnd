import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apipoints } from "../../../../api/isoForms/taskSheet";
import Axios from "axios";

function OrdersMain() {
  const [NcId, SetNcId] = useState("");
  const [NcIdData, setNcIdData] = useState([]);
  const navigate = useNavigate();
  const handleOpenClick = () => {
    navigate("/Customer/TaskSheet", {
      state: { NcId },
    });
  };

  const handleInputChange = (e) => {
    SetNcId(e.target.value);
  };

  useEffect(() => {
    Axios.get(apipoints.getNcIdData)
      .then((response) => {
        setNcIdData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
        <select
          className="ip-select dropdown-field mt-3"
          name="NcId"
          value={NcId}
          onChange={handleInputChange}
        >
          <option value="" selected disabled hidden>
            Select Ncid
          </option>
          {NcIdData.map((id, index) => (
            <option key={index} value={id.Ncid}>
              {id.Ncid}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-4">
        <button
          className="button-style"
          style={{ width: "100px" }}
          onClick={handleOpenClick}
        >
          Task Sheet
        </button>
      </div>
    </div>
  );
}

export default OrdersMain;
