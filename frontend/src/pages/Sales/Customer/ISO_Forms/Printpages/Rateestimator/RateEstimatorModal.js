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
import RateEstimatorPdf from "./RateEstimatorPdf";

export default function RateEstimatorModal({
  openPrintModal,
  formData,
  setOpenPrintModal,
}) {
  const handleClose = () => setOpenPrintModal(false);

  return (
    <div>
      <Modal fullscreen show={openPrintModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate Estimator Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-0 p-1">
          <Fragment>
            <PDFViewer width="1200" height="600" filename="RateEstimator.pdf">
              <RateEstimatorPdf formData={formData} />
            </PDFViewer>
          </Fragment>
        </Modal.Body>
      </Modal>
    </div>
  );
}
