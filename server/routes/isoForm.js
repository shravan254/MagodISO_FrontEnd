const isoRouter = require("express").Router();
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

isoRouter.get("/getData", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.qtnlist WHERE QtnNo = '2021/07/031'`,
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

isoRouter.get("/getComponent", async (req, res, next) => {
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

isoRouter.get("/getJobType", async (req, res, next) => {
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

isoRouter.get("/getComponent", async (req, res, next) => {
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

isoRouter.get("/getJointType", async (req, res, next) => {
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

isoRouter.get("/getInspection", async (req, res, next) => {
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

isoRouter.get("/getToolpath", async (req, res, next) => {
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

isoRouter.get("/getDelivery", async (req, res, next) => {
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

isoRouter.get("/getMaterialSource", async (req, res, next) => {
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

isoRouter.get("/getTestType", async (req, res, next) => {
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

isoRouter.get("/getTests", async (req, res, next) => {
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

isoRouter.post("/saveEnquiryService", async (req, res, next) => {
  const { qtnID, drawingNo, jobType, component } = req.body;
  try {
    qtnQueryMod(
      `SELECT COUNT(*) AS count FROM magodqtn.customer_enquiry_service where QtnID = '${qtnID}'`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          qtnQueryMod(
            `INSERT INTO magodqtn.customer_enquiry_service (QtnID, DrawingNo, Job_Type, Component_Name) VALUES ('${qtnID}', '${drawingNo}', '${jobType}', '${component}')`,
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
            `UPDATE magodqtn.customer_enquiry_service SET DrawingNo = '${drawingNo}', Job_Type = '${jobType}', Component_Name = '${component}' WHERE QtnID = '${qtnID}'`,
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

isoRouter.post("/saveWeldingDetails", async (req, res, next) => {
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
  try {
    qtnQueryMod(
      `SELECT COUNT(*) AS count FROM magodqtn.welding_register where QtnID = '${qtnID}'`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          qtnQueryMod(
            `INSERT INTO magodqtn.welding_register (QtnID, Allowable_Combination, Statutory_Regulatory_Req, Joint_Type, Batch_Qty, Year_Qty, Depth_of_Penetration, Fixture_Requirement, Fixture_Remarks, Strength, Hermatic_Joint, Allowable_Defects, DrawingAvailable, Inspection_Name, Tool_Path, MtrlSource, Delivery, Expected_Delivery) VALUES ('${qtnID}', '${allowComb}', '${srRequirements}', '${jointType}', ${batchQty}, ${yearQty}, '${depthOfPen}', ${fixtureReq}, '${fixtureRemarks}', '${strength}', ${hermaticJoint}, '${allowableDeffects}', ${drawingAvailable}, '${inspection}', '${toolPath}', '${materialSource}', '${shippingDelivery}', '${expectedDelivery}')`,
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
            `UPDATE magodqtn.welding_register SET Allowable_Combination = '${allowComb}', Statutory_Regulatory_Req = '${srRequirements}', Joint_Type = '${jointType}', Batch_Qty = '${batchQty}', Year_Qty = '${yearQty}', Depth_of_Penetration = '${depthOfPen}', Fixture_Requirement = ${fixtureReq}, Fixture_Remarks = '${fixtureRemarks}', Strength = '${strength}', Hermatic_Joint = ${hermaticJoint}, Allowable_Defects = '${allowableDeffects}', DrawingAvailable = ${drawingAvailable}, Inspection_Name = '${inspection}', Tool_Path = '${toolPath}', MtrlSource = '${materialSource}', Delivery = '${shippingDelivery}', Expected_Delivery = '${expectedDelivery}' WHERE QtnID = '${qtnID}'`,
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

isoRouter.post("/insertMaterialDetails", async (req, res, next) => {
  const { qtnID, material, thickness } = req.body;
  try {
    qtnQueryMod(
      `INSERT INTO magodqtn.welding_details (QtnID, Material, Thickness) VALUES ('${qtnID}', '${material}', '${thickness}')`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into welding_register");
        }

        qtnQueryMod(
          `SELECT * FROM magodqtn.welding_details`,
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

isoRouter.post("/deleteMaterialDetails", async (req, res, next) => {
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

isoRouter.get("/getTestType", async (req, res, next) => {
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

isoRouter.post("/getTestList", async (req, res, next) => {
  const { testTypeID } = req.body;
  console.log("testTypeID", req.body);
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

module.exports = isoRouter;
