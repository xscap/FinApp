import DashboardViewer from "./Layout/Display/DashboardViewer";
import ReportViewer from "./Layout/Display/ReportViewer";
import InvoiceViewer from "./Layout/Display/InvoiceViewer";
import PaymentViewer from "./Layout/Display/PaymentViewer";
import CustomerViewer from "./Layout/Display/CustomerViewer";
import SettingsViewer from "./Layout/Display/SettingsViewer";
import Login from "./Authentication/Login";
import WelcomeMenu from "./Authentication/WelcomeMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Authentication/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeMenu />} />  // Default route to Welcome Menu
          <Route path="/dashboard" element={<DashboardViewer/>}/>   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          <Route path = "/reports" element={<ReportViewer />} />
          <Route path = "/invoices" element={<InvoiceViewer />} />
          <Route path="/payments" element={<PaymentViewer/>} />
          <Route path="/customers" element={<CustomerViewer/>} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/register" element={<Register />} />
          <Route path = "/settings" element={<SettingsViewer />} />
          {/* <Route path = "/wlcm" element={<WelcomeMenu />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

