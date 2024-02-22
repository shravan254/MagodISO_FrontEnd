import React, { useEffect, useState } from "react";
import { Col, Form, Table, FormLabel } from "react-bootstrap";

function Testing({ handleInputChange, handleSubmit }) {
  const [showInput, setShowInput] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [testDetails, setTestDetails] = useState("");
  const [testUOM, setTestUOM] = useState("");
  const [testCost, setTestCost] = useState("");
  const [getTestValues, setGetTestValues] = useState([]);
  const [selectRow, setSelectRow] = useState("");
  const [selectRowId, setSelectRowId] = useState("");
  const [otherTypeOfTest, setOtherTypeOfTest] = useState("");
  const [otherTestName, setOtherTestName] = useState("");

  const options = [
    { value: "Non Destructive Test", label: "Non Destructive Test" },
    { value: "Destructive Test", label: "Destructive Test" },
    { value: "Thermal Test", label: "Thermal Test" },
    { value: "Electric Test", label: "Electric Test" },
    // { value: "Other", label: "Other Test" },
  ];

  const nameOptions = [
    { value: "DP Test", label: "DP Test" },
    { value: "Leak", label: "Leak" },
    { value: "Pressure", label: "Pressure" },
    { value: "X-RAY", label: "X-RAY" },
    { value: "MPI", label: "MPI" },
    { value: "UT", label: "UT" },
    { value: "Tensile", label: "Tensile" },
    { value: "Bend", label: "Bend" },
    { value: "Macro Examination", label: "Macro Examination" },
    { value: "Form/CUP Test", label: "Form/CUP Test" },
    { value: "Hardness", label: "Hardness" },
    { value: "Diffusivity", label: "Diffusivity" },
    { value: "Conduction", label: "Conduction" },
    { value: "Conductivity", label: "Conductivity" },
    { value: "Other", label: "Other" },
  ];

  const handleClick = (e) => {
    if (e.target.value === "Other") {
      setShowInput(!showInput);
    }
  };

  const handleBox = (e) => {
    if (e.target.value === "Other") {
      setShowBox(!showBox);
    }
  };

  const handleTestDetails = (e) => {
    setTestDetails(e.target.value);
  };

  const handleOtherTest = (e) => {
    setOtherTypeOfTest(e.target.value);
  };

  const handleOtherTestName = (e) => {
    setOtherTestName(e.target.value);
  };

  const selectedRowFun = (item, index) => {
    let list = { ...item, index: index };
    setSelectRow(list);
    setSelectRowId(list.Test_id);
  };

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
              <Table className="table-data border">
                <thead
                  className="tableHeaderBGColor"
                  // style={{ textAlign: "center" }}
                >
                  <tr>
                    <th>SL No</th>
                    <th>Type of test</th>
                    <th>Test Name</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  {getTestValues?.map((item, key) => {
                    return (
                      <tr
                        onClick={() => selectedRowFun(item, key)}
                        className={
                          key === selectRow?.index ? "selcted-row-clr" : ""
                        }
                      >
                        <td>Sl No</td>
                        <td>{item.Type_of_test}</td>
                        <td>{item.Test_name}</td>
                        <td>{item.Test_details}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <label className="form-label">Type Of Test</label>
            <select
              className="ip-select mt-1"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              onClick={(e) => handleClick(e)}
            >
              <option value="">Choose an option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {showInput && (
              <div className="">
                <label className="form-label">Other Test</label>
                <input type="text" onChange={handleOtherTest} />
              </div>
            )}
          </div>

          <div className="">
            <label className="form-label">Test Name</label>
            <select
              className="ip-select mt-1"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              onClick={(e) => handleBox(e)}
            >
              <option value="">Select the test name</option>
              {nameOptions.map((nameOption) => (
                <option key={nameOption.value} value={nameOption.value}>
                  {nameOption.label}
                </option>
              ))}
            </select>

            {showBox && (
              <div className="">
                <label className="form-label">Other Test Name</label>
                <input type="text" onChange={handleOtherTestName} />
              </div>
            )}
          </div>

          <div className="">
            <label className="form-label">Details</label>
            <input type="text" onChange={handleTestDetails} />
          </div>

          <div className="d-flex">
            <div className="">
              <button className="button-style" variant="primary">
                Add Test
              </button>
            </div>

            <div className="">
              <button className="button-style" variant="primary">
                Delete Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
