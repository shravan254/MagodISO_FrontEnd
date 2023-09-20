import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

function CustomerRequirements({ formData }) {
  const [showInput, setShowInput] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showHardCopy, setShowHardCopy] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClick = (e) => {
    if (e.target.value === "others") {
      setShowInput(!showInput);
    }
  };

  const handleBox = () => {
    setOpenInput(!openInput);
  };

  const handleUpload = () => {
    setShowUpload(true);
  };

  const handleHardcopy = () => {
    setShowHardCopy(true);
    // setShowUpload(false);
  };

  const handleNo = () => {
    setShowHardCopy(false);
    setShowUpload(false);
  };

  const handleYes = () => {
    setShowUpload(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the selected file
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // Perform file upload or other operations
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* <div className="col-md-12">
        <Table striped>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ verticalAlign: "middle" }}>Depth of Penetration</td>

              <td>
                <Form.Control type="text" name="" />
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "middle" }}>Strength</td>
              <td>
                <Form.Control type="text" name="" />
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "middle" }}>Hermatic Joint</td>
              <td>
                <Form.Control type="text" name="" />
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: "middle" }}>Allowable Defects</td>
              <td>
                <Form.Control type="text" name="" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div> */}
        </div>

        <h4 className="form-title  mt-4">
          <b>Input Geometry</b>
        </h4>
        <div className="row">
          <div className="col-md-4">
            <div className="">
              <label className="form-label">Drawing Available</label>
              <div style={{ display: "flex", gap: "70px" }}>
                <div className="mt-1 p-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="flexRadioDefaultA1"
                      name="flexRadioDefaultA"
                      onClick={handleHardcopy}
                    />
                    <label
                      className="form-check-label checkBoxStyle"
                      htmlFor="flexCheckDefault"
                    >
                      Yes
                    </label>
                  </div>
                </div>

                <div className="mt-1 p-1">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="flexRadioDefaultA2"
                      name="flexRadioDefaultA"
                      onClick={handleNo}
                    />
                    <label
                      className="form-check-label checkBoxStyle"
                      htmlFor="flexCheckDefault"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              {showHardCopy && (
                <div className="">
                  <label className="form-label">Is It Hardcopy</label>
                  <div style={{ display: "flex", gap: "70px" }}>
                    <div className="mt-1 p-1">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="flexRadioDefaultA3"
                          name="flexRadioDefaultA1"
                          onClick={handleYes}
                        />
                        <label
                          className="form-check-label checkBoxStyle"
                          htmlFor="flexCheckDefault"
                        >
                          Yes
                        </label>
                      </div>
                    </div>

                    <div className="mt-1 p-1">
                      <div className="form-check ">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="flexRadioDefaultA4"
                          name="flexRadioDefaultA1"
                          onClick={handleUpload}
                        />
                        <label
                          className="form-check-label checkBoxStyle"
                          htmlFor="flexCheckDefault"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="">
              {showUpload && (
                <div className="">
                  <label className="form-label">Upload Copy</label>
                  <input className="form-control" type="file" onChange={handleFileChange} />
                </div>
              )}
            </div>
          </div>
          
          <div className="col-md-4">
            <label className="form-label">Inspection</label>
            <div className="" style={{ display: "flex", gap: "70px" }}>
              <div className="mt-1 p-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="shift incharge"
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label checkBoxStyle"
                    htmlFor="flexCheckDefault"
                  >
                    Dimension Checks
                  </label>
                </div>
              </div>

              <div className="mt-1 p-1">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="weld engineer"
                  />
                  <label
                    className="form-check-label checkBoxStyle"
                    htmlFor="flexCheckDefault"
                  >
                    CMM
                  </label>
                </div>
              </div>
            </div>

            <div className="" style={{ display: "flex", gap: "70px" }}>
              <div className="mt-1 p-1">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="incharge"
                  />
                  <label
                    className="form-check-label checkBoxStyle"
                    htmlFor="flexCheckDefault"
                  >
                    Special Gauges
                  </label>
                </div>
              </div>

              <div className="mt-1 p-1">
                <div className="form-check" style={{ marginLeft: "19px" }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="project manager"
                  />
                  <label
                    className="form-check-label checkBoxStyle"
                    htmlFor="flexCheckDefault"
                  >
                    Visual Inspection
                  </label>
                </div>
              </div>
            </div>

            <div className="" style={{ display: "flex", gap: "70px" }}>
              <div className="mt-1 p-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    name="project manager"
                    onClick={handleBox}
                  />
                  <label
                    className="form-check-label checkBoxStyle"
                    htmlFor="flexCheckDefault"
                  >
                    Others
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="">
              <label className="form-label">Tool Path</label>
              <select className="ip-select mt-1">
                <option value="MagodDelivary">Manual</option>
                <option value="customerPickUp">Automatic</option>
              </select>
            </div>

            <div className="">
              <label className="form-label">Material Souce</label>
              <select className="ip-select mt-1">
                <option value="MagodDelivary">Magod</option>
                <option value="customerPickUp">Customer</option>
              </select>
            </div>

            {openInput && (
              <div className="">
                <label className="form-label">Others</label>
                <input type="text" />
              </div>
            )}
          </div>
        </div>

        <h4 className="form-title  mt-4">
          <b>Shipping/Delivery</b>
        </h4>

        <div className="row">
          <div className="col-md-4">
            <label className="form-label">Transporter</label>
            <select className="ip-select mt-1" onClick={(e) => handleClick(e)}>
              <option value="MagodDelivary">Magod Delivary</option>
              <option value="customerPickUp">Customer Pick Up</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="col-md-4">
            {showInput && (
              <div className="">
                <label className="form-label">Others</label>
                <input type="text" />
              </div>
            )}
          </div>

          <div className="col-md-4">
            <label className="form-label">Expected Delivery</label>
            <input type="date" />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4"></div>
        </div>

        <div className="d-flex mb-5">
          <div className="ms-2">
            <button type="submit" className="button-style" variant="primary">
              Save
            </button>
          </div>

          <div className="ms-2">
            <button className="button-style" variant="primary">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CustomerRequirements;
