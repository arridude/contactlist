import { useState } from "react";
import Navbar from "./Navbar";
import styles from './app.module.css';
import logo from "./assets/logo.png";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
