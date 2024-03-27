import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

export default function SolidStateLaserTable() {
  const [rows, setRows] = useState([
    { desc: "Power at focus Watts/Volts", details: "" },
    { desc: "Focus dia in mm", details: "" },
    { desc: "Pulse duration in ms", details: "" },
    { desc: "pulse frequency in Hz", details: "" },
    { desc: "Pulse shape No", details: "" },
    { desc: "Gas pressure in lpm(Avg)", details: "" },
    { desc: "Feed rate in mm/min", details: "" },
    { desc: "RPM", details: "" },
    { desc: "Gas purity in %", details: "" },
    { desc: "Gas range in mm", details: "" },
    { desc: "Gas flow Orientation in deg", details: "" },
  ]);

  return (
    <div className="mt-3">
      <h5 className="form-title">
        <b>Solid State Laser - Parameters(PW)</b>
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
