import DashboardViewer from "./Layout/Display/DashboardViewer";
import ReportViewer from "./Layout/Display/ReportViewer";
import InvoiceViewer from "./Layout/Display/InvoiceViewer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardViewer/>}/>   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          
          <Route path = "/reports" element={<ReportViewer />} />
          <Route path = "/invoices" element={<InvoiceViewer />} />
          
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

