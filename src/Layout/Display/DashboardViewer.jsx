import React from "react";
import NavLayout from "../Navlayout"; 
import DashboardCntnt from "../../Dashboard/Home/DashboardCntnt";// adjust path based on your folder structure

const DashboardViewer = () => {
  return (
    <NavLayout>
      <DashboardCntnt />
    </NavLayout>
  );
};

export default DashboardViewer;