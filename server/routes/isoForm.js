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

module.exports = isoRouter;
