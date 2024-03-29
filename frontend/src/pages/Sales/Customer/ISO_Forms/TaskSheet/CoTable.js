import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

export default function CoTable() {
  const [rows, setRows] = useState([
    { desc: "Power transmission efficiency in Watts", details: "" },
    { desc: "Power in Watts", details: "" },
    { desc: "Frequency in Hz", details: "" },
    { desc: "Beam dia in mm", details: "" },
    { desc: "Focus in mm", details: "" },
    { desc: "Gas Pressure in lpm(Avg)", details: "" },
    { desc: "Feed rate in mm/min", details: "" },
    { desc: "RPM", details: "" },
    { desc: "Gas purity in %", details: "" },
    { desc: "Gas range in mm", details: "" },
    { desc: "Gas flow Orientation in deg", details: "" },
  ]);

  return (
    <div className="mt-3">
      <h5 className="form-title">
        <b>CO2 Laser - Parameters</b>
      </h5>
      <Table striped size="sm">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <td>{row.desc}</td>
              </td>
              <td>
                <input
                  className="mb-1"
                  type="text"
                  style={{ borderRadius: "4px", border: "none" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
