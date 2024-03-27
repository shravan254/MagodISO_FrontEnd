const rateEstimator = require("express").Router();
var createError = require("http-errors");
const req = require("express/lib/request");
const {
  misQuery,
  setupQuery,
  misQueryMod,
  qtnQueryMod,
  setupQueryMod,
} = require("../helpers/dbconn");
const { logger } = require("../helpers/logger");

rateEstimator.get("/getData", async (req, res, next) => {
  const { qtnID } = req.query;

  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.qtnlist WHERE QtnID  = ${qtnID}`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/getDataCount", async (req, res, next) => {
  const { qtnID } = req.body;
  // console.log("qtnID", req.body);

  try {
    qtnQueryMod(
      `SELECT COUNT(*) AS count FROM magodqtn.customer_enquiry_service WHERE QtnID = '${qtnID}'`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        res.json({ count });
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getComponent", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.component where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getJobType", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.job_type where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getComponent", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.component where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getJointType", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.welding_joint_type where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getInspection", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.welding_inspection where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getToolpath", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.welding_toolpath where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getDelivery", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.deleivery where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getMaterialSource", async (req, res, next) => {
  try {
    setupQueryMod(`SELECT * FROM magod_setup.mtrlsource`, (err, data) => {
      if (err) logger.error(err);
      // console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getTestType", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.test_type where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getTests", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.test_list where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/saveEnquiryService", async (req, res, next) => {
  const { qtnID, drawingNo, jobType, component } = req.body;
  // console.log("req.body Save", req.body);
  try {
    qtnQueryMod(
      `SELECT COUNT(*) AS count FROM magodqtn.customer_enquiry_service where QtnID = ${qtnID}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          qtnQueryMod(
            `INSERT INTO magodqtn.customer_enquiry_service (QtnID, DrawingNo, Job_Type, Component_Name) VALUES (${qtnID}, '${drawingNo}', '${jobType}', '${component}')`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into customer_enquiry_service");
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          qtnQueryMod(
            `UPDATE magodqtn.customer_enquiry_service SET DrawingNo = '${drawingNo}', Job_Type = '${jobType}', Component_Name = '${component}' WHERE QtnID = ${qtnID}`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error updating customer_enquiry_service");
              }
            }
          );

          res.send("Data inserted/updated successfully");
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/saveWeldingDetails", async (req, res, next) => {
  const {
    qtnID,
    allowComb,
    srRequirements,
    jointType,
    batchQty,
    yearQty,
    depthOfPen,
    fixtureReq,
    fixtureRemarks,
    strength,
    hermaticJoint,
    allowableDeffects,
    drawingAvailable,
    inspection,
    toolPath,
    shippingDelivery,
    materialSource,
    expectedDelivery,
  } = req.body;

  const expectedDeliveryValue = req.body.expectedDelivery
    ? `'${req.body.expectedDelivery}'`
    : "NULL";

  // console.log("Save", req.body);
  // console.log("expectedDelivery ", typeof req.body.expectedDelivery);
  // console.log("expectedDeliveryValue", typeof expectedDeliveryValue);

  console.log("expectedDeliveryValue", expectedDeliveryValue);
  try {
    qtnQueryMod(
      `SELECT COUNT(*) AS count FROM magodqtn.welding_register where QtnID = ${qtnID}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          qtnQueryMod(
            `INSERT INTO magodqtn.welding_register (QtnID, Allowable_Combination, Statutory_Regulatory_Req, Joint_Type, Batch_Qty, Year_Qty, Depth_of_Penetration, Fixture_Requirement, Fixture_Remarks, Strength, Hermatic_Joint, Allowable_Defects, DrawingAvailable, Inspection_Name, Tool_Path, MtrlSource, Delivery, Expected_Delivery) VALUES (${qtnID}, '${allowComb}', '${srRequirements}', '${jointType}', ${batchQty}, ${yearQty}, '${depthOfPen}', ${fixtureReq}, '${fixtureRemarks}', '${strength}', ${hermaticJoint}, '${allowableDeffects}', ${drawingAvailable}, '${inspection}', '${toolPath}', '${materialSource}', '${shippingDelivery}', ${expectedDeliveryValue})`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into welding_register");
              }
              res.send("Data inserted successfully");
            }
          );
        } else {
          qtnQueryMod(
            `UPDATE magodqtn.welding_register SET Allowable_Combination = '${allowComb}', Statutory_Regulatory_Req = '${srRequirements}', Joint_Type = '${jointType}', Batch_Qty = '${batchQty}', Year_Qty = '${yearQty}', Depth_of_Penetration = '${depthOfPen}', Fixture_Requirement = ${fixtureReq}, Fixture_Remarks = '${fixtureRemarks}', Strength = '${strength}', Hermatic_Joint = ${hermaticJoint}, Allowable_Defects = '${allowableDeffects}', DrawingAvailable = ${drawingAvailable}, Inspection_Name = '${inspection}', Tool_Path = '${toolPath}', MtrlSource = '${materialSource}', Delivery = '${shippingDelivery}', Expected_Delivery = ${expectedDeliveryValue} WHERE QtnID = ${qtnID}`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res.status(500).send("Error updating welding_register");
              }
              res.send("Data inserted/updated successfully");
            }
          );
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/insertMaterialDetails", async (req, res, next) => {
  const { qtnID, material, thickness } = req.body;
  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.welding_details (QtnID, Material, Thickness) VALUES (${qtnID}, '${material}', '${thickness}')`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into welding_register");
        }

        qtnQueryMod(
          `SELECT * FROM magodqtn.welding_details where QtnID = ${qtnID}`,
          async (err, data) => {
            if (err) {
              logger.error(err);
              return res.status(500).send("Error retrieving inserted data");
            }

            res.send(data);
          }
        );
      }
    );
  } catch (error) {
    next(error);
  }
});

