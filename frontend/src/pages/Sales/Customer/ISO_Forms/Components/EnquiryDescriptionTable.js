import React, { useState } from 'react'
import { Form, Table } from 'react-bootstrap'

export default function EnquiryDescriptionTable() {

    const [rows, setRows] = useState([
      {sl: "1", desc: "Part Size", details: "", remarks: "", action: ""}, 
      {sl: "2", desc: "Material Specification", details: "", remarks: "", action: ""}, 
      {sl: "3", desc: "Thickness", details: "", remarks: "", action: ""}, 
      {sl: "4", desc: "Tolerance", details: "", remarks: "", action: ""}, 
      {sl: "5", desc: "Quantity", details: "", remarks: "", action: ""}, 
      {sl: "6", desc: "Feasibility", details: "", remarks: "", action: ""}, 
      {sl: "7", desc: "Quality Requiremnents", details: "", remarks: "", action: ""}, 
      {sl: "8", desc: "Inspection/Testing Requirements", details: "", remarks: "", action: ""}, 
      {sl: "9", desc: "Fixture Requirements", details: "", remarks: "", action: ""}, 
      {sl: "10", desc: "Outsourcing/Sub contract requirements", details: "", remarks: "", action: ""}, 
      {sl: "11", desc: "Other Requiremnents", details: "", remarks: "", action: ""}]);

    const addRow = (e) => {
      e.preventDefault();
      setRows([...rows, {desc:<Form.Control type="text"/>}]);
    };
  
    const deleteRow = (e, index) => {
      e.preventDefault();
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRows(updatedRows);
    };  

  return (
    <div>
       <h5 className='mt-3'><b>Observations</b></h5>
     <div className="col-md-12">
        <Table striped size="sm">
          <thead>
            <tr>
              
              <th>Sl No</th>
              <th>Description</th>
              <th>Details (what)</th>
              <th>Remarks</th>
              <th>Followup Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              
              <tr key={index}>
                <td style={{ verticalAlign: "middle" }} className="text-center">
                   {index+1}
                </td>
                <td>
                  <td>{row.desc}</td>
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
                {index >= 11 && (
                  <td>
                    <button
                      className="button-style"
                      onClick={(e) => deleteRow(e, index)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>

        {/* {rows.length <= 11 && (
          <button className="button-style" onClick={addRow}>
            Add Row
          </button>
        )} */}
        {rows.length >= 11 && (
          <div>
            <button className="button-style" onClick={addRow}>
              Add Row
            </button>
          </div>
        )}
        </div>  
    </div>
  )
}
