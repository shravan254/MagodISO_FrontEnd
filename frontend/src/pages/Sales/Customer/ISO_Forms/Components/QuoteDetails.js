import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import TestTable from "./TestTable";

export default function QuoteDetails() {
  const [rows, setRows] = useState([
    {sl: "1", desc: "Material Costs"}, 
    {sl: "2", desc: "Filler Costs"}, 
    {sl: "3", desc: "Machine Setup Costs"}, 
    {sl: "4", desc: "Fixture Costs"}, 
    {sl: "", desc: "Total"}, 
    ]);

    const [columns, setColumns] = useState([
      {sl: "1", desc: "Number Of Joints"},
      {sl: "2", desc: "Length Of Weld"},
      {sl: "3", desc: "Welding Time"},
      {sl: "4", desc: "Inspectrion Costs"},
      {sl: "5", desc: "Consumables"},
      {sl: "6", desc: "Loading And Unloading"},
      {sl: "7", desc: "Labor Costs"},
      {sl: "", desc: "Total"},
    ])

  return (
    <div>
      <div className="row col-md-12">
      <div className="col-md-7">
        <h6><b>Cost/Batch</b></h6>
        <Table striped size="sm">
            <thead>
              <tr>
                <th>Sl_No</th>
                <th>Description</th>
                <th>Details</th>
                <th>UOM</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {columns.map((column) => (
                <tr>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-center"
                  >
                    {column.sl}
                  </td>
                  <td>
                    <td>{column.desc}</td>
                  </td>
                  <td>
                    <Form.Control type="text" />
                  </td>
                  <td>
                    <Form.Control type="text" />
                  </td>
                  <td>
                    <Form.Control type="text" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>


        <div className="col-md-5">
        <h6><b>Job Costs/Item</b></h6>
          <Table striped size="sm">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr>
                  <td
                    style={{ verticalAlign: "middle" }}
                    className="text-center"
                  >
                    {row.sl}
                  </td>
                  <td>
                    <td>{row.desc}</td>
                  </td>
                  <td>
                    <Form.Control type="number" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="col-mb-12">
        <TestTable type={"quote"}/>
      </div>







      {/* <div className="row">
              <div className="col-md-12">
                <Table striped>
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>Material Cost</td>

                      <td colSpan="3">
                        <Form.Control type="text" />
                      </td>

                      <td style={{ verticalAlign: "middle" }}>Inspection</td>

                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>Machine</td>
                      <td colSpan="3">
                        <Form.Control type="text" />
                      </td>

                      <td style={{ verticalAlign: "middle" }}>Testing</td>

                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>Filler</td>
                      <td colSpan="3">
                        <Form.Control type="text" />
                      </td>

                      <td style={{ verticalAlign: "middle" }}>Fixture</td>

                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>Qty</td>
                      <td colSpan="3">
                        <Form.Control type="text" />
                      </td>

                      <td style={{ verticalAlign: "middle" }}>TPI</td>

                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Total</td>
                    </tr>

                    <tr>
                      <td>Joint No</td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>

                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                    </tr>

                    <tr>
                      <td>Welding Length IN(mm)</td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                    </tr>

                    <tr>
                      <td>Welding Time IN(Minutes)</td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                    </tr>

                    <tr>
                      <td>Set Up</td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                    </tr>

                    <tr>
                      <td>Fixture Charges</td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                    </tr>

                    <tr>
                      <td>Consumables</td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                    </tr>

                    <tr>
                      <td>Set Up Charges</td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                      <td>
                        <Form.Control type="text" name="" />
                      </td>
                    </tr>

                    <tr>
                      <td>Load/Unload Time IN (Minutes)</td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>

                    <tr>
                      <td>Inspection Charges</td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                      <td>
                        <Form.Control type="text" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div> */}

      <div className="row">
        <div className="col-md-4">
          <label className="form-label">Filled By</label>
          <input
            type="text"
            //   onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Revieved By</label>
          <input
            type="text"
            //   onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="d-flex mb-5">
        <div className="ms-2">
          <button className="button-style" variant="primary">
            Save
          </button>
        </div>

        <div className="ms-2">
          <button className="button-style" variant="primary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
