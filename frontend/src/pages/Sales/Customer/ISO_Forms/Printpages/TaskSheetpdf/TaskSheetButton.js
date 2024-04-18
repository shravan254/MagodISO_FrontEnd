import React, { useState } from "react";
import TaskSheetModal from "./TaskSheetModal";

export default function TaskSheetButton() {
  const [openPrintModal, setOpenPrintModal] = useState("");

  const openPdf = () => {
    setOpenPrintModal(true);
  };

  return (
    <div>
      <div className="col-md-2">
        <TaskSheetModal
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
