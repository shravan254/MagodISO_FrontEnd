import React, { useEffect, useState } from "react";
import { Col, Form, Table, FormLabel } from "react-bootstrap";
import Axios from "axios";
import { apipoints } from "../../../../../api/isoForms/rateEstimator";
import { toast } from "react-toastify";

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

  // const handleTestTypeSelect = (selectedTestType) => {
  //   console.log("selectedTestType", selectedTestType);
  //   Axios.post(apipoints.getTestList, { testTypeID: selectedTestType })
  //     .then((response) => {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         testListData: response.data,
  //       }));
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching test names", error);
  //     });
  // };

  const handleTestTypeSelect = (selectedTestType) => {
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

    Axios.post(apipoints.getTestTypeName, { testTypeID: selectedTestType })
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          testTypeName: response.data[0].Test_Type,
        }));
      })
      .catch((error) => {
        console.error("Error fetching test type names", error);
      });
  };

  const handleAddTest = async () => {
    try {
      const newTest = {
        qtnID: formData.qtnID,
        testTypeName: formData.testTypeName,
        testName: formData.testName,
        testDetails: formData.testDetails,
      };

      const response = await Axios.post(apipoints.insertTestDetails, newTest);

      setFormData((prevFormData) => ({
        ...prevFormData,

        testTableData: response.data,
        testType: "",
        testName: "",
        testDetails: "",
      }));
    } catch (error) {
      console.error("Error Adding Test", error);
      toast.error("Error Adding Test");
    }
  };

  const handleDeleteTest = async (testId) => {
    try {
      await Axios.post(apipoints.deleteTestDetails, { testId });

      setFormData((prevData) => ({
        ...prevData,
        testTableData: prevData.testTableData.filter(
          (item) => item.Test_ID !== testId
        ),
        selectedRow2: null,
      }));

      toast.success("Test deleted successfully");
    } catch (error) {
      console.error("Error Deleting Test", error);
      toast.error("Error Deleting Test");
    }
  };

  // console.log("testTableData", formData.testTableData);

  return (
    <>
      <div className="row col-md-12 mb-5">
        <div className="col-md-8 mb-5">
          <div className="mt-3">
            <div
              style={{
                height: "190px",
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
                    <th>SL No</th>
                    <th>Test Type</th>
                    <th>Test Name</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody style={{ textAlign: "center" }}>
                  {formData.testTableData.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowSelect(item.Test_ID)}
                      className={
                        formData.selectedRow2 === item.Test_ID
                          ? "selectedRowClr"
                          : ""
                      }
                    >
                      <td>{index + 1}</td>
                      <td>{item.Test_Type}</td>
                      <td>{item.Test_Name}</td>
                      <td>{item.Test_Details}</td>
                    </tr>
                  ))}
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
            height: "200px",
          }}
        >
          <div className="d-flex">
            <div className="col-3 mt-1">
              <label className="form-label">Test Type</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select dropdown-field mt-3"
                name="testType"
                value={formData.testType}
                // onChange={handleInputChange}
                onChange={(e) => {
                  handleInputChange(e);
                  handleTestTypeSelect(e.target.value);
                }}
                disabled={!formData.tabsEnable}
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
                className="ip-select dropdown-field mt-3"
                name="testName"
                value={formData.testName}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
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
            {/* <div className="col-8">
              <input
                type="text"
                name="testDetails"
                className="in-field"
                value={formData.testDetails}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div> */}
            <div className="col-8 mt-1">
              <textarea
                className="form-control sticky-top mt-1 input-field"
                name="testDetails"
                rows="2"
                id=""
                value={formData.testDetails}
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
                // className="button-style"
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                onClick={handleAddTest}
                disabled={!formData.tabsEnable}
              >
                Add
              </button>
            </div>
            <div className="col-auto">
              <button
                // className="button-style"
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                onClick={() => handleDeleteTest(formData.selectedRow2)}
                disabled={!formData.tabsEnable}
              >
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
