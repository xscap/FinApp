import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Chart,registerables}from 'chart.js';
Chart.register(...registerables);
import App from './App.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
