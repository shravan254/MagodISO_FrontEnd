import React from 'react';
import Tables from "../../../../../../components/Tables";
import { QuotationdData,table2data } from "./DataList";

export default function QuotationItemList() {

  const getHeadings = () => {
    return Object.keys(QuotationdData[0]);
  };

  const getHeadings1 = () => {
    return Object.keys(table2data[0]);
  };

  return (
  <div>
    <div className="row">
      <div className="col-md-4 col-sm-12">
        <div className="ip-box form-bg ">
          <div className="row">
            <div className="row">
              <div className="col-md-12 ">
                <label className="">Item Name</label>
                <input className="in-field" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label className="">Material</label>
                <input className="in-field" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label className="">Operation</label>
                <input className="in-field" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Quantity</label>
                <input className="in-field" />
              </div>
              </div>
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Basic Price</label>
                <input className="in-field" />
              </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Discount Amount</label>
                <input className="in-field" />
              </div>
              </div>
              <div className="col-md-6">
              <div className="col-md-12 ">
                <label className="">Final Price</label>
                <input className="in-field" />
              </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
              <div className="col-md-12 ">
                <label className="">Total Amount</label>
                <input className="in-field" />
              </div>
              </div>
            </div>

          </div>

          <div className="row justify-content-center mt-2">
            <button className="button-style " style={{ width: "120px" }}>
              Add Item
            </button>
            <button
              className="button-style "
              style={{ width: "120px", marginLeft: "4px" }}
            >
              Delete
            </button>
          </div>

          <div className="row justify-content-center mt-3 mb-2">
            <button className="button-style " style={{ width: "250px" }}>
              Tax Details Click Here
            </button>
            </div>

        </div>
      </div>

      <div className="col-md-8 col-sm-12">
          <div
            className="table-data"
            style={{ height: "500px",overflowY: "scroll" }}
          >
            <Tables theadData={getHeadings()} tbodyData={QuotationdData} />
          </div>
        </div>
    </div>

   <div className="row">
    <div className="col-md-12 col-sm-12 mt-5">
          <div
            className="table-data"
            style={{ height: "250px", overflowY: "scroll" }}
          >
            <Tables theadData={getHeadings1()} tbodyData={table2data} />
          </div>
        </div>
   </div>
    

  </div>
  )
}
