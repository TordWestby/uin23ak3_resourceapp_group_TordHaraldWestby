import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resources from "./resources";
import Navbar from "./nav";

function Layout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:category" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}



function Home() {
  return <h1>Arbeidskrav 3</h1>;
}

export default Layout;