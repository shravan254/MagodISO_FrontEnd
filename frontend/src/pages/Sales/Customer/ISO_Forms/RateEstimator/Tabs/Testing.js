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
  const [selectedTestNames, setSelectedTestNames] = useState([]);

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

  useEffect(() => {
    Axios.post(apipoints.getSelectedTestNames, { qtnID: formData.qtnID })
      .then((response) => {
        const testNames = response.data.map((item) => item.Test_Name);
        setSelectedTestNames(testNames);
      })
      .catch((error) => {
        console.error("Error fetching selected test names", error);
      });
  }, [formData.qtnID]);

  useEffect(() => {
    Axios.post(apipoints.getJointName, { qtnID: formData.qtnID })
      .then((response) => {
        const joints = response.data.map((item) => item.Joint_No);
        setFormData((prevData) => ({
          ...prevData,
          jointNames: joints,
        }));
      })
      .catch((error) => {
        console.error("Error fetching selected test names", error);
      });
  }, [formData.qtnID, formData.quoteDetailsTableData]);

  // console.log("JointNames", formData.jointNames);

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
    if (formData.jointName === "") {
      toast.error("Select a Joint");
      return;
    }

    if (formData.testType === "") {
      toast.error("Select Test Type");
      return;
    }

    if (formData.testName === "") {
      toast.error("Select Test Name");
      return;
    }

    const testExistsForJoint = formData.testTableData.some(
      (item) =>
        item.Joint_No === formData.jointName &&
        item.Test_Name === formData.testName
    );

    if (testExistsForJoint) {
      toast.error("Test already selected for this joint");
      return;
    }

    try {
      const newTest = {
        qtnID: formData.qtnID,
        jointName: formData.jointName,
        testTypeName: formData.testTypeName,
        testName: formData.testName,
        testDetails: formData.testDetails,
        testCost: formData.testCost,
      };

      const response = await Axios.post(apipoints.insertTestDetails, newTest);

      setFormData((prevFormData) => ({
        ...prevFormData,

        testTableData: response.data,
        jointName: "",
        testType: "",
        testName: "",
        testDetails: "",
        testCost: 0,
      }));
      setSelectedTestNames([...selectedTestNames, formData.testName]);
    } catch (error) {
      console.error("Error Adding Test", error);
      toast.error("Error Adding Test");
    }
  };

  const handleDeleteTest = async (testId) => {
    try {
      if (!formData.selectedRow2) {
        toast.error("Select a row before deleting");
        return;
      }

      const deletedTest = formData.testTableData.find(
        (item) => item.Test_ID === testId
      );
      await Axios.post(apipoints.deleteTestDetails, { testId });

      setFormData((prevData) => ({
        ...prevData,
        testTableData: prevData.testTableData.filter(
          (item) => item.Test_ID !== testId
        ),
        selectedRow2: null,
      }));

      setSelectedTestNames((prevNames) =>
        prevNames.filter((name) => name !== deletedTest.Test_Name)
      );

      toast.success("Test deleted successfully");
    } catch (error) {
      console.error("Error Deleting Test", error);
      toast.error("Error Deleting Test");
    }
  };

  const handleTestDetailsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = formData.testTableData.map((item, idx) => {
      if (idx === index) {
        return { ...item, [name]: value };
      }
      return item;
    });

    setFormData((prevData) => ({
      ...prevData,
      testTableData: updatedItems,
    }));
  };

  const handleBlur = async (index, testId, testDetails, testCost) => {
    try {
      const updateData = {
        qtnID: formData.qtnID,
        testId: testId,
        testDetails: testDetails,
        testCost,
      };

      await Axios.post(apipoints.updateTestDetails, updateData);

      const updatedCost = [...formData.testTableData];
      updatedCost[index] = {
        ...updatedCost[index],
        testCost,
        testDetails,
      };

      setFormData((prevFormData) => ({
        ...prevFormData,
        testTableData: updatedCost,
      }));

      // toast.success("Material details updated successfully");
    } catch (error) {
      console.error("Error updating Test details", error);
    }
  };

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  return (
    <>
      <div className="row col-md-12 mb-5">
        <div className="col-md-8 mb-5">
          <div className="mt-3">
            <div
              style={{
                height: "250px",
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
                    <th>Joint No</th>
                    <th>Test Type</th>
                    <th>Test Name</th>
                    <th>Details</th>
                    <th>Cost</th>
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
                      <td>{item.Joint_No}</td>
                      <td>{item.Test_Type}</td>
                      <td>{item.Test_Name}</td>
                      {/* <td>{item.Test_Details}</td> */}
                      <td>
                        <input
                          type="text"
                          className="input-style"
                          value={item.Test_Details}
                          name="Test_Details"
                          onChange={(e) => handleTestDetailsChange(e, index)}
                          onBlur={() =>
                            handleBlur(
                              index,
                              item.Test_ID,
                              item.Test_Details,
                              item.Test_Cost
                            )
                          }
                        />
                      </td>
                      {/* <td>{item.Test_Cost}</td> */}
                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Test_Cost}
                          name="Test_Cost"
                          onChange={(e) => handleTestDetailsChange(e, index)}
                          min={0}
                          onBlur={() =>
                            handleBlur(
                              index,
                              item.Test_ID,
                              item.Test_Details,
                              item.Test_Cost
                            )
                          }
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
          className="col-md-4 col-sm-6 mt-2"
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            height: "260px",
          }}
        >
          <div className="d-flex">
            <div className="col-3 mt-1">
              <label className="form-label">Joint</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select dropdown-field mt-3"
                name="jointName"
                value={formData.jointName}
                // onChange={handleInputChange}
                onChange={(e) => {
                  handleInputChange(e);
                  // handleTestTypeSelect(e.target.value);
                }}
                disabled={!formData.tabsEnable}
              >
                <option value="" selected disabled hidden>
                  Select Joint
                </option>
                {formData.jointNames?.map((joint, index) => (
                  <option key={index} value={joint}>
                    {joint}
                  </option>
                ))}
              </select>
            </div>
          </div>
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

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Cost</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="testCost"
                value={formData.testCost}
                min={0}
                onChange={handleInputChange}
                className="in-field"
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
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
