import React, { useEffect, useState } from "react";

import { Row, Col, Form, FormLabel, Table, Toast } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function WeldingDetails({
  formData,
  handleInputChange,
  nextPage,
  handleCheckboxChange,
}) {
  const [field, setField] = useState({
    part_name: "",
    material: "",
    thickness: "",
    uom: "",
    quantity: "",
  });

  const [getValues, setGetValues] = useState([]);
  const [selectRow, setSelectRow] = useState("");
  const [selectPartId, setSelectPartId] = useState(null);

  const [fillerYes, setFillerYes] = useState(false);
  const [fillerNo, setFillerNo] = useState(false);

  const [showInput, setShowInput] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showHardCopy, setShowHardCopy] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const formChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

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

  const selectedRowFun = (item, index) => {
    let list = { ...item, index: index };
    setSelectRow(list);
    setSelectPartId(list.Part_id);
  };

  return (
    <>
      <div className="row col-md-12 mb-3">
        <div className="col-md-8">
          <div className="mt-3">
            <div
              style={{
                height: "180px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border" striped>
                <thead
                  className="tableHeaderBGColor"
                  // style={{ textAlign: "center" }}
                >
                  <tr>
                    <th>SL No</th>
                    <th>Material</th>
                    <th>Thickness</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  {getValues.map((item, key) => {
                    return (
                      <tr
                        onClick={() => selectedRowFun(item, key)}
                        className={
                          key === selectRow?.index ? "selcted-row-clr" : ""
                        }
                      >
                        {/* <td>Sl No</td> */}
                        <td>{item.Material}</td>
                        <td>{item.Thickness}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-2 mt-3">
          <form>
            <div className="">
              <label className="form-label">Material</label>
              <input
                type="text"
                name="material"
                value={field.material}
                onChange={formChange}
                // required
              />
            </div>

            <div className="">
              <label className="form-label">Thickness</label>
              <input
                type="number"
                name="thickness"
                value={field.thickness}
                onChange={formChange}
                // required
              />
            </div>

            <div className="d-flex">
              <div className="">
                <button className="button-style" variant="primary">
                  Add Material
                </button>
              </div>

              <div className="">
                <button className="button-style" variant="primary">
                  Delete Material
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row col-md-12">
        <div className="col-md-4">
          <div className="">
            <label className="form-label">Join type</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <label className="form-label">Allowable Combination</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <label className="form-label">
              Statutory & Regulatory Requirements
            </label>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="row col-md-12 mb-2">
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Prototype Qty</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Batch Qty</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Year Qty</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Fixture Requirement</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="row col-md-12">
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Depth Of Penetration</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Strength</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Hermatic Jiont</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <label className="form-label">Allowable Deffects</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <div>
        <h4 className="form-title  mt-4 ms-2">
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
              {showUpload && (
                <div className="">
                  <label className="form-label">Upload Copy</label>
                  <input
                    className="form-control"
                    type="file"
                    onChange={handleFileChange}
                  />
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

        <div className="row mb-5">
          <div className="col-md-4">
            <label className="form-label">Shipping/Delivery</label>
            <select className="ip-select mt-1" onClick={(e) => handleClick(e)}>
              <option value="MagodDelivary">Magod Delivary</option>
              <option value="customerPickUp">Customer Pick Up</option>
              <option value="Transporter">Transporter</option>
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
      </div>
    </>
  );
}

export default WeldingDetails;
