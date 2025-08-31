import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import "antd/dist/reset.css"; // Ant Design styles
import SignUp from './pages/Today.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>
)
