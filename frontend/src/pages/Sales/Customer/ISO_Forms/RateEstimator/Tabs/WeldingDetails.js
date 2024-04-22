import React, { useEffect, useState } from "react";
import Axios from "axios";
import { apipoints } from "../../../../../api/isoForms/rateEstimator";
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

  console.log("formData", formData);

  const handleAddMaterial = async () => {
    try {
      if (formData.material === "") {
        toast.error("Enter Material");
        return;
      }

      if (formData.thickness === "") {
        toast.error("Enter Material Thickness");
        return;
      }
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
        thickness: 0,
      }));
    } catch (error) {
      console.error("Error Adding Material", error);
      // toast.error("Error Adding Material");
    }
  };

  const handleDeleteMaterial = async (materialId) => {
    try {
      if (!formData.selectedRow1) {
        toast.error("Select a row before deleting");
        return;
      }
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
      // toast.error("Error Deleting Material");
    }
  };

  const handleMaterialChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = formData.materialTableData.map((item, idx) => {
      if (idx === index) {
        return { ...item, [name]: value };
      }
      return item;
    });

    setFormData((prevData) => ({
      ...prevData,
      materialTableData: updatedItems,
    }));
  };

  const handleBlur = async (index, materialID, material, thickness) => {
    try {
      const updateData = {
        qtnID: formData.qtnID,
        materialID: materialID,
        material,
        thickness,
      };

      await Axios.post(apipoints.updateMaterialDetails, updateData);

      const updatedMaterials = [...formData.materialTableData];
      updatedMaterials[index] = {
        ...updatedMaterials[index],
        material,
        thickness,
      };

      setFormData((prevFormData) => ({
        ...prevFormData,
        materialTableData: updatedMaterials,
      }));

      // toast.success("Material details updated successfully");
    } catch (error) {
      console.error("Error updating material details", error);
      // toast.error("Error updating material details");
    }
  };

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

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
                    className={
                      formData.selectedRow1 === item.Material_ID
                        ? "selectedRowClr"
                        : ""
                    }
                  >
                    <td>{index + 1}</td>

                    <td>
                      <input
                        type="text"
                        className="input-style"
                        value={item.Material}
                        name="Material"
                        onChange={(e) => handleMaterialChange(e, index)}
                        onBlur={() =>
                          handleBlur(
                            index,
                            item.Material_ID,
                            item.Material,
                            item.Thickness
                          )
                        }
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        className="input-style"
                        value={item.Thickness}
                        name="Thickness"
                        min={0}
                        onChange={(e) => handleMaterialChange(e, index)}
                        onKeyDown={blockInvalidChar}
                        onBlur={() =>
                          handleBlur(
                            index,
                            item.Material_ID,
                            item.Material,
                            item.Thickness
                          )
                        }
                      />
                    </td>
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
            <div className="col-8 mt-2">
              <input
                type="text"
                name="material"
                className="in-field"
                value={formData.material}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Thickness</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                min={0}
                name="thickness"
                className="in-field"
                value={formData.thickness}
                onKeyDown={blockInvalidChar}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                onClick={handleAddMaterial}
                disabled={!formData.tabsEnable}
              >
                Add
              </button>
            </div>
            <div className="col-auto">
              <button
                // className="button-style"
                className={
                  formData.tabsEnable
                    ? "button-style"
                    : "button-style button-disabled"
                }
                variant="primary"
                onClick={() => handleDeleteMaterial(formData.selectedRow1)}
                disabled={!formData.tabsEnable}
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
                disabled={!formData.tabsEnable}
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
                disabled={!formData.tabsEnable}
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
                value={formData.jointType}
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
                disabled={!formData.tabsEnable}
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
                type="number"
                className="input-field"
                name="batchQty"
                min={0}
                value={formData.batchQty}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
                onKeyDown={blockInvalidChar}
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
                type="number"
                className="input-field"
                name="yearQty"
                min={0}
                value={formData.yearQty}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
                onKeyDown={blockInvalidChar}
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
                disabled={!formData.tabsEnable}
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
                value={formData.fixtureReq}
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
                disabled={!formData.tabsEnable}
              >
                <option value="" selected disabled hidden>
                  Select Fixture Requirement
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
                <option value={2}>NA</option>
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
                disabled={!formData.tabsEnable}
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
                disabled={!formData.tabsEnable}
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
                value={formData.hermaticJoint}
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
                disabled={!formData.tabsEnable}
              >
                <option value="" selected disabled hidden>
                  Select Hermatic Joint
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
                <option value={2}>NA</option>
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
                disabled={!formData.tabsEnable}
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
                  value={formData.drawingAvailable}
                  name="drawingAvailable"
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                  disabled={!formData.tabsEnable}
                >
                  <option value="" selected disabled hidden>
                    Select Drawing
                  </option>
                  <option value={1}>Yes</option>
                  <option value={0}>No</option>
                  <option value={2}>NA</option>
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
                  value={formData.inspection}
                  name="inspection"
                  style={{ marginTop: "12px" }}
                  onChange={handleInputChange}
                  disabled={!formData.tabsEnable}
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
                  value={formData.toolPath}
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                  disabled={!formData.tabsEnable}
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
                  value={formData.shippingDelivery}
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                  disabled={!formData.tabsEnable}
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
                  value={formData.materialSource}
                  onChange={handleInputChange}
                  style={{ marginTop: "12px" }}
                  disabled={!formData.tabsEnable}
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
                  // value={formData.expectedDelivery}
                  value={formData.expectedDelivery || ""}
                  onChange={handleInputChange}
                  min={today}
                  disabled={!formData.tabsEnable}
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
