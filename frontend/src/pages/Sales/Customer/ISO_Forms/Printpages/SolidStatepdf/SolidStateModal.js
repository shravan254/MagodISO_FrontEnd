import React, { useState, Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import { PDFViewer, StyleSheet, Image } from "@react-pdf/renderer";
import ISOFormPDF from "./SolidStatePdf";

export default function SolidStateModal({ isoFormOpen, SetIsoFormOpen }) {
  const [fullscreen, setFullscreen] = useState(true);

  const handleClose = () => {
    SetIsoFormOpen(false);
  };

  return (
    <div>
      <Modal show={isoFormOpen} fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Parameter Sheet - Solid State Laser</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Fragment>
            <PDFViewer width="1200" height="600" filename="ParameterSolidState.pdf">
              <ISOFormPDF />
            </PDFViewer>
          </Fragment>
        </Modal.Body>
      </Modal>
    </div>
  );
}
