import React, { useEffect, useState } from "react";
import { Col, Form, Table, FormLabel } from "react-bootstrap";
import Axios from "axios";
import { apipoints } from "../../../../../api/isoForms/isoForms";

function Testing({
  formData,
  setFormData,
  handleInputChange,
  handleRowSelect,
}) {
  useEffect(() => {
    Axios.get(apipoints.getTestType)
      .then((response) => {
        // console.log("Test Type Response", response.data);
        setFormData((prevData) => ({
          ...prevData,
          testTypeData: response.data,
        }));
      })
      .catch((error) => {
        console.error("Error Fecthing", error);
      });
  }, []);

  const handleTestTypeSelect = (selectedTestType) => {
    console.log("selectedTestType", selectedTestType);
    Axios.post(apipoints.getTestList, { testTypeID: selectedTestType })
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          testListData: response.data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching test names", error);
      });
  };

  return (
    <>
      <div className="row col-md-12 mb-5">
        <div className="col-md-8 mb-5">
          <div className="mt-3">
            <div
              style={{
                height: "160px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border">
                <thead
                  className="tableHeaderBGColor"
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr className="table-header">
                    <th>SL No</th>
                    <th>Test Type</th>
                    <th>Test Name</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody style={{ textAlign: "center" }}>
                  {/* {getTestValues?.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        onClick={() => handleRowSelect(index)}
                        className={`${
                          index === formData.selectedRow1
                            ? "selectedRowClr"
                            : ""
                        } `}
                      >
                        <td>Sl No</td>
                        <td>{item.Type_of_test}</td>
                        <td>{item.Test_name}</td>
                        <td>{item.Test_details}</td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-sm-6 mt-2"
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            height: "170px",
          }}
        >
          <div className="d-flex">
            <div className="col-3">
              <label className="form-label mt-1">Test Type</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select2 dropdown-field mt-3"
                name="testType"
                value={formData.testType}
                // onChange={handleInputChange}
                onChange={(e) => {
                  handleInputChange(e);
                  handleTestTypeSelect(e.target.value);
                }}
              >
                <option value="" selected disabled hidden>
                  Select Test Type
                </option>
                {formData.testTypeData?.map((testType, index) => (
                  <option key={index} value={testType.Test_Type_ID}>
                    {testType.Test_Type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3 mt-1">
              <label className="form-label">Test Name</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select2 dropdown-field mt-3"
                name="testName"
                value={formData.testName}
                onChange={handleInputChange}
              >
                <option value="" selected disabled hidden>
                  Select Test
                </option>

                {formData.testListData?.map((testName, index) => (
                  <option key={index} value={testName.Test_Name}>
                    {testName.Test_Name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Details</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="testDetails"
                className="in-field"
                value={formData.testDetails}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button className="button-style1" variant="primary">
                Add
              </button>
            </div>
            <div className="col-auto">
              <button className="button-style1" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
