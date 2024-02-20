import React, { useEffect, useState } from "react";
import { apipoints } from "../../../../api/isoForms/isoForms";
import Axios from "axios";
import { Tab, Tabs } from "react-bootstrap";

import WeldingDetails from "./Tabs/WeldingDetails";
import Testing from "./Tabs/Testing";
import Risks from "./Tabs/Risks";

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

  return (
    <div>
      <div>
        <h4 className="title ">Rate Estimator - Laser Welding</h4>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">
            <div className="">
              <label className="form-label">Enquiry Date</label>
              <input type="text" disabled value={formData.enquiryDate} />
            </div>
          </div>

          <div className="col-md-3">
            <div className="">
              <label className="form-label">Drawing No</label>
              <input type="text" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="">
              <label className="form-label">Contact Person</label>
              <input type="text" value={formData.contactPerson} disabled />
            </div>
          </div>

          <div className="col-md-3">
            <div className="">
              <label className="form-label">Contact No</label>
              <input type="text" value={formData.contactNo} disabled />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="">
              <label className="form-label">Email ID</label>
              <input type="text" value={formData.emailId} disabled />
            </div>
          </div>

          <div className="col-md-3">
            <div className="">
              <label className="form-label">Customer Name</label>
              <input type="text" value={formData.custName} disabled />
            </div>
          </div>

          <div className="col-md-3">
            <div className="">
              <label className="form-label">Type of Job</label>
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
          <div className="col-md-3">
            <div className="">
              <label className="form-label">Component</label>
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
          <div className="col-md-3">
            <label className="form-label">Customer Address</label>
            <textarea
              className="form-control"
              rows="2"
              id=""
              name="CustomerAddress"
              value={formData.custAddress}
              // style={{ height: "70px", resize: "none" }}
            ></textarea>
          </div>

          <div className="col-md-3">
            <label className="form-label">Any Other Information</label>
            <textarea
              className="form-control"
              rows="2"
              id=""
              name="otherInfo"
              // style={{ height: "70px", resize: "none" }}
            ></textarea>
          </div>

          <div className="col-md-3">
            <label className="form-label">Conclusion of Review</label>
            <textarea
              className="form-control"
              rows="2"
              id=""
              name="conclusion"
              // style={{ height: "70px", resize: "none" }}
            ></textarea>
          </div>

          <div className="col-md-1 mt-4">
            <button
              type="submit"
              className="button-style"
              variant="primary"
              style={{ width: "120px" }}
            >
              Save
            </button>
          </div>

          <div className="col-md-1 mt-4">
            <button
              type="submit"
              className="button-style"
              variant="primary"
              style={{ width: "120px" }}
            >
              Close
            </button>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
