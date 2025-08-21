import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import "antd/dist/reset.css"; // Ant Design styles
import Landing from './pages/landing/Landing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>
)
