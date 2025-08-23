import DashboardViewer from "./Layout/Display/DashboardViewer";
import ReportViewer from "./Layout/Display/ReportViewer";
import InvoiceViewer from "./Layout/Display/InvoiceViewer";
import Login from "./Authentication/Login";
import Payments from "./Payments/Payments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css" 
import Register from "./Authentication/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardViewer/>}/>   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          <Route path = "/reports" element={<ReportViewer />} />
          <Route path = "/invoices" element={<InvoiceViewer />} />
          {/* <Route path = "/login" element={<Login />} />
          <Route path = "/register" element={<Register />} />
          <Route path="/payments" element={<Payments/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

