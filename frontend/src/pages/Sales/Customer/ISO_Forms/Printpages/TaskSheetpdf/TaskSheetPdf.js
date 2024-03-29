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

export default function TaskSheetPdf() {
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
      padding: 2,
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
      padding: 2,
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
      height: "14px",
      padding: 1,
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
    CheckBoxLabel01: {
      fontSize: "9px",
      width: "30px",
      fontFamily: "Helvetica-Bold",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 2,
      flexWrap: "wrap",
      textAlign: "center",
    },
    CheckBox01: {
      fontSize: "9px",
      width: "18px",
      borderRight: 1,
      borderBottom: 1,
      padding: 2,
      flexWrap: "wrap",
      textAlign: "center",
    },
    CheckBoxLabel02: {
      fontSize: "9px",
      width: "70px",
      fontFamily: "Helvetica-Bold",
      borderBottom: 1,
      borderRight: 1,
      padding: 2,
      flexWrap: "wrap",
      textAlign: "center",
    },
    CheckBox02: {
      fontSize: "9px",
      width: "19px",
      borderRight: 1,
      borderBottom: 1,
      padding: 2,
      flexWrap: "wrap",
      textAlign: "center",
    },
    CheckBoxLabel03: {
      fontSize: "9px",
      width: "30px",
      fontFamily: "Helvetica-Bold",
      borderBottom: 1,
      borderRight: 1,
      padding: 2,
      flexWrap: "wrap",
      textAlign: "center",
    },
    CheckBox03: {
      fontSize: "9px",
      width: "17px",
      borderRight: 1,
      borderBottom: 1,
      padding: 2,
      flexWrap: "wrap",
      textAlign: "center",
    },
    weld01: {
      fontSize: "9px",
      fontFamily: "Helvetica-Bold",
      width: "226px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 1,
      textAlign: "center",
    },
    first01: {
      fontSize: "9px",
      fontFamily: "Helvetica-Bold",
      width: "314px",
      borderBottom: 1,
      borderRight: 1,
      padding: 1,
      textAlign: "center",
    },
    tableSolidLable: {
      fontSize: "9px",
      width: "200px",
      borderRight: 1,
      borderBottom: 1,
      borderLeft: 1,
      marginLeft: "30px",
      padding: 3,
      flexWrap: "wrap",
      fontFamily: "Helvetica-Bold",
    },
    tableSolidData: {
      fontSize: "9px",
      width: "70px",
      borderRight: 1,
      borderBottom: 1,
      padding: 2,
      flexWrap: "wrap",
    },
    tableCOLable: {
      fontSize: "9px",
      width: "200px",
      borderBottom: 1,
      borderRight: 1,
      padding: 2,
      flexWrap: "wrap",
      fontFamily: "Helvetica-Bold",
    },
    comments: {
      height: "50px",
      width: "540px",
      borderBottom: 1,
      borderRight: 1,
      borderLeft: 1,
      padding: 3,
      marginLeft: "30px",
      flexWrap: "wrap",
      fontFamily: "Helvetica-Bold",
      fontSize: "9px",
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
            <Text>Task Sheet For Laser Welding</Text>
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
                  Schedule No/Task No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  240436 01 01
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Date
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  15/02/2024
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableData01}>Assembly Part Name/No</Text>
          <Text style={styles.tableData03}>Sub-assy Part Name/No</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableInput01}>BB-00008373</Text>
          <Text style={styles.tableInput03}>10</Text>
        </View>

        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Any Defects
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  NO
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Material Thickness
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  1.2 MM
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
                  Machine/Model No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  LasWeld2
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  With Filler
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  Yes
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
                  Program No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  451459
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Filler Material
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  SS 316L 0.4
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
                  Yes
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Batch No/Charge No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  12345
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
                  Lens distance [Focal Length] in mm
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  150 MM
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Machine Peak Power
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  13KW
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.weld01}>Weld Settings Verified By</Text>
          <Text style={styles.first01}>First Part Inspection</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.CheckBoxLabel01}>QC</Text>
          <Text style={styles.CheckBox01}></Text>
          <Text style={styles.CheckBoxLabel02}>Weld Engineer</Text>
          <Text style={styles.CheckBox02}></Text>
          <Text style={styles.CheckBoxLabel02}>Incharge</Text>
          <Text style={styles.CheckBox02}></Text>
          <Text style={styles.CheckBoxLabel03}>QC</Text>
          <Text style={styles.CheckBox03}></Text>
          <Text style={styles.CheckBoxLabel02}>Weld Engineer</Text>
          <Text style={styles.CheckBox02}></Text>
          <Text style={styles.CheckBoxLabel02}>Incharge</Text>
          <Text style={styles.CheckBox02}></Text>
          <Text style={styles.CheckBoxLabel02}>Project Incharge</Text>
          <Text style={styles.CheckBox02}></Text>
        </View>

        <View style={styles.tableContainer2}>
          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Type Of Laser Equipment
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  Ndyag
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Reweld Permitted
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  Yes
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
                  Fixture No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Controll Plan No
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
                  WPS No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  PDF No
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
                  WI No
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  PQR No
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
                  Standard Parameter Ref
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Gas Type
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
                  Pre flow Gas in lpm
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Post flow Gas in lpm
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
                  Design Type
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text
                  style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}
                ></Text>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <View style={styles.sideheadingdata}>
                <Text style={[styles.globalfontwithbold, { paddingLeft: 5 }]}>
                  Weld Side
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
                  Backing
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
                  Tack Weld
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.sideheadingdata1}>
                <Text style={[styles.globalfontwithbold1, { paddingLeft: 5 }]}>
                  Yes
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.WeldingDetails}>
          <Text style={styles.globalfontwithbold}>Welding Parameters</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableData01}>
            Solid State Laser - Parameters(PW)
          </Text>
          <Text style={styles.tableData03}>CO2 Laser - Parameters</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Power at focus Watts/volts</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>
            Power transmission efficiency in watts
          </Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Focus dia in mm</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Power in Watts</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Pulse duration in ms</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Frequency in Hz</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Pulse frequency in Hz</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Beam dia in mm</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Pulse shape No</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Focus in mm</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Gas pressure in lpm (Avg)</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Gas pressure in lpm (Avg)</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Feed rate in mm/min</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Feed rate in mm/min</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>RPM</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>RPM</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Gas purity in %</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Gas purity in %</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>Gap Range in mm</Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Gap Range in mm</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.tableSolidLable}>
            Gas flow orientation in deg
          </Text>
          <Text style={styles.tableSolidData}></Text>
          <Text style={styles.tableCOLable}>Gas flow orientation in deg</Text>
          <Text style={styles.tableSolidData}></Text>
        </View>

        <View style={styles.row}>
          <View style={styles.comments}>
            <Text>Note:</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.comments}>
            <Text>Prepared By:</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.comments}>
            <Text>Welding Operator Stamp:</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
