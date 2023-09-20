import React, { useState } from "react";
import { Col, Form, Table, FormLabel } from "react-bootstrap";
import TestNDT from "./TestNDT";
import TestDT from "./TestDT";
import Risks from "./Risks";
import Ex from "./Ex";
import TestTable from "./TestTable";

function SecondForm({ handleInputChange, handleSubmit }) {
  
  const [showInput, setShowInput] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "Non Destructive Test" },
    { value: "option2", label: "Destructive Test" },
    { value: "option3", label: "Thermal Test" },
    { value: "option4", label: "Electric Test" },
    { value: "Other", label: "Other Test" },
  ];

  const nameOptions = [
    { value: "option1", label: "DP Test" },
    { value: "option2", label: "Leak" },
    { value: "option3", label: "Pressure" },
    { value: "option4", label: "X-RAY" },
    { value: "option5", label: "MPI" },
    { value: "option6", label: "UT" },
    { value: "option7", label: "Tensile" },
    { value: "option8", label: "Bend" },
    { value: "option9", label: "Macro Examination" },
    { value: "option10", label: "Form/CUP Test" },
    { value: "option11", label: "Hardness" },
    { value: "option12", label: "Diffusivity" },
    { value: "option13", label: "Conduction" },
    { value: "option14", label: "Conductivity" },
    { value: "Other", label: "Other" },
  ];

  const handleClick = (e) => {
    if (e.target.value === "Other") {
      setShowInput(!showInput);
    }
  };

  const handleBox = (e)=>{
    if (e.target.value === "Other") {
      setShowBox(!showBox);
    }
  }

  return (
    <>
      <div className="row col-md-12 mb-5">
        <div className="col-md-8 mb-5">
          <TestTable/>
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
                <input type="text" />
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
                <input type="text" />
              </div>
            )}
          </div>  

          <div className="">
            <label className="form-label">Details</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">UOM</label>
            <input type="text" />
          </div>

          <div className="d-flex">
            <div className="">
              <button className="button-style" variant="primary">
                Add Details
              </button>
            </div>

            <div className="">
              <button className="button-style" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div className="form-style">
    //     <Col>
    //       <div>
    //         <div className="row">
    //           <div className="col-md-4">
    //             <TestNDT />
    //           </div>

    //           <div className="col-md-4">
    //             <TestDT />
    //           </div>

    //           <div className="col-md-4">
    //             <div className="row">
    //               <div className="col-md-12">
    //                 <Table striped>
    //                   <thead>
    //                     <tr>
    //                       <th>Thermal</th>

    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     <tr>
    //                       <td style={{ verticalAlign: "middle" }}>
    //                         Diffusivity
    //                       </td>

    //                       <td>
    //                         <Form.Control type="text" />
    //                       </td>
    //                     </tr>
    //                     <tr>
    //                       <td style={{ verticalAlign: "middle" }}>
    //                         Conduction
    //                       </td>
    //                       <td>
    //                         <Form.Control type="text" />
    //                       </td>
    //                     </tr>
    //                   </tbody>
    //                 </Table>
    //               </div>
    //             </div>
    //             <div className="row">
    //               <div className="col-md-12">
    //                 <Table striped>
    //                   <thead>
    //                     <tr>
    //                       <th>Electrical</th>
    //                       <th></th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     <tr>
    //                       <td style={{ verticalAlign: "middle" }}>
    //                         Conductivity
    //                       </td>

    //                       <td>
    //                         <Form.Control
    //                           type="text"
    //                           onChange={handleInputChange}
    //                         />
    //                       </td>
    //                     </tr>
    //                   </tbody>
    //                 </Table>
    //               </div>
    //             </div>
    //             <Ex/>
    //           </div>
    //         </div>

    //         <div className="row">
    //           <div className="col-md-12">
    //           </div>
    //         </div>

    //         <div className="d-flex mb-5">
    //           <div className="ms-2">
    //             <button className="button-style" variant="primary">
    //             Save
    //             </button>
    //           </div>

    //           <div className="ms-2">
    //             <button className="button-style" variant="primary">
    //             Cancel
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </Col>
    //   </div>
    // </div>
  );
}

export default SecondForm;
