import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./store/actions/userActions";
import HomePage from "./modules/home/HomePage";
import NotFoundPage from "./modules/about/notFound/NotFoundPage";
import Navigation from "./modules/common/commonComponents/navigation/Navigation";


import "./App.css";
import UserModule from "./modules/users/pages/UserModule";



function App() {

  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/*" element={<UserModule />} />
          <Route path="/notfound" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/notfound" replace={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
