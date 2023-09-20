import React from "react";
import { Table, Form } from "react-bootstrap";

function TestNDT() {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>NDT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "middle" }}>DP Test</td>
            {/* className="text-center" */}
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Leak</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Pressure</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>X-RAY</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>MPI</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>UT</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Other</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TestNDT;
