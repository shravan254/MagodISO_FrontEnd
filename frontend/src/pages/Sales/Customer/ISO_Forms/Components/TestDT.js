import React from "react";
import { Table, Form } from "react-bootstrap";

function TestDT() {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>DT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Tensile</td>
            {/* className="text-center" */}
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Bend</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Macro Examination</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Form/CUP Test</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: "middle" }}>Hardness</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>

          <tr>
            <td style={{ verticalAlign: "middle" }}>Others</td>
            <td>
              <Form.Control type="text" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TestDT;
