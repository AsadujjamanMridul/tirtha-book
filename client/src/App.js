import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import logo from './logo.svg';
import './App.scss';
import AdminPanel from "./components/Admin/AdminPanel/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanel />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
