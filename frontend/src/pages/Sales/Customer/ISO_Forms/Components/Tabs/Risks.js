import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

const Risks = () => {
  const [rows, setRows] = useState([{}, {}, {}, {}, {}]);
  const [getValues, setGetvalues] = useState([]);
  const [selectRow, setSelectRow] = useState("");

  const selectedRowFun = (item, index) => {
    let list = { ...item, index: index };
    setSelectRow(list);
    // setSelectPartId(list.Part_id);
  };

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
    <div className="">
      <div className="row col-md-12">
        <div className="col-md-8">
          <div className="mt-3">
            <div
              style={{
                height: "160px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border" striped>
                <thead
                  className="tableHeaderBGColor"
                  style={{
                    // textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr className="table-header">
                    <th>SL No</th>
                    <th>Risks</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  {getValues.map((item, key) => {
                    return (
                      <tr
                        onClick={() => selectedRowFun(item, key)}
                        className={
                          key === selectRow?.index ? "selcted-row-clr" : ""
                        }
                      >
                        {/* <td>Sl No</td> */}
                        <td></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2">
          <div className="">
            <label className="form-label">Risks</label>
            <input
              type="text"
              name="risks"
              className="input-field"
              style={{ margin: "0px" }}
            />
          </div>

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
      </div>

      <div className="row mb-5">
        <div className="col-md-6">
          <label className="form-label">Any Other Information</label>
          <textarea
            className="form-control sticky-top mt-1"
            rows="2"
            id=""
          ></textarea>
        </div>

        <div className="col-md-6">
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
