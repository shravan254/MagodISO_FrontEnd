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
                height: "140px",
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
            <div className="d-flex">
              <div className="col-md-3">
                <label className="form-label">Material</label>
              </div>
              <div className="col-md-7 mt-1">
                <input
                  type="text"
                  name="material"
                  value={field.material}
                  onChange={formChange}
                  // required
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="col-md-3">
                <label className="form-label">Thickness</label>
              </div>
              <div className="col-md-7 mt-1">
                <input
                  type="number"
                  name="thickness"
                  value={field.thickness}
                  onChange={formChange}
                  // required
                />
              </div>
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
        <div className="row col-md-6">
          <div className="col-md-2">
            <label className="form-label">Allowable Combination</label>
          </div>
          <div className="col-md-9 mt-2">
            <input type="text" />
          </div>
        </div>
        <div className="row col-md-6">
          <div className="col-md-4">
            <label className="form-label">
              Statutory & Regulatory Requirements
            </label>
          </div>
          <div className="col-md-8 mt-2">
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="row col-md-12 mb-2">
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Join type</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
        <div className="d-flex col-md-3">
          <div className="col-md-5">
            <label className="form-label">Batch Qty</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Year Qty</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
        <div className="d-flex col-md-3">
          <div className="col-md-6">
            <label className="form-label">Fixture Requirement</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="row col-md-12">
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Depth Of Penetration</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
        <div className="d-flex col-md-3">
          <div className="col-md-5">
            <label className="form-label">Strength</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Hermatic Jiont</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
        <div className="d-flex col-md-3">
          <div className="col-md-6">
            <label className="form-label">Allowable Deffects</label>
          </div>
          <div className="col-md-6 mt-1">
            <input type="text" />
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h4 className="form-title ms-2" style={{ fontSize: "15px" }}>
          <b>Input Geometry</b>
        </h4>
        <div className="row mb-2">
          <div className="d-flex col-md-4">
            <div className="col-md-4">
              <label className="form-label">Drawing Available</label>
            </div>
            <div className="col-md-7 mt-1">
              <select
                className="ip-select mt-1"
                name="jobType"
                onChange={handleInputChange}
              >
                <option value="" selected disabled hidden>
                  Select Drawing
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="d-flex col-md-4">
            <div className="col-md-3">
              <label className="form-label">Inspection</label>
            </div>
            <div className="col-md-8 mt-1">
              <select
                className="ip-select mt-1"
                name="jobType"
                onChange={handleInputChange}
              >
                <option value="" selected disabled hidden>
                  Select Inspection
                </option>
                <option value="DimensionChecks">Dimension Checks</option>
                <option value="CMM">CMM</option>
                <option value="SpecialGauges">Special Gauges</option>
              </select>
            </div>
          </div>

          <div className="d-flex col-md-4">
            <div className="col-md-4">
              <label className="form-label">Tool Path</label>
            </div>
            <div className="col-md-8 mt-1">
              <select
                className="ip-select mt-1"
                name="jobType"
                onChange={handleInputChange}
              >
                <option value="" selected disabled hidden>
                  Select Path
                </option>
                <option value="Manual">Manual</option>
                <option value="customerPickUp">Customer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="d-flex col-md-4">
            <div className="col-md-4">
              <label className="form-label">Shipping/Delivery</label>
            </div>
            <div className="col-md-7 mt-1">
              <select
                className="ip-select mt-1"
                name="jobType"
                onChange={handleInputChange}
              >
                <option value="" selected disabled hidden>
                  Select Delivery
                </option>
                <option value="MagodDelivary">Magod Delivary</option>
                <option value="customerPickUp">Customer Pick Up</option>
                <option value="Transporter">Transporter</option>
                {/* <option value="others">Others</option> */}
              </select>
            </div>
          </div>

          <div className="d-flex col-md-4">
            <div className="col-md-3">
              <label className="form-label">Material Source</label>
            </div>
            <div className="col-md-8 mt-1">
              <select
                className="ip-select mt-1"
                name="jobType"
                onChange={handleInputChange}
              >
                <option value="" selected disabled hidden>
                  Select Source
                </option>
                <option value="MagodDelivary">Magod</option>
                <option value="customerPickUp">Customer</option>
              </select>
            </div>
          </div>

          <div className="d-flex col-md-4">
            <div className="col-md-4">
              <label className="form-label">Expected Delivery</label>
            </div>
            <div className="col-md-8 mt-1">
              <input type="date" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeldingDetails;
