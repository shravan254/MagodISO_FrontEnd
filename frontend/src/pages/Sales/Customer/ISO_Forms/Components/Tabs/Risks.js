import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const Risks = () => {
  return (
    <div className="">
      <div className="row col-md-12">
        <div className="col-md-8">
          <div className="mt-3">
            <div
              style={{
                height: "120px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border" striped>
                <thead
                  className="tableHeaderBGColor"
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr className="table-header">
                    <th>SL No</th>
                    <th>Risks</th>
                  </tr>
                </thead>

                <tbody style={{ textAlign: "center" }}>
                  {/* {getValues.map((item, key) => {
                    return (
                      <tr
                        onClick={() => selectedRowFun(item, key)}
                        className={
                          key === selectRow?.index ? "selcted-row-clr" : ""
                        }
                      >
                        
                        <td></td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-6 mt-3"
          style={{
            backgroundColor: "#e6e6e6",
            padding: "10px",
            height: "120px",
          }}
        >
          {/* <div className="">
            <label className="form-label">Risks</label>
            <input type="text" name="risks" className="input-field2" />
          </div> */}

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Risks</label>
            </div>
            <div className="col-8">
              <input type="text" className="in-field" />
            </div>
          </div>

          {/* <div className="d-flex mt-2">
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
          </div> */}

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button className="button-style1" variant="primary">
                Add
              </button>
            </div>
            <div className="col-auto">
              <button className="button-style1" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Any Other Information</label>
          <textarea
            className="form-control sticky-top mt-1"
            rows="2"
            id=""
          ></textarea>
        </div>

        <div className="col-md-6 col-sm-12">
          <label className="form-label">Conclusion of Review</label>
          <textarea
            className="form-control sticky-top mt-1"
            rows="2"
            id=""
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Risks;
