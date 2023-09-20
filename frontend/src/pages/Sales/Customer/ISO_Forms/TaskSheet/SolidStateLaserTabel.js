import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap';

export default function SolidStateLaserTabel() {

    const [rows, setRows] = useState([
        { desc: "Power at focus Watts/Volts", details: ""}, 
        { desc: "Focus dia in mm", details: ""}, 
        { desc: "Pulse duration in ms", details: ""}, 
        { desc: "pulse frequency in Hz", details: ""}, 
        { desc: "Pulse shape No", details: ""}, 
        { desc: "Gas pressure in lpm(Avg)", details: ""}, 
        { desc: "Feed rate in mm/min", details: ""}, 
        { desc: "RPM", details: ""}, 
        { desc: "Gas purity in %", details: ""}, 
        { desc: "Gas range in mm", details: ""}, 
        { desc: "Gas flow Orientation in deg", details: ""}]);

  return (
    <div className='mt-3'>
        <h5><b>Solid State Laser - Parsameters(PW)</b></h5>
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
                  <Form.Control type="text" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  )
}
