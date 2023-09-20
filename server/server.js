const express = require("express");

const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

// const fileUpload = require('express-fileupload');

const app = express();

const userRouter = require("./routes/user");
const unitRouter = require("./routes/units");
const quoteRouter = require("./routes/quotations");
const customerRouter = require("./routes/customer");
const employeeRouter = require("./routes/employee");
const materialRouter = require("./routes/material");
const processlistRouter = require("./routes/processlist");
const termsconditionsRouter = require("./routes/termsconditions");
const tolerancetypeRouter = require("./routes/tolerancetype");
const inspectionRouter = require("./routes/inspection");
const packinglevelsRouter = require("./routes/packinglevels");
const mtrlgradesRouter = require("./routes/materialgrade");
const taxdbRouter = require("./routes/taxdetails");
const statesRouter = require("./routes/states");
const credittermsRouter = require("./routes/creditterms");
const mtrlsourceRouter = require("./routes/mtrlsource");
const salesexeclistRouter = require("./routes/salesexecutives");
const checkdrawingsRouter = require("./routes/checkdrawings");
const mailRouter = require("./routes/mailer");
const ordersRouter = require("./routes/orders");
const sigmancRouter = require("./routes/sigmanc");
const machineRouter = require("./routes/machines");
const productionRouter = require("./routes/production");
const stocksRouter = require("./routes/stocks");
const packinvRouter = require("./routes/packinv");
const analysisRouter = require("./routes/analysis");
const accountsRouter = require("./routes/accounts");

const fileRouter = require("./routes/files");

const { logger } = require("./helpers/logger");
const { log } = require("winston");

app.use(cors());
app.use(bodyParser.json());
// app.use(fileUpload());

// All Routes --------------------

app.use("/user", userRouter);
app.use("/units", unitRouter);
app.use("/quotation", quoteRouter);
app.use("/customers", customerRouter);
app.use("/employees", employeeRouter);
app.use("/materials", materialRouter);
app.use("/processlists", processlistRouter);
app.use("/termsconditions", termsconditionsRouter);
app.use("/tolerancetypes", tolerancetypeRouter);
app.use("/inspectionlevels", inspectionRouter);
app.use("/packinglevels", packinglevelsRouter);
app.use("/mtrlgrades", mtrlgradesRouter);
app.use("/taxdetails", taxdbRouter);
app.use("/states", statesRouter);
app.use("/creditterms", credittermsRouter);
app.use("/mtrlsources", mtrlsourceRouter);
app.use("/salesexecutives", salesexeclistRouter);
app.use("/mailer", mailRouter);
app.use("/checkdrawings", checkdrawingsRouter);
app.use("/order", ordersRouter);
app.use("/sigmanc", sigmancRouter);
app.use("/machine", machineRouter);
app.use("/production", productionRouter);
app.use("/stocks", stocksRouter);
app.use("/packinv", packinvRouter);
app.use("/analysis", analysisRouter);
app.use("/accounts", accountsRouter);
app.use("/file", fileRouter);
//--------------------------------

// database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "hbstudent",
  password: "hbstudent",
  database: "magod_iso_form",
});

db.connect(function (err) {
  if (err) {
    console.log("error in connection", err);
  } else {
    console.log("connected");
  }
});

app.post("/postData", (req, res)=>{

  const postdata = "insert into welding_details (part_name, material, thickness, uom, quantity) values(?)"

  const values = [
    req.body.part_name,
    req.body.material,
    req.body.thickness,
    req.body.uom,
    req.body.quantity,
]

db.query(postdata, [values], (err, result) => {
  console.log('jsiuwqhsiqw', values);
  if (err) {
      return res.json({ Error: 'inside signup query' });
  }
  else {
      return res.json({ Status: 'Success' })
  }
})
})





app.get("/getData", (req, res) => {
  const sql = "SELECT * FROM welding_details";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("error", err);
      return res.json({ Error: "get emp error in sql" });
    } else {
      console.log("reasult", result);
      return res.json({ Status: "Success", Result: result });
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
  logger.error(`Status Code : ${err.status}  - Error : ${err.message}`);
});

// starting the server
app.listen(4001, () => {
  console.log("listening on port 4001");
  logger.info("listening on port 4001");
});
