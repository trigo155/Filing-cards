import React, { useEffect, useState } from "react";
import "./App.css";
import { getData } from "../src/api";
import { USERCOMENTS } from "./types";
import { transFormData } from "../src/utils";
import { Card, Edit, Navbar, PostCards } from "./components/";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  let allUsersData: USERCOMENTS[] = [];

  
  const [allUsers, setAllUsers] = useState(allUsersData);
  
  console.log('allUsers------>', useState(allUsers));
  useEffect(() => {
    getData().then((res) => {
      setAllUsers(transFormData(res));
    });
  }, []);

  return (
    <>
      <div>{/* <Navbar /> */}</div>
      <div className="b-containerapp">
        <Card props={allUsers} />

        <Router>
          <Routes>
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
