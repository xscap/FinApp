import React from "react";
import NavLayout from "../Navlayout"; 
import Customers from "../../Customers/Customers";// adjust path based on your folder structure

const CustomerViewer = () => {
  return (
    <NavLayout>
      <Customers />
    </NavLayout>
  );
};

export default CustomerViewer;