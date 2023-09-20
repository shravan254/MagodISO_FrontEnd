import React from 'react';
import NabTab from "./Components/NavTab";
import "../../quotation.css"

export default function Adddetails() {
  return (
    <div>
     <div>
    <h4 className="form-title">Quotation Form</h4>
    <hr className="horizontal-line" />

    <div className="row">
    <div className="col-md-4">
        <label className="">Quotation No</label>
        <input type="text" />
      </div>
      
      <div className="col-md-4">
        <label className="">Quotation Date</label>
        <input type="date" />
      </div>

          <div className="col-md-4">
            <label>Valid Upto</label>
            <input type="date" />
          </div>
    </div>


    <div className="row">
      <div className="col-md-4">
          <label className="">Rivision No</label>
          <input type="text" />
        </div>

        <div className="col-md-4">
          <label className="">Enquiry Date</label>
          <input type="date" />
        </div>

        <div className="col-md-4">
          <label className="">Enquiry Ref</label>
          <input type="text" />
        </div>
      </div>

    <div className="row">
      <div className="col-md-4">
        <label className="">Prepared by</label>
        <input className="" />
      </div>
      <div className="col-md-4">
        <label className="">Customer</label>
        <input className="" />
      </div>
      <div className="col-md-4">
        <label className="">Contact</label>
        <input className="" />
      </div>
    </div>

    <div className="row">
          <div className="col-md-4">
            <label className="form-label">Quotation Type</label>
                  <select className="ip-select">
                 <option value="option 1"> A A Industries</option>
                 <option value="option 1">Test Industries</option>
                 <option value="option 1">Ahana Systems and solutions</option>
                </select>
            </div>
            <div className="col-md-4">
            <label className="">Quotation status</label>
              <input className="" />
            </div>

            <div className="col-md-4">
              <label className="">Email</label>
              <input className="" />
            </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <label className="">Telephone</label>
            <input className="" />
          </div>

        <div className="col-md-8">
           <label className="">Adress</label>
           <input className="" />
        </div>
     </div>
    

    <div className="row mt-2">
        <button className="button-style mt-2 group-button" style={{ width: "180px" }}>
            Save 
        </button>

        <button className="button-style mt-2 group-button" style={{ width: "180px" }}>
        Drawing Folder
      </button>

      <button className="button-style mt-2 group-button" style={{ width: "180px" }}>
        Print Quotation
      </button>

      <button className="button-style mt-2 group-button" style={{ width: "180px" }}>
        Send Quote
      </button>

      <button className="button-style mt-2 group-button" style={{ width: "180px" }}>
        Rate Estimator
      </button>

      <button className="button-style mt-2 group-button" style={{ width: "180px" }}>
       Import Rates
      </button>

    </div>
  </div>

  <div className="p-2">
    <div
      className="row mt-2"
      style={{ marginLeft: "-3px", marginBottom: "50px" }}
    >
      <NabTab />
    </div>
  </div>
  </div>
  )
}
