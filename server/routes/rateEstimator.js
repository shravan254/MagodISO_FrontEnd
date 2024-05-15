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
        // console.log(data);
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

  const expectedDeliveryValue = expectedDelivery
    ? `'${expectedDelivery}'`
    : "NULL";

  const fixtureReqValue = fixtureReq !== "" ? fixtureReq : "NULL";
  const drawingAvailableValue =
    drawingAvailable !== "" ? drawingAvailable : "NULL";
  const hermaticJointValue = hermaticJoint !== "" ? hermaticJoint : "NULL";
  const batchQtyValue = batchQty !== "" ? batchQty : null;
  const yearQtyValue = yearQty !== "" ? yearQty : null;

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
            `INSERT INTO magodqtn.welding_register (QtnID, Allowable_Combination, Statutory_Regulatory_Req, Joint_Type, Batch_Qty, Year_Qty, Depth_of_Penetration, Fixture_Requirement, Fixture_Remarks, Strength, Hermatic_Joint, Allowable_Defects, DrawingAvailable, Inspection_Name, Tool_Path, MtrlSource, Delivery, Expected_Delivery) VALUES (${qtnID}, '${allowComb}', '${srRequirements}', ${
              jointType ? `'${jointType}'` : "NULL"
            }, ${batchQtyValue}, ${yearQtyValue}, '${depthOfPen}', ${fixtureReqValue}, '${fixtureRemarks}', '${strength}', ${hermaticJointValue}, '${allowableDeffects}', ${drawingAvailableValue}, ${
              inspection ? `'${inspection}'` : "NULL"
            }, ${toolPath ? `'${toolPath}'` : "NULL"}, ${
              materialSource ? `'${materialSource}'` : "NULL"
            }, ${
              shippingDelivery ? `'${shippingDelivery}'` : "NULL"
            }, ${expectedDeliveryValue})`,
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
            `UPDATE magodqtn.welding_register SET Allowable_Combination = '${allowComb}', Statutory_Regulatory_Req = '${srRequirements}', Joint_Type = '${jointType}', Batch_Qty = ${batchQtyValue}, Year_Qty = ${yearQtyValue}, Depth_of_Penetration = '${depthOfPen}', Fixture_Requirement = ${fixtureReqValue}, Fixture_Remarks = '${fixtureRemarks}', Strength = '${strength}', Hermatic_Joint = ${hermaticJointValue}, Allowable_Defects = '${allowableDeffects}', DrawingAvailable = ${drawingAvailableValue}, Inspection_Name = '${inspection}', Tool_Path = '${toolPath}', MtrlSource = '${materialSource}', Delivery = '${shippingDelivery}', Expected_Delivery = ${expectedDeliveryValue} WHERE QtnID = ${qtnID}`,
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

  const thicknessValue = thickness !== "" ? thickness : null;
  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.welding_details (QtnID, Material, Thickness) VALUES (${qtnID}, '${material}', ${thicknessValue})`,
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

rateEstimator.post("/updateMaterialDetails", async (req, res, next) => {
  const { qtnID, materialID, material, thickness } = req.body;

  const thicknessValue = thickness !== "" ? thickness : null;
  try {
    qtnQueryMod(
      `Update magodqtn.welding_details SET Material = '${material}', Thickness = ${thicknessValue} where Material_ID = ${materialID}`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error updating data into welding_register");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
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
            .send("Error deleting data from welding_register");
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

rateEstimator.post("/getJointName", async (req, res, next) => {
  const { qtnID } = req.body;
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.quote_details where QtnID = ${qtnID}`,
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
  const { qtnID, jointName, testTypeName, testName, testDetails, testCost } =
    req.body;

  const testCostValue = testCost !== "" ? testCost : null;
  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.testing_details (QtnID, Joint_No, Test_Type, Test_Name, Test_Details, Test_Cost) VALUES 
      (${qtnID}, '${jointName}', '${testTypeName}', '${testName}', '${testDetails}', ${testCostValue})`,
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
            .send("Error deleting data from testing_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/getSelectedTestNames", async (req, res, next) => {
  const { qtnID } = req.body;
  try {
    qtnQueryMod(
      `Select Test_Name FROM magodqtn.testing_details where QtnID = ${qtnID}`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error getting data from testing_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/updateTestDetails", async (req, res, next) => {
  const { qtnID, testId, testCost, testDetails } = req.body;

  const testCostValue = testCost !== "" ? testCost : null;
  try {
    qtnQueryMod(
      `Update magodqtn.testing_details SET Test_Cost = ${testCostValue}, Test_Details = '${testDetails}' where Test_ID = ${testId}`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error updating data into testing_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/deleteTestJoint", async (req, res, next) => {
  const { qtnID, jointNo } = req.body;

  try {
    qtnQueryMod(
      `Delete from magodqtn.testing_details where Joint_No = '${jointNo}'`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error deleting data in testing_details");
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
          return res.status(500).send("Error deleting data from risk_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/updateRiskDetails", async (req, res, next) => {
  const { qtnID, riskId, risk } = req.body;

  try {
    qtnQueryMod(
      `Update magodqtn.risk_details SET Risks = '${risk}' where Risk_ID = ${riskId}`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error updating data into risk_details");
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
    percentage,
    unitPrice,
    revisedUnitPrice,
    manPowerCost,
    weldingSettingCost,
    perhrMacCost,
    outPutPerHour,
    labourCost,
    machineCost,
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
            `INSERT INTO magodqtn.quote_register (QtnID, Machine, Filler,Man_Power_Cost,Welding_Setting_Cost, Per_hour_Man_Cost,Labour_Time, Machine_Time, Output_Per_Hour, Labour_Cost,Machine_Cost, Testing_Charges, Fixture_Charges, Transportaion_Cost, Overhead_Charges,Percentage, Unit_Price, Revised_Unit_Price) VALUES (${qtnID}, '${machine}', '${filler}', ${manPowerCost}, ${weldingSettingCost}, ${perhrMacCost}, ${labourTime}, ${machineTime}, ${outPutPerHour}, ${labourCost}, ${machineCost}, ${testingCharges}, '${fixtureCharges}', ${transporationCost}, '${overheadCharges}', ${percentage}, '${unitPrice}', '${revisedUnitPrice}')`,
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
            `UPDATE magodqtn.quote_register SET Machine = '${machine}', Filler = '${filler}', Man_Power_Cost = ${manPowerCost}, Welding_Setting_Cost = ${weldingSettingCost}, Per_hour_Man_Cost = ${perhrMacCost}, Labour_Time = '${labourTime}', Machine_Time = '${machineTime}', Output_Per_Hour = ${outPutPerHour}, Labour_Cost = ${labourCost}, Machine_Cost = ${machineCost},Testing_Charges = '${testingCharges}', Fixture_Charges = '${fixtureCharges}', Transportaion_Cost = '${transporationCost}', Overhead_Charges = '${overheadCharges}', Percentage = ${percentage}, Unit_Price = '${unitPrice}', Revised_Unit_Price = '${revisedUnitPrice}' WHERE QtnID = ${qtnID}`,
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
    weldSpeed,
    weldingTime,
    setUpTime,
    incomingInspectionTime,
    cleaningTime,
    assemblyTime,
    partLoadingTime,
    partUnloadingTime,
    finalInspectionTime,
    packingDispatchTime,
    setupCharges,
    inspectionCharges,
    outSourcingCharges,
    consumables,
    materialCost,
    fillerCost,
  } = req.body;

  // console.log("Quote Details Add", req.body);

  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.quote_details (QtnID, Joint_No, Weld_Length, Weld_Speed, Weld_Time, Setup_Time, Inspection_Time, Cleaning_Time, Assembly_Time, Part_Loading, Part_Unloading, FinalInspection_Time, Packing_Dispatch_Time, SetUp_Charges, Inspection_Charges, OutSoucring_Charges, Consumables, Material_Cost, Filler_Cost) VALUES (${qtnID}, '${jointNo}',
      ${weldLength}, ${weldSpeed}, ${weldingTime},${setUpTime},${incomingInspectionTime},${cleaningTime},${assemblyTime},${partLoadingTime},${partUnloadingTime},${finalInspectionTime},${packingDispatchTime},${setupCharges},${inspectionCharges},${outSourcingCharges},${consumables},${materialCost},${fillerCost})`,
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
    totalWeldSpeed,
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

  // console.log("Update quote", req.body);

  try {
    qtnQueryMod(
      `UPDATE magodqtn.quote_register SET
      Total_Weld_Length = ${totalWeldLength},
      Total_Weld_Speed = ${totalWeldSpeed},
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
        // console.log("result", result);

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/updateQuoteDetails", async (req, res, next) => {
  const {
    qtnID,
    quoteId,
    Weld_Length,
    Weld_Speed,
    Weld_Time,
    Setup_Time,
    Inspection_Time,
    Cleaning_Time,
    Assembly_Time,
    Part_Loading,
    Part_Unloading,
    FinalInspection_Time,
    Packing_Dispatch_Time,
    SetUp_Charges,
    Inspection_Charges,
    OutSoucring_Charges,
    Consumables,
    Material_Cost,
    Filler_Cost,
  } = req.body;

  // console.log("Quote Details", req.body);

  const weldLengthValue = Weld_Length !== "" ? Weld_Length : null;
  const weldSpeedValue = Weld_Speed !== "" ? Weld_Speed : null;
  const weldingTimeValue = Weld_Time !== "" ? Weld_Time : null;
  const setUpTimeValue = Setup_Time !== "" ? Setup_Time : null;
  const incomingInspectionTimeValue =
    Inspection_Time !== "" ? Inspection_Time : null;
  const cleaningTimeValue = Cleaning_Time !== "" ? Cleaning_Time : null;
  const assemblyTimeTimeValue = Assembly_Time !== "" ? Assembly_Time : null;
  const partLoadingTimeValue = Part_Loading !== "" ? Part_Loading : null;
  const partUnloadingTimeValue = Part_Unloading !== "" ? Part_Unloading : null;
  const finalInspectionTimeValue =
    FinalInspection_Time !== "" ? FinalInspection_Time : null;
  const packingDispatchTimeValue =
    Packing_Dispatch_Time !== "" ? Packing_Dispatch_Time : null;
  const setupChargesValue = SetUp_Charges !== "" ? SetUp_Charges : null;
  const inspectionChargesValue =
    Inspection_Charges !== "" ? Inspection_Charges : null;
  const outSourcingChargesValue =
    OutSoucring_Charges !== "" ? OutSoucring_Charges : null;
  const consumablesValue = Consumables !== "" ? Consumables : null;
  const materialCostValue = Material_Cost !== "" ? Material_Cost : null;
  const fillerCostValue = Filler_Cost !== "" ? Filler_Cost : null;

  try {
    qtnQueryMod(
      `UPDATE magodqtn.quote_details SET Weld_Length = ${weldLengthValue}, Weld_Speed = ${weldSpeedValue}, Weld_Time = ${weldingTimeValue}, Setup_Time = ${setUpTimeValue}, 
      Inspection_Time =${incomingInspectionTimeValue}, Cleaning_Time = ${cleaningTimeValue}, Assembly_Time = ${assemblyTimeTimeValue}, Part_Loading = ${partLoadingTimeValue}, 
      Part_Unloading = ${partUnloadingTimeValue}, FinalInspection_Time = ${finalInspectionTimeValue}, Packing_Dispatch_Time = ${packingDispatchTimeValue}, 
      SetUp_Charges = ${setupChargesValue}, Inspection_Charges = ${inspectionChargesValue}, OutSoucring_Charges = ${outSourcingChargesValue}, 
      Consumables = ${consumablesValue}, Material_Cost = ${materialCostValue}, Filler_Cost = ${fillerCostValue} where ID = ${quoteId}`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error updating data in quote_details");
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
            .send("Error deleting data from testing_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

rateEstimator.post("/updateQuoteDetailsAfterDelete", async (req, res, next) => {
  const recalculatedValues = req.body.recalculatedValues;
  const qtnID = req.body.qtnID;

  // console.log("recalculatedValues", recalculatedValues);
  // console.log("qtnID", qtnID);
  try {
    qtnQueryMod(
      `UPDATE magodqtn.quote_register SET
      Total_Weld_Length = ${recalculatedValues.totalWeldLength},
      Total_Weld_Speed = ${recalculatedValues.totalWeldSpeed},
      Total_Weld_Time = ${recalculatedValues.totalWeldTime},
      Total_Setup_Time = ${recalculatedValues.totalSetupTime},
      Total_Inspection_Time = ${recalculatedValues.totalInspectionTime},
      Total_Cleaning_Time = ${recalculatedValues.totalCleaningTime},
      Total_Assembly_Time = ${recalculatedValues.totalAssemblyTime},
      Total_Part_Loading = ${recalculatedValues.totalPartLoading},
      Total_Part_Unloading = ${recalculatedValues.totalPartUnloading},
      Total_FinalInspection_Time = ${recalculatedValues.totalFinalInspectionTime},
      Total_Packing_Dispatch_Time = ${recalculatedValues.totalPackingDispatchTime},
      Total_SetUp_Charges = ${recalculatedValues.totalSetupCharges},
      Total_Inspection_Charges = ${recalculatedValues.totalInspectionCharges},
      Total_OutSoucring_Charges = ${recalculatedValues.totalOutSourcingCharges},
      Total_Consumables = ${recalculatedValues.totalConsumables},
      Total_Material_Cost = ${recalculatedValues.totalMaterialCost},
      Total_Filler_Cost = ${recalculatedValues.totalFillerCost},
      Labour_Time = ${recalculatedValues.labourTime},
      Machine_Time = ${recalculatedValues.machineTime},
      Unit_Price = ${recalculatedValues.unitPrice},
      Revised_Unit_Price = ${recalculatedValues.revisedUnitPrice},
      Overhead_Charges = ${recalculatedValues.overheadCharges}
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

rateEstimator.get("/getQtnID", async (req, res, next) => {
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.qtnlist Limit 5000`, (err, data) => {
      if (err) logger.error(err);
      // console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = rateEstimator;
