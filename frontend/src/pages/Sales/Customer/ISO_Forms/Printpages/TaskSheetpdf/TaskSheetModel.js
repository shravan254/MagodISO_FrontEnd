import React, { Fragment, useState } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Modal from "react-bootstrap/Modal";
import TaskSheetPdf from "./TaskSheetPdf";

export default function TaskSheetModel(props) {

    const handleClose = () => props.setOpenPrintModal(false);

  return (
    <div>
      <Modal fullscreen show={props.openPrintModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Sheet Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-0 p-1">
          <Fragment>
            <PDFViewer width="1200" height="600" filename="TaskSheet.pdf">
              <TaskSheetPdf/>
            </PDFViewer>
          </Fragment>
        </Modal.Body>
      </Modal>
    </div>
  );
}
