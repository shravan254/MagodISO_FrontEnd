import React, { useEffect, useState } from "react";
import { Col, Form, Table, FormLabel } from "react-bootstrap";

function Testing({
  formData,
  setFormData,
  handleInputChange,
  handleRowSelect,
}) {
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);
  const options = [
    { value: "Non Destructive Test", label: "Non Destructive Test" },
    { value: "Destructive Test", label: "Destructive Test" },
    { value: "Thermal Test", label: "Thermal Test" },
    { value: "Electric Test", label: "Electric Test" },
  ];

  const nameOptions = {
    "Non Destructive Test": [
      { value: "DP Test", label: "DP Test" },
      { value: "Leak", label: "Leak" },
      { value: "Pressure", label: "Pressure" },
      { value: "X-RAY", label: "X-RAY" },
      { value: "MPI", label: "MPI" },
      { value: "UT", label: "UT" },
      { value: "Other", label: "Other" },
    ],
    "Destructive Test": [
      { value: "Tensile", label: "Tensile" },
      { value: "Bend", label: "Bend" },
      { value: "Macro Examination", label: "Macro Examination" },
      { value: "Form/CUP Test", label: "Form/CUP Test" },
      { value: "Hardness", label: "Hardness" },
      { value: "Other", label: "Other" },
    ],
    "Thermal Test": [
      { value: "Diffusivity", label: "Diffusivity" },
      { value: "Conduction", label: "Conduction" },
    ],
    "Electric Test": [{ value: "Conductivity", label: "Conductivity" }],
  };

  const handleFirstSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSecondSelectOptions(nameOptions[selectedValue]);
    setFormData((prevData) => ({
      ...prevData,
      testName: "",
    }));
    handleInputChange(e);
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
            backgroundColor: "#e6e6e6",
            padding: "10px",
            height: "170px",
          }}
        >
          {/* <div className="">
            <label className="form-label">Test Type</label>
            <select
              className="ip-select mt-1"
              name="testType"
              value={formData.testType}
              onChange={handleFirstSelectChange}
            >
              <option value="" selected disabled hidden>
                Select Test Type
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div> */}

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label mt-1">Test Type</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select2 dropdown-field mt-3"
                name="testType"
                value={formData.testType}
                onChange={handleFirstSelectChange}
              >
                <option value="" selected disabled hidden>
                  Select Test Type
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <div className="">
            <label className="form-label">Test Name</label>
            <select
              className="ip-select mt-1"
              name="testName"
              value={formData.testName}
              onChange={handleInputChange}
            >
              <option value="" selected disabled hidden>
                Select Test
              </option>

              {secondSelectOptions.map((nameOption) => (
                <option key={nameOption.value} value={nameOption.value}>
                  {nameOption.label}
                </option>
              ))}
            </select>
          </div> */}

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

                {secondSelectOptions.map((nameOption) => (
                  <option key={nameOption.value} value={nameOption.value}>
                    {nameOption.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* <div className="">
            <label className="form-label">Details</label>
            <input
              type="text"
              className="input-field2"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
            />
          </div> */}

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Details</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="material"
                className="in-field"
                value={formData.details}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* <div className="d-flex">
            <div className="">
              <button className="button-style1" variant="primary">
                Add
              </button>
            </div>

            <div className="">
              <button className="button-style1" variant="primary">
                Delete
              </button>
            </div>
          </div> */}

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
