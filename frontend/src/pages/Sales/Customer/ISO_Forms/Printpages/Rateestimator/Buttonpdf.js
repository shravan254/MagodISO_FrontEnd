import React, { useState } from "react";
import RateEstimatorModal from "./RateEstimatorModal";
import TaskSheetButton from "../TaskSheetpdf/TaskSheetButton";

export default function Buttonpdf() {
  const [openPrintModal, setOpenPrintModal] = useState("");

  const openPdf = () => {
    setOpenPrintModal(true);
  };

  return (
    <div>
      <div className="col-md-2">
        <RateEstimatorModal
          openPrintModal={openPrintModal}
          setOpenPrintModal={setOpenPrintModal}
        />
        <button
          type="submit"
          className="button-style1"
          variant="primary"
          onClick={openPdf}
        >
          Estimator
        </button>
      </div>
      <TaskSheetButton />
    </div>
  );
}
