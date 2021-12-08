import React, { useEffect, useState } from "react";
import "./App.css";
import { getData } from "../src/api";
import { Icoment, USERCOMENTS } from "./types";
import { transFormData } from "../src/utils";
import { Card } from "./components/";

const App: React.FC = () => {
  let data: Icoment[] = [];
  let allUsersData: USERCOMENTS[] = [];

  const [coments, setComents] = useState(data);
  const [allUsers, setAllUsers] = useState(allUsersData);

  useEffect(() => {
    getData().then((res) => {
      setComents(res);
      setAllUsers(transFormData(res));
      console.log(res);
    });
  }, []);

  return (
    <div>
      <Card props={allUsers} />
    </div>
  );
};

export default App;
