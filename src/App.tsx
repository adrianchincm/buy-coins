import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
