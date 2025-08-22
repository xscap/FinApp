import React from "react";
import NavLayout from "../Navlayout"; 
import Report from "../../Reports/Report";// adjust path based on your folder structure

const ReportViewer = () => {
  return (
    <NavLayout>
      <Report />
    </NavLayout>
  );
};

export default ReportViewer;