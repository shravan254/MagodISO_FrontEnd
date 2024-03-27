import React, { useState } from "react";
import TaskSheetModel from "./TaskSheetModel";

export default function TaskSheetButton() {
  const [openPrintModal, setOpenPrintModal] = useState("");

  const openPdf = () => {
    setOpenPrintModal(true);
  };

  return (
    <div>
      <div className="col-md-2">
        <TaskSheetModel
          openPrintModal={openPrintModal}
          setOpenPrintModal={setOpenPrintModal}
        />
        <button
          type="submit"
          className="button-style"
          variant="primary"
          onClick={openPdf}
        >
          Task
        </button>
      </div>
    </div>
  );
}
