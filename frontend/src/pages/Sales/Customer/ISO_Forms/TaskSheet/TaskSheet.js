import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { apipoints } from "../../../../api/isoForms/taskSheet";
import SolidStateLaserTable from "./SolidStateLaserTable";
import CoTable from "./CoTable";
import moment from "moment";

export default function TaskSheet() {
  const location = useLocation();
  const ScheduleDetailsId = location.state?.ScheduleDetailsId || "";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    scheduleDetailsId: ScheduleDetailsId,
    taskNo: "",
    // taskDate: "",
    taskDate: moment().format("DD/MM/YYYY"),
    assemblyNo: "", // DwgName
    anyDeffects: null,
    machineNo: "",
    programNo: "",
    fixtureRequirement: null,
    lensDistance: 0.0,
    mtrlThickness: 0.0,
    withFiller: null,
    fillerMaterial: "",
    batchNo: "",
    machinePeakPower: 0,
    laserEquipment: "",
    reweldPermitted: null,
    fixtureNo: "",
    controlPlanNo: "",
    wpsNo: "",
    pfdNo: "",
    wiNo: "",
    pqrNo: "",
    standardOfRef: "",
    partInspectionQC: 0,
    partInspectionWeldEngineer: 0,
    partInspectionIncharge: 0,
    partInspectionProjectManager: 0,
    weldSettingQC: 0,
    weldSettingWeldEngineer: 0,
    weldSettingIncharge: 0,

    // Table
    subAssy: "",
    qtyReceived: 0,
    subAssyTableData: [],
    selectedRow1: null,
    selectedRowData1: {},

    preFlowGas: 0.0,
    postFlowGas: 0.0,
    designType: "",
    weldSide: "",
    gasType: "",
    backing: null,
    tackWeld: null,
    note: "",

    // Welding Parameters - solid state
    sspoweratfocus: 0,
    ssfocusDia: 0,
    sspulseDuration: 0,
    sspulseFrequency: 0,
    sspulseShapeNo: 0,
    ssgasPressure: 0,
    ssfeedRate: 0,
    ssrpm: 0,
    ssgasPurity: 0,
    ssgasRange: 0,
    ssgasFlowOrientation: 0,

    // Welding Parameters - co2

    copowerTransmissionEfficiency: 0,
    copower: 0,
    cofrequency: 0,
    cobeamDia: 0,
    cofocus: 0,
    cogasPressure: 0,
    cofeedRate: 0,
    corpm: 0,
    cogasPurity: 0,
    cogasRange: 0,
    cogasFlowOrientation: 0,
  });

  const formattedDate = (date) => {
    return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
  };

  console.log("scheduleDetailsId", formData.scheduleDetailsId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(apipoints.getData, {
          // scheduleDetailsId: formData.scheduleDetailsId,
          params: {
            scheduleDetailsId: formData.scheduleDetailsId,
          },
        });

        if (response.data && response.data.length > 0) {
          setFormData((prevData) => ({
            ...prevData,

            scheduleDetailsId: response.data[0].SchDetailsID,
            taskNo: response.data[0].TaskNo,
            assemblyNo: response.data[0].DwgName,
          }));
        } else {
          console.error("Response data is empty.");
        }
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    fetchData();
  }, [formData.scheduleDetailsId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChangeCheckbox = (e, name) => {
    const isChecked = e.target.checked;
    const value = isChecked ? 1 : 0;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRowSelect = (index) => {
    const selectedRowData1 = formData.subAssyTableData[index];

    setFormData((prevData) => ({
      ...prevData,
      selectedRow1: prevData.selectedRow1 === index ? null : index,
      selectedRowData1: selectedRowData1 || {},
    }));
  };

  const handleSave = async () => {
    try {
      const taskSheetRegister = {
        scheduleDetailsId: formData.scheduleDetailsId,
        anyDeffects: formData.anyDeffects,
        taskDate: formattedDate(formData.taskDate),
        machineNo: formData.machineNo,
        programNo: formData.programNo,
        fixtureRequirement: formData.fixtureRequirement,
        lensDistance: formData.lensDistance,
        mtrlThickness: formData.mtrlThickness,
        withFiller: formData.withFiller,
        fillerMaterial: formData.fillerMaterial,
        batchNo: formData.batchNo,
        machinePeakPower: formData.machinePeakPower,
        laserEquipment: formData.laserEquipment,
        reweldPermitted: formData.reweldPermitted,
        fixtureNo: formData.fixtureNo,
        controlPlanNo: formData.controlPlanNo,
        wpsNo: formData.wpsNo,
        pfdNo: formData.pfdNo,
        wiNo: formData.wiNo,
        pqrNo: formData.pqrNo,
        standardOfRef: formData.standardOfRef,
        partInspectionQC: formData.partInspectionQC,
        partInspectionWeldEngineer: formData.partInspectionWeldEngineer,
        partInspectionIncharge: formData.partInspectionIncharge,
        partInspectionProjectManager: formData.partInspectionProjectManager,
        weldSettingQC: formData.weldSettingQC,
        weldSettingWeldEngineer: formData.weldSettingWeldEngineer,
        weldSettingIncharge: formData.weldSettingIncharge,

        preFlowGas: formData.preFlowGas,
        postFlowGas: formData.postFlowGas,
        designType: formData.designType,
        weldSide: formData.weldSide,
        gasType: formData.gasType,
        backing: formData.backing,
        tackWeld: formData.tackWeld,
        note: formData.note,
      };

      const solidStateParameters = {
        scheduleDetailsId: formData.scheduleDetailsId,
        sspoweratfocus: formData.sspoweratfocus,
        ssfocusDia: formData.ssfocusDia,
        sspulseDuration: formData.sspulseDuration,
        sspulseFrequency: formData.sspulseFrequency,
        sspulseShapeNo: formData.sspulseShapeNo,
        ssgasPressure: formData.ssgasPressure,
        ssfeedRate: formData.ssfeedRate,
        ssrpm: formData.ssrpm,
        ssgasPurity: formData.ssgasPurity,
        ssgasRange: formData.ssgasRange,
        ssgasFlowOrientation: formData.ssgasFlowOrientation,
      };

      const co2Parameters = {
        scheduleDetailsId: formData.scheduleDetailsId,
        copowerTransmissionEfficiency: formData.copowerTransmissionEfficiency,
        copower: formData.copower,
        cofrequency: formData.cofrequency,
        cobeamDia: formData.cobeamDia,
        cofocus: formData.cofocus,
        cogasPressure: formData.cogasPressure,
        cofeedRate: formData.cofeedRate,
        corpm: formData.corpm,
        cogasPurity: formData.cogasPurity,
        cogasRange: formData.cogasRange,
        cogasFlowOrientation: formData.cogasFlowOrientation,
      };

      await Axios.post(apipoints.saveTaskSheetRegister, taskSheetRegister);

      await Axios.post(
        apipoints.saveSolidStateParameters,
        solidStateParameters
      );
      await Axios.post(apipoints.saveCo2Parameters, co2Parameters);

      toast.success("Data Saved");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddSubAssy = async () => {
    try {
      if (formData.subAssy === "") {
        toast.error("Enter Sub Assy");
        return;
      }
      const newSubAssy = {
        scheduleDetailsId: formData.scheduleDetailsId,
        subAssy: formData.subAssy,
        qtyReceived: formData.qtyReceived,
      };

      const response = await Axios.post(
        apipoints.insertSubAssyDetails,
        newSubAssy
      );

      setFormData((prevFormData) => ({
        ...prevFormData,

        subAssyTableData: response.data,
        subAssy: "",
        qtyReceived: 0,
      }));
    } catch (error) {
      console.error("Error Adding Sub Assmbely", error);
      // toast.error("Error Adding Material");
    }
  };

  const handleDeleteSubAssy = async (id) => {
    try {
      if (!formData.selectedRow1) {
        toast.error("Select a row before deleting");
        return;
      }
      await Axios.post(apipoints.deleteSubAssyDetails, { id });

      setFormData((prevData) => ({
        ...prevData,
        subAssyTableData: prevData.subAssyTableData.filter(
          (item) => item.ID !== id
        ),
        selectedRow1: null,
      }));

      toast.success("Material deleted successfully");
    } catch (error) {
      console.error("Error Deleting Material", error);
      // toast.error("Error Deleting Material");
    }
  };

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  return (
    <>
      <div>
        <h4 className="title ">Task Sheet For-Laser Welding</h4>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Schedule No/Task No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="taskNo"
                value={formData.taskNo}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Date</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="taskDate"
                value={formData.taskDate}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Assembly Name/No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="assemblyNo"
                value={formData.assemblyNo}
              />
            </div>
          </div>
        </div>

        <div className="d-flex col-md-3 col-sm-6" style={{ gap: "25px" }}>
          <div className="col-md-2" style={{ marginLeft: "40px" }}>
            <button
              type="submit"
              className="button-style"
              variant="primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>

          <div className="col-md-2">
            <button className="button-style" variant="primary">
              Print
            </button>
          </div>

          <div className="col-md-2">
            <button type="submit" className="button-style" variant="primary">
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Any Defects</label>
            </div>
            <div className="col-8">
              {/* <input className="input-field" type="text" /> */}
              <select
                className="ip-select"
                name="anyDeffects"
                value={formData.anyDeffects}
                onChange={handleInputChange}
                style={{ marginTop: "8px" }}
              >
                <option value={null} selected disabled hidden>
                  Select Defects
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine/Model No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="machineNo"
                value={formData.machineNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Program No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="programNo"
                value={formData.programNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture Requirement</label>
            </div>
            <div className="col-8">
              {/* <input className="input-field" type="text" /> */}
              <select
                className="ip-select"
                name="fixtureRequirement"
                value={formData.fixtureRequirement}
                onChange={handleInputChange}
                style={{ marginTop: "8px" }}
              >
                <option value={null} selected disabled hidden>
                  Select Fixture Requirement
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Lens Distance(mm)</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                onKeyDown={blockInvalidChar}
                name="lensDistance"
                value={formData.lensDistance}
                min={0}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Material Thickness</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                onKeyDown={blockInvalidChar}
                name="mtrlThickness"
                value={formData.mtrlThickness}
                min={0}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">With Filler</label>
            </div>
            <div className="col-8">
              {/* <input className="input-field" type="text" /> */}
              <select
                className="ip-select"
                name="withFiller"
                value={formData.withFiller}
                onChange={handleInputChange}
                style={{ marginTop: "8px" }}
              >
                <option value={null} selected disabled hidden>
                  Select Filler
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Filler Material</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="fillerMaterial"
                value={formData.fillerMaterial}
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
              <label className="form-label">Batch No/Charge No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="batchNo"
                value={formData.batchNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine Peak Power</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                onKeyDown={blockInvalidChar}
                min={0}
                name="machinePeakPower"
                value={formData.machinePeakPower}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Type Of Laser Equipment</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="laserEquipment"
                value={formData.laserEquipment}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Reweld Permitted</label>
            </div>
            <div className="col-8">
              {/* <input className="input-field" type="text" /> */}
              <select
                className="ip-select"
                name="reweldPermitted"
                value={formData.reweldPermitted}
                onChange={handleInputChange}
                style={{ marginTop: "8px" }}
              >
                <option value={null} selected disabled hidden>
                  Select Reweld Permitted
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="fixtureNo"
                value={formData.fixtureNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Control Plan No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="controlPlanNo"
                value={formData.controlPlanNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">WPS No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="wpsNo"
                value={formData.wpsNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">PFD No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="pfdNo"
                value={formData.pfdNo}
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
              <label className="form-label">WI No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="wiNo"
                value={formData.wiNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">PQR No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="pqrNo"
                value={formData.pqrNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Standard Parameter Ref</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="standardOfRef"
                value={formData.standardOfRef}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6">
          <label className="form-label">First Part Inspection</label>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="partInspectionQC"
                  checked={formData.partInspectionQC === 1}
                  onChange={(e) =>
                    handleInputChangeCheckbox(e, "partInspectionQC")
                  }
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  QC
                </label>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="partInspectionWeldEngineer"
                  checked={formData.partInspectionWeldEngineer === 1}
                  onChange={(e) =>
                    handleInputChangeCheckbox(e, "partInspectionWeldEngineer")
                  }
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  Weld Engineer
                </label>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="partInspectionIncharge"
                  checked={formData.partInspectionIncharge === 1}
                  onChange={(e) =>
                    handleInputChangeCheckbox(e, "partInspectionIncharge")
                  }
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  Incharge
                </label>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="partInspectionProjectManager"
                  checked={formData.partInspectionProjectManager === 1}
                  onChange={(e) =>
                    handleInputChangeCheckbox(e, "partInspectionProjectManager")
                  }
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  Project Manager
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6">
          <label className="form-label">Weld Settings Verified by</label>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="weldSettingQC"
                  checked={formData.weldSettingQC === 1}
                  onChange={(e) =>
                    handleInputChangeCheckbox(e, "weldSettingQC")
                  }
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  {/* Shift incharge */}
                  QC
                </label>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="weldSettingWeldEngineer"
                  checked={formData.weldSettingWeldEngineer === 1}
                  onChange={(e) =>
                    handleInputChangeCheckbox(e, "weldSettingWeldEngineer")
                  }
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  Weld Engineer
                </label>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="weldSettingIncharge"
                  checked={formData.weldSettingIncharge === 1}
                  onChange={(e) =>
                    handleInputChangeCheckbox(e, "weldSettingIncharge")
                  }
                />
                <label
                  className="form-check-label checkBoxStyle"
                  htmlFor="flexCheckDefault"
                >
                  Incharge
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-8 mt-2">
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
                <tr className="table-header">
                  <th>SL No</th>
                  <th>Sub-assy Part Name/No</th>
                  <th>Qty Received</th>
                </tr>
              </thead>

              <tbody style={{ textAlign: "center" }}>
                {formData.subAssyTableData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowSelect(item.ID)}
                    className={
                      formData.selectedRow1 === item.ID ? "selectedRowClr" : ""
                    }
                  >
                    <td>{index + 1}</td>
                    <td>{item.Sub_Assy_Part_Name}</td>
                    <td>{item.Qty_Received}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div
          className="col-md-4"
          style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
        >
          <div className="">
            <label className="form-label">Sub-assy Part Name/No</label>
            <input
              type="text"
              className="input-field mt-1"
              name="subAssy"
              value={formData.subAssy}
              onChange={handleInputChange}
              style={{ margin: "0px", borderRadius: "5px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Qty Received</label>
            <input
              type="number"
              className="input-field mt-1"
              name="qtyReceived"
              value={formData.qtyReceived}
              min={0}
              onKeyDown={blockInvalidChar}
              onChange={handleInputChange}
              style={{ margin: "0px", borderRadius: "5px" }}
            />
          </div>

          <div className="d-flex justify-content-center mt-1">
            <div className="mx-2">
              <button
                className="button-style"
                variant="primary"
                onClick={handleAddSubAssy}
              >
                Add
              </button>
            </div>

            <div className="mx-2">
              <button
                className="button-style"
                variant="primary"
                onClick={() => handleDeleteSubAssy(formData.selectedRow1)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="form-title  mt-3" style={{ marginLeft: "325px" }}>
        <b>Welding Parameters</b>
      </h3>

      <div className="row col-md-12">
        <div className="col-md-4 border bg-light" style={{ height: "415px" }}>
          <SolidStateLaserTable formData={formData} setFormData={setFormData} />
        </div>

        <div className="col-md-4 border bg-light" style={{ height: "415px" }}>
          <CoTable formData={formData} setFormData={setFormData} />
        </div>

        <div className="col-md-4">
          <div className="">
            <label className="form-label">Pre flow Gas in lpm</label>
            <input
              type="text"
              className="input-field"
              name="preFlowGas"
              value={formData.preFlowGas}
              onChange={handleInputChange}
              min={0}
              style={{ margin: "0px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Post flow Gas in lpm</label>
            <input
              type="text"
              className="input-field"
              name="postFlowGas"
              value={formData.postFlowGas}
              onChange={handleInputChange}
              min={0}
              style={{ margin: "0px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Design Type</label>
            <select
              className="ip-select"
              name="designType"
              value={formData.designType}
              onChange={handleInputChange}
              style={{ marginTop: "1px" }}
            >
              <option value="" selected disabled hidden>
                Select Design Type
              </option>

              {/* {formData.jointTypeData?.map((joint, index) => (
                  <option key={index} value={joint.Joint_Type}>
                    {joint.Joint_Type}
                  </option>
                ))} */}
            </select>
          </div>

          <div className="">
            <label className="form-label">Weld Side</label>
            <select
              className="ip-select"
              name="weldSide"
              value={formData.weldSide}
              onChange={handleInputChange}
              style={{ marginTop: "1px" }}
            >
              <option value="" selected disabled hidden>
                Select Welding Side
              </option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
            </select>
          </div>

          <div className="">
            <label className="form-label">Gas Type</label>
            <input
              type="text"
              className="input-field"
              name="gasType"
              value={formData.gasType}
              onChange={handleInputChange}
              style={{ margin: "0px" }}
            />
          </div>

          <div className="">
            <label className="form-label">Backing</label>
            <select
              className="ip-select"
              name="backing"
              value={formData.backing}
              onChange={handleInputChange}
              style={{ marginTop: "1px" }}
            >
              <option value={null} selected disabled hidden>
                Select Backing
              </option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>

          <div className="">
            <label className="form-label">Tack Weld</label>
            <select
              className="ip-select"
              name="tackWeld"
              value={formData.tackWeld}
              onChange={handleInputChange}
              style={{ marginTop: "1px" }}
            >
              <option value={null} selected disabled hidden>
                Select Tack Weld
              </option>
              <option value={1}>Yes</option>
              <option value={0}>No</option>
            </select>
          </div>

          <div className="">
            <label className="form-label">Note</label>
            <input
              type="text"
              className="input-field"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              style={{ margin: "0px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
