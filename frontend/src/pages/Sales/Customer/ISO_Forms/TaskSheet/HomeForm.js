import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import SolidStateLaserTable from "./SolidStateLaserTable";
import CoTable from "./CoTable";

export default function HomeForm() {
  const [rows, setRows] = useState([{}]);
  const [row, setRow] = useState([{ desc: "Part Size" }]);

  const addRow = (e) => {
    e.preventDefault();
    setRows([...rows, {}]);
  };

  const deleteRow = (e, index) => {
    e.preventDefault();
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <>
      <div>
        <h4 className="title ">Task Sheet For-Laser Welding</h4>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Schedule No/Task No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Date</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Assembly Name/No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="d-flex col-md-3 col-sm-6" style={{ gap: "25px" }}>
          <div className="col-md-2" style={{ marginLeft: "40px" }}>
            <button type="submit" className="button-style" variant="primary">
              Save
            </button>
          </div>

          <div className="col-md-2">
            <button className="button-style" variant="primary">
              Print
            </button>
          </div>

          <div className="col-md-2">
            <button type="submit" className="button-style" variant="primary">
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Any Defects</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine/Model No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Program No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture Requirement</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Lens Distance(mm)</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Material Thickness</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">With Filler</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Filler Material</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Batch No/Charge No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine Peak Power</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Type Of Laser Equipment</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Reweld Permitted</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Control Plan No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">WPS No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">PFD No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">WI No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">PQR No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Standard Parameter Ref</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6">
          <label className="form-label">First Part Inspection</label>
          <div className="row">
            <div className="col-md-3 col-sm-6">
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
                  {/* Shift incharge */}
                  QC
                </label>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
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
                  Weld Engineer
                </label>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
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
                  Incharge
                </label>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="form-check">
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
                  Project Manager
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6">
          <label className="form-label">Weld Settings Verified by</label>
          <div className="row">
            <div className="col-md-3 col-sm-6">
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
                  {/* Shift incharge */}
                  QC
                </label>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
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
                  Weld Engineer
                </label>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
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
                  Incharge
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-8 mt-2">
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
                style={{
                  // textAlign: "center",
                  position: "sticky",
                  top: "-1px",
                }}
              >
                <tr className="table-header">
                  <th>SL No</th>
                  <th>Sub-assy Part Name/No</th>
                  <th>Qty Received</th>
                </tr>
              </thead>

              <tbody>
                {/* {getValues.map((item, key) => {
                  return (
                    <tr
                      onClick={() => selectedRowFun(item, key)}
                      className={
                        key === selectRow?.index ? "selcted-row-clr" : ""
                      }
                    >
                      <td>{item.Material}</td>
                      <td>{item.Thickness}</td>
                    </tr>
                  );
                })} */}
              </tbody>
            </Table>
          </div>
        </div>

        <div
          className="col-md-4"
          style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
        >
          <div className="">
            <label className="form-label">Sub-assy Part Name/No</label>
            <input
              type="text"
              className="input-field mt-1"
              style={{ margin: "0px", borderRadius: "5px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Qty Received</label>
            <input
              type="text"
              className="input-field mt-1"
              style={{ margin: "0px", borderRadius: "5px" }}
            />
          </div>

          <div className="d-flex justify-content-center">
            <div className="mx-2">
              <button className="button-style" variant="primary">
                Add
              </button>
            </div>

            <div className="mx-2">
              <button className="button-style" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="form-title  mt-3" style={{ marginLeft: "325px" }}>
        <b>Welding Parameters</b>
      </h3>

      <div className="row col-md-12">
        <div className="col-md-4 border bg-light" style={{ height: "415px" }}>
          <SolidStateLaserTable />
        </div>

        <div className="col-md-4 border bg-light" style={{ height: "415px" }}>
          <CoTable />
        </div>

        <div className="col-md-4">
          <div className="">
            <label className="form-label">Pre flow Gas in lpm</label>
            <input
              type="text"
              className="input-field"
              style={{ margin: "0px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Post flow Gas in lpm</label>
            <input
              type="text"
              className="input-field"
              style={{ margin: "0px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Design Type</label>
            <select
              className="ip-select"
              name="jobType"
              style={{ marginTop: "1px" }}
            >
              <option value="" selected disabled hidden>
                Select Design Type
              </option>
              <option value="yes">Butt</option>
              <option value="no">Joint</option>
            </select>
          </div>

          <div className="">
            <label className="form-label">Weld Side</label>
            <select
              className="ip-select"
              name="jobType"
              style={{ marginTop: "1px" }}
            >
              <option value="" selected disabled hidden>
                Select Welding Side
              </option>
              <option value="yes">Single</option>
              <option value="no">Double</option>
            </select>
          </div>

          <div className="">
            <label className="form-label">Gas Type</label>
            <input
              type="text"
              className="input-field"
              style={{ margin: "0px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Backing</label>
            <select
              className="ip-select"
              name="jobType"
              style={{ marginTop: "1px" }}
            >
              <option value="" selected disabled hidden>
                Select Backing
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="">
            <label className="form-label">Tack Weld</label>
            <select
              className="ip-select"
              name="jobType"
              style={{ marginTop: "1px" }}
            >
              <option value="" selected disabled hidden>
                Select Tack Weld
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="">
            <label className="form-label">Note</label>
            <input
              type="text"
              className="input-field"
              style={{ margin: "0px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
