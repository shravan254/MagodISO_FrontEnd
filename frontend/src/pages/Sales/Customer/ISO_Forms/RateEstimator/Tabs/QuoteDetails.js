import React from "react";
import Axios from "axios";
import { apipoints } from "../../../../../api/isoForms/rateEstimator";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";

export default function QuoteDetails({
  formData,
  setFormData,
  handleInputChange,
  handleRowSelect,
}) {
  const calculateTotal = (columnName) => {
    if (!formData.quoteDetailsTableData) return 0;

    const total = formData.quoteDetailsTableData.reduce(
      (acc, curr) => acc + parseFloat(curr[columnName]),
      0
    );
    return total.toFixed(2);
  };

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const handleAddQuote = async () => {
    try {
      const newQuote = {
        qtnID: formData.qtnID,
        jointNo: formData.jointNo,
        weldLength: formData.weldLength,
        weldingTime: formData.weldingTime,
        setUpTime: formData.setUpTime,
        incomingInspectionTime: formData.incomingInspectionTime,
        cleaningTime: formData.cleaningTime,
        assemblyTime: formData.assemblyTime,
        partLoading: formData.partLoading,
        partUnloading: formData.partUnloading,
        finalInspectionTime: formData.finalInspectionTime,
        packingDispatchTime: formData.packingDispatchTime,
        setupCharges: formData.setupCharges,
        inspectionCharges: formData.inspectionCharges,
        outSourcingCharges: formData.outSourcingCharges,
        consumables: formData.consumables,
        materialCost: formData.materialCost,
        fillerCost: formData.fillerCost,
      };

      const response = await Axios.post(apipoints.insertQuoteDetails, newQuote);

      const totalWeldLength = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Weld_Length || 0),
        0
      );

      const totalWeldTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Weld_Time || 0),
        0
      );

      const totalSetupTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Setup_Time || 0),
        0
      );

      const totalInspectionTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Inspection_Time || 0),
        0
      );

      const totalCleaningTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Cleaning_Time || 0),
        0
      );

      const totalAssemblyTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Assembly_Time || 0),
        0
      );

      const totalPartLoading = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Part_Loading || 0),
        0
      );

      const totalPartUnloading = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Part_Unloading || 0),
        0
      );

      const totalFinalInspectionTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.FinalInspection_Time || 0),
        0
      );

      const totalPackingDispatchTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Packing_Dispatch_Time || 0),
        0
      );

      const totalSetupCharges = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.SetUp_Charges || 0),
        0
      );

      const totalInspectionCharges = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Inspection_Charges || 0),
        0
      );

      const totalOutSourcingCharges = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.OutSoucring_Charges || 0),
        0
      );

      const totalConsumables = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Consumables || 0),
        0
      );

      const totalMaterialCost = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Material_Cost || 0),
        0
      );

      const totalFillerCost = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Filler_Cost || 0),
        0
      );

      const labourTime =
        formData.totalInspectionTime +
        formData.totalCleaningTime +
        formData.totalAssemblyTime +
        formData.totalPackingDispatchTime;

      const machineTime =
        formData.totalPartLoading +
        formData.totalPartUnloading +
        formData.totalWeldTime +
        formData.totalFinalInspectionTime;

      const sum =
        parseFloat(totalWeldLength) +
        parseInt(totalWeldTime) +
        parseInt(totalSetupTime) +
        parseInt(totalInspectionTime) +
        parseInt(totalCleaningTime) +
        parseInt(totalAssemblyTime) +
        parseInt(totalPartLoading) +
        parseInt(totalPartUnloading) +
        parseInt(totalFinalInspectionTime) +
        parseInt(totalPackingDispatchTime) +
        parseFloat(totalSetupCharges) +
        parseFloat(totalInspectionCharges) +
        parseFloat(totalOutSourcingCharges) +
        parseFloat(totalConsumables) +
        parseFloat(totalMaterialCost) +
        parseFloat(totalFillerCost);

      const unitPrice =
        parseFloat(sum).toFixed(2) / parseFloat(formData.batchQty);

      const updatedFormData = {
        qtnID: formData.qtnID,
        totalWeldLength: totalWeldLength.toFixed(2),
        totalWeldTime: totalWeldTime,
        totalSetupTime: totalSetupTime,
        totalInspectionTime: totalInspectionTime,
        totalCleaningTime: totalCleaningTime,
        totalAssemblyTime: totalAssemblyTime,
        totalPartLoading: totalPartLoading,
        totalPartUnloading: totalPartUnloading,
        totalFinalInspectionTime: totalFinalInspectionTime,
        totalPackingDispatchTime: totalPackingDispatchTime,
        totalSetupCharges: totalSetupCharges.toFixed(2),
        totalInspectionCharges: totalInspectionCharges.toFixed(2),
        totalOutSourcingCharges: totalOutSourcingCharges.toFixed(2),
        totalConsumables: totalConsumables.toFixed(2),
        totalMaterialCost: totalMaterialCost.toFixed(2),
        totalFillerCost: totalFillerCost.toFixed(2),

        // labourTime: isNaN(labourTime) ? 0 : labourTime,
        // unitPrice: isNaN(unitPrice) ? 0 : unitPrice,
        // revisedUnitPrice: isNaN(unitPrice) ? 0 : unitPrice,
        // machineTime: isNaN(machineTime) ? 0 : machineTime,

        labourTime: labourTime,
        unitPrice: unitPrice,
        revisedUnitPrice: unitPrice,
        machineTime: machineTime,
      };

      console.log("updatedFormData", updatedFormData);

      await Axios.post(apipoints.updateQuoteRegister, updatedFormData);

      setFormData((prevFormData) => ({
        ...prevFormData,
        ...updatedFormData,
        quoteDetailsTableData: response.data,
        jointNo: "",
        weldLength: 0,
        weldingTime: 0,
        setUpTime: 0,
        incomingInspectionTime: 0,
        cleaningTime: 0,
        assemblyTime: 0,
        partLoading: 0,
        partUnloading: 0,
        finalInspectionTime: 0,
        packingDispatchTime: 0,
        setupCharges: 0,
        inspectionCharges: 0,
        outSourcingCharges: 0,
        consumables: 0,
        materialCost: 0,
        fillerCost: 0,
      }));
    } catch (error) {
      console.error("Error Adding Quote Details", error);
      toast.error("Error Adding Quote Details");
    }
  };

  const handleDeleteQuote = async (id) => {
    try {
      await Axios.post(apipoints.deleteQuoteDetails, { id });

      setFormData((prevData) => ({
        ...prevData,
        quoteDetailsTableData: prevData.quoteDetailsTableData.filter(
          (item) => item.ID !== id
        ),
        selectedRow3: null,
      }));

      toast.success("Quote Deleted successfully");
    } catch (error) {
      console.error("Error Deleting Quote", error);
      toast.error("Error Deleting Quote");
    }
  };

  // console.log("quoteDetailsTableData", formData.quoteDetailsTableData);

  return (
    <>
      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="machine"
                value={formData.machine}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Filler</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="filler"
                value={formData.filler}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-3"
        style={{ backgroundColor: "#f0f0f0", padding: "2px" }}
      >
        <div className="row mt-1">
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Joint No</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field "
                  type="text"
                  name="jointNo"
                  value={formData.jointNo}
                  onChange={handleInputChange}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Weld Length (MM)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="weldLength"
                  min={0}
                  value={formData.weldLength}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Welding Time(Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="weldingTime"
                  min={0}
                  value={formData.weldingTime}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Set Up Time(Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="setUpTime"
                  value={formData.setUpTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">
                  Incoming Inspection Time(Sec)
                </label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="incomingInspectionTime"
                  value={formData.incomingInspectionTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Cleaning Time (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                <input
                  className="in-field"
                  type="number"
                  name="cleaningTime"
                  value={formData.cleaningTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Assembly Time (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="assemblyTime"
                  value={formData.assemblyTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Part Loading (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="partLoading"
                  value={formData.partLoading}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Part Unloading Time (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="partUnloading"
                  value={formData.partUnloading}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">
                  Final Inspection Time (Sec)
                </label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="finalInspectionTime"
                  value={formData.finalInspectionTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">
                  Packing & Dispatch Time (Sec)
                </label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="packingDispatchTime"
                  value={formData.packingDispatchTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Set Up Charges</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="setupCharges"
                  value={formData.setupCharges}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Inspection Charges</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="inspectionCharges"
                  value={formData.inspectionCharges}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Out Sourcing Charges</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="outSourcingCharges"
                  value={formData.outSourcingCharges}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Consumables</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="consumables"
                  value={formData.consumables}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Material Cost</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="materialCost"
                  value={formData.materialCost}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Filler Cost</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="fillerCost"
                  value={formData.fillerCost}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 mb-1 ">
          <div className="d-flex justify-content-center">
            <div className="mx-2">
              <button
                // className="button-style"
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                disabled={!formData.tabsEnable}
                onClick={handleAddQuote}
              >
                Add
              </button>
            </div>

            <div className="mx-2">
              <button
                // className="button-style"
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                disabled={!formData.tabsEnable}
                onClick={() => handleDeleteQuote(formData.selectedRow3)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-12">
          <div className="mt-1">
            <div
              style={{
                height: "150px",
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
                  <tr style={{ whiteSpace: "nowrap" }} className="table-header">
                    <th>SL No</th>
                    <th>Joint No</th>
                    <th>Weld Length(MM)</th>
                    <th>Welding Time(Sec)</th>
                    <th>Set Up Time(Sec)</th>
                    <th>Incoming Inspection Time(Sec)</th>
                    <th>Cleaning Time(Sec)</th>
                    <th>Assembly Time(Sec)</th>
                    <th>Part Loading(Sec)</th>
                    <th>Part UnLoading(Sec)</th>
                    <th>Final Inspection Time(Sec)</th>
                    <th>Packing & Dispatch Time(Sec)</th>
                    <th>Set Up Charges</th>
                    <th>Inspection Charges</th>
                    <th>Out Sourcing Charges</th>
                    <th>Consumables</th>
                    <th>Material Cost</th>
                    <th>Filler Cost</th>
                  </tr>
                </thead>

                <tbody className="tablebody" style={{ textAlign: "center" }}>
                  {formData.quoteDetailsTableData?.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowSelect(item.ID)}
                      className={
                        formData.selectedRow3 === item.ID
                          ? "selectedRowClr"
                          : ""
                      }
                    >
                      <td>{index + 1}</td>
                      <td>{item.Joint_No}</td>
                      <td>{item.Weld_Length}</td>
                      <td>{item.Weld_Time}</td>
                      <td>{item.Setup_Time}</td>
                      <td>{item.Inspection_Time}</td>
                      <td>{item.Cleaning_Time}</td>
                      <td>{item.Assembly_Time}</td>

                      <td>{item.Part_Loading}</td>
                      <td>{item.Part_Unloading}</td>

                      <td>{item.FinalInspection_Time}</td>
                      <td>{item.Packing_Dispatch_Time}</td>

                      <td>{item.SetUp_Charges}</td>
                      <td>{item.Inspection_Charges}</td>

                      <td>{item.OutSoucring_Charges}</td>
                      <td>{item.Consumables}</td>

                      <td>{item.Material_Cost}</td>
                      <td>{item.Filler_Cost}</td>
                    </tr>
                  ))}

                  <tr style={{ fontWeight: "bold" }}>
                    <td colSpan="2">Total</td>
                    <td>{calculateTotal("Weld_Length")}</td>
                    <td>{parseInt(calculateTotal("Weld_Time"))}</td>
                    <td>{parseInt(calculateTotal("Setup_Time"))}</td>
                    <td>{parseInt(calculateTotal("Inspection_Time"))}</td>
                    <td>{parseInt(calculateTotal("Cleaning_Time"))}</td>
                    <td>{parseInt(calculateTotal("Assembly_Time"))}</td>
                    <td>{parseInt(calculateTotal("Part_Loading"))}</td>
                    <td>{parseInt(calculateTotal("Part_Unloading"))}</td>

                    <td>{parseInt(calculateTotal("FinalInspection_Time"))}</td>
                    <td>{parseInt(calculateTotal("Packing_Dispatch_Time"))}</td>
                    <td>{calculateTotal("SetUp_Charges")}</td>
                    <td>{calculateTotal("Inspection_Charges")}</td>
                    <td>{calculateTotal("OutSoucring_Charges")}</td>
                    <td>{calculateTotal("Consumables")}</td>
                    <td>{calculateTotal("Material_Cost")}</td>
                    <td>{calculateTotal("Filler_Cost")}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <h4 className="form-title" style={{ fontSize: "14px" }}>
          <b>Total</b>
        </h4>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Labour Time (Sec)</label>
            </div>
            <div className="col-8">
              {/*  */}
              <input
                className="input-field"
                type="number"
                name="labourTime"
                value={formData.labourTime}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine Time (Sec)</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="machineTime"
                value={formData.machineTime}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Testing Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="testingCharges"
                value={formData.testingCharges}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="fixtureCharges"
                value={formData.fixtureCharges}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1 mb-4">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Transportation Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="transporationCost"
                value={formData.transporationCost}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={
                  !formData.tabsEnable ||
                  (formData.shippingDelivery = "Customer Pick Up")
                }
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Unit Price</label>
            </div>
            <div className="col-8">
              {/* Total / 418 */}
              <input
                className="input-field"
                type="number"
                name="unitPrice"
                value={formData.unitPrice}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Revised Unit Price</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="revisedUnitPrice"
                value={formData.revisedUnitPrice}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Overhead Charges(%)</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="overheadCharges"
                value={formData.overheadCharges}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
