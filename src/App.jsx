import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ReportViewer from "./Layout/Display/ReportViewer";

import DashboardViewer from "./Layout/Display/DashboardViewer";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardViewer/>}/>   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          
          <Route path = "/reports" element={<ReportViewer />} />
          
          
        </Routes>
      </Router>
    </>
  );
}

export default App;

