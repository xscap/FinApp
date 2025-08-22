import React from "react";
import "./pdfpreview.css";

const PdfPreview = ({ onClose, pdfUrl }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "report.pdf";
    link.click();
  };

  return (
    <div className="pdf-modal-overlay">
      <div className="pdf-modal-content">
        <div className="pdf-header">
          <h2>Report Preview</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <iframe
          src={pdfUrl}
          title="PDF Preview"
          className="pdf-frame"
        ></iframe>

        <div className="pdf-actions">
          <button className="download-btn" onClick={handleDownload}>
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;
