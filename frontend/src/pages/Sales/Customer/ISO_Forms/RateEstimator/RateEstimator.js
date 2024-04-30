import React, { useEffect, useState } from "react";
import { apipoints } from "../../../../api/isoForms/rateEstimator";
import Axios from "axios";
import { Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import WeldingDetails from "./Tabs/WeldingDetails";
import Testing from "./Tabs/Testing";
import Risks from "./Tabs/Risks";
import QuoteDetails from "./Tabs/QuoteDetails";
import { useNavigate } from "react-router-dom";
import RateEstimatorModal from "../Printpages/Rateestimator/RateEstimatorModal";

function RateEstimator() {
  const location = useLocation();
  const QtnID = location.state?.QtnID || "";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    qtnNo: "",
    qtnID: QtnID,
    tabsEnable: false,
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
    material: "",
    thickness: 0,
    materialTableData: [],
    selectedRow1: null,
    selectedRow2: null,
    selectedRow3: null,
    selectedRow4: null,

    selectedRowData1: {},
    selectedRowData2: {},
    selectedRowData3: {},
    selectedRowData4: {},

    jointType: "",
    jointTypeData: [],

    // Welding Details
    allowComb: "",
    srRequirements: "",
    batchQty: 0,
    yearQty: 0,
    fixtureReq: null,
    fixtureRemarks: "",
    depthOfPen: "",
    strength: "",
    hermaticJoint: null,
    allowableDeffects: "",
    drawingAvailable: null,
    inspection: "",
    inspectionData: [],
    toolPath: "",
    toolPathData: [],
    materialSource: "",
    materialSourceData: [],
    shippingDelivery: "",
    deliveryData: [],
    expectedDelivery: "",

    // Testing
    testType: "",
    testTypeName: "",
    testName: "",
    testDetails: "",
    testCost: 0,
    testTypeData: [],
    testListData: [],
    testTableData: [],
    jointName: "",
    jointNames: [],
    totalTestCost: 0,

    // Risks
    risk: "",
    riskTableData: [],
    otherInfo: "",
    conclusion: "",

    // Quote Details
    machine: "",
    filler: "",
    jointNo: "",
    weldLength: 0,
    weldingTime: 0,
    setUpTime: 0,
    incomingInspectionTime: 0,
    cleaningTime: 0,
    assemblyTime: 0,
    partLoadingTime: 0,
    partUnloadingTime: 0,
    finalInspectionTime: 0,
    packingDispatchTime: 0,
    setupCharges: 0,
    inspectionCharges: 0,
    outSourcingCharges: 0,
    consumables: 0,
    materialCost: 0,
    fillerCost: 0,
    labourTime: 0,
    machineTime: 0,
    testingCharges: 0,
    fixtureCharges: 0,
    transporationCost: 0,
    overheadCharges: 0,
    overheadPercentage: 0,
    percentage: 0,
    unitPrice: 0,
    revisedUnitPrice: 0,

    totalWeldLength: 0,
    totalWeldTime: 0,
    totalWeldSpeed: 0,
    totalSetupTime: 0,
    totalInspectionTime: 0,
    totalCleaningTime: 0,
    totalAssemblyTime: 0,
    totalPartLoading: 0,
    totalPartUnloading: 0,
    totalFinalInspectionTime: 0,
    totalPackingDispatchTime: 0,
    totalSetupCharges: 0,
    totalInspectionCharges: 0,
    totalOutSourcingCharges: 0,
    totalConsumables: 0,
    totalMaterialCost: 0,
    totalFillerCost: 0,

    transportationCostDisabled: false,
    quoteDetailsTableData: [],

    // new fields
    manPowerCost: 0,
    weldingSettingCost: 0,
    perhrMacCost: 0,
    weldSpeed: 0,
    outPutPerHour: 0,
    labourCost: 0,
    machineCost: 0,

    totalCost: 0,
  });
  const Qtnno = "2009/11/166";
  const [key, setKey] = useState("Welding_Details");

  const [openPrintModal, setOpenPrintModal] = useState("");

  const openPdf = () => {
    setOpenPrintModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(apipoints.getData, {
          params: {
            qtnID: formData.qtnID,
          },
        });

        if (response.data && response.data.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            enquiryDate: response.data[0].EnquiryDate
              ? new Date(response.data[0].EnquiryDate).toLocaleDateString(
                  "en-GB"
                )
              : "",
            qtnNo: response.data[0].QtnNo,
            qtnID: response.data[0].QtnID,
            contactPerson: response.data[0].Contact,
            emailId: response.data[0].E_mail,
            custName: response.data[0].CustomerName,
            contactNo: response.data[0].CustTele,
            custAddress: response.data[0].CustAddress,
          }));
        } else {
          console.error("Response data is empty.");
        }
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    fetchData();
  }, [formData.qtnID]);

  useEffect(() => {
    const fetchDataCount = async () => {
      try {
        const response = await Axios.post(apipoints.getDataCount, {
          qtnID: formData.qtnID,
        });
        const count = response.data.count;

        setFormData((prevData) => ({
          ...prevData,
          tabsEnable: count > 0,
        }));
      } catch (error) {
        console.error("Error fetching data count:", error);
      }
    };

    fetchDataCount();
  }, [formData.qtnID]);

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

    if (name === "shippingDelivery" && value === "Customer Pick Up") {
      setFormData((prevData) => ({
        ...prevData,
        transporationCost: 0,
        transportationCostDisabled: true,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        transportationCostDisabled: false,
      }));
    }

    if (name === "percentage") {
      setFormData((prevData) => ({
        ...prevData,
        overheadCharges: 0,
        unitPrice: 0,
        revisedUnitPrice: 0,
      }));
    }
  };

  const handleRowSelect = (index) => {
    const selectedRowData1 = formData.materialTableData[index];
    const selectedRowData2 = formData.testTableData[index];
    const selectedRowData3 = formData.riskTableData[index];
    const selectedRowData4 = formData.riskTableData[index];

    setFormData((prevData) => ({
      ...prevData,
      selectedRow1: prevData.selectedRow1 === index ? null : index,
      selectedRow2: prevData.selectedRow2 === index ? null : index,
      selectedRow3: prevData.selectedRow3 === index ? null : index,
      selectedRow4: prevData.selectedRow4 === index ? null : index,

      selectedRowData1: selectedRowData1 || {},
      selectedRowData2: selectedRowData2 || {},
      selectedRowData3: selectedRowData3 || {},
      selectedRowData4: selectedRowData4 || {},
    }));
  };

  const handleSave = async () => {
    try {
      if (!formData.drawingNo) {
        toast.error("Enter Drawing No");
        return;
      }
      if (formData.batchQty === "") {
        toast.error("Enter Batch Quantity");
        return;
      }
      if (formData.yearQty === "") {
        toast.error("Enter Year Quantity");
        return;
      }

      setFormData((prevData) => ({
        ...prevData,
        tabsEnable: true,
      }));

      const enquiryServiceData = {
        qtnID: formData.qtnID,
        drawingNo: formData.drawingNo,
        jobType: formData.jobType,
        component: formData.component,
      };

      const weldingRegisterData = {
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

      const riskRegisterData = {
        qtnID: formData.qtnID,
        otherInfo: formData.otherInfo,
        conclusion: formData.conclusion,
      };

      const quoteDetailsData = {
        qtnID: formData.qtnID,
        machine: formData.machine,
        filler: formData.filler,
        labourTime: formData.labourTime,
        machineTime: formData.machineTime,
        testingCharges: formData.testingCharges,
        fixtureCharges: formData.fixtureCharges,
        transporationCost: formData.transporationCost,
        overheadCharges: formData.overheadCharges,
        percentage: formData.percentage,
        unitPrice: formData.unitPrice,
        revisedUnitPrice: formData.revisedUnitPrice,

        manPowerCost: formData.manPowerCost,
        weldingSettingCost: formData.weldingSettingCost,
        perhrMacCost: formData.perhrMacCost,
        outPutPerHour: formData.outPutPerHour,
        labourCost: formData.labourCost,
        machineCost: formData.machineCost,
      };

      await Axios.post(apipoints.saveEnquiryService, enquiryServiceData);
      await Axios.post(apipoints.saveWeldingDetails, weldingRegisterData);
      await Axios.post(apipoints.saveRiskDetails, riskRegisterData);
      await Axios.post(apipoints.saveQuoteDetails, quoteDetailsData);

      toast.success("Data Saved");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchQtnData = async () => {
      try {
        const response = await Axios.post(apipoints.allQtnData, {
          qtnID: formData.qtnID,
        });

        const {
          cust_enq_details,
          welding_register,
          welding_details,
          testing_details,
          risk_register,
          risk_details,
          quote_register,
          quote_details,
        } = response.data;

        setFormData((prevData) => ({
          ...prevData,
          drawingNo: cust_enq_details.length
            ? cust_enq_details[0].DrawingNo
            : "",

          jobType: cust_enq_details.length
            ? cust_enq_details[0].Job_Type !== null &&
              cust_enq_details[0].Job_Type !== "null"
              ? cust_enq_details[0].Job_Type
              : ""
            : "",

          component: cust_enq_details.length
            ? cust_enq_details[0].Component_Name !== null &&
              cust_enq_details[0].Component_Name !== "null"
              ? cust_enq_details[0].Component_Name
              : ""
            : "",

          materialTableData: welding_details.length ? welding_details : [],

          allowComb: welding_register.length
            ? welding_register[0].Allowable_Combination
            : "",

          srRequirements: welding_register.length
            ? welding_register[0].Statutory_Regulatory_Req
            : "",

          jointType: welding_register.length
            ? welding_register[0].Joint_Type
            : "",

          batchQty: welding_register.length ? welding_register[0].Batch_Qty : 0,

          yearQty: welding_register.length ? welding_register[0].Year_Qty : 0,

          depthOfPen: welding_register.length
            ? welding_register[0].Depth_of_Penetration
            : "",

          fixtureReq: welding_register.length
            ? welding_register[0].Fixture_Requirement
            : "",

          fixtureRemarks: welding_register.length
            ? welding_register[0].Fixture_Remarks
            : "",

          strength: welding_register.length ? welding_register[0].Strength : "",

          hermaticJoint: welding_register.length
            ? welding_register[0].Hermatic_Joint
            : "",

          allowableDeffects: welding_register.length
            ? welding_register[0].Allowable_Defects
            : "",

          drawingAvailable: welding_register.length
            ? welding_register[0].DrawingAvailable
            : "",

          inspection: welding_register.length
            ? welding_register[0].Inspection_Name
            : "",

          toolPath: welding_register.length
            ? welding_register[0].Tool_Path
            : "",

          shippingDelivery: welding_register.length
            ? welding_register[0].Delivery
            : "",

          materialSource: welding_register.length
            ? welding_register[0].MtrlSource
            : "",

          // expectedDelivery: welding_register.length
          //   ? new Date(welding_register[0].Expected_Delivery)
          //       .toISOString()
          //       .split("T")[0]
          //   : "",
          expectedDelivery:
            welding_register.length > 0 &&
            welding_register[0].Expected_Delivery &&
            welding_register[0].Expected_Delivery !== "1970-01-01" &&
            welding_register[0].Expected_Delivery != null &&
            !isNaN(Date.parse(welding_register[0].Expected_Delivery))
              ? new Date(welding_register[0].Expected_Delivery)
                  .toISOString()
                  .split("T")[0]
              : "",

          testTableData: testing_details.length ? testing_details : [],

          otherInfo: risk_register.length ? risk_register[0].Other_Info : "",

          conclusion: risk_register.length ? risk_register[0].Conclusion : "",

          riskTableData: risk_details.length ? risk_details : [],

          machine: quote_register.length ? quote_register[0].Machine : "",

          filler: quote_register.length ? quote_register[0].Filler : "",
          manPowerCost: quote_register.length
            ? quote_register[0].Man_Power_Cost
            : 0,
          weldingSettingCost: quote_register.length
            ? quote_register[0].Welding_Setting_Cost
            : 0,
          perhrMacCost: quote_register.length
            ? quote_register[0].Per_hour_Man_Cost
            : 0,

          outPutPerHour: quote_register.length
            ? quote_register[0].Output_Per_Hour
            : 0,
          labourCost: quote_register.length ? quote_register[0].Labour_Cost : 0,
          machineCost: quote_register.length
            ? quote_register[0].Machine_Cost
            : 0,

          quoteDetailsTableData: quote_details.length ? quote_details : [],

          labourTime: quote_register.length ? quote_register[0].Labour_Time : 0,

          percentage: quote_register.length ? quote_register[0].Percentage : 0,
          machineTime: quote_register.length
            ? quote_register[0].Machine_Time
            : 0,
          testingCharges: quote_register.length
            ? quote_register[0].Testing_Charges
            : 0,

          fixtureCharges: quote_register.length
            ? quote_register[0].Fixture_Charges
            : 0,
          transporationCost: quote_register.length
            ? quote_register[0].Transportaion_Cost
            : 0,
          overheadCharges: quote_register.length
            ? quote_register[0].Overhead_Charges
            : 0,
          unitPrice: quote_register.length ? quote_register[0].Unit_Price : 0,
          revisedUnitPrice: quote_register.length
            ? quote_register[0].Revised_Unit_Price
            : 0,

          totalWeldLength: quote_register.length
            ? quote_register[0].Total_Weld_Length
            : 0,
          totalWeldTime: quote_register.length
            ? quote_register[0].Total_Weld_Time
            : 0,

          totalWeldSpeed: quote_register.length
            ? quote_register[0].Total_Weld_Speed
            : 0,
          totalSetupTime: quote_register.length
            ? quote_register[0].Total_Setup_Time
            : 0,
          totalInspectionTime: quote_register.length
            ? quote_register[0].Total_Inspection_Time
            : 0,
          totalCleaningTime: quote_register.length
            ? quote_register[0].Total_Cleaning_Time
            : 0,
          totalAssemblyTime: quote_register.length
            ? quote_register[0].Total_Assembly_Time
            : 0,
          totalPartLoading: quote_register.length
            ? quote_register[0].Total_Part_Loading
            : 0,
          totalPartUnloading: quote_register.length
            ? quote_register[0].Total_Part_Unloading
            : 0,
          totalFinalInspectionTime: quote_register.length
            ? quote_register[0].Total_FinalInspection_Time
            : 0,
          totalPackingDispatchTime: quote_register.length
            ? quote_register[0].Total_Packing_Dispatch_Time
            : 0,

          totalSetupCharges: quote_register.length
            ? quote_register[0].Total_SetUp_Charges
            : 0,
          totalInspectionCharges: quote_register.length
            ? quote_register[0].Total_Inspection_Charges
            : 0,
          totalOutSourcingCharges: quote_register.length
            ? quote_register[0].Total_OutSoucring_Charges
            : 0,
          totalConsumables: quote_register.length
            ? quote_register[0].Total_Consumables
            : 0,
          totalMaterialCost: quote_register.length
            ? quote_register[0].Total_Material_Cost
            : 0,
          totalFillerCost: quote_register.length
            ? quote_register[0].Total_Filler_Cost
            : 0,
        }));
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };
    fetchQtnData();
  }, []);

  // console.log("quoteDetailsTableData", formData.quoteDetailsTableData);

  const handleClose = () => {
    navigate("/customer");
  };

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
                value={formData.component}
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
              className="button-style"
              variant="primary"
              onClick={handleSave}
            >
              Save
            </button>

            <div className="col-md-3 col-sm-6">
              <RateEstimatorModal
                openPrintModal={openPrintModal}
                formData={formData}
                setOpenPrintModal={setOpenPrintModal}
              />

              <button
                type="submit"
                className="button-style"
                variant="primary"
                onClick={openPdf}
              >
                Print
              </button>
            </div>

            <button
              type="submit"
              className="button-style"
              variant="primary"
              onClick={handleClose}
            >
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
                value={formData.jobType}
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

            <Tab eventKey="Testing" title="Testing">
              <Testing
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

export default RateEstimator;
