import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AIDoctor from "../pages/AIDoctor";
import Rankin from "../pages/Rankin";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ai-doctor" element={<AIDoctor />} />
      <Route path="/dr-ranking" element={<Rankin />} />
    </Routes>
  );
}

export default AppRoutes;
