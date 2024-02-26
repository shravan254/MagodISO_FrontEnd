import React, { useEffect, useState } from "react";

import { Row, Col, Form, FormLabel, Table, Toast } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function WeldingDetails({
  formData,
  setFormData,
  handleInputChange,
  handleRowSelect,
}) {
  const handleAddMaterial = () => {
    const newMaterial = {
      material: formData.material,
      thickness: formData.thickness,
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      materialTableData: [...prevFormData.materialTableData, newMaterial],
      material: "",
      thickness: "",
    }));
  };

  const handleDeleteMaterial = (index) => {
    const updatedMaterialTableData = formData.materialTableData.filter(
      (_, i) => i !== index
    );
    setFormData((prevData) => ({
      ...prevData,
      materialTableData: updatedMaterialTableData,
      selectedRow1: null,
    }));
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8 col-sm-12 mt-2">
          <div
            style={{
              overflowX: "scroll",
              overflowY: "scroll",
              height: "125px",
            }}
          >
            <Table
              striped
              className="table-data border"
              style={{ border: "1px" }}
            >
              <thead
                className="tableHeaderBGColor"
                style={{
                  textAlign: "center",
                  position: "sticky",
                  top: "-1px",
                }}
              >
                <tr>
                  <th>SL No</th>
                  <th>Material</th>
                  <th>Thickness</th>
                </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                {formData.materialTableData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowSelect(index)}
                    className={`${
                      index === formData.selectedRow1 ? "selectedRowClr" : ""
                    } `}
                  >
                    <td>{index + 1}</td>
                    <td>{item.material}</td>
                    <td>{item.thickness}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-12 mt-2"
          style={{ backgroundColor: "#e6e6e6", padding: "10px" }}
        >
          {/* <div className="mb-1">
            <label className="form-label">Material</label>
           
            <input
              type="text"
              name="material"
              className="in-field"
              value={formData.material}
              onChange={handleInputChange}
            />
          </div> */}

          {/* <div className="mb-1">
            <label className="form-label">Thickness</label>
           
            <input
              type="text"
              name="thickness"
              className="in-field"
              value={formData.thickness}
              onChange={handleInputChange}
            />
          </div> */}

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Material</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="material"
                className="in-field"
                value={formData.material}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Thickness</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="thickness"
                className="in-field"
                value={formData.thickness}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* <div className="d-flex">
           
            <div className="">
              <button
                className="button-style1"
                variant="primary"
                onClick={handleAddMaterial}
              >
                Add
              </button>
            </div>

            <div className="">
              <button
                className="button-style1"
                variant="primary"
                onClick={() => handleDeleteMaterial(formData.selectedRow1)}
              >
                Delete
              </button>
            </div>
          </div> */}

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button
                className="button-style1"
                variant="primary"
                onClick={handleAddMaterial}
              >
                Add
              </button>
            </div>
            <div className="col-auto">
              <button
                className="button-style1"
                variant="primary"
                onClick={() => handleDeleteMaterial(formData.selectedRow1)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-6 col-sm-12">
          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Allowable Combination</label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="input-field"
                name="allowComb"
                value={formData.allowComb}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">
                Statutory & Regulatory Requirements
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="input-field"
                name="srRequirements"
                value={formData.srRequirements}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Joint type</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select"
                name="jointType"
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
              >
                <option value="" selected disabled hidden>
                  Select Joint Type
                </option>
                <option value="Butt Joint">Butt Joint</option>
                <option value="Tee Joint">Tee Joint</option>
                <option value="Lap Joint">Lap Joint</option>
                <option value="Corner Joint">Corner Joint</option>
                <option value="Edge Joint">Edge Joint</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Batch Qty</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="input-field"
                name="batchQty"
                value={formData.batchQty}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Year Qty</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="input-field"
                name="yearQty"
                value={formData.yearQty}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Depth Of Penetration</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="input-field"
                name="depthOfPen"
                value={formData.depthOfPen}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture Requirement</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select"
                name="fixtureReq"
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
              >
                <option value="" selected disabled hidden>
                  Select Fixture Requirement
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture Remarks</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="fixtureRemarks"
                value={formData.fixtureRemarks}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Strength</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                className="input-field"
                name="strength"
                value={formData.strength}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Hermatic Joint</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select"
                name="hermaticJoint"
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
              >
                <option value="" selected disabled hidden>
                  Select Hermatic Joint
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Allowable Deffects</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="allowableDeffects"
                value={formData.allowableDeffects}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div>
        <h4 className="form-title" style={{ fontSize: "14px" }}>
          <b>Input Geometry</b>
        </h4>
        <div className="row mb-2">
          <div className="col-md-4 col-sm-6">
            <div className="d-flex">
              <div className="col-4">
                <label className="form-label">Drawing Available</label>
              </div>
              <div className="col-8">
                <select
                  className="ip-select"
                  name="drawingAvailable"
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                >
                  <option value="" selected disabled hidden>
                    Select Drawing
                  </option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex">
              <div className="col-4">
                <label className="form-label">Inspection</label>
              </div>
              <div className="col-8">
                <select
                  className="ip-select"
                  name="inspection"
                  style={{ marginTop: "12px" }}
                >
                  <option value="" selected disabled hidden>
                    Select Inspection
                  </option>
                  <option value="DimensionChecks">Dimension Checks</option>
                  <option value="CMM">CMM</option>
                  <option value="SpecialGauges">Special Gauges</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex">
              <div className="col-4">
                <label className="form-label">Tool Path</label>
              </div>
              <div className="col-8">
                <select
                  className="ip-select"
                  name="toolPath"
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                >
                  <option value="" selected disabled hidden>
                    Select Tool Path
                  </option>
                  <option value="Manual Welding">Manual Welding</option>
                  <option value="Auotmatic Welding">Automatic Welding</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 col-sm-6">
            <div className="d-flex">
              <div className="col-4">
                <label className="form-label">Shipping / Delivery</label>
              </div>
              <div className="col-8">
                <select
                  className="ip-select"
                  name="shippingDelivery"
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                >
                  <option value="" selected disabled hidden>
                    Select Delivery
                  </option>
                  <option value="Magod Delivary">Magod Delivary</option>
                  <option value="Customer Pick Up">Customer Pick Up</option>
                  <option value="Transporter">Transporter</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex">
              <div className="col-4">
                <label className="form-label">Material Source</label>
              </div>
              <div className="col-8">
                <select
                  className="ip-select"
                  name="materialSource"
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                >
                  <option value="" selected disabled hidden>
                    Select Source
                  </option>
                  <option value="Magod">Magod</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="d-flex">
              <div className="col-4">
                <label className="form-label">Expected Delivery</label>
              </div>
              <div className="col-8">
                <input
                  type="date"
                  className="input-field"
                  name="expectedDelivery"
                  value={formData.expectedDelivery}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeldingDetails;
