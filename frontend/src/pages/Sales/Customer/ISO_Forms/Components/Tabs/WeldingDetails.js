import React, { useEffect, useState } from "react";
import Axios from "axios";
import { apipoints } from "../../../../../api/isoForms/isoForms";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";

function WeldingDetails({
  formData,
  setFormData,
  handleInputChange,
  handleRowSelect,
}) {
  const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    Axios.get(apipoints.getJointType)
      .then((response) => {
        // console.log("Joint Type Response", response.data);
        setFormData((prevData) => ({
          ...prevData,
          jointTypeData: response.data,
        }));
      })
      .catch((error) => {
        // console.error("Error Fetching", error);
      });
  }, []);

  useEffect(() => {
    Axios.get(apipoints.getInspection)
      .then((response) => {
        // console.log("Inspection Type Response", response.data);
        setFormData((prevData) => ({
          ...prevData,
          inspectionData: response.data,
        }));
      })
      .catch((error) => {
        console.error("Error Fecthing", error);
      });
  }, []);

  useEffect(() => {
    Axios.get(apipoints.getToolpath)
      .then((respone) => {
        // console.log("Tool Path Response", respone.data);
        setFormData((prevData) => ({
          ...prevData,
          toolPathData: respone.data,
        }));
      })
      .catch((error) => {
        console.log("Error Fecthing", error);
      });
  }, []);

  useEffect(() => {
    Axios.get(apipoints.getDelivery)
      .then((response) => {
        // console.log("Delivery Response", response.data)
        setFormData((prevData) => ({
          ...prevData,
          deliveryData: response.data,
        }));
      })
      .catch((error) => {
        console.error("Error Fetching", error);
      });
  }, []);

  useEffect(() => {
    Axios.get(apipoints.getMaterialSource)
      .then((respone) => {
        // console.log("Material Source Response", respone.data)
        setFormData((prevData) => ({
          ...prevData,
          materialSourceData: respone.data,
        }));
      })
      .catch((error) => {
        console.log("Error Fetching", error);
      });
  }, []);

  // const handleAddMaterial = () => {
  //   const newMaterial = {
  //     material: formData.material,
  //     thickness: formData.thickness,
  //   };

  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     materialTableData: [...prevFormData.materialTableData, newMaterial],
  //     material: "",
  //     thickness: "",
  //   }));
  // };

  const handleAddMaterial = async () => {
    try {
      const newMaterial = {
        qtnID: formData.qtnID,
        material: formData.material,
        thickness: formData.thickness,
      };

      const response = await Axios.post(
        apipoints.insertMaterialDetails,
        newMaterial
      );

      setFormData((prevFormData) => ({
        ...prevFormData,

        materialTableData: response.data,
        material: "",
        thickness: "",
      }));
    } catch (error) {
      console.error("Error Adding Material", error);
      toast.error("Error Adding Material");
    }
  };

  console.log("materialTableData", formData.materialTableData);

  // const handleDeleteMaterial = (index) => {
  //   const updatedMaterialTableData = formData.materialTableData.filter(
  //     (_, i) => i !== index
  //   );
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     materialTableData: updatedMaterialTableData,
  //     selectedRow1: null,
  //   }));
  // };

  const handleDeleteMaterial = async (materialId) => {
    try {
      await Axios.post(apipoints.deleteMaterialDetails, { materialId });

      setFormData((prevData) => ({
        ...prevData,
        materialTableData: prevData.materialTableData.filter(
          (item) => item.Material_ID !== materialId
        ),
        selectedRow1: null,
      }));

      toast.success("Material deleted successfully");
    } catch (error) {
      console.error("Error Deleting Material", error);
      toast.error("Error Deleting Material");
    }
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
                    onClick={() => handleRowSelect(item.Material_ID)}
                    // className={`${
                    //   index === formData.selectedRow1 ? "selectedRowClr" : ""
                    // } `}
                    className={
                      formData.selectedRow1 === item.Material_ID
                        ? "selectedRowClr"
                        : ""
                    }
                  >
                    <td>{index + 1}</td>
                    <td>{item.Material}</td>
                    <td>{item.Thickness}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-12 mt-2"
          style={{ backgroundColor: "#f0f0f0", padding: "10px" }}
        >
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

                {formData.jointTypeData?.map((joint, index) => (
                  <option key={index} value={joint.Joint_Type}>
                    {joint.Joint_Type}
                  </option>
                ))}
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
                <option value="1">Yes</option>
                <option value="0">No</option>
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
                <option value="1">Yes</option>
                <option value="0">No</option>
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
                  onChange={handleInputChange}
                >
                  <option value="" selected disabled hidden>
                    Select Inspection
                  </option>

                  {formData.inspectionData?.map((insp, index) => (
                    <option key={index} value={insp.Inspection_Name}>
                      {insp.Inspection_Name}
                    </option>
                  ))}
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

                  {formData.toolPathData.map((tool, index) => (
                    <option key={index} value={tool.Tool_Path}>
                      {tool.Tool_Path}
                    </option>
                  ))}
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

                  {formData.deliveryData?.map((del, index) => (
                    <option key={index} value={del.Delivery}>
                      {del.Delivery}
                    </option>
                  ))}
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

                  {formData.materialSourceData?.map((msource, index) => (
                    <option key={index} value={msource.MtrlSource}>
                      {msource.MtrlSource}
                    </option>
                  ))}
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
                  min={today}
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
