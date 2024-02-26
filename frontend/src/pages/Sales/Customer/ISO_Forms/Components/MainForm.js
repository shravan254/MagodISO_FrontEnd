import React, { useEffect, useState } from "react";
import { apipoints } from "../../../../api/isoForms/isoForms";
import Axios from "axios";
import { Tab, Tabs } from "react-bootstrap";

import WeldingDetails from "./Tabs/WeldingDetails";
import Testing from "./Tabs/Testing";
import Risks from "./Tabs/Risks";
import QuoteDetails from "./Tabs/QuoteDetails";

function MainForm() {
  const [formData, setFormData] = useState({
    enquiryDate: "",
    drawingNo: "",
    contactPerson: "",
    contactNo: "",
    emailId: "",
    custName: "",
    jobType: "",
    component: "",
    custAddress: "",
    otherInfo: "",
    conclusion: "",
    material: "",
    thickness: "",
    materialTableData: [],
    selectedRow1: null,
    selectedRowData: {},
    jointType: "",
    allowComb: "",
    srRequirements: "",
    proQty: "",
    batchQty: "",
    yearQty: "",
    fixtureReq: "",
    fixtureRemarks: "",
    depthOfPen: "",
    strength: "",
    hermaticJoint: "",
    allowableDeffects: "",
    drawingAvailable: 0,
    inspection: "",
    toolPath: "",
    materialSource: "",
    shippingDelivery: "",
    expectedDelivery: "",
    testType: "",
    testName: "",
    details: "",
    testTableData: [],
  });
  const Qtnno = "2009/11/166";
  const [key, setKey] = useState("Welding_Details");

  useEffect(() => {
    Axios.get(apipoints.getData)
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          enquiryDate: response.data[0].EnquiryDate
            ? new Date(response.data[0].EnquiryDate).toLocaleDateString("en-GB")
            : "",
          contactPerson: response.data[0].Contact,
          emailId: response.data[0].E_mail,
          custName: response.data[0].CustomerName,
          contactNo: response.data[0].CustTele,
          custAddress: response.data[0].CustAddress,
        }));
        // console.log("response", response.data);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRowSelect = (index) => {
    const selectedRowData = formData.materialTableData[index];

    setFormData((prevData) => ({
      ...prevData,
      selectedRow1: prevData.selectedRow1 === index ? null : index,
      selectedRowData: selectedRowData || {},
    }));
  };

  console.log("formData", formData);
  console.log("selectedRowData", formData.selectedRowData);
  console.log("materialTableData", formData.materialTableData);

  return (
    <div>
      <div className="row">
        <h4 className="title">Rate Estimator - Laser Welding</h4>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Enquiry Date</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                disabled
                value={formData.enquiryDate}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Drawing No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="drawingNo"
                value={formData.drawingNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Contact</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                value={formData.contactPerson}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Contact No</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                value={formData.contactNo}
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Customer</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                value={formData.custName}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Email ID</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                value={formData.emailId}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Type of Job</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select"
                name="jobType"
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
              >
                <option value="" selected disabled hidden>
                  Select Job Type
                </option>
                <option value="Production">Production</option>
                <option value="Development">Development</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Component</label>
            </div>
            <div className="col-8">
              <select
                className="ip-select"
                name="component"
                onChange={handleInputChange}
                style={{ marginTop: "12px" }}
              >
                <option value="" selected disabled hidden>
                  Select Component
                </option>
                <option value="New">New</option>
                <option value="Repeat">Repeat</option>
                <option value="Redesign">Redesign</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-9 col-sm-12">
          <div className="d-flex align-items-center" style={{ gap: "45px" }}>
            <label className="form-label">Address</label>
            <input
              className="input-field"
              type="text"
              value={formData.custAddress}
              disabled
            />
          </div>
        </div>

        <div className="col-md-3 col-sm-12 mt-2 mt-md-0">
          <div className="d-flex justify-content-end" style={{ gap: "10px" }}>
            <button type="submit" className="button-style1" variant="primary">
              Create
            </button>
            <button type="submit" className="button-style1" variant="primary">
              Save
            </button>
            <button type="submit" className="button-style1" variant="primary">
              Print
            </button>
            <button type="submit" className="button-style1" variant="primary">
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="col-md-12 col-sm-12">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mt-3 tab_font"
          >
            <Tab eventKey="Welding_Details" title="Welding Details">
              <WeldingDetails
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
                handleRowSelect={handleRowSelect}
              />
            </Tab>

            <Tab eventKey="Testing" title="Testing">
              <Testing
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
                handleRowSelect={handleRowSelect}
              />
            </Tab>

            <Tab eventKey="Risks" title="Risks">
              <Risks
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
                handleRowSelect={handleRowSelect}
              />
            </Tab>

            <Tab eventKey="QuoteDetails" title="Quote Details">
              <QuoteDetails
                formData={formData}
                setFormData={setFormData}
                handleInputChange={handleInputChange}
                handleRowSelect={handleRowSelect}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
