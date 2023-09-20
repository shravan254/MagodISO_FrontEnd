import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import EnquiryDescriptionTable from './EnquiryDescriptionTable';

export default function EnquiryReview() {

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
    <div>
        <div className="col-md-12">
            <div className="row col-md-12 mt-2">
                {/* <div className="col-md-4">
                    <label className="form-label">Customer Name</label>
                    <input type="text"/>
                </div> */}

                {/* <div className="col-md-4">
                    <label className="form-label">Unit</label>
                    <input type="text"/>
                </div> */}

                {/* <div className="col-md-4">
                    <label className="form-label">Date</label>
                    <input type="date"/>
                </div> */}
            </div>
            
            <div className="row col-md-12 mt-2 mb-2">
                {/* <div className="col-md-4">
                        <label className="form-label">Enquiry Reference</label>
                        <input type="text"/>
                </div> */}

                <div className="col-md-4">
                        <label className="form-label">Scope Of Work</label>
                        <input type="text"/>
                </div>

                {/* <div className="col-md-4">
                        <label className="form-label">Drawing No & Rev</label>
                        <input type="text"/>
                </div> */}
            </div>
        </div>

        <div className="mb-5">
            <h3 className="form-title  mt-4 ms-2"><b>Process: Laser Cutting/Laser Welding</b></h3>
            
            <h4 className="form-title  mt-4 ms-2">
            <b>Venue</b>
            </h4>

            <div className="row col-md-12 mt-2 mb-2">

                <div className="col-md-4">
                        <label className="form-label">Start Time</label>
                        <input type="text"/>
                </div>

                <div className="col-md-4">
                        <label className="form-label">End Time</label>
                        <input type="text"/>
                </div>
            </div>
        </div>

        <hr className="horizontal-line" />
        <h5><b>Participants</b></h5>

        <div className="col-md-12 mt-2">
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Department</th>
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

        <div className="col-md-12">
            <EnquiryDescriptionTable/>
        </div>

        <div className="col-md-4 mt-4 ms-2">
            <h4 className="form-title"><b>Signatures</b></h4>
        </div>

        <div className="row col-md-12 mb-2">
                <div className="col-md-6">
                        <label className="form-label">Project Lead</label>
                        <input type="text"/>
                </div>

                <div className="col-md-6">
                        <label className="form-label">General Manager</label>
                        <input type="text"/>
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
  )
}
