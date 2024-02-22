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
  });
  const Qtnno = "2009/11/166";
  const [key, setKey] = useState("Welding_Details");

  useEffect(() => {
    Axios.get(apipoints.getData)
      .then((response) => {
        setFormData((prevData) => ({
          ...prevData,
          enquiryDate: response.data[0].EnquiryDate,
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

  console.log("formData", formData);

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div>
      <div>
        <h4 className="title" style={{ height: "25px" }}>
          Rate Estimator - Laser Welding
        </h4>
      </div>
      <div className="col-md-12">
        <div className="row mb-1">
          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Enquiry Date</label>
            </div>
            <div className="col-md-6 mt-1">
              <input
                type="text"
                disabled
                value={formatDate(formData.enquiryDate)}
              />
            </div>
          </div>

          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Drawing No</label>
            </div>
            <div className="col-md-6 mt-1">
              <input type="text" />
            </div>
          </div>

          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Contact Person</label>
            </div>
            <div className="col-md-6 mt-1">
              <input type="text" value={formData.contactPerson} disabled />
            </div>
          </div>

          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Contact No</label>
            </div>
            <div className="col-md-6 mt-1">
              <input type="text" value={formData.contactNo} disabled />
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Customer</label>
            </div>
            <div className="col-md-6 mt-1">
              <input type="text" value={formData.custName} disabled />
            </div>
          </div>

          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Email ID</label>
            </div>
            <div className="col-md-6 mt-1">
              <input type="text" value={formData.emailId} disabled />
            </div>
          </div>

          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Type of Job</label>
            </div>
            <div className="col-md-6 mt-1">
              <select
                className="ip-select mt-1"
                name="jobType"
                onChange={handleInputChange}
              >
                <option value="" selected disabled hidden>
                  Select Job Type
                </option>
                <option value="Production">Production</option>
                <option value="Development">Development</option>
              </select>
            </div>
          </div>
          <div className="d-flex col-md-3">
            <div className="col-md-5">
              <label className="form-label">Component</label>
            </div>
            <div className="col-md-6 mt-1">
              <select
                className="ip-select mt-1"
                name="component"
                onChange={handleInputChange}
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

        <div className="row">
          <div className="col-md-8">
            <div className="d-flex" style={{ gap: "10px" }}>
              <div>
                <label className="form-label">Address</label>
              </div>
              <div>
                <input type="text" value={formData.custAddress} disabled />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex" style={{ gap: "150px" }}>
              <div className="col-md-1">
                <button
                  type="submit"
                  className="button-style"
                  variant="primary"
                >
                  Save
                </button>
              </div>
              <div className="col-md-1">
                <button
                  type="submit"
                  className="button-style"
                  variant="primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 mt-3 tab_font"
          >
            <Tab eventKey="Welding_Details" title="Welding Details">
              <WeldingDetails />
            </Tab>

            <Tab eventKey="over_due" title="Testing">
              <Testing />
            </Tab>

            <Tab eventKey="Risk" title="Risk">
              <Risks />
            </Tab>

            <Tab eventKey="QuoteDetails" title="Quote Details">
              <QuoteDetails />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
