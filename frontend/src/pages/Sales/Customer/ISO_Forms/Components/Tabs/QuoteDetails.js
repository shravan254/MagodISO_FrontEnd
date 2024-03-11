import React from "react";
import { Table } from "react-bootstrap";

export default function QuoteDetails() {
  const data = [
    {
      slNo: 1,
      jointNo: "J1",
      weldLength: 10,
      weldingTime: 5,
      setUpTime: 3,
      incomingInspectionTime: 10,
      cleaningTime: 5,
      assemblyTime: 2,
      partLoadingTime: 4,
      partUnloadingTime: 8,
      FinalInspectionTime: 3,
      packingDispatchTime: 6,
      setUpCharges: 15,
      inspectionCharges: 6,
      OutSourcingCharges: 8,
      consumables: 30,
      matrerialCost: 4,
      fillerCost: 5,
    },
    {
      slNo: 2,
      jointNo: "J2",
      weldLength: 10,
      weldingTime: 5,
      setUpTime: 3,
      incomingInspectionTime: 10,
      cleaningTime: 5,
      assemblyTime: 2,
      partLoadingTime: 4,
      partUnloadingTime: 8,
      FinalInspectionTime: 3,
      packingDispatchTime: 6,
      setUpCharges: 15,
      inspectionCharges: 6,
      OutSourcingCharges: 8,
      consumables: 30,
      matrerialCost: 4,
      fillerCost: 5,
    },
    {
      slNo: 3,
      jointNo: "J3",
      weldLength: 10,
      weldingTime: 5,
      setUpTime: 3,
      incomingInspectionTime: 10,
      cleaningTime: 5,
      assemblyTime: 2,
      partLoadingTime: 4,
      partUnloadingTime: 8,
      FinalInspectionTime: 3,
      packingDispatchTime: 6,
      setUpCharges: 15,
      inspectionCharges: 6,
      OutSourcingCharges: 8,
      consumables: 30,
      matrerialCost: 4,
      fillerCost: 5,
    },
  ];

  // Function to calculate total for a column
  const calculateTotal = (columnName) => {
    return data.reduce((acc, curr) => acc + curr[columnName], 0);
  };
  return (
    <>
      <div className="row mt-1">
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
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Weld Length (MM)</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Welding Time(Sec)</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Set Up Time(Sec)</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
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
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Cleaning Time (Sec)</label>
              </div>
              <div className="col-6">
                <input className="in-field" type="text" />
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
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Part Loading (Sec)</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Part Unloading Time (Sec)</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
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
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
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
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
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
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Inspection Charges</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Out Sourcing Charges</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Consumables</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Material Cost</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Filler Cost</label>
              </div>
              <div className="col-6">
                {/* <input className="input-field" type="text" /> */}
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Machine</label>
              </div>
              <div className="col-6">
                <input className="in-field" type="text" />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Filler</label>
              </div>
              <div className="col-6">
                <input className="in-field" type="text" />
              </div>
            </div>
          </div> */}
        </div>

        <div className="row mt-1 mb-1 ">
          <div className="d-flex justify-content-center">
            <div className="mx-2">
              <button className="button-style1" variant="primary">
                Add
              </button>
            </div>

            <div className="mx-2">
              <button className="button-style1" variant="primary">
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

                {/* <tbody className="tablebody" style={{ textAlign: "center" }}>
                  <td></td>
                  <tr>
                    <td colSpan="2">Total</td>
                    <td>Total</td>
                    <td>Total</td>
                    <td>Total</td>
                    <td>Total</td>
                    <td>Total</td>
                    <td>Total</td>
                    <td>Total</td>
                    <td>Total</td>
                  </tr>
                </tbody> */}
                <tbody className="tablebody" style={{ textAlign: "center" }}>
                  {/* Rows for data */}
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td>{row.slNo}</td>
                      <td>{row.jointNo}</td>
                      <td>{row.weldLength}</td>
                      <td>{row.weldingTime}</td>
                      <td>{row.setUpTime}</td>
                      <td>{row.incomingInspectionTime}</td>
                      <td>{row.cleaningTime}</td>
                      <td>{row.assemblyTime}</td>

                      <td>{row.partLoadingTime}</td>
                      <td>{row.partUnloadingTime}</td>

                      <td>{row.FinalInspectionTime}</td>
                      <td>{row.packingDispatchTime}</td>

                      <td>{row.setUpCharges}</td>
                      <td>{row.inspectionCharges}</td>

                      <td>{row.OutSourcingCharges}</td>
                      <td>{row.consumables}</td>

                      <td>{row.matrerialCost}</td>
                      <td>{row.fillerCost}</td>
                    </tr>
                  ))}

                  <tr style={{ fontWeight: "bold" }}>
                    <td colSpan="2">Total</td>
                    <td>{calculateTotal("weldLength")}</td>
                    <td>{calculateTotal("weldingTime")}</td>
                    <td>{calculateTotal("setUpTime")}</td>
                    <td>{calculateTotal("incomingInspectionTime")}</td>
                    <td>{calculateTotal("cleaningTime")}</td>
                    <td>{calculateTotal("assemblyTime")}</td>
                    <td>{calculateTotal("partLoadingTime")}</td>
                    <td>{calculateTotal("partUnloadingTime")}</td>

                    <td>{calculateTotal("FinalInspectionTime")}</td>
                    <td>{calculateTotal("packingDispatchTime")}</td>
                    <td>{calculateTotal("setUpCharges")}</td>
                    <td>{calculateTotal("inspectionCharges")}</td>
                    <td>{calculateTotal("OutSourcingCharges")}</td>
                    <td>{calculateTotal("consumables")}</td>
                    <td>{calculateTotal("matrerialCost")}</td>
                    <td>{calculateTotal("fillerCost")}</td>
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
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine Time (Sec)</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Testing Charges</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture Charges</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
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
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Overhead Charges(%)</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
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
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Revised Unit Price</label>
            </div>
            <div className="col-8">
              <input className="input-field" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