// rateEstimator.post("/insertMaterialDetails", async (req, res, next) => {
//   const { qtnID, material, thickness } = req.body;
//   try {
//     qtnQueryMod(
//       `INSERT INTO magodqtn.welding_details (QtnID) VALUES (${qtnID})`,
//       async (err, result) => {
//         if (err) {
//           logger.error(err);
//           return res
//             .status(500)
//             .send("Error inserting data into welding_register");
//         }

//         res.send(result);
//       }
//     );
//   } catch (error) {
//     next(error);
//   }
// });

rateEstimator.post("/updateMaterialDetails", async (req, res, next) => {
  const { material, thickness } = req.body;
  console.log("Field", req.body);

  // try {
  //   qtnQueryMod(
  //     `UPDATE magodqtn.welding_details SET Material = '${material}', Thickness = '${thickness}' where QtnID = ${qtnID}`,
  //     async (err, result) => {
  //       if (err) {
  //         logger.error(err);
  //         return res
  //           .status(500)
  //           .send("Error inserting data into welding_register");
  //       }

  //       qtnQueryMod(
  //         `SELECT * FROM magodqtn.welding_details where QtnID = ${qtnID}`,
  //         async (err, data) => {
  //           if (err) {
  //             logger.error(err);
  //             return res.status(500).send("Error retrieving inserted data");
  //           }

  //           res.send(data);
  //         }
  //       );
  //     }
  //   );
  // } catch (error) {
  //   next(error);
  // }
});

