import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoices from "./Invoices/Invoices";
function App() {
  

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Invoices />} />   // Home route with Navbar - will change based on the FireBase integration , mainly Authentication and Cloud Firestore
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
