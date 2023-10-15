import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/home/Dashboard";
import { Footer } from "../view/dashboard/footer/Footer";
import { Header } from "../view/dashboard/header/Header";

import { Contactus } from "../view/dashboard/contactus/Contactus";


function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
     
        <Route path="/contactus" element={<Contactus />} />
    

        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
       
      </Routes>
    </div>
  );
}

export default MainNavigator;
