const isoRouter = require("express").Router();
var createError = require("http-errors");
const req = require("express/lib/request");
const {
  misQuery,
  setupQuery,
  misQueryMod,
  qtnQueryMod,
} = require("../helpers/dbconn");
const { logger } = require("../helpers/logger");

isoRouter.get("/getData", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.qtnlist WHERE QtnNo = '2021/07/031'`,
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

isoRouter.get("/getJobType", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.job_type`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getComponent", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.component`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getComponent", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.component`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getJointType", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.welding_joint_type`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getInspection", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.welding_inspection`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getToolPath", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.welding_toolpath`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getDelivery", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.deleivery`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getMaterialSource", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.material_source`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getTestType", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(`SELECT * FROM magodqtn.test_type`, (err, data) => {
      if (err) logger.error(err);
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    next(error);
  }
});

isoRouter.get("/getTests", async (req, res, next) => {
  const { QtnNo } = req.body;
  try {
    qtnQueryMod(
      `SELECT * FROM magodqtn.test_list where Test_ID = '1'`,
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

module.exports = isoRouter;
