import React, { useEffect, useState } from "react";

import { Row, Col, Form, FormLabel, Table } from "react-bootstrap";
import MaterialTable from "./MaterialTable";
import CustomerRequirements from "./CustomerRequirements";
import WeldingDetailsTable from "./WeldingDetailsTable";
import axios from "axios";

function FirstForm({formData, handleInputChange, nextPage, handleCheckboxChange,}) {

  const [field, setField] = useState({
    part_name: "",
    material: "",
    thickness: "",
    uom: "",
    quantity: "",
  });
  const [getValues, setGetValues] = useState([]);
  const [selectRow, setSelectRow] = useState([]);

  const [fillerYes, setFillerYes] = useState(false);
  const [fillerNo, setFillerNo] = useState(false);

  const formChange = (e) => {
    setField({ ...field, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("heybds", field);

    axios
      .post("http://localhost:4001/postData", field)
      .then((res) => {
        console.log("frontend data Posted");
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error in frontend", err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4001/getData")
      .then((res) => {
        console.log("table Data", res.data);
        setGetValues(res.data.Result);
        console.log(getValues[0].magod_id);
      })
      .catch((err) => {
        console.log("err in table", err);
      });
  }, []);

  const selectedRowFun = (item, index) => {
    let list = { ...item, index: index };
    setSelectRow(list);
  };

  return (
    <>
      <div className="row col-md-12">
        <div className="col-md-8">
          <div className="mt-3">
            <div
              style={{
                height: "400px",
                overflowY: "scroll",
                overflowX: "scroll",
              }}
            >
              <Table className="table-data border" striped>
                <thead
                  className="tableHeaderBGColor"
                  style={{ textAlign: "center" }}
                >
                  <tr>
                    {/* <th>Sl No</th> */}
                    <th>Magod ID</th>
                    <th>Part Name/Part Number</th>
                    <th>Material</th>
                    <th>Thickness</th>
                    <th>UOM</th>
                    <th>Quantity</th>
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
                        <td>{item.magod_id}</td>
                        <td>{item.part_name}</td>
                        <td>{item.material}</td>
                        <td>{item.thickness}</td>
                        <td>{item.uom}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-2">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label className="form-label">Magod ID</label>
              {/* <label style={{color: "#f20707", fontSize: "16px", fontWeight: "bold",}}>*</label> */}
              <input type="text" />
            </div>

            <div className="">
              <label className="form-label">Part Name/Part Number</label>
              <input
                type="text"
                name="part_name"
                value={field.part_name}
                onChange={formChange}
                required
              />
            </div>

            <div className="">
              <label className="form-label">Material</label>
              <input
                type="text"
                name="material"
                value={field.material}
                onChange={formChange}
                required
              />
            </div>

            <div className="">
              <label className="form-label">Thickness</label>
              <input
                type="number"
                name="thickness"
                value={field.thickness}
                onChange={formChange}
                required
              />
            </div>

            <div className="">
              <label className="form-label">UOM</label>
              <input
                type="text"
                name="uom"
                value={field.uom}
                onChange={formChange}
                required
              />
            </div>

            <div className="">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={field.quantity}
                onChange={formChange}
                required
              />
            </div>

            <div className="d-flex">
              <div className="">
                <button className="button-style" variant="primary">
                  Add Parts
                </button>
              </div>

              <div className="">
                <button className="button-style" variant="primary">
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row col-md-12">
        <div className="col-md-8">
          <WeldingDetailsTable />
        </div>

        <div className="col-md-4 mb-3 mt-5">
          <div className="">
            <label className="form-label">Welding Sequence</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">No of Parts</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">No Of Weld Joins</label>
            <input type="text" />
          </div>

          <div className="d-flex">
            <div className="">
              <button className="button-style" variant="primary">
                Add Sequence
              </button>
            </div>

            <div className="">
              <button
                className="button-style"
                variant="primary"
                style={{ width: "100px" }}
              >
                Delete
              </button>
            </div>

            <div className="">
              <button
                className="button-style"
                variant="primary"
                style={{ width: "100px" }}
              >
                Add Part
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row col-md-12 mb-3">
        <div className="col-md-8">
          <div className="mt-3">
            <div
              style={{
                height: "210px",
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
                    <th>Part Name</th>
                    <th>Quantity</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr className="">
                    {/* <td>Sl No</td> */}
                    {/* <td>Part Name</td>
                    <td>Quantity</td> */}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-5">
          <div className="">
            <label className="form-label">Part Name</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Quantity</label>
            <input type="number" />
          </div>

          <div className="d-flex">
            <div className="">
              <button className="button-style" variant="primary">
                Add Details
              </button>
            </div>

            <div className="">
              <button className="button-style" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row col-md-12 mb-5">
        <div className="col-md-8">
          <div className="">
            <div
              style={{
                height: "360px",
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
                    <th>Depth Of Penetration</th>
                    <th>Strenght</th>
                    <th>Hermetically Sealed Joint</th>
                    <th>Pull Strenght</th>
                    <th>Peel test</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr className="">
                    {/* <td>Sl No</td>  */}
                    {/* <td>Welding Sequence</td>
                    <td>No Of Parts</td>
                    <td>No of Weld Joins</td> */}
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <label className="form-label">Depth Of Penetration</label>
            <input type="number" />
          </div>

          <div className="">
            <label className="form-label">Strength</label>
            <input type="text" />
          </div>

          <div className="">
            <label className="form-label">Hermetically Sealed Joint</label>
            <select className="ip-select mt-1">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {/* <input type="text" /> */}
          </div>

          <div className="">
            <label className="form-label">Pull Strength</label>
            <input type="number" />
          </div>

          <div className="">
            <label className="form-label">Peel Test</label>
            <input type="number" />
          </div>

          <div className="d-flex">
            <div className="">
              <button className="button-style" variant="primary">
                Add Details
              </button>
            </div>

            <div className="">
              <button className="button-style" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
      <div className="form-style">
        <Col xs={12}>
          <div>
            <Form autoComplete="off">         
              <MaterialTable />
              <div className="row mt-4">
                <div className="col-md-4">
                    <label className="form-label">Joint Type</label>
                    <input type="text" onChange={handleInputChange} />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Qty/batch</label>
                    <input type="text" />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Qty/year</label>
                    <input type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                    <label className="form-label">Filler</label>
                  <div style={{ display: "flex", gap: "70px" }}>
                    <div className="mt-1 p-1">

                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="yes" onChange={() => setFillerYes(!fillerYes)} checked={fillerYes}/>
                        <label className="form-check-label checkBoxStyle" htmlFor="flexCheckDefault">Yes</label>
                      </div>

                    </div>

                    <div className="mt-1 p-1">

                      <div className="form-check ">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="no" onChange={() => setFillerNo(!fillerNo)} checked={fillerNo}/>
                        <label className="form-check-label checkBoxStyle" htmlFor="flexCheckDefault">No</label>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-2" as={Row} xs={6}>
                  {fillerYes ? (
                    <Form.Group>
                      <lable className="form-label">Filler Name</lable>
                      <input type="text" onChange={handleInputChange}/>
                    </Form.Group>
                  ) : (
                    <Form.Group controlId="fillerName">
                      <lable className="form-label">Filler Name</lable>
                      <input type="text" disabled />
                    </Form.Group>
                  )}
                </div>

                <div className="col-md-4">
                  {fillerYes ? (
                    <Form.Group>
                      <label className="form-label">Filler Size</label>
                      <input type="text" onChange={handleInputChange}/>
                    </Form.Group>
                  ) : (
                    <Form.Group>
                      <label className="form-label">Filler Size</label>
                      <input type="text" name="fillerSize" onChange={handleInputChange}
                        disabled/>
                    </Form.Group>
                  )}
                </div>
              </div>

              <div className="row mb-2">

                <div className="col-md-4">
                    <label className="form-label">Allowable Combination</label>
                    <input type="text" onChange={handleInputChange} />
                </div>

                <div className="col-md-4">
                    <label className="form-label">
                      Satutary and Regulatory Requirements
                    </label>
                    <input type="text" onChange={handleInputChange} />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Fixture Requirements</label>
                    <input type="text" onChange={handleInputChange} />
                </div>
              </div>

              <div className="d-flex mb-5">
              <div className="ms-2">
                <button className="button-style" variant="primary" onClick={handleSubmit}>
                Save
                </button>
              </div>

              <div className="ms-2">
                <button className="button-style" variant="primary" onClick={handleSubmit}>
                Cancel
                </button>
              </div>
            </div>
            </Form>
          </div>
        </Col>
      </div>
    </div> */}
    </>
  );
}

export default FirstForm;
