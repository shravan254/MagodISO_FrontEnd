import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Printco2modal from "../Printpages/CoFormpdf/Printco2modal";

export default function Co2Form() {
  const [openPrintModal, setOpenPrintModal] = useState("");

  const openPdf = () => {
    setOpenPrintModal(true);
  };

  return (
    <div>
      <div className="row">
        <h4 className="title">Laser Welding Job Parameter Sheet - CO2 Laser</h4>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Schedule No</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" value="24091101" />
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
                name="drawingNo"
                value="22/02/2024"
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" value="L - 38" />
            </div>
          </div>
        </div>

        <div className="d-flex col-md-3 col-sm-6" style={{ gap: "25px" }}>
          <div className="col-md-2" style={{ marginLeft: "40px" }}>
            <button type="submit" className="button-style1" variant="primary">
              Save
            </button>
          </div>

          <div className="col-md-2">
            <Printco2modal
              openPrintModal={openPrintModal}
              setOpenPrintModal={setOpenPrintModal}
            />
            <button
              className="button-style1"
              variant="primary"
              onClick={openPdf}
            >
              Print
            </button>
          </div>

          <div className="col-md-2">
            <button type="submit" className="button-style1" variant="primary">
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Operator</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" value="Mailaragouda" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">ɳT</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" name="drawingNo" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Joint</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" value="Butt" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6"></div>
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
                  <td>SS304</td>
                  <td>4mm</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SS310</td>
                  <td>3mm</td>
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
            <div className="col-8">
              <input type="text" name="material" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Thickness</label>
            </div>
            <div className="col-8">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

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

      <div className="row">
        <div className="col-md-8 mt-3">
          <div
            style={{
              height: "380px",
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
                  <th>Gas Type</th>
                  <th>Bead Dia(mm)</th>
                  <th>Power(W)</th>
                  <th>Gap(mm)</th>
                  <th>Flow/Pressure</th>
                  <th>Focus</th>
                  <th>Speed(mm/min)</th>
                  <th>Frequency(Hz)</th>
                </tr>
              </thead>

              <tbody style={{ textAlign: "center" }}>
                <tr>
                  <td>1</td>
                  <td>N2</td>
                  <td>653</td>
                  <td>99%</td>
                  <td></td>
                  <td>12</td>
                  <td>0.00</td>
                  <td>1.500</td>
                  <td>5010</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>N2</td>
                  <td>164</td>
                  <td>1450</td>
                  <td></td>
                  <td>8 Lpm</td>
                  <td>0.00</td>
                  <td>2.000 m</td>
                  <td>70.00</td>
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
              <label className="form-label">Gas Type</label>
            </div>
            <div className="col-8">
              <input type="text" name="material" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Bead Dia(mm)</label>
            </div>
            <div className="col-8">
              <input type="text" name="material" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Power(W)</label>
            </div>
            <div className="col-8">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Gap(mm)</label>
            </div>
            <div className="col-8">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Flow/Pressure</label>
            </div>
            <div className="col-8">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Focus</label>
            </div>
            <div className="col-8">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Speed(Mm/Min)</label>
            </div>
            <div className="col-8">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-3">
              <label className="form-label">Frequency(Hz)</label>
            </div>
            <div className="col-8">
              <input type="text" name="thickness" className="in-field" />
            </div>
          </div>

          <div className="d-flex mt-1">
            <div className="col-3">
              <label className="form-label">Comments</label>
            </div>
            <div className="col-8">
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
    </div>
  );
}
