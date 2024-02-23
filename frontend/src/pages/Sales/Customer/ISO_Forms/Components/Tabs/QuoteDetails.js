import React from "react";
import { Table } from "react-bootstrap";

export default function QuoteDetails() {
  return (
    <>
      <div className="row mt-1">
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Material Cost</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Filler Cost</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Machine</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Filler</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Qty</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Unit Price</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-8 mb-5">
          <div className="mt-3">
            <div
              style={{
                height: "300px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border">
                <thead
                  className="tableHeaderBGColor"
                  style={{
                    // textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr style={{ whiteSpace: "nowrap" }} className="table-header">
                    <th>SL No</th>
                    <th>Joint No</th>
                    <th>Weld Lenght</th>
                    <th>Welding Time</th>
                    <th>Set Up Iime</th>
                    <th>Fixture Charges</th>
                    <th>Consumables</th>
                    <th>Set Up Charges</th>
                    <th>Load/Unload Time</th>
                    <th>Inspection Charges</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  {/* {getTestValues?.map((item, key) => {
                    return (
                      <tr
                        onClick={() => selectedRowFun(item, key)}
                        className={
                          key === selectRow?.index ? "selcted-row-clr" : ""
                        }
                      >
                        <td>Sl No</td>
                        <td>{item.Type_of_test}</td>
                        <td>{item.Test_name}</td>
                        <td>{item.Test_details}</td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="col-md-2 mt-1">
          <div className="">
            <label className="form-label">Joint No</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Weld Lenght In(MM)</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Welding Time In(sec)</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Set Up Time(sec)</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Load/Unload Time In(sec)</label>
            <input type="text" className="input-field2" />
          </div>

          {/* <div className="">
            <label className="form-label">Total Time</label>
            <input type="text" className="input-field2" />
          </div> */}

          <div className="d-flex mt-2">
            <div className="">
              <button className="button-style1" variant="primary">
                Add
              </button>
            </div>

            <div className="">
              <button className="button-style1" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-2 mt-1">
          <div className="">
            <label className="form-label">Consumables</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Fixture Charges</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Set Up Charges</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Inspection Charges</label>
            <input type="text" className="input-field2" />
          </div>

          <div className="">
            <label className="form-label">Out Sourcing Charges</label>
            <input type="text" className="input-field2" />
          </div>

          {/* <div className="">
            <label className="form-label">Total Charges</label>
            <input type="text" className="input-field2" />
          </div> */}
        </div>
      </div>

      <div className="row">
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total Weld Length</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total Weld Time</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total Setup Time</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total Fixture Charges</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total Consumables</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total SetUp Charges</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total Load Unload Time</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Total Inspection Charges</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Inspection</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Testing</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">Fixture</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>

        <div className="d-flex col-md-3">
          <div className="col-md-4">
            <label className="form-label">TPI</label>
          </div>
          <div className="col-md-8">
            <input className="input-field" type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
