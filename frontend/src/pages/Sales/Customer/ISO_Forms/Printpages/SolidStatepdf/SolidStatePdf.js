import React, { startTransition, useEffect, useState } from "react";
import axios from "axios";
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
    fontSize: 8,
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
    width: "80px",
    height: "80px",
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
    width: "570",
    border: 1,
    marginLeft: "10px",
    height: "20px",
    marginTop: "10px",
    textAlign: "center",
  },
  // subdetailsshipping: {
  //     width: "60px",
  //     borderRight: 1,
  //     borderTop: 1,
  //     borderBottom: 1,
  //     height: "140px",
  //     marginTop: "10px",
  // },
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
    width: "71.25px",
    borderBottom: 1,
    borderRight: 1,
  },
  sideheadingdata: {
    width: "71.25px",
    borderBottom: 1,
    borderRight: 1,
  },
  // sideheadingdata2: {
  //     width: "60px",
  //     borderBottom: 1,
  //     borderRight: 1,
  // },

  // sideHeadData1: {
  //     width: "100px",
  //     borderBottom: 1,
  //     borderRight: 1,
  // },

  // sideHead2: {
  //     width: "100px",
  //     borderBottom: 1,
  //     borderRight: 1,
  // },

  // sideHeadData2: {
  //     width: "233px",
  //     borderBottom: 1,
  //     borderRight: 1,
  // },
  flexi: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  tableContainer1: {
    width: "142.5px",
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

    borderLeft: 1,
    marginLeft: "10px",
    borderRight: 1,
  },
  tableDisplay2: {
    width: "570px",
    marginLeft: "10px",
    borderRight: 1,
    borderLeft: 1,
  },
  comments: {
    height: "250px",
  },

  drawingname: {
    width: "47.5px",
    textAlign: "center",
    borderRight: 1,
    padding: "1px",
    borderBottom: 1,
  },
  drawingname01: {
    width: "47.5px",
    textAlign: "center",
    borderRight: 1,
    padding: "1px",
    // borderBottom: 1,
  },
  beadDia: {
    width: "47.5px",
    borderRight: 1,
    padding: "1px",
    textAlign: "center",
    borderBottom: 1,
  },
  power: {
    width: "47.5px",
    textAlign: "center",
    borderRight: 1,
    padding: "1px",
    borderBottom: 1,
  },
  energy: {
    width: "47.5px",
    textAlign: "center",
    borderRight: 1,
    borderBottom: 1,
    padding: "1px",
  },
  pulseWidth: {
    width: "47.5px",
    borderRight: 1,
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
  },
  frequency: {
    width: "47.5px",
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
    borderRight: 1,
  },
  pulseShape: {
    width: "47.5px",
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
    borderRight: 1,
  },
  speed: {
    width: "47.5px",
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
    borderRight: 1,
  },
  gasFlow: {
    width: "47.5px",
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
    borderRight: 1,
  },
  stepover: {
    width: "47.5px",
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
    borderRight: 1,
  },

  standOff: {
    width: "47.5px",
    textAlign: "center",
    padding: "1px",
    borderBottom: 1,
    borderRight: 1,
  },

  layerThk: {
    width: "47.5px",
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
    height: "230px",
  },

  tableDataView2: {
    width: "570px",
    borderBottom: 1,
    borderRight: 1,
    borderLeft: 1,
    marginLeft: "10px",

    height: "230px",
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

  secondBox: {
    width: "570",
    borderBottom: 1,
    borderLeft: 1,
    borderRight: 1,
    marginLeft: "10px",
    height: "20px",
  },
});

