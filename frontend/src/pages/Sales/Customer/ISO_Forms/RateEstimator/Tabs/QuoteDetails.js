import React, { useState, useEffect } from "react";
import Axios from "axios";
import { apipoints } from "../../../../../api/isoForms/rateEstimator";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";

export default function QuoteDetails({
  formData,
  setFormData,
  handleInputChange,
  handleRowSelect,
}) {
  const calculateTotal = (columnName) => {
    if (!formData.quoteDetailsTableData) return 0;

    const total = formData.quoteDetailsTableData.reduce(
      (acc, curr) => acc + parseFloat(curr[columnName]),
      0
    );
    return total.toFixed(2);
  };

  console.log("formData.revisedUnitPrice", formData.revisedUnitPrice);

  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const blockInvalidPointChar = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  const handleAddQuote = async () => {
    try {
      const fieldsToValidate = [
        "jointNo",
        "weldLength",
        "weldSpeed",
        "weldingTime",
        "setUpTime",
        "incomingInspectionTime",
        "cleaningTime",
        "assemblyTime",
        "partLoadingTime",
        "partUnloadingTime",
        "finalInspectionTime",
        "packingDispatchTime",
        "setupCharges",
        "inspectionCharges",
        "outSourcingCharges",
        "consumables",
        "materialCost",
        "fillerCost",
      ];
      if (formData.jointNo === "") {
        toast.error("Enter Joint No");
        return;
      }

      for (const field of fieldsToValidate) {
        if (formData[field] === "") {
          toast.error(
            `Enter ${field
              .replace(/([A-Z])/g, " $1")
              .trim()
              .replace(/^\w/, (c) => c.toUpperCase())}`
          );

          return;
        }
      }
      const newQuote = {
        qtnID: formData.qtnID,
        jointNo: formData.jointNo,
        weldLength: formData.weldLength,
        weldSpeed: formData.weldSpeed,
        weldingTime: formData.weldingTime,
        setUpTime: formData.setUpTime,
        incomingInspectionTime: formData.incomingInspectionTime,
        cleaningTime: formData.cleaningTime,
        assemblyTime: formData.assemblyTime,
        partLoadingTime: formData.partLoadingTime,
        partUnloadingTime: formData.partUnloadingTime,
        finalInspectionTime: formData.finalInspectionTime,
        packingDispatchTime: formData.packingDispatchTime,
        setupCharges: formData.setupCharges,
        inspectionCharges: formData.inspectionCharges,
        outSourcingCharges: formData.outSourcingCharges,
        consumables: formData.consumables,
        materialCost: formData.materialCost,
        fillerCost: formData.fillerCost,
      };

      const response = await Axios.post(apipoints.insertQuoteDetails, newQuote);

      const totalWeldLength = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Weld_Length || 0),
        0
      );

      const totalWeldSpeed = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Weld_Speed || 0),
        0
      );

      const totalWeldTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Weld_Time || 0),
        0
      );

      const totalSetupTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Setup_Time || 0),
        0
      );

      const totalInspectionTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Inspection_Time || 0),
        0
      );

      const totalCleaningTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Cleaning_Time || 0),
        0
      );

      const totalAssemblyTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Assembly_Time || 0),
        0
      );

      const totalPartLoading = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Part_Loading || 0),
        0
      );

      const totalPartUnloading = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Part_Unloading || 0),
        0
      );

      const totalFinalInspectionTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.FinalInspection_Time || 0),
        0
      );

      const totalPackingDispatchTime = response.data.reduce(
        (acc, curr) => acc + parseInt(curr.Packing_Dispatch_Time || 0),
        0
      );

      const totalSetupCharges = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.SetUp_Charges || 0),
        0
      );

      const totalInspectionCharges = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Inspection_Charges || 0),
        0
      );

      const totalOutSourcingCharges = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.OutSoucring_Charges || 0),
        0
      );

      const totalConsumables = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Consumables || 0),
        0
      );

      const totalMaterialCost = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Material_Cost || 0),
        0
      );

      const totalFillerCost = response.data.reduce(
        (acc, curr) => acc + parseFloat(curr.Filler_Cost || 0),
        0
      );

      setFormData((prevFormData) => ({
        ...prevFormData,
        totalWeldLength: totalWeldLength.toFixed(2),
        totalWeldTime: totalWeldTime,
        totalWeldSpeed: totalWeldSpeed.toFixed(2),
        totalSetupTime: totalSetupTime,
        totalInspectionTime: totalInspectionTime,
        totalCleaningTime: totalCleaningTime,
        totalAssemblyTime: totalAssemblyTime,
        totalPartLoading: totalPartLoading,
        totalPartUnloading: totalPartUnloading,
        totalFinalInspectionTime: totalFinalInspectionTime,
        totalPackingDispatchTime: totalPackingDispatchTime,
        totalSetupCharges: totalSetupCharges.toFixed(2),
        totalInspectionCharges: totalInspectionCharges.toFixed(2),
        totalOutSourcingCharges: totalOutSourcingCharges.toFixed(2),
        totalConsumables: totalConsumables.toFixed(2),
        totalMaterialCost: totalMaterialCost.toFixed(2),
        totalFillerCost: totalFillerCost.toFixed(2),
      }));

      const labourTime =
        totalInspectionTime +
        totalCleaningTime +
        totalAssemblyTime +
        totalPackingDispatchTime;

      const machineTime =
        totalPartLoading +
        totalPartUnloading +
        totalWeldTime +
        totalFinalInspectionTime;

      const updatedFormData = {
        qtnID: formData.qtnID,
        totalWeldLength: totalWeldLength.toFixed(2),
        totalWeldSpeed: totalWeldSpeed.toFixed(2),
        totalWeldTime: totalWeldTime,
        totalSetupTime: totalSetupTime,
        totalInspectionTime: totalInspectionTime,
        totalCleaningTime: totalCleaningTime,
        totalAssemblyTime: totalAssemblyTime,
        totalPartLoading: totalPartLoading,
        totalPartUnloading: totalPartUnloading,
        totalFinalInspectionTime: totalFinalInspectionTime,
        totalPackingDispatchTime: totalPackingDispatchTime,
        totalSetupCharges: totalSetupCharges.toFixed(2),
        totalInspectionCharges: totalInspectionCharges.toFixed(2),
        totalOutSourcingCharges: totalOutSourcingCharges.toFixed(2),
        totalConsumables: totalConsumables.toFixed(2),
        totalMaterialCost: totalMaterialCost.toFixed(2),
        totalFillerCost: totalFillerCost.toFixed(2),
        labourTime: labourTime,
        unitPrice: formData.unitPrice,
        revisedUnitPrice: formData.revisedUnitPrice,
        machineTime: machineTime,
      };

      await Axios.post(apipoints.updateQuoteRegister, updatedFormData);

      setFormData((prevFormData) => ({
        ...prevFormData,
        ...updatedFormData,
        quoteDetailsTableData: response.data,
        jointNo: "",
        weldLength: 0,
        weldSpeed: 0,
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
        overheadCharges: 0,
        percentage: 0,
      }));
    } catch (error) {
      // console.error("Error Adding Quote Details", error);
      toast.error("Error Adding Quote Details");
    }
  };

  const calculateTotalValues = (updatedData) => {
    const totalWeldLength = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.Weld_Length || 0),
      0
    );

    const totalWeldSpeed = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Weld_Speed || 0),
      0
    );

    const totalWeldTime = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Weld_Time || 0),
      0
    );

    const totalSetupTime = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Setup_Time || 0),
      0
    );

    const totalInspectionTime = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Inspection_Time || 0),
      0
    );

    const totalCleaningTime = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Cleaning_Time || 0),
      0
    );

    const totalAssemblyTime = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Assembly_Time || 0),
      0
    );

    const totalPartLoading = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Part_Loading || 0),
      0
    );

    const totalPartUnloading = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Part_Unloading || 0),
      0
    );

    const totalFinalInspectionTime = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.FinalInspection_Time || 0),
      0
    );

    const totalPackingDispatchTime = updatedData.reduce(
      (acc, curr) => acc + parseInt(curr.Packing_Dispatch_Time || 0),
      0
    );

    const totalSetupCharges = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.SetUp_Charges || 0),
      0
    );

    const totalInspectionCharges = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.Inspection_Charges || 0),
      0
    );

    const totalOutSourcingCharges = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.OutSoucring_Charges || 0),
      0
    );

    const totalConsumables = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.Consumables || 0),
      0
    );

    const totalMaterialCost = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.Material_Cost || 0),
      0
    );

    const totalFillerCost = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.Filler_Cost || 0),
      0
    );

    // Calculate other derived values
    const labourTime =
      totalInspectionTime +
      totalCleaningTime +
      totalAssemblyTime +
      totalPackingDispatchTime;

    const machineTime =
      totalPartLoading +
      totalPartUnloading +
      totalWeldTime +
      totalFinalInspectionTime;

    const overheadCharges = updatedData.reduce(
      (acc, curr) => acc + parseFloat(curr.Overhead_Charges || 0),
      0
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      totalWeldLength: totalWeldLength.toFixed(2),
      totalWeldTime: totalWeldTime,
      totalWeldSpeed: totalWeldSpeed.toFixed(2),
      totalSetupTime: totalSetupTime,
      totalInspectionTime: totalInspectionTime,
      totalCleaningTime: totalCleaningTime,
      totalAssemblyTime: totalAssemblyTime,
      totalPartLoading: totalPartLoading,
      totalPartUnloading: totalPartUnloading,
      totalFinalInspectionTime: totalFinalInspectionTime,
      totalPackingDispatchTime: totalPackingDispatchTime,
      totalSetupCharges: totalSetupCharges.toFixed(2),
      totalInspectionCharges: totalInspectionCharges.toFixed(2),
      totalOutSourcingCharges: totalOutSourcingCharges.toFixed(2),
      totalConsumables: totalConsumables.toFixed(2),
      totalMaterialCost: totalMaterialCost.toFixed(2),
      totalFillerCost: totalFillerCost.toFixed(2),
      overheadCharges: overheadCharges.toFixed(2),
    }));

    return {
      totalWeldLength: totalWeldLength.toFixed(2),
      totalWeldSpeed: totalWeldSpeed.toFixed(2),
      totalWeldTime: totalWeldTime,
      totalSetupTime: totalSetupTime,
      totalInspectionTime: totalInspectionTime,
      totalCleaningTime: totalCleaningTime,
      totalAssemblyTime: totalAssemblyTime,
      totalPartLoading: totalPartLoading,
      totalPartUnloading: totalPartUnloading,
      totalFinalInspectionTime: totalFinalInspectionTime,
      totalPackingDispatchTime: totalPackingDispatchTime,
      totalSetupCharges: totalSetupCharges.toFixed(2),
      totalInspectionCharges: totalInspectionCharges.toFixed(2),
      totalOutSourcingCharges: totalOutSourcingCharges.toFixed(2),
      totalConsumables: totalConsumables.toFixed(2),
      totalMaterialCost: totalMaterialCost.toFixed(2),
      totalFillerCost: totalFillerCost.toFixed(2),
      labourTime: labourTime,
      unitPrice: 0,
      revisedUnitPrice: 0,
      machineTime: machineTime,
      overheadCharges: overheadCharges.toFixed(2),
    };
  };

  // const handleDeleteQuote = async (id) => {
  //   try {
  //     if (!formData.selectedRow4) {
  //       toast.error("Select a row before deleting");
  //       return;
  //     }
  //     await Axios.post(apipoints.deleteQuoteDetails, { id });

  //     setFormData((prevData) => {
  //       const updatedTableData = prevData.quoteDetailsTableData.filter(
  //         (item) => item.ID !== id
  //       );

  //       const recalculatedValues = calculateTotalValues(updatedTableData);

  //       Axios.post(apipoints.updateQuoteDetailsAfterDelete, {
  //         recalculatedValues: recalculatedValues,
  //         qtnID: prevData.qtnID,
  //       })
  //         .then(() => {
  //           // toast.success("Quote Deleted successfully");
  //         })
  //         .catch((error) => {
  //           console.error("Error updating quote details after delete", error);
  //           toast.error("Error updating quote details after delete");
  //         });

  //       return {
  //         ...prevData,
  //         quoteDetailsTableData: updatedTableData,
  //         selectedRow4: null,
  //         ...recalculatedValues,
  //       };
  //     });
  //     toast.success("Quote Deleted successfully");
  //   } catch (error) {
  //     console.error("Error Deleting Quote", error);
  //     toast.error("Error Deleting Quote");
  //   }
  // };

  const handleDeleteQuote = async (id) => {
    try {
      if (!formData.selectedRow4) {
        toast.error("Select a row before deleting");
        return;
      }

      const jointNoToDelete = formData.quoteDetailsTableData.find(
        (item) => item.ID === id
      ).Joint_No;

      await Axios.post(apipoints.deleteQuoteDetails, { id });

      setFormData((prevData) => {
        const updatedTableData = prevData.quoteDetailsTableData.filter(
          (item) => item.ID !== id
        );

        const recalculatedValues = calculateTotalValues(updatedTableData);

        Axios.post(apipoints.updateQuoteDetailsAfterDelete, {
          recalculatedValues: recalculatedValues,
          qtnID: prevData.qtnID,
        })
          .then(() => {
            Axios.post(apipoints.deleteTestJoint, {
              jointNo: jointNoToDelete,
            })
              .then(() => {
                const updatedTestTableData = prevData.testTableData.filter(
                  (item) => item.Joint_No !== jointNoToDelete
                );

                setFormData((prevFormData) => ({
                  ...prevFormData,
                  testTableData: updatedTestTableData,
                }));
              })
              .catch((error) => {
                // console.error("Error deleting test joint", error);
              });
          })
          .catch((error) => {
            // console.error("Error updating quote details after delete", error);
            toast.error("Error updating quote details after delete");
          });

        return {
          ...prevData,
          quoteDetailsTableData: updatedTableData,
          selectedRow4: null,
          ...recalculatedValues,
        };
      });
      toast.success("Quote Deleted successfully");
    } catch (error) {
      // console.error("Error Deleting Quote", error);
      toast.error("Error Deleting Quote");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // if (name === "overheadCharges") {
    const percentage = parseFloat(value);

    if (!isNaN(percentage)) {
      const totalOverheadCharges = (percentage / 100) * formData.totalCost;

      setFormData((prevData) => ({
        ...prevData,
        overheadCharges: totalOverheadCharges.toFixed(2),
      }));
    }
    // }
  };

  const calculateTotalTestCost = () => {
    const total_cost = formData.testTableData.reduce(
      (total, item) => total + parseFloat(item.Test_Cost || 0),
      0
    );

    setFormData((prevData) => ({
      ...prevData,
      testingCharges: total_cost,
    }));
  };

  useEffect(() => {
    calculateTotalTestCost();
  }, [formData.testTableData]);

  const calculateLabMacTotalCost = () => {
    const totalLabourCost =
      formData.labourTime * (formData.manPowerCost / 3600);
    const totalMachineCost =
      formData.machineTime * (formData.perhrMacCost / 3600);

    // console.log("totalLabourCost", totalLabourCost);
    // console.log("totalMachineCost", totalMachineCost);

    setFormData((prevData) => ({
      ...prevData,
      labourCost: parseFloat(totalLabourCost.toFixed(2)),
      machineCost: parseFloat(totalMachineCost.toFixed(2)),
    }));
  };

  useEffect(() => {
    calculateLabMacTotalCost();
  }, [
    formData.labourTime,
    formData.machineTime,
    formData.manPowerCost,
    formData.labourCost,
    formData.perhrMacCost,
    formData.quoteDetailsTableData,
  ]);

  const calculateOutputPerHour = () => {
    const totalOutputPerHour = 3600 / formData.machineTime;

    setFormData((prevData) => ({
      ...prevData,
      outPutPerHour: parseFloat(totalOutputPerHour.toFixed(2)),
    }));
  };

  useEffect(() => {
    calculateOutputPerHour();
  }, [formData.machineTime, formData.quoteDetailsTableData]);

  const calculateTotalCost = () => {
    const totalCost = formData.labourCost + formData.machineCost;

    setFormData((prevData) => ({
      ...prevData,
      totalCost: parseFloat(totalCost).toFixed(2),
    }));
  };

  useEffect(() => {
    calculateTotalCost();
  }, [
    formData.labourCost,
    formData.machineCost,
    formData.quoteDetailsTableData,
  ]);

  const calculateUnitPrice = () => {
    const totalUnitPrice =
      parseFloat(formData.totalCost) +
      parseFloat(formData.overheadCharges) +
      parseFloat(formData.totalSetupCharges) +
      parseFloat(formData.totalInspectionCharges) +
      parseFloat(formData.totalOutSourcingCharges) +
      parseFloat(formData.totalConsumables) +
      parseFloat(formData.totalMaterialCost) +
      parseFloat(formData.totalFillerCost);

    setFormData((prevData) => ({
      ...prevData,
      unitPrice: parseFloat(totalUnitPrice).toFixed(2),
      // revisedUnitPrice: parseFloat(totalUnitPrice).toFixed(2),
    }));
  };

  useEffect(() => {
    calculateUnitPrice();
  }, [
    formData.totalCost,
    formData.overheadCharges,
    formData.quoteDetailsTableData,
  ]);

  const handleQuoteDetailsChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = formData.quoteDetailsTableData.map((item, idx) => {
      if (idx === index) {
        return { ...item, [name]: value };
      }
      return item;
    });

    setFormData((prevData) => ({
      ...prevData,
      quoteDetailsTableData: updatedItems,
    }));
  };

  const handleQuoteBlur = async (index, item) => {
    try {
      const updateData = {
        qtnID: formData.qtnID,
        quoteId: item.ID,
        ...item,
      };

      const response = await Axios.post(
        apipoints.updateQuoteDetails,
        updateData
      );

      if (response.status === 200) {
        // Optionally update the local copy of data
        const updatedQuotes = [...formData.quoteDetailsTableData];
        updatedQuotes[index] = { ...item };

        setFormData((prevFormData) => ({
          ...prevFormData,
          quoteDetailsTableData: updatedQuotes,
        }));

        const totalWeldLength = updatedQuotes.reduce(
          (acc, curr) => acc + parseFloat(curr.Weld_Length || 0),
          0
        );

        const totalWeldSpeed = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Weld_Speed || 0),
          0
        );

        const totalWeldTime = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Weld_Time || 0),
          0
        );

        const totalSetupTime = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Setup_Time || 0),
          0
        );

        const totalInspectionTime = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Inspection_Time || 0),
          0
        );

        const totalCleaningTime = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Cleaning_Time || 0),
          0
        );

        const totalAssemblyTime = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Assembly_Time || 0),
          0
        );

        const totalPartLoading = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Part_Loading || 0),
          0
        );

        const totalPartUnloading = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Part_Unloading || 0),
          0
        );

        const totalFinalInspectionTime = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.FinalInspection_Time || 0),
          0
        );

        const totalPackingDispatchTime = updatedQuotes.reduce(
          (acc, curr) => acc + parseInt(curr.Packing_Dispatch_Time || 0),
          0
        );

        const totalSetupCharges = updatedQuotes.reduce(
          (acc, curr) => acc + parseFloat(curr.SetUp_Charges || 0),
          0
        );

        const totalInspectionCharges = updatedQuotes.reduce(
          (acc, curr) => acc + parseFloat(curr.Inspection_Charges || 0),
          0
        );

        const totalOutSourcingCharges = updatedQuotes.reduce(
          (acc, curr) => acc + parseFloat(curr.OutSoucring_Charges || 0),
          0
        );

        const totalConsumables = updatedQuotes.reduce(
          (acc, curr) => acc + parseFloat(curr.Consumables || 0),
          0
        );

        const totalMaterialCost = updatedQuotes.reduce(
          (acc, curr) => acc + parseFloat(curr.Material_Cost || 0),
          0
        );

        const totalFillerCost = updatedQuotes.reduce(
          (acc, curr) => acc + parseFloat(curr.Filler_Cost || 0),
          0
        );

        setFormData((prevFormData) => ({
          ...prevFormData,
          totalWeldLength: totalWeldLength.toFixed(2),
          totalWeldTime: totalWeldTime,
          totalWeldSpeed: totalWeldSpeed.toFixed(2),
          totalSetupTime: totalSetupTime,
          totalInspectionTime: totalInspectionTime,
          totalCleaningTime: totalCleaningTime,
          totalAssemblyTime: totalAssemblyTime,
          totalPartLoading: totalPartLoading,
          totalPartUnloading: totalPartUnloading,
          totalFinalInspectionTime: totalFinalInspectionTime,
          totalPackingDispatchTime: totalPackingDispatchTime,
          totalSetupCharges: totalSetupCharges.toFixed(2),
          totalInspectionCharges: totalInspectionCharges.toFixed(2),
          totalOutSourcingCharges: totalOutSourcingCharges.toFixed(2),
          totalConsumables: totalConsumables.toFixed(2),
          totalMaterialCost: totalMaterialCost.toFixed(2),
          totalFillerCost: totalFillerCost.toFixed(2),
        }));

        const labourTime =
          totalInspectionTime +
          totalCleaningTime +
          totalAssemblyTime +
          totalPackingDispatchTime;

        const machineTime =
          totalPartLoading +
          totalPartUnloading +
          totalWeldTime +
          totalFinalInspectionTime;

        const updatedFormData = {
          qtnID: formData.qtnID,
          totalWeldLength: totalWeldLength.toFixed(2),
          totalWeldSpeed: totalWeldSpeed.toFixed(2),
          totalWeldTime: totalWeldTime,
          totalSetupTime: totalSetupTime,
          totalInspectionTime: totalInspectionTime,
          totalCleaningTime: totalCleaningTime,
          totalAssemblyTime: totalAssemblyTime,
          totalPartLoading: totalPartLoading,
          totalPartUnloading: totalPartUnloading,
          totalFinalInspectionTime: totalFinalInspectionTime,
          totalPackingDispatchTime: totalPackingDispatchTime,
          totalSetupCharges: totalSetupCharges.toFixed(2),
          totalInspectionCharges: totalInspectionCharges.toFixed(2),
          totalOutSourcingCharges: totalOutSourcingCharges.toFixed(2),
          totalConsumables: totalConsumables.toFixed(2),
          totalMaterialCost: totalMaterialCost.toFixed(2),
          totalFillerCost: totalFillerCost.toFixed(2),
          labourTime: labourTime,
          unitPrice: formData.unitPrice,
          revisedUnitPrice: formData.revisedUnitPrice,
          machineTime: machineTime,
        };

        await Axios.post(apipoints.updateQuoteRegister, updatedFormData);

        setFormData((prevFormData) => ({
          ...prevFormData,
          ...updatedFormData,
          percentage: 0,
          overheadCharges: 0,
          revisedUnitPrice: 0,
        }));
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      // console.error("Error updating Quote details", error);
      // toast.error("Error updating Quote details");
    }
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
              <input
                className="input-field"
                type="text"
                name="machine"
                value={formData.machine}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

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
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Man Power Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="manPowerCost"
                value={formData.manPowerCost}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">
                Welding Setting Cost Per Hour
              </label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="weldingSettingCost"
                value={formData.weldingSettingCost}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Per Hour Machine Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="text"
                name="perhrMacCost"
                value={formData.perhrMacCost}
                onChange={handleInputChange}
                disabled={!formData.tabsEnable}
              />
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
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="text"
                  name="jointNo"
                  value={formData.jointNo}
                  onChange={handleInputChange}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Weld Length (MM)</label>
              </div>
              <div className="col-6 mt-2">
                <input
                  className="in-field"
                  type="number"
                  name="weldLength"
                  min={0}
                  value={formData.weldLength}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Weld Speed(MM/Sec)</label>
              </div>
              <div className="col-6 mt-2">
                <input
                  className="in-field"
                  type="number"
                  name="weldSpeed"
                  min={0}
                  value={formData.weldSpeed}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Welding Time(Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="weldingTime"
                  min={0}
                  value={formData.weldingTime}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Set Up Time(Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="setUpTime"
                  value={formData.setUpTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
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
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="incomingInspectionTime"
                  value={formData.incomingInspectionTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Cleaning Time (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                <input
                  className="in-field"
                  type="number"
                  name="cleaningTime"
                  value={formData.cleaningTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Assembly Time (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="assemblyTime"
                  value={formData.assemblyTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Part Loading (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="partLoadingTime"
                  value={formData.partLoadingTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Part Unloading Time (Sec)</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="partUnloadingTime"
                  value={formData.partUnloadingTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
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
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="finalInspectionTime"
                  value={formData.finalInspectionTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
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
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="packingDispatchTime"
                  value={formData.packingDispatchTime}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidPointChar}
                  disabled={!formData.tabsEnable}
                />
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
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="setupCharges"
                  value={formData.setupCharges}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Inspection Charges</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="inspectionCharges"
                  value={formData.inspectionCharges}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Out Sourcing Charges</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="outSourcingCharges"
                  value={formData.outSourcingCharges}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Consumables</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="consumables"
                  value={formData.consumables}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Material Cost</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="materialCost"
                  value={formData.materialCost}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="d-flex">
              <div className="col-6">
                <label className="form-label">Filler Cost</label>
              </div>
              <div className="col-6 mt-2">
                {/* <input className="input-field" type="text" /> */}
                <input
                  className="in-field"
                  type="number"
                  name="fillerCost"
                  value={formData.fillerCost}
                  min={0}
                  onChange={handleInputChange}
                  onKeyDown={blockInvalidChar}
                  disabled={!formData.tabsEnable}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 mb-1 ">
          <div className="d-flex justify-content-center">
            <div className="mx-2">
              <button
                // className="button-style"
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                disabled={!formData.tabsEnable}
                onClick={handleAddQuote}
              >
                Add
              </button>
            </div>

            <div className="mx-2">
              <button
                // className="button-style"
                className={
                  formData.tabsEnable ? "button-style" : "button-disabled"
                }
                variant="primary"
                disabled={!formData.tabsEnable}
                onClick={() => handleDeleteQuote(formData.selectedRow4)}
              >
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
                height: "180px",
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
                    <th>Joint No</th>
                    <th>Weld Length(MM)</th>
                    <th>Weld Speed(MM/Sec)</th>
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

                <tbody className="tablebody" style={{ textAlign: "center" }}>
                  {formData.quoteDetailsTableData?.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowSelect(item.ID)}
                      className={
                        formData.selectedRow4 === item.ID
                          ? "selectedRowClr"
                          : ""
                      }
                    >
                      <td>{index + 1}</td>
                      <td>{item.Joint_No}</td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Weld_Length}
                          name="Weld_Length"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Weld_Speed}
                          name="Weld_Speed"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          className="input-style"
                          value={item.Weld_Time}
                          name="Weld_Time"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Setup_Time}
                          name="Setup_Time"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Inspection_Time}
                          name="Inspection_Time"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Cleaning_Time}
                          name="Cleaning_Time"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Assembly_Time}
                          name="Assembly_Time"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Part_Loading}
                          name="Part_Loading"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Part_Unloading}
                          name="Part_Unloading"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.FinalInspection_Time}
                          name="FinalInspection_Time"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Packing_Dispatch_Time}
                          name="Packing_Dispatch_Time"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.SetUp_Charges}
                          name="SetUp_Charges"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Inspection_Charges}
                          name="Inspection_Charges"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.OutSoucring_Charges}
                          name="OutSoucring_Charges"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Consumables}
                          name="Consumables"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Material_Cost}
                          name="Material_Cost"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>

                      <td>
                        <input
                          type="number"
                          className="input-style"
                          value={item.Filler_Cost}
                          name="Filler_Cost"
                          onChange={(e) => handleQuoteDetailsChange(e, index)}
                          onBlur={() => handleQuoteBlur(index, item)}
                          disabled={!formData.tabsEnable}
                        />
                      </td>
                    </tr>
                  ))}

                  <tr style={{ fontWeight: "bold" }}>
                    <td colSpan="2">Total</td>
                    <td>{calculateTotal("Weld_Length")}</td>
                    <td>{calculateTotal("Weld_Speed")}</td>
                    <td>{parseInt(calculateTotal("Weld_Time"))}</td>
                    <td>{parseInt(calculateTotal("Setup_Time"))}</td>
                    <td>{parseInt(calculateTotal("Inspection_Time"))}</td>
                    <td>{parseInt(calculateTotal("Cleaning_Time"))}</td>
                    <td>{parseInt(calculateTotal("Assembly_Time"))}</td>
                    <td>{parseInt(calculateTotal("Part_Loading"))}</td>
                    <td>{parseInt(calculateTotal("Part_Unloading"))}</td>
                    <td>{parseInt(calculateTotal("FinalInspection_Time"))}</td>
                    <td>{parseInt(calculateTotal("Packing_Dispatch_Time"))}</td>
                    <td>{calculateTotal("SetUp_Charges")}</td>
                    <td>{calculateTotal("Inspection_Charges")}</td>
                    <td>{calculateTotal("OutSoucring_Charges")}</td>
                    <td>{calculateTotal("Consumables")}</td>
                    <td>{calculateTotal("Material_Cost")}</td>
                    <td>{calculateTotal("Filler_Cost")}</td>
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
        <div className="col-md-4 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Labour Time (Sec)</label>
            </div>
            <div className="col-8">
              {/*  */}
              <input
                className="input-field"
                type="number"
                name="labourTime"
                value={formData.labourTime}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine Time (Sec)</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="machineTime"
                value={formData.machineTime}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Out Put Per Hour</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="outPutPerHour"
                value={formData.outPutPerHour}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        {/* <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Transportation Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="transporationCost"
                value={formData.transporationCost}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={
                  !formData.tabsEnable ||
                  formData.shippingDelivery === "Customer Pick Up"
                }
              />
            </div>
          </div>
        </div> */}
      </div>

      <hr className="hr-line"/>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Labour Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="labourCost"
                value={formData.labourCost}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Filler Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="totalFillerCost"
                value={formData.totalFillerCost}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Set Up Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="totalSetupCharges"
                value={formData.totalSetupCharges}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Overhead Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="overheadCharges"
                value={formData.overheadCharges}
                min={0}
                // onChange={handleInputChange}
                // onBlur={handleBlur}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Machine Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="machineCost"
                value={formData.machineCost}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Inspection Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="totalInspectionCharges"
                value={formData.totalInspectionCharges}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Consumables</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="totalConsumables"
                value={formData.totalConsumables}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                // disabled={!formData.tabsEnable}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Total Price Per Part</label>
            </div>
            <div className="col-8">
              {/* Total / 418 */}
              <input
                className="input-field"
                type="number"
                name="unitPrice"
                value={formData.unitPrice}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Material Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="totalMaterialCost"
                value={formData.totalMaterialCost}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Out Sourcing Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="totalOutSourcingCharges"
                value={formData.totalOutSourcingCharges}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Overhead Percentage(%)</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="percentage"
                value={formData.percentage}
                min={0}
                onChange={handleInputChange}
                onBlur={handleBlur}
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Revised Unit Price</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="revisedUnitPrice"
                value={formData.revisedUnitPrice}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="hr-line"/>

      <div className="row mt-1 mb-4">
        <div className="col-md-4 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Fixture Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="fixtureCharges"
                value={formData.fixtureCharges}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={!formData.tabsEnable}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Testing Charges</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="testingCharges"
                value={formData.testingCharges}
                min={0}
                // onChange={handleInputChange}
                // onKeyDown={blockInvalidChar}
                // disabled={!formData.tabsEnable}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="d-flex">
            <div className="col-4">
              <label className="form-label">Transportation Cost</label>
            </div>
            <div className="col-8">
              <input
                className="input-field"
                type="number"
                name="transporationCost"
                value={formData.transporationCost}
                min={0}
                onChange={handleInputChange}
                onKeyDown={blockInvalidChar}
                disabled={
                  !formData.tabsEnable ||
                  formData.shippingDelivery === "Customer Pick Up"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
