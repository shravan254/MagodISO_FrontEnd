import React, { useEffect, useState } from "react";
import { apipoints } from "../../../../api/isoForms/isoForms";
import Axios from "axios";
import { Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import WeldingDetails from "./Tabs/WeldingDetails";
import Testing from "./Tabs/Testing";
import Risks from "./Tabs/Risks";
import QuoteDetails from "./Tabs/QuoteDetails";

function MainForm() {
  const [formData, setFormData] = useState({
    qtnNo: "",
    qtnID: 0,
    enqID: 0,
    enquiryDate: "",
    drawingNo: "",
    contactPerson: "",
    contactNo: "",
    emailId: "",
    custName: "",
    jobType: "",
    jobTypeData: [],
    component: "",
    componentData: [],
    custAddress: "",
    otherInfo: "",
    conclusion: "",
    material: "",
    thickness: "",
    materialTableData: [],
    selectedRow1: null,
    selectedRowData: {},
    jointType: "",
    jointTypeData: [],
    allowComb: "",
    srRequirements: "",
    proQty: "",
    batchQty: 0,
    yearQty: 0,
    fixtureReq: 0,
    fixtureRemarks: "",
    depthOfPen: "",
    strength: "",
    hermaticJoint: 0,
    allowableDeffects: "",
    drawingAvailable: 0,
    inspection: "",
    inspectionData: [],
    toolPath: "",
    toolPathData: [],
    materialSource: "",
    materialSourceData: [],
    shippingDelivery: "",
    deliveryData: [],
    expectedDelivery: new Date().toISOString().split("T")[0],
    testType: "",
    testName: "",
    testDetails: "",
    testTypeData: [],
    testListData: [],
    isNewEnquiryService: true,
    isNewWeldingDetails: true,
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
          qtnNo: response.data[0].QtnNo,
          qtnID: response.data[0].QtnID,
          contactPerson: response.data[0].Contact,
          emailId: response.data[0].E_mail,
          custName: response.data[0].CustomerName,
          contactNo: response.data[0].CustTele,
          custAddress: response.data[0].CustAddress,
        }));
        console.log("response", response.data);
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, []);

  useEffect(() => {
    Axios.get(apipoints.getJobType)
      .then((response) => {
        // console.log("Job Type response", response.data);
        setFormData((prevData) => ({
          ...prevData,
          jobTypeData: response.data,
        }));
      })
      .catch((error) => {
        console.error("Error fetching", error);
      });
  }, []);

  useEffect(() => {
    Axios.get(apipoints.getComponent)
      .then((response) => {
        // console.log("Component response", response.data);
        setFormData((prevData) => ({
          ...prevData,
          componentData: response.data,
        }));
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

  const handleSave = async () => {
    try {
      if (!formData.drawingNo) {
        toast.error("Enter Drawing No");
        return;
      }

      const enquiryServiceData = {
        qtnID: formData.qtnID,
        drawingNo: formData.drawingNo,
        jobType: formData.jobType,
        component: formData.component,
      };

      const weldingDetailsData = {
        qtnID: formData.qtnID,
        allowComb: formData.allowComb,
        srRequirements: formData.srRequirements,
        jointType: formData.jointType,
        batchQty: formData.batchQty,
        yearQty: formData.yearQty,
        depthOfPen: formData.depthOfPen,
        fixtureReq: formData.fixtureReq,
        fixtureRemarks: formData.fixtureRemarks,
        strength: formData.strength,
        hermaticJoint: formData.hermaticJoint,
        allowableDeffects: formData.allowableDeffects,
        drawingAvailable: formData.drawingAvailable,
        inspection: formData.inspection,
        toolPath: formData.toolPath,
        shippingDelivery: formData.shippingDelivery,
        materialSource: formData.materialSource,
        expectedDelivery: formData.expectedDelivery,
      };

      await Axios.post(apipoints.saveEnquiryService, enquiryServiceData);
      await Axios.post(apipoints.saveWeldingDetails, weldingDetailsData);

      toast.success("Data Saved");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log("formData", formData);

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
                {formData.componentData?.map((comp, index) => (
                  <option key={index} value={comp.Component_Name}>
                    {comp.Component_Name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex justify-content-end" style={{ gap: "10px" }}>
            <button
              type="submit"
              className="button-style1"
              variant="primary"
              onClick={handleSave}
            >
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

                {formData.jobTypeData.map((jobType, index) => (
                  <option key={index} value={jobType.Job_Type}>
                    {jobType.Job_Type}
                  </option>
                ))}
              </select>
            </div>
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
