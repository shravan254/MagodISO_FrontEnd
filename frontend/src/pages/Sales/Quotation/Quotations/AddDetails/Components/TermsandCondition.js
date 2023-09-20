import React from 'react';
import { tcdata } from "./DataList";
import Tables from "../../../../../../components/Tables";
import Table from "react-bootstrap/Table";
import "../../../quotation.css"

export default function TermsandCondition() {

  const getHeadings = () => {
    return Object.keys(tcdata[0]);
  };

  return (
    <div className='row'>
      <div className='col-md-5 col-sm-12 mt-3'>
      <Table bordered>
      <thead style={{textAlign:"center"}}>
        <tr>
          <th>Select</th>
          <th>Terms</th>
        </tr>
      </thead>

      <tbody className='tablebody'>
        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
              All Rates Ex-Factory
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
             Rates are for Quantity mentioned,subject to change if  order quantity is different
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
              1:1 scale soft copy of drawing  will be  provided by customer.
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
             General Tolerance  are +/-0.1mm to 0.2mm/ mtr for pitch and dimension
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
              NIL for collection  from Ex-Factory  in loose  condition
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
              2% of Order Value as Packing  Charges  for  Packing
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
             Customer should  intimate the Mode of  Transport ,the  Agency and the Mode of payment in the PO
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
             50% Advance for  Material Balance Against Delivery 
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
              Subject to payment of complete  invoice amount  
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
              Tax As Applicable  at time of dispatch
            </td>
        </tr>

        <tr>
           <td>
            <input className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"/>
            </td>
            <td>
             Payment Against Delivery
            </td>
        </tr>
      </tbody>
    </Table>

    <div className="row justify-content-end  mt-4 mb-2">
      <button className="button-style " style={{ width: "150px" }}>
         Add Notes
      </button>
    </div>

      </div>


    <div className="col-md-7 col-sm-12 mt-3">
             <div className="table-data"
                 style={{ height: "600px", overflowY: "scroll" }}>
               <Tables theadData={getHeadings()} tbodyData={tcdata} />
             </div>
      </div>
  </div>

  )
}