rateEstimator.post("/deleteMaterialDetails", async (req, res, next) => {
  const { materialId } = req.body;
  try {
    qtnQueryMod(
      `DELETE FROM magodqtn.welding_details WHERE Material_ID = ${materialId};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into welding_register");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.get("/getTestType", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.test_type where Current = 1`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/getTestList", async (req, res, next) => {
  const { testTypeID } = req.body;
  // console.log("testTypeID", req.body);
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.test_list where Current = 1 and Test_Type_ID = '${testTypeID}'`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/getTestTypeName", async (req, res, next) => {
  const { testTypeID } = req.body;
  // console.log("testTypeID", req.body);
  try {
    qtnQueryMod(
      `SELECT Test_Type FROM magodqtn.test_type where Current = 1 and Test_Type_ID = '${testTypeID}'`,
      (err, data) => {
        if (err) logger.error(err);
        // console.log(data);
        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/insertTestDetails", async (req, res, next) => {
  const { qtnID, testTypeName, testName, testDetails } = req.body;
  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.testing_details (QtnID, Test_Type, Test_Name, Test_Details) VALUES 
      (${qtnID}, '${testTypeName}', '${testName}', '${testDetails}')`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into testing_details ");
        }

        qtnQueryMod(
          `SELECT * FROM magodqtn.testing_details where QtnID = ${qtnID}`,
          async (err, data) => {
            if (err) {
              logger.error(err);
              return res.status(500).send("Error retrieving inserted data");
            }

            res.send(data);
          }
        );
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/deleteTestDetails", async (req, res, next) => {
  const { testId } = req.body;
  try {
    qtnQueryMod(
      `DELETE FROM magodqtn.testing_details WHERE Test_ID = ${testId};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into testing_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/saveRiskDetails", async (req, res, next) => {
  const { qtnID, otherInfo, conclusion } = req.body;
  // console.log("risks", req.body);
  try {
    qtnQueryMod(
      `SELECT COUNT(*) AS count FROM magodqtn.risk_register where QtnID = ${qtnID}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          qtnQueryMod(
            `INSERT INTO magodqtn.risk_register (QtnID, Other_Info, Conclusion) VALUES (${qtnID}, '${otherInfo}', '${conclusion}')`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into customer_enquiry_service");
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          qtnQueryMod(
            `UPDATE magodqtn.risk_register SET Other_Info = '${otherInfo}', Conclusion = '${conclusion}'  WHERE QtnID = ${qtnID}`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res.status(500).send("Error updating risk_register");
              }
            }
          );

          res.send("Data inserted/updated successfully");
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/insertRiskDetails", async (req, res, next) => {
  const { qtnID, risk } = req.body;
  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.risk_details (QtnID, Risks) VALUES 
      (${qtnID}, '${risk}')`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into risk_details ");
        }

        qtnQueryMod(
          `SELECT * FROM magodqtn.risk_details where QtnID = ${qtnID}`,
          async (err, data) => {
            if (err) {
              logger.error(err);
              return res.status(500).send("Error retrieving inserted data");
            }

            res.send(data);
          }
        );
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/deleteRiskDetails", async (req, res, next) => {
  const { riskId } = req.body;
  try {
    qtnQueryMod(
      `DELETE FROM magodqtn.risk_details WHERE Risk_ID = ${riskId};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error inserting data into risk_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/allQtnData", async (req, res, next) => {
  const { qtnID } = req.body;
  // console.log("qtnID", req.body);

  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.customer_enquiry_service where QtnID = ${qtnID}`,
      (err, cust_enq_details) => {
        if (err) {
          logger.error(err);
          return next(err);
        }

        qtnQueryMod(
          `SELECT * FROM magodqtn.welding_register where QtnID = ${qtnID}`,
          (err, welding_register) => {
            if (err) {
              logger.error(err);
              return next(err);
            }

            if (welding_register.length > 0) {
              // Format the Expected_Delivery date
              const expectedDelivery = new Date(
                welding_register[0].Expected_Delivery
              );
              welding_register[0].Expected_Delivery = `${expectedDelivery.getFullYear()}-${(
                "0" +
                (expectedDelivery.getMonth() + 1)
              ).slice(-2)}-${("0" + expectedDelivery.getDate()).slice(-2)}`;
            }

            qtnQueryMod(
              `SELECT * FROM magodqtn.welding_details where QtnID = ${qtnID}`,
              (err, welding_details) => {
                if (err) {
                  logger.error(err);
                  return next(err);
                }

                qtnQueryMod(
                  `SELECT * from magodqtn.testing_details where QtnID = ${qtnID}`,
                  (err, testing_details) => {
                    if (err) {
                      logger.error(err);
                      return next(err);
                    }

                    qtnQueryMod(
                      `select * from magodqtn.risk_register where QtnID = ${qtnID}`,
                      (err, risk_register) => {
                        if (err) {
                          logger.error(err);
                          return next(err);
                        }

                        qtnQueryMod(
                          `select * from magodqtn.risk_details where QtnID = ${qtnID}`,
                          (err, risk_details) => {
                            if (err) {
                              logger.error(err);
                              return next(err);
                            }

                            qtnQueryMod(
                              `select * from magodqtn.quote_register where QtnID = ${qtnID}`,
                              (err, quote_register) => {
                                if (err) {
                                  logger.error(err);
                                  return next(err);
                                }

                                qtnQueryMod(
                                  `select * from magodqtn.quote_details where QtnID = ${qtnID}`,
                                  (err, quote_details) => {
                                    if (err) {
                                      logger.error(err);
                                      return next(err);
                                    }

                                    // Combine results into an object
                                    const responseData = {
                                      cust_enq_details,
                                      welding_register,
                                      welding_details,
                                      testing_details,
                                      risk_register,
                                      risk_details,
                                      quote_register,
                                      quote_details,
                                    };

                                    // console.log("responseData", responseData);

                                    res.send(responseData);
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/saveQuoteDetails", async (req, res, next) => {
  const {
    qtnID,
    machine,
    filler,
    labourTime,
    machineTime,
    testingCharges,
    fixtureCharges,
    transporationCost,
    overheadCharges,
    unitPrice,
    revisedUnitPrice,
  } = req.body;
  // console.log("Quote", req.body);
  try {
    qtnQueryMod(
      `SELECT COUNT(*) AS count FROM magodqtn.quote_register where QtnID = ${qtnID}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          qtnQueryMod(
            `INSERT INTO magodqtn.quote_register (QtnID, Machine, Filler, Labour_Time, Machine_Time, Testing_Charges, Fixture_Charges, Transportaion_Cost, Overhead_Charges, Unit_Price, Revised_Unit_Price) VALUES (${qtnID}, '${machine}', '${filler}', '${labourTime}', '${machineTime}', '${testingCharges}', '${fixtureCharges}', '${transporationCost}', '${overheadCharges}', '${unitPrice}', '${revisedUnitPrice}')`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into customer_enquiry_service");
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          qtnQueryMod(
            `UPDATE magodqtn.quote_register SET Machine = '${machine}', Filler = '${filler}', Labour_Time = '${labourTime}', Machine_Time = '${machineTime}', Testing_Charges = '${testingCharges}', Fixture_Charges = '${fixtureCharges}', Transportaion_Cost = '${transporationCost}', Overhead_Charges = '${overheadCharges}', Unit_Price = '${unitPrice}', Revised_Unit_Price = '${revisedUnitPrice}' WHERE QtnID = ${qtnID}`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res.status(500).send("Error updating risk_register");
              }
            }
          );

          res.send("Data inserted/updated successfully");
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/insertQuoteDetails", async (req, res, next) => {
  const {
    qtnID,
    jointNo,
    weldLength,
    weldingTime,
    setUpTime,
    incomingInspectionTime,
    cleaningTime,
    assemblyTime,
    partLoading,
    partUnloading,
    finalInspectionTime,
    packingDispatchTime,
    setupCharges,
    inspectionCharges,
    outSourcingCharges,
    consumables,
    materialCost,
    fillerCost,
  } = req.body;
  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.quote_details (QtnID, Joint_No, Weld_Length, Weld_Time, Setup_Time, Inspection_Time, Cleaning_Time, Assembly_Time, Part_Loading, Part_Unloading, FinalInspection_Time, Packing_Dispatch_Time, SetUp_Charges, Inspection_Charges, OutSoucring_Charges, Consumables, Material_Cost, Filler_Cost) VALUES (${qtnID}, '${jointNo}',
      ${weldLength}, ${weldingTime},${setUpTime},${incomingInspectionTime},${cleaningTime},${assemblyTime},${partLoading},${partUnloading},${finalInspectionTime},${packingDispatchTime},${setupCharges},${inspectionCharges},${outSourcingCharges},${consumables},${materialCost},${fillerCost})`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into welding_register");
        }

        qtnQueryMod(
          `SELECT * FROM magodqtn.quote_details WHERE QtnID = ${qtnID} `,
          async (err, data) => {
            if (err) {
              logger.error(err);
              return res.status(500).send("Error retrieving inserted data");
            }

            res.send(data);
          }
        );
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/updateQuoteRegister", async (req, res, next) => {
  const {
    qtnID,
    totalWeldLength,
    totalWeldTime,
    totalSetupTime,
    totalInspectionTime,
    totalCleaningTime,
    totalAssemblyTime,
    totalPartLoading,
    totalPartUnloading,
    totalFinalInspectionTime,
    totalPackingDispatchTime,
    totalSetupCharges,
    totalInspectionCharges,
    totalOutSourcingCharges,
    totalConsumables,
    totalMaterialCost,
    totalFillerCost,

    labourTime,
    unitPrice,
    machineTime,
    revisedUnitPrice,
  } = req.body;

  console.log("Updated", req.body);
  try {
    qtnQueryMod(
      `UPDATE magodqtn.quote_register SET
      Total_Weld_Length = ${totalWeldLength},
      Total_Weld_Time = ${totalWeldTime},
      Total_Setup_Time = ${totalSetupTime},
      Total_Inspection_Time = ${totalInspectionTime},
      Total_Cleaning_Time = ${totalCleaningTime},
      Total_Assembly_Time = ${totalAssemblyTime},
      Total_Part_Loading = ${totalPartLoading},
      Total_Part_Unloading = ${totalPartUnloading},
      Total_FinalInspection_Time = ${totalFinalInspectionTime},
      Total_Packing_Dispatch_Time = ${totalPackingDispatchTime},
      Total_SetUp_Charges = ${totalSetupCharges},
      Total_Inspection_Charges = ${totalInspectionCharges},
      Total_OutSoucring_Charges = ${totalOutSourcingCharges},
      Total_Consumables = ${totalConsumables},
      Total_Material_Cost = ${totalMaterialCost},
      Total_Filler_Cost = ${totalFillerCost},
      Labour_Time = ${labourTime},
      Machine_Time = ${machineTime},
      Unit_Price = ${unitPrice},
      Revised_Unit_Price = ${revisedUnitPrice}
      WHERE QtnID = ${qtnID}`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into testing_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/deleteQuoteDetails", async (req, res, next) => {
  const { id } = req.body;
  try {
    qtnQueryMod(
      `DELETE FROM magodqtn.quote_details WHERE ID = ${id};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into testing_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

module.exports = rateEstimator;
