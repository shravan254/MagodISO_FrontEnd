import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apipoints } from "../../../../api/isoForms/rateEstimator";
import Axios from "axios";
import { toast } from "react-toastify";

function QuotationMain() {
  const [QtnID, setQtnID] = useState("");
  const [QtnData, setQtnData] = useState([]);

  const navigate = useNavigate();
  const handleOpenClick = () => {
    if (!QtnID) {
      toast.error("Select QtnID");
      return;
    }
    navigate("/Customer/RateEstimator", {
      state: { QtnID },
    });
  };

  const handleInputChange = (e) => {
    setQtnID(e.target.value);
  };

  useEffect(() => {
    Axios.get(apipoints.getQtnID)
      .then((response) => {
        setQtnData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, []);

  console.log("QtnData", QtnData);

  return (
    <div className="row">
      <div className="col-md-4">
        <select
          className="ip-select dropdown-field mt-3"
          name="QtnID"
          value={QtnID}
          onChange={handleInputChange}
        >
          <option value="" selected disabled hidden>
            Select Qtn ID
          </option>
          {QtnData.map((qtn, index) => (
            <option key={index} value={qtn.QtnID}>
              {qtn.QtnID}
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
          Rate Estimator
        </button>
      </div>
    </div>
  );
}

export default QuotationMain;
