import React from 'react'
import { Table } from 'react-bootstrap'

export default function WeldingDetailsTable() {
  return (
    <div className='mt-3'>
            <div style={{height:"280px",overflowY: "scroll",overflowX:'scroll'}}>
                <Table className='table-data border'>
                    <thead className='tableHeaderBGColor' style={{textAlign:"center"}}>
                        <tr>
                        {/* <th>Sl No</th> */}
                        <th>Welding Sequence</th>
                        <th>No Of Parts</th>
                        <th>No of Weld Joins</th>
                        </tr>
                    </thead>


                    <tbody className='tablebody'>
                        <tr className="" >
                            {/* <td>Sl No</td> */}
                            {/* <td>Welding Sequence</td>
                            <td>No Of Parts</td>
                            <td>No of Weld Joins</td> */}
                        </tr>
                    </tbody>
                </Table>
            </div>
    </div>
  )
}
