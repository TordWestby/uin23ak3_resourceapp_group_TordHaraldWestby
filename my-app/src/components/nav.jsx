// components/nav.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resources from "./resources";


function Navbar() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <a href="/html">HTML</a>
          </li>
          <li>
            <a href="/css">CSS</a>
          </li>
          <li>
            <a href="/javascript">JavaScript</a>
          </li>
         <li>
            <a href="/react">React</a>
          </li>
          <li>
            <a href="/headless-cms">Sanity and Headless CMS</a>
          </li>
        </ul>
      </nav>
    );
  }
  

export default Navbar;
