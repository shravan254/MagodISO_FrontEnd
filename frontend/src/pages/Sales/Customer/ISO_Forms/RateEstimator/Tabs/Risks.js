import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import Axios from "axios";
import { apipoints } from "../../../../../api/isoForms/rateEstimator";
import { toast } from "react-toastify";

const Risks = ({
  formData,
  setFormData,
  handleInputChange,
  handleRowSelect,
}) => {
  const handleAddRisk = async () => {
    try {
      if (formData.risk === "") {
        toast.error("Enter Risk");
        return;
      }
      const newRisk = {
        qtnID: formData.qtnID,
        risk: formData.risk,
      };

      const response = await Axios.post(apipoints.insertRiskDetails, newRisk);

      setFormData((prevFormData) => ({
        ...prevFormData,

        riskTableData: response.data,
        risk: "",
      }));
    } catch (error) {
      console.error("Error Adding Risk", error);
      toast.error("Error Adding Risk");
    }
  };

  const handleDeleteRisk = async (riskId) => {
    try {
      if (!formData.selectedRow3) {
        toast.error("Select a row before deleting");
        return;
      }
      await Axios.post(apipoints.deleteRiskDetails, { riskId });

      setFormData((prevData) => ({
        ...prevData,
        riskTableData: prevData.riskTableData.filter(
          (item) => item.Risk_ID !== riskId
        ),
        selectedRow3: null,
      }));

      toast.success("Risk deleted successfully");
    } catch (error) {
      console.error("Error Deleting Risk", error);
      toast.error("Error Deleting Risk");
    }
  };

  const handleRiskDetailsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = formData.riskTableData.map((item, idx) => {
      if (idx === index) {
        return { ...item, [name]: value };
      }
      return item;
    });

    setFormData((prevData) => ({
      ...prevData,
      riskTableData: updatedItems,
    }));
  };

  const handleBlur = async (index, riskId, risk) => {
    try {
      const updateData = {
        qtnID: formData.qtnID,
        riskId: riskId,
        risk,
      };

      await Axios.post(apipoints.updateRiskDetails, updateData);

      const updatedCost = [...formData.riskTableData];
      updatedCost[index] = {
        ...updatedCost[index],
        risk,
      };

      setFormData((prevFormData) => ({
        ...prevFormData,
        riskTableData: updatedCost,
      }));

      // toast.success("Material details updated successfully");
    } catch (error) {
      console.error("Error updating Risk details", error);
    }
  };

  return (
    <div className="">
      <div className="row col-md-12">
        <div className="col-md-8">
          <div className="mt-3">
            <div
              style={{
                height: "120px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border" striped>
                <thead
                  className="tableHeaderBGColor"
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr className="table-header">
                    <th style={{ width: "50px" }}>SL No</th>
                    <th>Risks</th>
                  </tr>
                </thead>

                <tbody style={{ textAlign: "center" }}>
                  {formData.riskTableData.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowSelect(item.Risk_ID)}
                      className={
                        formData.selectedRow3 === item.Risk_ID
                          ? "selectedRowClr"
                          : ""
                      }
                    >
                      <td>{index + 1}</td>
                      {/* <td>{item.Risks}</td> */}
                      <td>
                        <input
                          type="text"
                          value={item.Risks}
                          name="Risks"
                          onChange={(e) => handleRiskDetailsChange(e, index)}
                          onBlur={() =>
                            handleBlur(index, item.Risk_ID, item.Risks)
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "transparent",
                            border: "none",
                            textAlign: "center",
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6 mt-3"
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            height: "120px",
          }}
        >
          <div className="d-flex">
            {/* <div className="col-3">
              <label className="form-label">Risks</label>
            </div> */}
            {/* <div className="col-8 mt-2">
              <input
                type="text"
                className="in-field"
                name="risk"
                value={formData.risk}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div> */}
            <div className="col-2">
              <label className="form-label">Risks</label>
            </div>
            <div className="col-10 mt-2">
              <textarea
                className=" form-control sticky-top"
                name="risk"
                rows="2"
                id=""
                value={formData.risk}
                onChange={handleInputChange}
                style={{ fontSize: "12px" }}
                disabled={!formData.tabsEnable}
              ></textarea>
            </div>
          </div>

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                onClick={handleAddRisk}
                disabled={!formData.tabsEnable}
              >
                Add
              </button>
            </div>
            <div className="col-auto">
              <button
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                onClick={() => handleDeleteRisk(formData.selectedRow3)}
                disabled={!formData.tabsEnable}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Any Other Information</label>
          <textarea
            className="form-control sticky-top  mt-1"
            name="otherInfo"
            rows="2"
            id=""
            value={formData.otherInfo}
            onChange={handleInputChange}
            style={{ fontSize: "12px" }}
            disabled={!formData.tabsEnable}
          ></textarea>
        </div>

        <div className="col-md-6 col-sm-12">
          <label className="form-label">Conclusion of Review</label>
          <textarea
            className="form-control sticky-top mt-1 input-field"
            name="conclusion"
            rows="2"
            id=""
            value={formData.conclusion}
            onChange={handleInputChange}
            style={{ fontSize: "12px" }}
            disabled={!formData.tabsEnable}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Risks;
