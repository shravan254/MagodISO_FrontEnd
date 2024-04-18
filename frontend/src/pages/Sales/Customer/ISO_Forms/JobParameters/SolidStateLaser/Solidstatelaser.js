import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Link, useLocation } from "react-router-dom";
import SolidStateModal from "../../Printpages/SolidStatepdf/SolidStateModal";
import moment from "moment";
import { apipoints } from "../../../../../api/isoForms/solidState";
import { toast } from "react-toastify";

export default function Solidstatelaser() {
  const location = useLocation();
  const NcId = location.state?.NcId || "";
  const navigate = useNavigate();

  const [solidStateFormOpen, setSolidStateFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    ncid: NcId,
    taskNo: "",
    taskDate: moment().format("DD/MM/YYYY"),
    operator: "",
    filler: "",
    gasType: "",
    jointType: "",
    jointTypeData: [],
    machine: "",
    material: "",
    thickness: 0,
    materialTableData: [],
    selectedRow1: null,
    selectedRowData1: {},
    selectedRow2: null,
    selectedRowData2: {},
    beadDia: 0,
    power: 0,
    energy: 0,
    pulseWidth: 0,
    frequency: 0,
    pulseShape: 0,
    speed: 0,
    gasFlow: 0,
    focusPosition: 0,
    standOff: 0,
    comments: "",
    parametersTableData: [],
  });

  const openPdf = () => {
    setSolidStateFormOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(apipoints.getData, {
          // ncid: formData.ncid,
          params: {
            ncid: formData.ncid,
          },
        });

        if (response.data && response.data.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            ncid: response.data[0].Ncid,
            taskNo: response.data[0].TaskNo,
            machine: response.data[0].Machine,
          }));
        } else {
          console.error("Response data is empty.");
        }
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    fetchData();
  }, [formData.ncid]);

  useEffect(() => {
    Axios.get(apipoints.getJointType)
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          jointTypeData: response.data,
        }));
      })
      .catch((error) => {});
  }, []);

  const formattedDate = (date) => {
    return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const solidStateParameters = {
        ncid: formData.ncid,
        taskDate: formattedDate(formData.taskDate),
        operator: formData.operator,
        filler: formData.filler,
        gasType: formData.gasType,
        jointType: formData.jointType,
      };

      await Axios.post(
        apipoints.saveSolidStateParameters,
        solidStateParameters
      );
      toast.success("Data Saved");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRowSelect = (index) => {
    const selectedRowData1 = formData.materialTableData[index];
    const selectedRowData2 = formData.materialTableData[index];

    setFormData((prevData) => ({
      ...prevData,
      selectedRow1: prevData.selectedRow1 === index ? null : index,
      selectedRow2: prevData.selectedRow1 === index ? null : index,

      selectedRowData1: selectedRowData1 || {},
      selectedRowData2: selectedRowData2 || {},
    }));
  };

  const handleAddMaterial = async () => {
    try {
      if (formData.material === "") {
        toast.error("Enter Material");
        return;
      }
      const newMtrl = {
        ncid: formData.ncid,
        material: formData.material,
        thickness: formData.thickness,
      };

      const response = await Axios.post(
        apipoints.insertMaterialDetails,
        newMtrl
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

  const handleDeleteMaterial = async (id) => {
    try {
      if (!formData.selectedRow1) {
        toast.error("Select a row before deleting");
        return;
      }
      await Axios.post(apipoints.deleteMaterialDetails, { id });

      setFormData((prevData) => ({
        ...prevData,
        materialTableData: prevData.materialTableData.filter(
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

  const handleAddParameter = async () => {
    try {
      const newMtrl = {
        ncid: formData.ncid,
        beadDia: formData.beadDia,
        power: formData.power,
        energy: formData.energy,
        pulseWidth: formData.pulseWidth,
        frequency: formData.frequency,
        pulseShape: formData.pulseShape,
        speed: formData.speed,
        gasFlow: formData.gasFlow,
        focusPosition: formData.focusPosition,
        standOff: formData.standOff,
        comments: formData.comments,
      };

      const response = await Axios.post(apipoints.insertParaDetails, newMtrl);

      setFormData((prevFormData) => ({
        ...prevFormData,

        parametersTableData: response.data,
        beadDia: 0,
        power: 0,
        energy: 0,
        pulseWidth: 0,
        frequency: 0,
        pulseShape: 0,
        speed: 0,
        gasFlow: 0,
        focusPosition: 0,
        standOff: 0,
        comments: "",
      }));
    } catch (error) {
      console.error("Error Adding Parameter", error);
    }
  };

  const handleDeleteParameter = async (id) => {
    try {
      if (!formData.selectedRow1) {
        toast.error("Select a row before deleting");
        return;
      }
      await Axios.post(apipoints.deleteParaDetails, { id });

      setFormData((prevData) => ({
        ...prevData,
        parametersTableData: prevData.parametersTableData.filter(
          (item) => item.ID !== id
        ),
        selectedRow2: null,
      }));

      toast.success("Parameter deleted successfully");
    } catch (error) {
      console.error("Error Deleting Parameter", error);
    }
  };

  useEffect(() => {
    const fetchQtnData = async () => {
      try {
        const response = await Axios.post(apipoints.allSolidStateData, {
          ncid: formData.ncid,
        });

        const {
          solid_state_job_parameter,
          solid_state_material_details,
          solid_state_parameters,
        } = response.data;

        setFormData((prevData) => ({
          ...prevData,

          operator: solid_state_job_parameter.length
            ? solid_state_job_parameter[0].Operator
            : "",

          filler: solid_state_job_parameter.length
            ? solid_state_job_parameter[0].Filler
            : "",

          gasType: solid_state_job_parameter.length
            ? solid_state_job_parameter[0].Gas_Type
            : "",

          jointType: solid_state_job_parameter.length
            ? solid_state_job_parameter[0].Joint_Type
            : "",

          materialTableData: solid_state_material_details.length
            ? solid_state_material_details
            : [],

          parametersTableData: solid_state_parameters.length
            ? solid_state_parameters
            : [],
        }));
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };
    fetchQtnData();
  }, []);

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  console.log("formData", formData);

  return (
    <div>
      <div className="row">
        <h4 className="title">
          Laser Welding Job Parameter Sheet - Solid State Laser
        </h4>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Schedule No</label>
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
              <label className="form-label">Operator</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="operator"
                value={formData.operator}
                onChange={handleInputChange}
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
            <SolidStateModal
              solidStateFormOpen={solidStateFormOpen}
              setSolidStateFormOpen={setSolidStateFormOpen}
              formData={formData}
            />
            <button
              className="button-style"
              variant="primary"
              onClick={openPdf}
            >
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

      <div className="row mt-1">
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
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Gas Type</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="gasType"
                value={formData.gasType}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Joint Type</label>
            </div>
            <div className="col-8">
              {/* <input
                className="input-field"
                type="text"
                name="jointType"
                value={formData.jointType}
                onChange={handleInputChange}
              /> */}
              <select
                className="ip-select"
                name="jointType"
                value={formData.jointType}
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
              <label className="form-label">Machine</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="machine"
                value={formData.machine}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mt-3">
          <div
            style={{
              height: "140px",
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
                  <th>Material</th>
                  <th>Thickness</th>
                </tr>
              </thead>

              <tbody style={{ textAlign: "center" }}>
                {formData.materialTableData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowSelect(item.ID)}
                    className={
                      formData.selectedRow1 === item.ID ? "selectedRowClr" : ""
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
          style={{
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
          }}
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
                name="thickness"
                className="in-field"
                value={formData.thickness}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button
                className="button-style"
                variant="primary"
                onClick={handleAddMaterial}
              >
                Add
              </button>
            </div>
            <div className="col-auto">
              <button
                className="button-style"
                variant="primary"
                onClick={() => handleDeleteMaterial(formData.selectedRow1)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 mt-3">
          <div
            style={{
              height: "435px",
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
                  whiteSpace: "nowrap",
                }}
              >
                <tr className="table-header">
                  <th>SL No</th>
                  <th>Bead Dia(mm)</th>
                  <th>Power(W)</th>
                  <th>Energy(J)</th>
                  <th>Pulse Width(ms)</th>
                  <th>Frequency(Hz)</th>
                  <th>pulse Shape</th>
                  <th>Speed(mm/min)</th>
                  <th>Gas Flow(LPM)</th>
                  <th>Focus Position</th>
                  <th>Stand Off(mm)</th>
                  <th>Comments</th>
                </tr>
              </thead>

              <tbody style={{ textAlign: "center" }}>
                {formData.parametersTableData.map((item, index) => (
                  <tr
                    key={index}
                    onClick={() => handleRowSelect(item.ID)}
                    className={
                      formData.selectedRow2 === item.ID ? "selectedRowClr" : ""
                    }
                  >
                    <td>{index + 1}</td>
                    <td>{item.Bead_Dia}</td>
                    <td>{item.Power}</td>
                    <td>{item.Energy}</td>
                    <td>{item.Pulse_Width}</td>
                    <td>{item.Frequency}</td>
                    <td>{item.Pulse_Shape}</td>
                    <td>{item.Speed}</td>
                    <td>{item.Gas_Flow}</td>
                    <td>{item.Focus_Position}</td>
                    <td>{item.Stand_Off}</td>
                    <td>{item.Comments}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        <div
          className="col-md-4 col-sm-12 mt-2"
          style={{
            padding: "10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Bead Dia(mm)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="beadDia"
                className="in-field"
                value={formData.beadDia}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Power(W)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="power"
                className="in-field"
                value={formData.power}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Energy(e)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="energy"
                className="in-field"
                value={formData.energy}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Pulse Width(Ms)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="pulseWidth"
                className="in-field"
                value={formData.pulseWidth}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Frequency(Hz)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="frequency"
                className="in-field"
                value={formData.frequency}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Pulse Shape </label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="pulseShape"
                className="in-field"
                value={formData.pulseShape}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Speed(Mm/Min)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="speed"
                className="in-field"
                value={formData.speed}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Gas Flow(LPM)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="gasFlow"
                className="in-field"
                value={formData.gasFlow}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Focus Position</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="focusPosition"
                className="in-field"
                value={formData.focusPosition}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Stand Off(Mm)</label>
            </div>
            <div className="col-8 mt-2">
              <input
                type="number"
                name="standOff"
                className="in-field"
                value={formData.standOff}
                onChange={handleInputChange}
                min={0}
                onKeyDown={blockInvalidChar}
              />
            </div>
          </div>

          <div className="d-flex mt-1">
            <div className="col-3">
              <label className="form-label">Comments</label>
            </div>
            <div className="col-8 mt-2">
              <textarea
                className="form-control sticky-top mt-1"
                style={{ fontSize: "12px", resize: "none" }}
                rows="2"
                id=""
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
              ></textarea>
              {/* <input type="text" name="thickness" className="in-field" /> */}
            </div>
          </div>

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button
                className="button-style"
                variant="primary"
                onClick={handleAddParameter}
              >
                Add
              </button>
            </div>
            <div className="col-auto">
              <button
                className="button-style"
                variant="primary"
                onClick={() => handleDeleteParameter(formData.selectedRow2)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
