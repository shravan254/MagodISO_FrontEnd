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
  const { scheduleDetailsId } = req.query;

  try {
    qtnQueryMod(
      `SELECT * FROM magodmis.orderscheduledetails where SchDetailsID  = ${scheduleDetailsId}`,
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

taskSheet.post("/saveTaskSheetRegister", async (req, res, next) => {
  const {
    scheduleDetailsId,
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
  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.taskSheet_register where SchDetailsID = ${scheduleDetailsId}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.taskSheet_register (SchDetailsID, Defects, Task_Date, Machine, NCProgramNo, Fixture_Requirement, Lens_Distance, Material_Thickness, With_Filler, Filler, Batch_No, Machine_Peak_Power, Laser_Type, Reweld_Permitted, Fixture_No, Control_Plan_No, WPS_No, PFD_No, WI_No, PQR_No, Standard_Parameter_Ref, PartInspection_QC, PartInspection_WeldEngineer, PartInspection_Incharge, PartInspection_Project_Manager, WeldSetting_QC, WeldSetting_WeldEngineer, WeldSetting_Incharge, Pre_Flow_Gas, Post_Flow_Gas, Design_Type, Weld_Side, Gas_Type, Backing, Tack_Weld, Note) VALUES (${scheduleDetailsId},
              ${anyDeffects ? `'${anyDeffects}'` : "NULL"},
              '${taskDate}',
              '${machineNo}', '${programNo}',
              ${fixtureRequirement ? `'${fixtureRequirement}'` : "NULL"},
              ${lensDistance}, ${mtrlThickness},
              ${withFiller ? `'${withFiller}'` : "NULL"},
              '${fillerMaterial}', '${batchNo}', ${machinePeakPower}, '${laserEquipment}',
              ${reweldPermitted ? `'${reweldPermitted}'` : "NULL"},
              '${fixtureNo}', '${controlPlanNo}', '${wpsNo}', '${pfdNo}', '${wiNo}', '${pqrNo}', '${standardOfRef}', ${partInspectionQC}, ${partInspectionWeldEngineer}, ${partInspectionIncharge}, ${partInspectionProjectManager}, ${weldSettingQC}, ${weldSettingWeldEngineer}, ${weldSettingIncharge}, ${preFlowGas}, ${postFlowGas},
              '${designType}',

              '${weldSide}', '${gasType}',

              ${backing ? `'${backing}'` : "NULL"},

              ${tackWeld ? `'${tackWeld}'` : "NULL"},
              '${note}')`,
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
            Fixture_Requirement = ${fixtureRequirement},
            Lens_Distance = ${lensDistance},
            Material_Thickness = ${mtrlThickness},
            With_Filler = ${withFiller},
            Filler = '${fillerMaterial}',
            Batch_No = '${batchNo}',
            Machine_Peak_Power = ${machinePeakPower},
            Laser_Type = '${laserEquipment}',
            Reweld_Permitted = ${reweldPermitted},
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
            Backing = ${backing},
            Tack_Weld = ${tackWeld},
            Note = '${note}'
            WHERE SchDetailsID = ${scheduleDetailsId}`,
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
    scheduleDetailsId,
    sspoweratfocus,
    ssfocusDia,
    sspulseDuration,
    sspulseFrequency,
    sspulseShapeNo,
    ssgasPressure,
    ssfeedRate,
    ssrpm,
    ssgasPurity,
    ssgasRange,
    ssgasFlowOrientation,
  } = req.body;
  // console.log("req.body Save", req.body);
  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.solidState_Parameters where SchDetailsID = ${scheduleDetailsId}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.solidState_Parameters (SchDetailsID, Power_at_focus,Focus_Dia, Pulse_Duration, Pulse_Frequency, Pulse_Shape_No, Gas_Pressure, Feed_Rate, RPM, Gas_Purity, Gas_Range, Gas_Flow_Orientation) VALUES (${scheduleDetailsId}, 
              ${sspoweratfocus}, ${ssfocusDia}, ${sspulseDuration}, ${sspulseFrequency}, ${sspulseShapeNo}, ${ssgasPressure}, ${ssfeedRate}, ${ssrpm}, ${ssgasPurity}, ${ssgasRange}, ${ssgasFlowOrientation})`,
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
            Gas_Range = ${ssgasRange}, 
            Gas_Flow_Orientation = ${ssgasFlowOrientation}
            WHERE SchDetailsID = ${scheduleDetailsId}`,
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
    scheduleDetailsId,
    copowerTransmissionEfficiency,
    copower,
    cofrequency,
    cobeamDia,
    cofocus,
    cogasPressure,
    cofeedRate,
    corpm,
    cogasPurity,
    cogasRange,
    cogasFlowOrientation,
  } = req.body;
  // console.log("req.body Save", req.body);
  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.co2_laser_parameters where SchDetailsID = ${scheduleDetailsId}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.co2_laser_parameters (SchDetailsID, Power_Transmission_Efficiency,Power, Frequency, Beam_Dia, Focus, Gas_Pressure, Feed_Rate, RPM, Gas_Purity, Gas_Range, Gas_Flow_Orientation) VALUES (${scheduleDetailsId}, 
              ${copowerTransmissionEfficiency}, ${copower}, ${cofrequency}, ${cobeamDia}, ${cofocus}, ${cogasPressure}, ${cofeedRate}, ${corpm}, ${cogasPurity}, ${cogasRange}, ${cogasFlowOrientation})`,
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
            Gas_Range = ${cogasRange}, 
            Gas_Flow_Orientation = ${cogasFlowOrientation}
            WHERE SchDetailsID = ${scheduleDetailsId}`,
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
  const { scheduleDetailsId, subAssy, qtyReceived } = req.body;
  try {
    qtnQueryMod(
      `INSERT INTO magodmis.taskSheet_details (SchDetailsID, Sub_Assy_Part_Name, Qty_Received) VALUES (${scheduleDetailsId}, '${subAssy}', ${qtyReceived})`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into taskSheet_details");
        }

        qtnQueryMod(
          `SELECT * FROM magodmis.taskSheet_details where SchDetailsID = ${scheduleDetailsId}`,
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
    qtnQueryMod(
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

module.exports = taskSheet;
