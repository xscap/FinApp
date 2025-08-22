import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeMessage from "./Authentication/Welcome/WelcomeMessage";
import LoginPage from "./Authentication/Login/LoginPage";
import RegisterPage from "./Authentication/Register/RegisterPage";
import InvoiceViewer from "./Layout/Display/InvoiceViewer";
import ReportViewer from "./Layout/Display/ReportViewer";
import CustomerViewer from "./Layout/Display/CustomerViewer";
import DashboardViewer from "./Layout/Display/DashboardViewer";
import PaymentViewer from "./Layout/Display/PaymentViewer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardViewer/>}/>   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path = "/invoices" element={<InvoiceViewer />} />
          <Route path = "/reports" element={<ReportViewer />} />
          <Route path = "/customers" element={<CustomerViewer />} />
          <Route path = "/payments" element={<PaymentViewer />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

