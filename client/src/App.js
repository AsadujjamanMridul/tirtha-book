import { createContext, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import 'antd/dist/antd.min.css';
import AdminPanel from "./components/Admin/AdminPanel/AdminPanel";
import Dashboard from './components/Admin/Dashboard/Dashboard';

export const SidebarInnerContent = createContext();

function App() {

  const [innerContent, setInnerContent] = useState(<Dashboard />);

  return (
    <SidebarInnerContent.Provider value={[innerContent, setInnerContent]}>
      <Router>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
        </Routes>
      </Router>
    </SidebarInnerContent.Provider>
  );
}

export default App;
