import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Dashboard from "./components/dashboard/dashboard";
import Result from "./components/result/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<Register />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route index path="/" element={<Dashboard />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
