import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const MaterialTable = () => {
  const [rows, setRows] = useState([{}, {}]);

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
    <div className="row">
      <div className="col-md-12">
        <Table striped>
          <thead>
            <tr>
              <th className="text-center">Material</th>
              <th></th>
              <th className="text-center">Thk</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ verticalAlign: "middle" }} className="text-center">
                  Material {index + 1}
                </td>
                <td>
                  <Form.Control type="text" />
                </td>
                <td style={{ verticalAlign: "middle" }} className="text-center">
                  Thk{index + 1}
                </td>
                <td>
                  <Form.Control />
                </td>
                <td></td>

                {index >= 2 && (
                  <td>
                    <button
                      className="button-style "
                      style={{ verticalAlign: "middle" }}
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

        {/* {rows.length <= 2 && (
          <button className="button-style" onClick={addRow}>
            Add Material  
          </button>
        )} */}
        {rows.length >= 2 && (
          <div>
            <button className="button-style" onClick={addRow}>
              Add Material
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaterialTable;
