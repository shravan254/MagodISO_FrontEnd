import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import SolidStateLaserTabel from "./SolidStateLaserTabel";
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

      <div className="row col-md-12">
        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">Schedule No/Task No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Assembly Part Name/No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Sub-Assy Part Name/No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Qty Received</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Any Defects</label>
            <input type="text" required />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">Date</label>
            <input type="date" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Machine/Model No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Program No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Fixture Requirement</label>
            <input type="text" required />
          </div>

          <div className="mt-2">
            <label className="form-label">
              Lens distance[Focal Length] in mm
            </label>
            <input type="text" required />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mt-4" style={{ marginLeft: "180px" }}>
            <button className="button-style" variant="primary">
              Close
            </button>
          </div>

          <label className="form-label" style={{ marginTop: "60px" }}>
            Weld Settings Verified By
          </label>
          <div style={{ display: "flex", gap: "40px" }}>
            <div className="mt-1 p-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="qc"
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  QC
                </label>
              </div>
            </div>

            <div className="mt-1 p-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="weld engineer"
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  Weld Engineer
                </label>
              </div>
            </div>

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
                  Incharge
                </label>
              </div>
            </div>
          </div>

          <label className="form-label">First Part Inspection</label>
          <div>
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
                    Shift incharge
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
                    Weld Engineer
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
                    Incharge
                  </label>
                </div>
              </div>

              <div className="mt-1 p-1">
                <div className="form-check" style={{ marginLeft: "33px" }}>
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

          {/* <div className="ms-2 mt-4">
            <button className="button-style" variant="primary">
              Close
            </button>
          </div> */}
        </div>
      </div>

      <div className="row col-md-12 mt-3">
        <div className="col-md-8">
          <div className="bg-light border">
            <Table striped size="sm">
              <thead>
                <tr>
                  {/* <th></th> */}
                  <th>Copper Bus Bar</th>
                  <th>Nickel Bus Bar</th>
                  <th>Nickel Fuse Bus Bar</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    {index >= 1 && (
                      <td>
                        <button
                          className="button-style"
                          style={{ width: "80px" }}
                          onClick={(e) => deleteRow(e, index)}
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* {rows.length <= 1 && (
            <button className="button-style" style={{width: "90px"}} onClick={addRow}>
              Add Row
            </button>
          )} */}
            {rows.length >= 1 && (
              <div>
                <button
                  className="button-style"
                  style={{
                    width: "90px",
                    marginLeft: "20px",
                    marginBottom: "10px",
                  }}
                  onClick={addRow}
                >
                  Add Row
                </button>
              </div>
            )}
          </div>

          <div className="row col-md-12">
            <div className="col-md-6">
              <div className="mt-1">
                <label className="form-label">Type of Laser Equipment</label>
                <input type="text" required />
              </div>

              <div className="mt-1">
                <label className="form-label">Reweld Permitted</label>
                <input type="text" required />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mt-1">
                <label className="form-label">Fixture No</label>
                <input type="text" required />
              </div>

              <div className="mt-1">
                <label className="form-label">Machine Peak Power</label>
                <input type="text" required />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2">
          <div className="mt-1">
            <label className="form-label">Material Thickness</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">With Filler</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Filler Material</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Batch No/Charge No</label>
            <input type="text" required />
          </div>
        </div>
      </div>

      <div className="row col-md-12">
        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">Control Plan No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">PFD No</label>
            <input type="text" required />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">PQR No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Standard Parameter Ref</label>
            <input type="text" required />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">WPS No</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">WI No</label>
            <input type="text" required />
          </div>
        </div>
      </div>

      <h3 className="form-title  mt-4 ms-2">
        <b>Welding Parameters</b>
      </h3>
      <div className="row col-md-12">
        <div className="col-md-4 border bg-light">
          <SolidStateLaserTabel />
        </div>

        <div className="col-md-4 border bg-light">
          <CoTable />
        </div>

        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">Pre flow Gas in lpm</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Post flow Gas in lpm</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Design Type</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Weld Single Side</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Weld Double Side</label>
            <input type="text" required />
          </div>

          <div className="mt-1">
            <label className="form-label">Gas Type</label>
            <input type="text" required />
          </div>

          <label className="form-label">Backing</label>
          <div className="" style={{ display: "flex", gap: "70px" }}>
            <div className="mt-1 p-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="yes"
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  yes
                </label>
              </div>
            </div>

            <div className="mt-1 p-1">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="no"
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

          <label className="form-label">Tack Weld</label>
          <div className="" style={{ display: "flex", gap: "70px" }}>
            <div className="mt-1 p-1">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="yes"
                  id="flexCheckDefault"
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
                  type="checkbox"
                  id="flexCheckDefault"
                  name="no"
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
      </div>

      <div className="row col-md-12">
        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">Note</label>
            <input type="text" required />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">Prepared By</label>
            <input type="text" required />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mt-1">
            <label className="form-label">Welding Operator Stamp</label>
            <input type="text" required />
          </div>
        </div>
      </div>

      <div className="mb-5 mt-1">
        <button className="button-style" variant="primary">
          Save
        </button>
      </div>
    </>
  );
}
