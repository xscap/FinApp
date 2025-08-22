

import './App.css'

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