const SolidStatePdf = () => {
  const numCopies = 3; // Number of copies you want

  const copiesData = [{ title: "Original For Buyer" }];

  const renderContent = () => {
    return (
      <Page size="A4" style={styles.page}>
        <View style={styles.tableContainerMain}>
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.subdetails}>
                <View style={styles.section1}>
                  <View style={styles.column}>
                    <Text
                      style={[
                        styles.globalfontwithbold,
                        { marginLeft: "10px", padding: 3 },
                      ]}
                    >
                      LASER WELDING JOB PARAMETER SHEET-SOLIDSTATE LASER
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.secondBox}></View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.tableViewMain}>
                <View style={styles.row}>
                  <View style={styles.tableContainer1}>
                    <View style={styles.smalltable}>
                      <View style={styles.row}>
                        <View style={styles.row}>
                          <View style={styles.sideheading}>
                            <Text
                              style={[
                                styles.globalfontwithbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              Shcedule No:
                            </Text>
                          </View>
                        </View>

                        <View style={styles.row}>
                          <View style={styles.sideheadingdata}>
                            <Text
                              style={[
                                styles.globalfontwithoutbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              {" "}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={styles.smalltable}>
                      <View style={styles.row}>
                        <View style={styles.row}>
                          <View style={styles.sideheading}>
                            <Text
                              style={[
                                styles.globalfontwithbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              Date
                            </Text>
                          </View>
                        </View>

                        <View style={styles.row}>
                          <View style={styles.sideheadingdata}>
                            <Text
                              style={[
                                styles.globalfontwithoutbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              {" "}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={styles.smalltable}>
                      <View style={styles.row}>
                        <View style={styles.row}>
                          <View style={styles.sideheading}>
                            <Text
                              style={[
                                styles.globalfontwithbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              Operator
                            </Text>
                          </View>
                        </View>

                        <View style={styles.row}>
                          <View style={styles.sideheadingdata}>
                            <Text
                              style={[
                                styles.globalfontwithoutbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              {" "}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.tableContainer1}>
                    <View style={styles.column}>
                      <View style={styles.smalltable}>
                        <View style={styles.row}>
                          <View style={styles.row}>
                            <View style={styles.sideheading}>
                              <Text
                                style={[
                                  styles.globalfontwithbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                Material 1
                              </Text>
                            </View>
                          </View>

                          <View style={styles.row}>
                            <View style={styles.sideheadingdata}>
                              <Text
                                style={[
                                  styles.globalfontwithoutbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                {" "}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      <View style={styles.smalltable}>
                        <View style={styles.row}>
                          <View style={styles.row}>
                            <View style={styles.sideheading}>
                              <Text
                                style={[
                                  styles.globalfontwithbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                Material 2
                              </Text>
                            </View>
                          </View>

                          <View style={styles.row}>
                            <View style={styles.sideheadingdata}>
                              <Text
                                style={[
                                  styles.globalfontwithoutbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                {""}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      <View style={styles.smalltable}>
                        <View style={styles.row}>
                          <View style={styles.row}>
                            <View style={styles.sideheading}>
                              <Text
                                style={[
                                  styles.globalfontwithbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                Filler
                              </Text>
                            </View>
                          </View>

                          <View style={styles.row}>
                            <View style={styles.sideheadingdata}>
                              <Text
                                style={[
                                  styles.globalfontwithoutbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                {" "}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.tableContainer1}>
                    <View style={styles.smalltable}>
                      <View style={styles.row}>
                        <View style={styles.row}>
                          <View style={styles.sideheading}>
                            <Text
                              style={[
                                styles.globalfontwithbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              Thk1
                            </Text>
                          </View>
                        </View>

                        <View style={styles.row}>
                          <View style={styles.sideheadingdata}>
                            <Text
                              style={[
                                styles.globalfontwithoutbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              Sales
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={styles.smalltable}>
                      <View style={styles.row}>
                        <View style={styles.row}>
                          <View style={styles.sideheading}>
                            <Text
                              style={[
                                styles.globalfontwithbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              Thk2
                            </Text>
                          </View>
                        </View>

                        <View style={styles.row}>
                          <View style={styles.sideheadingdata}>
                            <Text
                              style={[
                                styles.globalfontwithoutbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              {" "}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    <View style={styles.smalltable}>
                      <View style={styles.row}>
                        <View style={styles.row}>
                          <View style={styles.sideheading}>
                            <Text
                              style={[
                                styles.globalfontwithbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              Dia
                            </Text>
                          </View>
                        </View>

                        <View style={styles.row}>
                          <View style={styles.sideheadingdata}>
                            <Text
                              style={[
                                styles.globalfontwithoutbold,
                                { paddingLeft: 5 },
                              ]}
                            >
                              {" "}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={styles.tableContainer1}>
                    <View style={styles.column}>
                      <View style={styles.smalltable}>
                        <View style={styles.row}>
                          <View style={styles.row}>
                            <View style={styles.sideheading}>
                              <Text
                                style={[
                                  styles.globalfontwithbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                Gas Type
                              </Text>
                            </View>
                          </View>

                          <View style={styles.row}>
                            <View style={styles.sideheadingdata}>
                              <Text
                                style={[
                                  styles.globalfontwithoutbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                {" "}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      <View style={styles.smalltable}>
                        <View style={styles.row}>
                          <View style={styles.row}>
                            <View style={styles.sideheading}>
                              <Text
                                style={[
                                  styles.globalfontwithbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                Joint Type
                              </Text>
                            </View>
                          </View>

                          <View style={styles.row}>
                            <View style={styles.sideheadingdata}>
                              <Text
                                style={[
                                  styles.globalfontwithoutbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                {" "}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      <View style={styles.smalltable}>
                        <View style={styles.row}>
                          <View style={styles.row}>
                            <View style={styles.sideheading}>
                              <Text
                                style={[
                                  styles.globalfontwithbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                Machine
                              </Text>
                            </View>
                          </View>

                          <View style={styles.row}>
                            <View style={styles.sideheadingdata}>
                              <Text
                                style={[
                                  styles.globalfontwithoutbold,
                                  { paddingLeft: 5 },
                                ]}
                              >
                                {" "}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.itemlist}>
            <Text style={styles.globalfontwithbold}> </Text>
          </View>

          <View style={styles.tableDisplay}>
            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}> No </Text>
              </View>

              <View style={styles.beadDia}>
                <Text style={styles.globalfontwithbold}>Bead Dia</Text>
              </View>

              <View style={styles.power}>
                <Text style={styles.globalfontwithbold}>Power</Text>
              </View>

              <View style={styles.energy}>
                <Text style={styles.globalfontwithbold}>Energy </Text>
              </View>

              <View style={styles.pulseWidth}>
                <Text style={styles.globalfontwithbold}>Pulse Width</Text>
              </View>
              <View style={styles.frequency}>
                <Text style={styles.globalfontwithbold}>Frequency</Text>
              </View>

              <View style={styles.pulseShape}>
                <Text style={styles.globalfontwithbold}>Pulse Shape</Text>
              </View>

              <View style={styles.speed}>
                <Text style={styles.globalfontwithbold}>Speed</Text>
              </View>
              <View style={styles.gasFlow}>
                <Text style={styles.globalfontwithbold}>Gas Flow</Text>
              </View>
              <View style={styles.stepover}>
                <Text style={styles.globalfontwithbold}>Step Over</Text>
              </View>
              <View style={styles.standOff}>
                <Text style={styles.globalfontwithbold}>Stand Off</Text>
              </View>

              <View style={styles.layerThk}>
                <Text style={styles.globalfontwithbold}>Layer Thk</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableDisplay}>
            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>

              <View style={styles.beadDia}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>

              <View style={styles.power}>
                <Text style={styles.globalfontwithbold}>(W)</Text>
              </View>

              <View style={styles.energy}>
                <Text style={styles.globalfontwithbold}>(J) </Text>
              </View>

              <View style={styles.pulseWidth}>
                <Text style={styles.globalfontwithbold}>(ms)</Text>
              </View>
              <View style={styles.frequency}>
                <Text style={styles.globalfontwithbold}>(Hz)</Text>
              </View>

              <View style={styles.pulseShape}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>

              <View style={styles.speed}>
                <Text style={styles.globalfontwithbold}>(mm/min)</Text>
              </View>
              <View style={styles.gasFlow}>
                <Text style={styles.globalfontwithbold}>(LPM)</Text>
              </View>
              <View style={styles.stepover}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>
              <View style={styles.standOff}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>

              <View style={styles.layerThk}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableDataView}>
            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithoutbold}>1</Text>
              </View>

              <View style={styles.beadDia}>
                <Text style={styles.globalfontwithoutbold}>330-FRON</Text>
              </View>

              <View style={styles.power}>
                <Text style={styles.globalfontwithoutbold}>Sheet </Text>
              </View>

              <View style={styles.energy}>
                <Text style={styles.globalfontwithoutbold}>Pkng1 </Text>
              </View>

              <View style={styles.pulseWidth}>
                <Text style={styles.globalfontwithoutbold}>Insp3</Text>
              </View>
              <View style={styles.frequency}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>

              <View style={styles.pulseShape}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.speed}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.gasFlow}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.stepover}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.standOff}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.layerThk}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
            </View>

            <View>
              <Text style={styles.comments}>comments:</Text>
            </View>
          </View>

          <View style={styles.tableDisplay2}>
            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithbold}> No </Text>
              </View>

              <View style={styles.beadDia}>
                <Text style={styles.globalfontwithbold}>Bead Dia</Text>
              </View>

              <View style={styles.power}>
                <Text style={styles.globalfontwithbold}>Power</Text>
              </View>

              <View style={styles.energy}>
                <Text style={styles.globalfontwithbold}>Energy </Text>
              </View>

              <View style={styles.pulseWidth}>
                <Text style={styles.globalfontwithbold}>Pulse Width</Text>
              </View>
              <View style={styles.frequency}>
                <Text style={styles.globalfontwithbold}>Frequency</Text>
              </View>

              <View style={styles.pulseShape}>
                <Text style={styles.globalfontwithbold}>Pulse Shape</Text>
              </View>

              <View style={styles.speed}>
                <Text style={styles.globalfontwithbold}>Speed</Text>
              </View>
              <View style={styles.gasFlow}>
                <Text style={styles.globalfontwithbold}>Gas Flow</Text>
              </View>
              <View style={styles.stepover}>
                <Text style={styles.globalfontwithbold}>Step Over</Text>
              </View>
              <View style={styles.standOff}>
                <Text style={styles.globalfontwithbold}>Stand Off</Text>
              </View>

              <View style={styles.layerThk}>
                <Text style={styles.globalfontwithbold}>Layer Thk</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableDisplay2}>
            <View style={styles.row}>
              <View style={styles.drawingname01}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>

              <View style={styles.beadDia}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>

              <View style={styles.power}>
                <Text style={styles.globalfontwithbold}>(W)</Text>
              </View>

              <View style={styles.energy}>
                <Text style={styles.globalfontwithbold}>(J) </Text>
              </View>

              <View style={styles.pulseWidth}>
                <Text style={styles.globalfontwithbold}>(ms)</Text>
              </View>
              <View style={styles.frequency}>
                <Text style={styles.globalfontwithbold}>(Hz)</Text>
              </View>

              <View style={styles.pulseShape}>
                <Text style={styles.globalfontwithbold}></Text>
              </View>

              <View style={styles.speed}>
                <Text style={styles.globalfontwithbold}>(mm/min)</Text>
              </View>
              <View style={styles.gasFlow}>
                <Text style={styles.globalfontwithbold}>(LPM)</Text>
              </View>
              <View style={styles.stepover}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>
              <View style={styles.standOff}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>

              <View style={styles.layerThk}>
                <Text style={styles.globalfontwithbold}>(mm)</Text>
              </View>
            </View>
          </View>

          <View style={styles.tableDataView2}>
            <View style={styles.row}>
              <View style={styles.drawingname}>
                <Text style={styles.globalfontwithoutbold}>1</Text>
              </View>

              <View style={styles.beadDia}>
                <Text style={styles.globalfontwithoutbold}>330-FRON</Text>
              </View>

              <View style={styles.power}>
                <Text style={styles.globalfontwithoutbold}>Sheet </Text>
              </View>

              <View style={styles.energy}>
                <Text style={styles.globalfontwithoutbold}>Pkng1 </Text>
              </View>

              <View style={styles.pulseWidth}>
                <Text style={styles.globalfontwithoutbold}>Insp3</Text>
              </View>
              <View style={styles.frequency}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>

              <View style={styles.pulseShape}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.speed}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.gasFlow}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.stepover}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.standOff}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
              <View style={styles.layerThk}>
                <Text style={styles.globalfontwithoutbold}>2</Text>
              </View>
            </View>

            <View>
              <Text>comments:</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: "500px" }}>F58 Rev 0</Text>
        </View>
      </Page>
    );
  };

  return <Document>{renderContent()}</Document>;
};

export default SolidStatePdf;
