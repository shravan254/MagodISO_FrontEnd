import React, { startTransition, useEffect, useState } from "react";
import axios from "axios";
import magodlogo from "../../../../../../images/ISOPdfs/MagodLogo.png";
import {
  Page,
  Document,
  StyleSheet,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import {
  borderBottom,
  borderRight,
  fontSize,
  padding,
  style,
  textAlign,
  width,
} from "@mui/system";
// import magodlogo from "../Logo/MagodLogo.png";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
  },
  tableContainerMain: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  tableTitle: {
    marginTop: "25px",
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginBottom: "10px",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  globalfontwithbold: {
    fontSize: "8px",
    fontFamily: "Helvetica-Bold",
  },
  globalfontwithoutbold: {
    fontSize: "8px",
  },
  logo: {
    width: "60px",
    height: "60px",
  },
  HeadingText: {
    textAlign: "center",
    marginLeft: "160px",
    flexDirection: "row",
    justifyContent: "center",
  },
  Heading: {
    textAlign: "center",
    flexDirection: "row",
    width: "500px",
    padding: "1px",
  },
  subdetails: {
    width: "350px",
    border: 1,
    marginLeft: "10px",
    height: "140px",
    marginTop: "10px",
  },
  subdetailsshipping: {
    width: "220px",
    borderRight: 1,
    borderTop: 1,
    borderBottom: 1,
    height: "140px",
    marginTop: "10px",
  },
  subsection1data: {
    marginLeft: "10px",
    width: "100%",
    textAlign: "left",
    flexDirection: "row",
    padding: "3px",
  },
  smalltable: {
    width: "290px",
    flexDirection: "row",
    textAlign: "left",
  },
  smalltable: {
    width: "570px",
    flexDirection: "row",
    textAlign: "left",
  },
  sideheading: {
    width: "145px",
    borderBottom: 1,
    borderRight: 1,
  },
  sideheadingdata: {
    width: "140px",
    borderBottom: 1,
    borderRight: 1,
  },
  sideheadingdata2: {
    width: "139.5px",
    borderBottom: 1,
    borderRight: 1,
  },
  sideHead1: {
    width: "149px",
    borderBottom: 1,
    borderRight: 1,
  },
  sideHeadData1: {
    width: "100px",
    borderBottom: 1,
    borderRight: 1,
  },
  sideHead2: {
    width: "100px",
    borderBottom: 1,
    borderRight: 1,
  },
  sideHeadData2: {
    width: "233px",
    borderBottom: 1,
    borderRight: 1,
  },
  flexi: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  tableContainer1: {
    width: "330px",
  },
  tableViewMain: {
    width: "570px",
    borderLeft: 1,
    marginLeft: "10px",
  },
  itemlist: {
    width: "570px",
    borderBottom: 1,
    borderRight: 1,
    borderLeft: 1,
    textAlign: "center",
    marginLeft: "10px",
  },
  tableDisplay: {
    width: "570px",
    // borderRight: 1,
    borderLeft: 1,
    marginLeft: "10px",
  },
  drawingname: {
    width: "100px",
    textAlign: "center",
    borderRight: 1,
    padding: "1px",
    borderBottom: 1,
  },
  drawingname01: {
    width: "100px",
    textAlign: "center",
    borderRight: 1,
    padding: "1px",
    // borderBottom: 1,
  },
  comments: {
    height: "280px",
    width: "600px",
    borderBottom: 1,
    borderRight: 1,
    marginLeft: "2px",
  },
  quantity: {
    width: "190px",
    borderRight: 1,
    padding: "1px",
    textAlign: "center",
    borderBottom: 1,
  },
  Material: {
    width: "90px",
    textAlign: "center",
    borderRight: 1,
    padding: "1px",
    borderBottom: 1,
  },
  pkg: {
    width: "100px",
    textAlign: "center",
    borderRight: 1,
    borderBottom: 1,
    padding: "1px",
  },
  insp: {
    width: "100px",
    borderRight: 1,
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
  },
  qty: {
    width: "70px",
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
  },
  tableDataView: {
    width: "570px",
    borderBottom: 1,
    borderRight: 1,
    borderLeft: 1,
    marginLeft: "10px",
    height: "330px",
  },
  pagetableView: {
    width: "570px",
    borderBottom: 1,
    borderRight: 1,
    marginLeft: "10px",
  },
  pageitem: {
    width: "150px",
    paddingLeft: 5,
    borderLeft: 1,
  },
  SignatureSection: {
    width: "570px",
    borderBottom: 1,
    borderRight: 1,
    marginLeft: "10px",
  },

  SignatureData: {
    width: "400px",
    paddingLeft: 5,
    borderLeft: 1,
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  SignatureData2: {
    width: "170px",
    paddingLeft: 5,
    borderLeft: 1,
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  SignatureData222: {
    width: "400px",
    paddingLeft: 5,
    borderLeft: 1,
    height: "80px",
  },
  SignatureData22: {
    width: "170px",
    paddingLeft: 5,
    borderLeft: 1,
    height: "80px",
  },
  bottomtext: {
    width: "570px",
    marginLeft: "10px",
  },
});

const COForm = () => {
  const renderContent = () => {
    return (
      <Page size="A4" style={styles.page}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.tableContainer}>
              <View>
                <Image src={magodlogo} style={styles.logo} />
              </View>
              <View>
                <Text
                  style={[
                    styles.tableTitle,
                    {
                      fontSize: "15px",
                      marginLeft: "120px",
                      textDecoration: "underline",
                    },
                  ]}
                >
                  Magod Laser Machining Pvt Ltd
                </Text>
              </View>
              {/* <View style={styles.row}>
                <Text
                  style={[
                    styles.globalfontwithoutbold,
                    { marginLeft: "110px", textDecoration: "underline" },
                  ]}
                >
                  Returnable Material Receipt Voucher
                </Text>
              </View> */}
            </View>
          </View>
        </View>
        <View style={[styles.tableContainerMain]}>
          <View style={[styles.itemlist, { borderTop: 1 }]}>
            <Text style={[styles.globalfontwithbold, { padding: 3 }]}>
              Laser Welding Job Parameter Sheet - CO2 Laser
            </Text>
          </View>
          <View style={styles.tableDisplay}>
            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Date </Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>27/02/2024</Text>
              </View>
              <View style={styles.Material}>
                <Text style={styles.globalfontwithbold}>Shcedule No</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>29376198</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Machine</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>SS301</Text>
              </View>
              <View style={styles.Material}>
                <Text style={styles.globalfontwithbold}>ɳT</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>293</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Material 1</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>SS301</Text>
              </View>
              <View style={styles.Material}>
                <Text style={styles.globalfontwithbold}>Material 2</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>SS301</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Thickness</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.Material}>
                <Text style={styles.globalfontwithbold}>Thickness</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>4</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Joint</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}>
                  Lap/ButtT/Other
                </Text>
              </View>
              <View style={styles.Material}>
                <Text style={styles.globalfontwithbold}>Operator</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}>Sr No</Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Gas Type</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Flow/Pressure</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Beam Dia(mm)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Focus</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Power(W)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Speed(mm/min)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Gap(mm)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Frequency(Hz)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.comments}>
                <Text style={styles.globalfontwithbold}>Comments:</Text>
              </View>
            </View>

            {/* material 2 parameters */}
            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}>Sr No</Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Gas Type</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Flow/Pressure</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Beam Dia(mm)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Focus</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Power(W)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Speed(mm/min)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Gap(mm)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}>Frequency(Hz)</Text>
              </View>
              <View style={styles.quantity}>
                <Text style={styles.globalfontwithoutbold}></Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.comments}>
                <Text style={styles.globalfontwithbold}>Comments:</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    );
  };

  return <Document>{renderContent()}</Document>;
};

export default COForm;
