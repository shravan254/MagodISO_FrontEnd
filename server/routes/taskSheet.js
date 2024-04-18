const taskSheet = require("express").Router();
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

taskSheet.get("/getData", async (req, res, next) => {
  const { ncid } = req.query;
  // console.log("ncid", req.query);

  try {
    misQueryMod(
      `SELECT * FROM magodmis.ncprograms where Ncid  = ${ncid}`,
      (err, data1) => {
        if (err) {
          logger.error(err);
          return next(err);
        }

        const ncTaskId = data1[0].NcTaskId;

        misQueryMod(
          `SELECT * FROM magodmis.orderscheduledetails where NcTaskId = ${ncTaskId}`,
          (err, data2) => {
            if (err) {
              logger.error(err);
              return next(err);
            }

            misQueryMod(
              `SELECT c2.PartId,c1.Quantity as QtyPerAssy, c2.Id As CustBOM_Id, t.Task_Part_ID,t.QtyNested*c1.Quantity
              as QtyRequired FROM magodmis.task_partslist t,magodmis.orderscheduledetails o,magodmis.cust_assy_data c,
              magodmis.cust_assy_bom_list c1,magodmis.cust_bomlist c2
              WHERE t.NcTaskId = ${ncTaskId} and t.HasBOM and t.SchDetailsId=o.SchDetailsID
              AND c.MagodCode = o.Dwg_Code AND c1.Cust_AssyId=c.Id AND c1.Cust_BOM_ListId=c2.Id`,
              (err, data3) => {
                if (err) {
                  logger.error(err);
                  return next(err);
                }

                const responseData = {
                  data1,
                  data2,
                  data3,
                };

                res.send(responseData);
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

taskSheet.post("/saveTaskSheetRegister", async (req, res, next) => {
  const {
    ncid,
    anyDeffects,
    taskDate,
    machineNo,
    programNo,
    fixtureRequirement,
    lensDistance,
    mtrlThickness,
    withFiller,
    fillerMaterial,
    batchNo,
    machinePeakPower,
    laserEquipment,
    reweldPermitted,
    fixtureNo,
    controlPlanNo,
    wpsNo,
    pfdNo,
    wiNo,
    pqrNo,
    standardOfRef,
    partInspectionQC,
    partInspectionWeldEngineer,
    partInspectionIncharge,
    partInspectionProjectManager,
    weldSettingQC,
    weldSettingWeldEngineer,
    weldSettingIncharge,

    preFlowGas,
    postFlowGas,
    designType,
    weldSide,
    gasType,
    backing,
    tackWeld,
    note,
  } = req.body;
  console.log("Task_Date", req.body.taskDate);

  const backingValue = backing !== "" ? backing : "NULL";
  const anyDeffectsValue = anyDeffects !== "" ? anyDeffects : "NULL";
  const fixtureRequirementValue =
    fixtureRequirement !== "" ? fixtureRequirement : "NULL";
  const withFillerValue = withFiller !== "" ? withFiller : "NULL";
  const reweldPermittedValue =
    reweldPermitted !== "" ? reweldPermitted : "NULL";
  const tackWeldValue = tackWeld !== "" ? tackWeld : "NULL";

  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.taskSheet_register where Ncid = ${ncid}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.taskSheet_register (Ncid, Defects, Task_Date, Machine, NCProgramNo, Fixture_Requirement, Lens_Distance, Material_Thickness, With_Filler, Filler, Batch_No, Machine_Peak_Power, Laser_Type, Reweld_Permitted, Fixture_No, Control_Plan_No, WPS_No, PFD_No, WI_No, PQR_No, Standard_Parameter_Ref, PartInspection_QC, PartInspection_WeldEngineer, PartInspection_Incharge, PartInspection_Project_Manager, WeldSetting_QC, WeldSetting_WeldEngineer, WeldSetting_Incharge, Pre_Flow_Gas, Post_Flow_Gas, Design_Type, Weld_Side, Gas_Type, Backing, Tack_Weld, Note) VALUES (${ncid},
              ${anyDeffectsValue},
              '${taskDate}',
              '${machineNo}', '${programNo}',
              ${fixtureRequirementValue},
              ${lensDistance}, ${mtrlThickness},
              ${withFillerValue},
              '${fillerMaterial}', '${batchNo}', ${machinePeakPower}, '${laserEquipment}',
              ${reweldPermittedValue},
              '${fixtureNo}', '${controlPlanNo}', '${wpsNo}', '${pfdNo}', '${wiNo}', '${pqrNo}', '${standardOfRef}', ${partInspectionQC}, ${partInspectionWeldEngineer}, ${partInspectionIncharge}, ${partInspectionProjectManager}, ${weldSettingQC}, ${weldSettingWeldEngineer}, ${weldSettingIncharge}, ${preFlowGas}, ${postFlowGas},
              '${designType}','${weldSide}', '${gasType}',${backingValue},${tackWeldValue},'${note}')`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into taskSheet_register");
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          misQueryMod(
            `UPDATE magodmis.taskSheet_register SET Defects = ${anyDeffects},
            Task_Date = '${taskDate}',
            Machine = '${machineNo}',
            NCProgramNo = '${programNo}',
            Fixture_Requirement = ${fixtureRequirementValue},
            Lens_Distance = ${lensDistance},
            Material_Thickness = ${mtrlThickness},
            With_Filler = ${withFillerValue},
            Filler = '${fillerMaterial}',
            Batch_No = '${batchNo}',
            Machine_Peak_Power = ${machinePeakPower},
            Laser_Type = '${laserEquipment}',
            Reweld_Permitted = ${reweldPermittedValue},
            Fixture_No = '${fixtureNo}',
            Control_Plan_No = '${controlPlanNo}',
            WPS_No = '${wpsNo}',
            PFD_No = '${pfdNo}',
            WI_No = '${wiNo}',
            PQR_No = '${pqrNo}',
            Standard_Parameter_Ref = '${standardOfRef}',
            PartInspection_QC = ${partInspectionQC},
            PartInspection_WeldEngineer = ${partInspectionWeldEngineer},
            PartInspection_Incharge = ${partInspectionIncharge},
            PartInspection_Project_Manager = ${partInspectionProjectManager},
            WeldSetting_QC = ${weldSettingQC},
            WeldSetting_WeldEngineer = ${weldSettingWeldEngineer},
            WeldSetting_Incharge = ${weldSettingIncharge},
            Pre_Flow_Gas = ${preFlowGas},
            Post_Flow_Gas = ${postFlowGas},
            Design_Type = '${designType}',
            Weld_Side = '${weldSide}',
            Gas_Type = '${gasType}',
            Backing = ${backingValue},
            Tack_Weld = ${tackWeldValue},
            Note = '${note}'
            WHERE Ncid = ${ncid}`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error updating taskSheet_register");
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

taskSheet.post("/saveSolidStateParameters", async (req, res, next) => {
  const {
    ncid,
    sspoweratfocus,
    ssfocusDia,
    sspulseDuration,
    sspulseFrequency,
    sspulseShapeNo,
    ssgasPressure,
    ssfeedRate,
    ssrpm,
    ssgasPurity,
    ssgapRange,
    ssgasFlowOrientation,
  } = req.body;
  // console.log("req.body Save", req.body);
  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.solidState_Parameters where Ncid = ${ncid}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.solidState_Parameters (Ncid, Power_at_focus,Focus_Dia, Pulse_Duration, Pulse_Frequency, Pulse_Shape_No, Gas_Pressure, Feed_Rate, RPM, Gas_Purity, Gap_Range, Gas_Flow_Orientation) VALUES (${ncid}, 
              ${sspoweratfocus}, ${ssfocusDia}, ${sspulseDuration}, ${sspulseFrequency}, ${sspulseShapeNo}, ${ssgasPressure}, ${ssfeedRate}, ${ssrpm}, ${ssgasPurity}, ${ssgapRange}, ${ssgasFlowOrientation})`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into solidState_Parameters");
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          misQueryMod(
            `UPDATE magodmis.solidState_Parameters SET Power_at_focus = ${sspoweratfocus}, 
            Focus_Dia = ${ssfocusDia}, 
            Pulse_Duration = ${sspulseDuration}, 
            Pulse_Frequency = ${sspulseFrequency}, 
            Pulse_Shape_No = ${sspulseShapeNo}, 
            Gas_Pressure = ${ssgasPressure}, 
            Feed_Rate = ${ssfeedRate}, 
            RPM = ${ssrpm}, 
            Gas_Purity = ${ssgasPurity}, 
            Gap_Range = ${ssgapRange}, 
            Gas_Flow_Orientation = ${ssgasFlowOrientation}
            WHERE Ncid = ${ncid}`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error updating solidState_Parameters");
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

taskSheet.post("/saveCo2Parameters", async (req, res, next) => {
  const {
    ncid,
    copowerTransmissionEfficiency,
    copower,
    cofrequency,
    cobeamDia,
    cofocus,
    cogasPressure,
    cofeedRate,
    corpm,
    cogasPurity,
    cogapRange,
    cogasFlowOrientation,
  } = req.body;
  // console.log("req.body Save", req.body);
  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.co2_laser_parameters where Ncid = ${ncid}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.co2_laser_parameters (Ncid, Power_Transmission_Efficiency,Power, Frequency, Beam_Dia, Focus, Gas_Pressure, Feed_Rate, RPM, Gas_Purity, Gap_Range, Gas_Flow_Orientation) VALUES (${ncid}, 
              ${copowerTransmissionEfficiency}, ${copower}, ${cofrequency}, ${cobeamDia}, ${cofocus}, ${cogasPressure}, ${cofeedRate}, ${corpm}, ${cogasPurity}, ${cogapRange}, ${cogasFlowOrientation})`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send(
                    "Error inserting data into magodmis.co2_laser_parameters"
                  );
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          misQueryMod(
            `UPDATE magodmis.co2_laser_parameters SET Power_Transmission_Efficiency = ${copowerTransmissionEfficiency}, 
            Power = ${copower}, 
            Frequency = ${cofrequency}, 
            Beam_Dia = ${cobeamDia}, 
            Focus = ${cofocus}, 
            Gas_Pressure = ${cogasPressure}, 
            Feed_Rate = ${cofeedRate}, 
            RPM = ${corpm},
            Gas_Purity = ${cogasPurity}, 
            Gap_Range = ${cogapRange}, 
            Gas_Flow_Orientation = ${cogasFlowOrientation}
            WHERE Ncid = ${ncid}`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error updating magodmis.co2_laser_parameters");
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

taskSheet.post("/insertSubAssyDetails", async (req, res, next) => {
  const { ncid, subAssy, qtyReceived } = req.body;
  try {
    misQueryMod(
      `INSERT INTO magodmis.taskSheet_details (Ncid, Sub_Assy_Part_Name, Qty_Received) VALUES (${ncid}, '${subAssy}', ${qtyReceived})`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into taskSheet_details");
        }

        misQueryMod(
          `SELECT * FROM magodmis.taskSheet_details where Ncid = ${ncid}`,
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

taskSheet.post("/deleteSubAssyDetails", async (req, res, next) => {
  const { id } = req.body;
  try {
    misQueryMod(
      `DELETE FROM  magodmis.taskSheet_details WHERE ID = ${id};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error deleting data from taskSheet_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

taskSheet.post("/allTaskData", async (req, res, next) => {
  const { ncid } = req.body;
  // console.log("qtnID", req.body);

  try {
    misQueryMod(
      `SELECT * FROM magodmis.taskSheet_register where Ncid = '${ncid}'`,
      (err, taskSheet_register) => {
        if (err) {
          logger.error(err);
          return next(err);
        }

        misQueryMod(
          `SELECT * FROM magodmis.solidState_Parameters where Ncid = '${ncid}'`,
          (err, solidState_Parameters) => {
            if (err) {
              logger.error(err);
              return next(err);
            }

            misQueryMod(
              `SELECT * FROM magodmis.co2_laser_parameters where Ncid = '${ncid}'`,
              (err, co2_laser_parameters) => {
                if (err) {
                  logger.error(err);
                  return next(err);
                }

                misQueryMod(
                  `SELECT * from magodmis.taskSheet_details where Ncid = '${ncid}'`,
                  (err, taskSheet_details) => {
                    if (err) {
                      logger.error(err);
                      return next(err);
                    }

                    // Combine results into an object
                    const responseData = {
                      taskSheet_register,
                      solidState_Parameters,
                      co2_laser_parameters,
                      taskSheet_details,
                    };

                    res.send(responseData);
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

taskSheet.get("/getJointType", async (req, res, next) => {
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

taskSheet.get("/getWeldSide", async (req, res, next) => {
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.weld_side where Current = 1`,
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

module.exports = taskSheet;
