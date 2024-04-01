import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Link, useLocation } from "react-router-dom";
import SolidStateModal from "../../Printpages/SolidStatepdf/SolidStateModal";

export default function Solidstatelaser() {
  const location = useLocation();
  const ScheduleDetailsId = location.state?.ScheduleDetailsId || "";
  const navigate = useNavigate();

  const [isoFormOpen, SetIsoFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    scheduleDetailsId: ScheduleDetailsId,
  });

  const openPdf = () => {
    SetIsoFormOpen(true);
  };

  console.log("scheduleDetailsId", formData.scheduleDetailsId);

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
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Date</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Operator</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="d-flex col-md-3 col-sm-6" style={{ gap: "25px" }}>
          <div className="col-md-2" style={{ marginLeft: "40px" }}>
            <button type="submit" className="button-style" variant="primary">
              Save
            </button>
          </div>

          <div className="col-md-2">
            <SolidStateModal
              isoFormOpen={isoFormOpen}
              SetIsoFormOpen={SetIsoFormOpen}
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
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Gas Type</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Joint Type</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
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
                <tr>
                  <td>1</td>
                  <td>Hastelloy C276</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SS316L semi F20VHP</td>
                  <td></td>
                </tr>
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
              <input type="text" name="material" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Thickness</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button className="button-style" variant="primary">
                Add
              </button>
            </div>
            <div className="col-auto">
              <button className="button-style" variant="primary">
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
                </tr>
              </thead>

              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td>1</td>
                  <td>0.99</td>
                  <td>1800</td>
                  <td>8.67</td>
                  <td>4.80</td>
                  <td>8.0</td>
                  <td>SW</td>
                  <td>R 30</td>
                  <td>6</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>0.80</td>
                  <td>1400</td>
                  <td>7.02</td>
                  <td>5.0</td>
                  <td>10.0</td>
                  <td>SW</td>
                  <td>R 30</td>
                  <td>6</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>0.90</td>
                  <td>1800</td>
                  <td>8.76</td>
                  <td>48.5</td>
                  <td>8.5</td>
                  <td>SW</td>
                  <td>R 30</td>
                  <td>6</td>
                  <td></td>
                  <td></td>
                </tr>
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
              <input type="text" name="material" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Power(W)</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Energy(e)</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Pulse Width(Ms)</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Frequency(Hz)</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Pulse Shape </label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Speed(Mm/Min)</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Gas Flow(LPM)</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Focus Position</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Stand Off(Mm)</label>
            </div>
            <div className="col-8 mt-2">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex mt-1">
            <div className="col-3">
              <label className="form-label">Comments</label>
            </div>
            <div className="col-8 mt-2">
              <textarea
                className="form-control sticky-top mt-1"
                rows="2"
                id=""
                style={{ resize: "none" }}
              ></textarea>
              {/* <input type="text" name="thickness" className="in-field" /> */}
            </div>
          </div>

          <div className="d-flex mt-2">
            <div className="col-4">
              <label className="form-label"></label>
            </div>
            <div className="col-auto">
              <button className="button-style" variant="primary">
                Add
              </button>
            </div>
            <div className="col-auto">
              <button className="button-style" variant="primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
