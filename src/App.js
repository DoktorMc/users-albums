import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import { fetchUsers } from "./store/actions/userActions";
import UserPage from "./modules/users/UserPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });
  return (
    <div className="App">
      <div>ROUTING</div>
      <UserPage />
    </div>
  );
}

export default App;
