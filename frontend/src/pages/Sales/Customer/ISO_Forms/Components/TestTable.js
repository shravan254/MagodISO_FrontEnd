import React from 'react'
import { Table } from 'react-bootstrap'

export default function TestTable({type}) {
  return (
       <div className="mt-3">
            <div
              style={{
                height: "280px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border">
               <thead
                  className="tableHeaderBGColor"
                  style={{ textAlign: "center" }}
                >
                  <tr>
                    {/* <th>Sl No</th> */}
                    <th>Test Name</th>
                    <th>Details</th>
                    <th>UOM</th>
                    {type === "quote"? <th>Cost</th> : ''}
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr className="">
                    {/* <td>Sl No</td>  */}
                    {/* <td>test name</td>
                    <td>Details</td>
                    <td>uom</td>
                    {type === "quote"? <td>Cost</td> : ''} */}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
  )
}
