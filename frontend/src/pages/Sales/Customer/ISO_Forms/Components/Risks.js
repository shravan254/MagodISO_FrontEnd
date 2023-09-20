import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const Risks = () => {
  const [rows, setRows] = useState([{}, {}, {}, {}, {}]);

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
    <div className="">
      <div className="col-md-12">
        <div className="col-md-12">
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Type Of Risk</th>
              <th>Risk Mitigation Plan (what?)</th>
              <th>Time Line (when?)</th>
              <th>Responsibilities (who?)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td style={{ verticalAlign: "middle" }} className="text-center">
                  {index + 1}
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
                {index >= 5 && (
                  <td>
                    <button
                      className="button-style"
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

        {/* {rows.length <= 5 && (
          <button className="button-style" onClick={addRow}>
            Add Row
          </button>
        )} */}
        {rows.length >= 5 && (
          <div>
            <button className="button-style" onClick={addRow}>
              Add Row
            </button>
          </div>
        )}
        </div>
      </div>

      <div className="col-md-12 mt-2 mb-2">
              <div className="">
                  <label className="form-label">Any Other Information</label>
                  <textarea className="form-control sticky-top" rows='2' id="" style={{height:'100px', resize:'none'}}></textarea>
              </div>

              <div className="">
                  <label className="form-label">Conclusion of Review</label>
                  <textarea className="form-control sticky-top" rows='2' id="" style={{height:'100px', resize:'none'}}></textarea>
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
};

export default Risks;
