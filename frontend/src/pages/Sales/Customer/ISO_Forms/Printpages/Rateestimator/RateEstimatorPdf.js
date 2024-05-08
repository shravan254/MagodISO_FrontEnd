import React from "react";
import {
  Page,
  Document,
  StyleSheet,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import magodlogo from "../../../../../../images/ISOPdfs/MagodLogo.png";
import moment from "moment";

export default function RateEstimatorPdf({ formData }) {
  const styles = StyleSheet.create({
    page: {
      fontSize: 11,
      flexDirection: "column",
    },
    tableContainer: {
      flexDirection: "column",
      flexWrap: "wrap",
      marginTop: "20px",
      marginLeft: "30px",
      border: 1,
      height: "70px",
      width: "540px",
    },
    tableContainer2: {
      flexDirection: "column",
      flexWrap: "wrap",
      marginLeft: "30px",
      borderBottom: 1,
      borderLeft: 1,
      borderRight: 1,
      height: "11px",
      width: "540px",
    },
    tableContainer3: {
      flexDirection: "column",
      flexWrap: "wrap",
      marginLeft: "30px",
      borderBottom: 1,
      borderLeft: 1,
      borderRight: 1,
      height: "45px",
      width: "540px",
    },

    tableTitle: {
      marginTop: "20px",
      fontSize: 12,
      fontFamily: "Helvetica-Bold",
      marginBottom: "5px",
    },

    underline: {
      textDecoration: "underline",
    },

    logo: {
      width: "70px",
      height: "70px",
    },
    addresstext: {
      fontSize: 9,
      width: "190px",
      overflow: "hidden",
      marginLeft: "84px",
      marginTop: "20px",
    },

    column: {
      flexDirection: "column",
    },
    row: {
      flexDirection: "row",
    },
    sideheadingdata: {
      width: "140px",
      borderRight: 1,
    },

    sideheadingdata1: {
      width: "140px",
      // borderRight: 1,
    },
    sideheadingdata2: {
      width: "200px",
      borderRight: 1,
    },
    globalfontwithbold: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
    },
    globalfontwithboldTitle: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      color: "red",
    },
    globalfontwithbold1: {
      fontSize: "8px",
    },
    tableData01: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "270px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 1,
      textAlign: "center",
    },
    tableInput01: {
      fontSize: "8px",
      width: "270px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 3,
      flexWrap: "wrap",
      textAlign: "center",
    },
    tableData02: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "180px",
      borderRight: 1,
      borderBottom: 1,
      padding: 1,
      textAlign: "center",
    },
    tableInput02: {
      fontSize: "8px",
      width: "180px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
    },
    tableData03: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "270px",
      borderBottom: 1,
      borderRight: 1,
      padding: 1,
      textAlign: "center",
    },
    tableInput03: {
      fontSize: "8px",
      width: "270px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
      textAlign: "center",
    },
    tableInput: {
      fontSize: "8px",
      width: "180px",
      borderRight: 1,
      borderBottom: 1,
      padding: 1,
      flexWrap: "wrap",
    },
    WeldingDetails: {
      width: "540px",
      borderBottom: 1,
      borderRight: 1,
      borderLeft: 1,
      textAlign: "center",
      marginLeft: "30px",
      height: "12px",
      padding: 1,
      // marginTop: "5px",

      // textDecoration: "underline",
    },
    NDT: {
      width: "540px",
      borderBottom: 1,
      borderRight: 1,
      borderLeft: 1,
      marginLeft: "30px",
      height: "14px",
      padding: 1,
    },
    SlNo: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "50px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: "2px",
      textAlign: "center",
    },
    risk: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "490px",
      borderBottom: 1,
      borderRight: 1,
      padding: "2px",
    },
    SlData: {
      fontSize: "8px",
      width: "50px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 3,
      textAlign: "center",
    },
    RiskData: {
      fontSize: "8px",
      width: "490px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
    },
    testingTableData01: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "135px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 1,
      textAlign: "center",
    },
    testingTableData02: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "135px",
      borderBottom: 1,
      borderRight: 1,
      padding: 1,
      textAlign: "center",
    },
    testingTableData03: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "135px",
      borderBottom: 1,
      borderRight: 1,
      padding: 1,
      textAlign: "center",
    },

    testingTableData04: {
      fontSize: "8px",
      fontFamily: "Helvetica-Bold",
      width: "135px",
      borderBottom: 1,
      borderRight: 1,
      padding: 1,
      textAlign: "center",
    },
    testingTableInput01: {
      fontSize: "8px",
      width: "135px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 3,
      flexWrap: "wrap",
      textAlign: "center",
    },
    testingTableInput02: {
      fontSize: "8px",
      width: "135px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
      textAlign: "center",
    },
    testingTableInput03: {
      fontSize: "8px",
      width: "135px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
      textAlign: "center",
    },

    testingTableInput04: {
      fontSize: "8px",
      width: "135px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
      textAlign: "center",
    },
  });

  // const groupedTests = formData.testTableData.reduce((acc, curr) => {
  //   if (!acc[curr.Test_Type]) {
  //     acc[curr.Test_Type] = [];
  //   }
  //   acc[curr.Test_Type].push(curr);
  //   return acc;
  // }, {});

  const groupedTests = formData.testTableData.reduce((acc, curr) => {
    if (!acc[curr.Joint_No]) {
      acc[curr.Joint_No] = [];
    }
    acc[curr.Joint_No].push(curr);
    return acc;
  }, {});

  const formattedDate = moment(formData.expectedDelivery).format("DD/MM/YYYY");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.tableContainer}>
          <View>
            <Image src={magodlogo} style={styles.logo} />
          </View>
          <View>
            <Text style={styles.tableTitle}>Magod Laser Machining Pvt Ltd</Text>
            <Text>Customer Enquiry Form - Laser Welding</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.addresstext}>
              Plot No 72, Phase II KAIDB Indl Area, Jigani, Anekal Taluk
              ,Bangalore-560105 Ph:080-27826226 Fax:080-27826246 E-mail:
              info@magodlaser.in
            </Text>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Enquiry Date
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.enquiryDate}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Drawing No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.drawingNo}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Conducted By
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {/* Mr.Anil */}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Contact Person
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.contactPerson}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Customer
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.custName}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.sideheadingdata}>
              <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                Address
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                {/* {formData.custAddress} */}
                {formData.custAddress.replace(/\n/g, " ")}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  E-Mail ID
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.sideheadingdata2]}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.emailId}
                </Text>
                y
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Component
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.component}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Contact No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.contactNo}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Type of Job
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.jobType}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithboldTitle}>Welding Details</Text>
        </View>
        <View style={styles.row}>
          {/* <Text style={styles.tableData01}>SL No</Text> */}
          <Text style={styles.tableData01}>Material</Text>
          <Text style={styles.tableData03}>Thickness</Text>
        </View>
        {/* <View style={styles.row}>
          <Text style={styles.tableInput01}>Leak</Text>
          <Text style={styles.tableInput03}>{formData}</Text>
        </View> */}
        {/* <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Material
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  Hastelloy C-276
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Thickness
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  3.81 MM
                </Text>
              </View>
            </View>
          </View>
        </View> */}
        {formData.materialTableData.map((item, index) => (
          <View key={index} style={styles.row}>
            {/* <Text style={styles.tableInput02}>{index + 1}</Text> */}
            <Text style={styles.tableInput01}>{item.Material}</Text>
            <Text style={styles.tableInput03}>{item.Thickness}</Text>
          </View>
        ))}
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Joint Type
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.jointType}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Qty
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.batchQty}/batch {formData.yearQty}/year
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Filler
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  No
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Size Of Filler
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>
        </View> */}
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Allowable Combination
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.allowComb}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Satutary and Regulatory Requirements
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.srRequirements}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Fixture Requirement
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.fixtureReq == 1
                    ? "Yes"
                    : formData.fixtureReq == 0
                    ? "No"
                    : formData.fixtureReq == 2
                    ? "NA"
                    : ""}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Fixture Remarks
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.fixtureRemarks}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithboldTitle}>
            Customer requirments with respect to welding
          </Text>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Depth Penetration
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.depthOfPen}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Strength
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.strength}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          {/* <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Hermatic Joint
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.hermaticJoint == 1
                    ? "Yes"
                    : formData.hermaticJoint == 0
                    ? "No"
                    : formData.hermaticJoint == 2
                    ? "NA"
                    : ""}
                </Text>
              </View>
            </View>
          </View> */}
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Hermatic Joint
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.hermaticJoint == 1
                    ? "Yes"
                    : formData.hermaticJoint == 0
                    ? "No"
                    : formData.hermaticJoint == 2
                    ? "NA"
                    : ""}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Allowable Deffects
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.allowableDeffects}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithboldTitle}>Input Geometry</Text>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Drawing Available
                </Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.drawingAvailable == 1
                    ? "Yes"
                    : formData.drawingAvailable == 0
                    ? "No"
                    : formData.drawingAvailable == 2
                    ? "NA"
                    : ""}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Tool Path
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.toolPath}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Inspection
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.inspection}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Materisl Source
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.materialSource}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Shipping/Delivery
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.shippingDelivery}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Expected Delivery
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {/* {formData.expectedDelivery} */}
                  {formattedDate}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithboldTitle}>Testing</Text>
        </View>
        {/* <View style={styles.NDT}>
          <Text style={[styles.globalfontwithbold, { marginLeft: "5px" }]}>
            NDT/DT
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableData01}>Test Name</Text>
          <Text style={styles.tableData03}>Test Details</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableInput01}>Leak</Text>
          <Text style={styles.tableInput03}>{formData}</Text>
        </View> */}
        {Object.entries(groupedTests).map(([jointName, tests]) => (
          <React.Fragment key={jointName}>
            <View style={styles.NDT}>
              <Text style={[styles.globalfontwithbold, { marginLeft: "5px" }]}>
                Joint No: {jointName}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.testingTableData01}>Test Type</Text>
              <Text style={styles.testingTableData02}>Test Name</Text>
              <Text style={styles.testingTableData04}>Test Details</Text>
              <Text style={styles.testingTableData04}>Cost</Text>
            </View>
            {tests.map((test, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.testingTableInput01}>{test.Test_Type}</Text>
                <Text style={styles.testingTableInput02}>{test.Test_Name}</Text>
                <Text style={styles.testingTableInput03}>
                  {test.Test_Details}
                </Text>
                <Text style={styles.testingTableInput04}>{test.Test_Cost}</Text>
              </View>
            ))}
          </React.Fragment>
        ))}
        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithboldTitle}>Risks Deatils</Text>
        </View>
        <View style={styles.row}>
          {/* <Text style={styles.tableData01}>SL No</Text> */}
          <Text style={styles.tableData01}>SL No</Text>
          <Text style={styles.tableData03}>Risks</Text>
        </View>
        {/* <View style={styles.row}>
          <Text style={styles.SlData}>01</Text>
          <Text style={styles.RiskData}>Weld depth 3.8mm</Text>
        </View> */}
        {formData.riskTableData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.tableInput01}>{index + 1}</Text>
            <Text style={styles.tableInput03}>{item.Risks}</Text>
          </View>
        ))}

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithboldTitle}>Quote Deatils</Text>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Weld Length(mm)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalWeldLength}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Weld Time(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalWeldTime}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Setup Time(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalSetupTime}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Inspection Time(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalInspectionTime}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Cleaning Time(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalCleaningTime}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Assembly Time(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalAssemblyTime}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Part Loading(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalPartLoading}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Part Unloading(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalPartUnloading}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Final Inspection Time(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalFinalInspectionTime}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Packing Dispatch Time(Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalPackingDispatchTime}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  SetUp Charges
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalSetupCharges}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Inspection Charges
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalInspectionCharges}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  OutSoucring Charges
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalOutSourcingCharges}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Consumables
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalConsumables}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Material Cost
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalMaterialCost}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Filler Cost
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.totalFillerCost}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithboldTitle}>Total</Text>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Labour Time (Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.labourTime}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Machine Time (Sec)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.machineTime}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Out Put Per Hour
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.outPutPerHour}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Labour Cost
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.labourCost}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Machine Cost
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.machineCost}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Transportation Cost
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.transporationCost}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Fixture Charges
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.fixtureCharges}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Testing Charges
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.testingCharges}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Percentage(%)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.percentage}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Overhead Charges(%)
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.overheadCharges}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Total Price Per Part
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.unitPrice}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Revised Unit Price
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  {formData.revisedUnitPrice}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* -------------------------------------------------------------- */}
        {/* <View style={styles.row}>
          <Text style={styles.tableData01}>Parameter</Text>
          <Text style={styles.tableData03}>Total</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Weld Length(mm)</Text>
          <Text style={styles.tableInput03}>{formData.totalWeldLength}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Weld Time(Sec)</Text>
          <Text style={styles.tableInput03}>{formData.totalWeldTime}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Setup Time(Sec)</Text>
          <Text style={styles.tableInput03}>{formData.totalSetupTime}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Inspection Time(Sec)</Text>
          <Text style={styles.tableInput03}>
            {formData.totalInspectionTime}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Cleaning Time(Sec)</Text>
          <Text style={styles.tableInput03}>{formData.totalCleaningTime}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Assembly Time(Sec)</Text>
          <Text style={styles.tableInput03}>{formData.totalAssemblyTime}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Part Loading(Sec)</Text>
          <Text style={styles.tableInput03}>{formData.totalPartLoading}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Part Unloading(Sec)</Text>
          <Text style={styles.tableInput03}>{formData.totalPartUnloading}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Final Inspection Time(Sec)</Text>
          <Text style={styles.tableInput03}>
            {formData.totalFinalInspectionTime}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Packing Dispatch Time(Sec)</Text>
          <Text style={styles.tableInput03}>
            {formData.totalPackingDispatchTime}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>SetUp Charges</Text>
          <Text style={styles.tableInput03}>{formData.totalSetupCharges}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Inspection Charges</Text>
          <Text style={styles.tableInput03}>
            {formData.totalInspectionCharges}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>OutSoucring Charges</Text>
          <Text style={styles.tableInput03}>
            {formData.totalOutSourcingCharges}
          </Text>
        </View>{" "}
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Consumables</Text>
          <Text style={styles.tableInput03}>{formData.totalConsumables}</Text>
        </View>{" "}
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Material Cost</Text>
          <Text style={styles.tableInput03}>{formData.totalMaterialCost}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tableInput01}>Filler Cost</Text>
          <Text style={styles.tableInput03}>{formData.totalFillerCost}</Text>
        </View> */}
      </Page>
    </Document>
  );
}
