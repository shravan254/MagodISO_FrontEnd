import React from "react";
import { Table } from "react-bootstrap";

export default function QuoteDetails() {
  return (
    <>
      <div className="row col-md-12">
        <div className="col-md-8 mb-5">
          <div className="mt-3">
            <div
              style={{
                height: "330px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border">
                <thead
                  className="tableHeaderBGColor"
                  // style={{ textAlign: "center" }}
                >
                  <tr style={{ whiteSpace: "nowrap" }}>
                    <th>SL No</th>
                    <th>Joint No</th>
                    <th>Weld lenght in(MM)</th>
                    <th>Welding time in(sec)</th>
                    <th>Set up time(sec)</th>
                    <th>Fixture charges</th>
                    <th>Consumables</th>
                    <th>Set up charges</th>
                    <th>Load/Unload time in(sec)</th>
                    <th>Inspection charges</th>
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

        <div className="col-md-2">
          <div className="">
            <label className="form-label">Joint No</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Weld lenght in(MM)</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Welding time in(sec)</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Set up charges</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Fixture charges</label>
            <input type="text" />
          </div>

          <div className="d-flex mt-2" style={{ gap: "40px" }}>
            <div className="">
              <button className="button-style" variant="primary">
                Add
              </button>
            </div>

            <div className="">
              <button className="button-style" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-2">
          <div className="">
            <label className="form-label">Consumables</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Set up time(sec)</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Load/Unload time in(sec)</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Inspection charges</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Out Sourcing Charges</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
