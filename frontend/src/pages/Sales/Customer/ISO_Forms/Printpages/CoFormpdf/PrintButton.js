import React, { useState } from "react";
import Printco2modal from "./Printco2modal";

export default function PrintButton() {
  const [openPrintModal, setOpenPrintModal] = useState("");

  const openPdf = () => {
    setOpenPrintModal(true);
  };

  return (
    <div>
      <div className="col-auto">
        <Printco2modal
          openPrintModal={openPrintModal}
          setOpenPrintModal={setOpenPrintModal}
        />
        <button className="button-style" variant="primary" onClick={openPdf}>
          Print
        </button>
      </div>
    </div>
  );
}
