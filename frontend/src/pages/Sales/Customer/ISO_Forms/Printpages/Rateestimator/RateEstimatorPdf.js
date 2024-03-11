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

export default function RateEstimatorPdf() {
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
    description: {
      width: "60%",
    },
    xyz: {
      width: "40%",
    },
    tableTitle: {
      marginTop: "20px",
      fontSize: 12,
      fontFamily: "Helvetica-Bold",
      marginBottom: "5px",
    },
    headerbox: {
      fontSize: 12,
      fontFamily: "Helvetica-Bold",
      marginBottom: "10px",
      marginLeft: "10px",
    },
    underline: {
      textDecoration: "underline",
    },
    code: {
      fontSize: 8,
      textDecoration: "none",
    },
    title2: {
      marginLeft: "200px",
    },
    shiftperiod: {
      marginLeft: "120px",
      marginTop: "20px",
    },
    boxdata: {
      border: "1px",
      padding: "10px",
      marginTop: "40px",
      width: "550px",
      marginLeft: "50px",
      marginRight: "100px",
    },
    tableview: {
      width: "600px",
      marginLeft: "5px",
      height: "730px", // Adjust the height as per your requirement
      overflow: "hidden",
    },
    Headingrow: {
      flexDirection: "row",
      alignItems: "center",
      width: "600px",
      marginTop: 5,
      fontWeight: "bold",
      marginLeft: "5px",
    },
    HeadingrowData: {
      flexDirection: "row",
      width: "600px",
      fontWeight: "bold",
      marginLeft: "5px",
    },
    machineHeading: {
      width: "80%",
    },
    operatorHeading: {
      width: "20%",
    },

    row: {
      flexDirection: "column",
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
    quotationNumview: {
      marginLeft: "10px",
      fontSize: 10,
      width: "80px",
      textAlign: "right",
    },
    quotationNumDataview: {
      width: "160px",
      marginLeft: "5px",
    },
    quotesize: {
      fontSize: 10,
    },
    quotationNumData: {
      fontSize: 12,
    },
    dateview: {
      marginTop: "5px",
      marginLeft: "10px",
      fontSize: 10,
      width: "80px",
      textAlign: "right",
    },
    dateData: {
      width: "160px",
      marginTop: "4px",
      marginLeft: "5px",
    },
    datesize: {
      fontSize: 12,
    },
    validuptoView: {
      marginTop: "5px",
      marginLeft: "10px",
      fontSize: 10,
      width: "80px",
      textAlign: "right",
    },
    validuptodataView: {
      width: "160px",
      marginTop: "4px",
      marginLeft: "5px",
    },
    validsize: {
      fontSize: 12,
    },
    column: {
      flexDirection: "row",
    },
    subtitle: {
      marginTop: "10px",
      marginLeft: "40px",
      fontSize: 14,
      fontFamily: "Helvetica-Bold",
    },
    subtitle1: {
      marginTop: "20px",
      marginLeft: "30px",
      width: "90%",
      borderBottom: 1,
    },
    addressDisplay: {
      marginLeft: "30px",
      width: "40%",
    },
    text: {
      fontSize: 9,
    },
    textforsub: {
      fontSize: 10,
      paddingTop: "1px",
      marginLeft: "10px",
      width: "30%",
    },
    reportSection: {
      marginLeft: "30px",
      marginTop: "10px",
      width: "20%",
    },
    reportSectiondata: {
      width: "50%",
      marginTop: "10px",
    },
    reportSection2: {
      marginLeft: "30px",
      marginTop: "10px",
      width: "20%",
    },
    reportSection2data: {
      width: "70%",
      marginTop: "10px",
      borderBottom: 1,
    },
    attention: {
      fontSize: 12,
    },
    attentiondata: {
      fontSize: 11,
      fontFamily: "Helvetica-Bold",
    },
    referencedata: {
      fontSize: 11,
    },
    subReportSection: {
      marginTop: "10px",
      width: "100%",
    },
    text1: {
      fontSize: 10,
      textAlign: "center",
    },
    section1options1: {
      marginLeft: "80px",
      marginTop: "10px",
      width: "20%",
    },
    section1options1data: {
      marginTop: "10px",
      width: "30%",
    },
    section1options1text: {
      marginTop: "10px",
      width: "30%",
      backgroundColor: "yellow",
    },

    subsection2texts: {
      marginTop: "10px",
      marginLeft: "60px",
    },

    text2: {
      fontFamily: "Helvetica-Bold",
      fontSize: 10,
    },
    subsection2: {
      marginTop: "20px",
      marginLeft: "55px",
    },
    text3without: {
      fontSize: 10,
      padding: "3px",
    },
    text3with: {
      fontSize: 10,
      fontFamily: "Helvetica-Bold",
      padding: "3px",
    },
    sincerely: {
      marginLeft: "50px",
      marginTop: "50px",
    },
    lasttext: {
      marginTop: "40px",
      marginLeft: "50px",
      textAlign: "left",
      width: "90%",
    },
    qtdetail: {
      marginTop: "10px",
      width: "100%",
      marginLeft: "30px",
    },
    tableviewsection: {
      marginLeft: "30px",
      width: "530px",
      textAlign: "center",
      borderBottom: 1,
      borderTop: 1,
      paddingTop: "5px",
      paddingBottom: "5px",
    },
    tableviewsectiondata: {
      marginLeft: "30px",
      width: "530px",
      textAlign: "center",
      paddingTop: "5px",
      paddingBottom: "5px",
    },
    slno: {
      width: "30px",
    },
    itemname: {
      width: "200px",
    },
    operation: {
      width: "80px",
    },
    quality: {
      width: "80px",
    },
    unitprice: {
      width: "80px",
    },
    total: {
      width: "100px",
    },
    textdata: {
      fontSize: 10,
      textAlign: "center",
    },
    textdataforchoice: {
      fontSize: 10,
      textAlign: "left",
      paddingLeft: "10px",
    },
    taxnameheader: {
      width: "15%",
      marginLeft: "120px",
      marginTop: "15px",
    },
    taxheadertext: {
      fontSize: 10,
      fontFamily: "Helvetica-Bold",
      textAlign: "center",
    },
    taxamountheader: {
      width: "15%",
      marginTop: "15px",
    },
    taxpercentheader: {
      width: "15%",
      marginTop: "15px",
    },
    taxamountheader2: {
      width: "15%",
      marginTop: "15px",
    },
    taxnamedata: {
      width: "15%",
      marginLeft: "120px",
      paddingTop: 5,
      paddingBottom: 5,
    },
    taxamountdata: {
      width: "15%",
      paddingTop: 5,
      paddingBottom: 5,
    },
    taxpercentdata: {
      width: "15%",
      paddingTop: 5,
      paddingBottom: 5,
    },
    taxamountdata2: {
      width: "15%",
      paddingTop: 5,
      paddingBottom: 5,
    },
    smalltable: {
      width: "290px",
      flexDirection: "row",
      textAlign: "left",
    },
    tableContainer1: {
      width: "330px",
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
      fontSize: "9px",
      fontFamily: "Helvetica-Bold",
    },
    globalfontwithbold1: {
      fontSize: "9px",
    },
    tableData01: {
      fontSize: "9px",
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
      fontSize: "9px",
      width: "270px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 3,
      flexWrap: "wrap",
    },
    tableData02: {
      fontSize: "9px",
      fontFamily: "Helvetica-Bold",
      width: "180px",
      borderRight: 1,
      borderBottom: 1,
      padding: 1,
      textAlign: "center",
    },
    tableInput02: {
      fontSize: "9px",
      width: "180px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
    },
    tableData03: {
      fontSize: "9px",
      fontFamily: "Helvetica-Bold",
      width: "270px",
      borderBottom: 1,
      borderRight: 1,
      padding: 1,
      textAlign: "center",
    },
    tableInput03: {
      fontSize: "9px",
      width: "270px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
    },
    tableInput: {
      fontSize: "9px",
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
      height: "18px",
      padding: 2,
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
      fontSize: "9px",
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
      fontSize: "9px",
      fontFamily: "Helvetica-Bold",
      width: "490px",
      borderBottom: 1,
      borderRight: 1,
      padding: "2px",
    },
    SlData: {
      fontSize: "9px",
      width: "50px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 3,
      textAlign: "center",
    },
    RiskData: {
      fontSize: "9px",
      width: "490px",
      borderRight: 1,
      borderBottom: 1,
      padding: 3,
      flexWrap: "wrap",
    },
  });

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
                  2/13/2024
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
                  51500446C001
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
                  Mr.Anil
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
                  Mr.Hemant
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
                  Honey Well
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
                  Address
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  Pune
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
                  E-Mail ID
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.sideheadingdata2]}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  HemantGangurde.Gangurde@Honeywell.com
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
                  New
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
                  9980971115
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
                  Production
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithbold}>Welding Details</Text>
        </View>

        <View style={styles.tableContainer2}>
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
        </View>

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
                  Butt Joint
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
                  418/batch 5000 /year
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
        </View>

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
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
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
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Fixture Requirment
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
                  Fixture Remarks
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
        </View>

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithbold}>
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
                  3.81 MM
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
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.tableContainer2}>
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
                  Yes
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
                  No
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
                  Input Geomatry
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  Yes
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
                  Automatic Welding
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
                  CMM
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
                  Magod
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
                  Magod Delivery
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
                  2/21/2024
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithbold}>Testing</Text>
        </View>

        <View style={styles.NDT}>
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
          <Text style={styles.tableInput03}>Yes He Test 10-9</Text>
        </View>

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithbold}>Risks Deatils</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.SlNo}>SL No</Text>
          <Text style={styles.risk}>Risks</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.SlData}>01</Text>
          <Text style={styles.RiskData}>Weld depth 3.8mm</Text>
        </View>

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithbold}>Quote Deatils</Text>
        </View>
      </Page>
    </Document>
  );
}
