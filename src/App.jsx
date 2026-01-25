import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Payments from "./pages/Payments";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
