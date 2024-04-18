const co2 = require("express").Router();
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

co2.get("/getData", async (req, res, next) => {
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

co2.get("/getJointType", async (req, res, next) => {
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

co2.post("/saveCo2Parameters", async (req, res, next) => {
  const { ncid, taskDate, operator, nt, joint } = req.body;
  // console.log("req.body Save", req.body);
  try {
    misQueryMod(
      `SELECT COUNT(*) AS count FROM magodmis.co2_job_parameter where Ncid = ${ncid}`,
      (err, data) => {
        if (err) {
          logger.error(err);
          return res.status(500).send("Error checking count");
        }
        const count = data[0].count;

        if (count === 0) {
          misQueryMod(
            `INSERT INTO magodmis.co2_job_parameter (Ncid, Form_Date, Operator, nT, Joint) VALUES (${ncid}, '${taskDate}', '${operator}', ${nt}, '${joint}')`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error inserting data into magodmis.co2_job_parameter");
              }

              res.send("Data inserted successfully");
            }
          );
        } else {
          misQueryMod(
            `UPDATE magodmis.co2_job_parameter SET 
            Operator = '${operator}', 
            nT = ${nt},
            Joint = '${joint}'           
            WHERE Ncid = '${ncid}'`,
            (err, result) => {
              if (err) {
                logger.error(err);
                return res
                  .status(500)
                  .send("Error updating magodmis.co2_job_parameter");
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

co2.post("/insertMaterialDetails", async (req, res, next) => {
  const { ncid, material, thickness } = req.body;
  try {
    misQueryMod(
      `INSERT INTO magodmis.co2_material_details (Ncid, Material, Thickness) VALUES (${ncid}, '${material}', ${thickness})`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into co2_material_details");
        }

        misQueryMod(
          `SELECT * FROM magodmis.co2_material_details where Ncid = ${ncid}`,
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

co2.post("/deleteMaterialDetails", async (req, res, next) => {
  const { id } = req.body;
  try {
    misQueryMod(
      `DELETE FROM magodmis.co2_material_details WHERE ID = ${id};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error deleting data from co2_material_details");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

co2.post("/insertParaDetails", async (req, res, next) => {
  const {
    ncid,
    gasType,
    beadDia,
    power,
    gap,
    flowPressure,
    focus,
    speed,
    frequency,
    comments,
  } = req.body;
  try {
    misQueryMod(
      `INSERT INTO magodmis.co2_parameters (Ncid, Gas_Type, Bead_Dia, Power, Gap, Flow_Pressure, Focus, Speed, Frequency, Comments) VALUES (${ncid}, '${gasType}', ${beadDia}, ${power}, ${gap}, ${flowPressure}, ${focus}, ${speed}, ${frequency}, '${comments}')`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error inserting data into co2_parameters");
        }

        misQueryMod(
          `SELECT * FROM magodmis.co2_parameters where Ncid = ${ncid}`,
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

co2.post("/deleteParaDetails", async (req, res, next) => {
  const { id } = req.body;
  try {
    misQueryMod(
      `DELETE FROM magodmis.co2_parameters WHERE ID = ${id};`,
      async (err, result) => {
        if (err) {
          logger.error(err);
          return res
            .status(500)
            .send("Error deleting data from co2_parameters");
        }

        res.send(result);
      }
    );
  } catch (error) {
    next(error);
  }
});

co2.post("/allCo2Data", async (req, res, next) => {
  const { ncid } = req.body;

  try {
    misQueryMod(
      `SELECT * FROM magodmis.co2_job_parameter WHERE Ncid = '${ncid}'`,
      (err, co2_job_parameter) => {
        if (err) {
          logger.error(err);
          return next(err);
        }

        misQueryMod(
          `SELECT * FROM magodmis.co2_material_details WHERE Ncid = '${ncid}'`,
          (err, co2_material_details) => {
            if (err) {
              logger.error(err);
              return next(err);
            }

            misQueryMod(
              `SELECT * FROM magodmis.co2_parameters WHERE Ncid = '${ncid}'`,
              (err, co2_parameters) => {
                if (err) {
                  logger.error(err);
                  return next(err);
                }

                // Combine results into an object
                const responseData = {
                  co2_job_parameter,
                  co2_material_details,
                  co2_parameters,
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

module.exports = co2;
