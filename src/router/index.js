import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../components/error/Error";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
