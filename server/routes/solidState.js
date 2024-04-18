const solidState = require("express").Router();
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

solidState.get("/getData", async (req, res, next) => {
  const { ncid } = req.query;
  // console.log("ncid", req.query);

  try {
    misQueryMod(
      `SELECT * FROM magodmis.ncprograms where Ncid  = ${ncid}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return next(err);
        }

        res.send(data);
      }
    );
  } catch (error) {
    next(error);
  }
});

solidState.get("/getJointType", async (req, res, next) => {
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

solidState.post("/saveSolidStateParameters", async (req, res, next) => {
  const { ncid, taskDate, operator, filler, gasType, jointType } = req.body;
  // console.log("req.body Save", req.body);
  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.solid_state_job_parameter where Ncid = ${ncid}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        console.log("count", count);

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.solid_state_job_parameter (Ncid, Form_Date, Operator,Filler, Gas_Type, Joint_Type) VALUES (${ncid}, 
              '${taskDate}', '${operator}', '${filler}', '${gasType}', '${jointType}')`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into solid_state_job_parameter");
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          misQueryMod(
            `UPDATE magodmis.solid_state_job_parameter SET Operator = '${operator}', 
            Filler = '${filler}', 
            Gas_Type = '${gasType}', 
            Joint_Type = '${jointType}'            
            WHERE Ncid = '${ncid}'`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error updating solid_state_job_parameter");
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

solidState.post("/insertMaterialDetails", async (req, res, next) => {
  const { ncid, material, thickness } = req.body;
  try {
    misQueryMod(
      `INSERT INTO magodmis.solid_state_material_details (Ncid, Material, Thickness) VALUES (${ncid}, '${material}', ${thickness})`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into solid_state_material_details");
        }

        misQueryMod(
          `SELECT * FROM magodmis.solid_state_material_details where Ncid = ${ncid}`,
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

solidState.post("/deleteMaterialDetails", async (req, res, next) => {
  const { id } = req.body;
  try {
    misQueryMod(
      `DELETE FROM magodmis.solid_state_material_details WHERE ID = ${id};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error deleting data from solid_state_material_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

solidState.post("/insertParaDetails", async (req, res, next) => {
  const {
    ncid,
    beadDia,
    power,
    energy,
    pulseWidth,
    frequency,
    pulseShape,
    speed,
    gasFlow,
    focusPosition,
    standOff,
    comments,
  } = req.body;
  try {
    misQueryMod(
      `INSERT INTO magodmis.solid_state_parameters (Ncid, Bead_Dia, Power, Energy, Pulse_Width, Frequency, Pulse_Shape, Speed, Gas_Flow, Focus_Position, Stand_Off, Comments) VALUES (${ncid}, ${beadDia}, ${power}, ${energy}, ${pulseWidth}, ${frequency}, ${pulseShape}, ${speed}, ${gasFlow}, ${focusPosition}, ${standOff}, '${comments}')`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into magodmis.solid_state_parameters");
        }

        misQueryMod(
          `SELECT * FROM magodmis.solid_state_parameters where Ncid = ${ncid}`,
          async (err, data) => {
            if (err) {
              logger.error(err);
              return res
                .status(500)
                .send("Error retrieving from magodmis.solid_state_parameters");
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

solidState.post("/deleteParaDetails", async (req, res, next) => {
  const { id } = req.body;
  try {
    misQueryMod(
      `DELETE FROM magodmis.solid_state_parameters WHERE ID = ${id};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error deleting data from magodmis.solid_state_parameters");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

solidState.post("/allSolidStateData", async (req, res, next) => {
  const { ncid } = req.body;
  // console.log("qtnID", req.body);

  try {
    misQueryMod(
      `SELECT * FROM magodmis.solid_state_job_parameter where Ncid = '${ncid}'`,
      (err, solid_state_job_parameter) => {
        if (err) {
          logger.error(err);
          return next(err);
        }

        misQueryMod(
          `SELECT * FROM magodmis.solid_state_material_details where Ncid = '${ncid}'`,
          (err, solid_state_material_details) => {
            if (err) {
              logger.error(err);
              return next(err);
            }

            misQueryMod(
              `SELECT * FROM magodmis.solid_state_parameters where Ncid = '${ncid}'`,
              (err, solid_state_parameters) => {
                if (err) {
                  logger.error(err);
                  return next(err);
                }

                // Combine results into an object
                const responseData = {
                  solid_state_job_parameter,
                  solid_state_material_details,
                  solid_state_parameters,
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

module.exports = solidState;
