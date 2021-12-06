import React, { useEffect, useState } from "react";
import "./App.css";
import { getData } from "../src/api/index";
import { Icoment } from "./types";
import { type } from "os";

const App: React.FC = () => {
  let data: Icoment[] = [];
  const [coments, setComents] = useState(data);

  useEffect(() => {
    getData().then((res) => {
      setComents(res);
    });
  }, []);

  if (coments.length) {
    transFormData(coments);
  }

  return (
    <div className="App">
      {coments.length &&
        coments.map((coment, index) => {
          return <div key={index}>{coment.title}</div>;
        })}
    </div>
  );
};

export default App;

type USERCOMENTS = {
  userId: number;
  coments: Icoment[];
};

const transFormData = (dataArray: Icoment[]) => {
  let userId: number = 0;
  let userComents: Icoment[] = [];
  let allUserComents: USERCOMENTS[] = [];

  dataArray.forEach((item) => {
    let auxUserId: number = item.userId;
    if (auxUserId === userId) {
      userComents.push(item);
    } else {
      userId = item.userId;
      let auxItem: USERCOMENTS = {
        userId: item.userId,
        coments: userComents,
      };
      allUserComents.push(auxItem);
      userComents = [];
      userComents.push(item);
    }
    
  });
  console.log('allUserComents',allUserComents);
  
};
