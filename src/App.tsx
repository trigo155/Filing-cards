import React, { useEffect, useState } from "react";
import "./App.css";
import { getData } from "../src/api";
import { Icoment, USERCOMENTS } from "./types";
import { transFormData } from "../src/utils";
import UserProfile from "./components/UserProfile/UserProfile";
import { Card } from "./components/";


interface FullName {
  firstName: string;
  lastName: string;
}

let prueba:FullName = {
  firstName: 'JJ',
  lastName: 'Trigo'
}



const App: React.FC = () => {

  let data: Icoment[] = [];
  let allUsersData: USERCOMENTS[] = [];

  const [coments, setComents] = useState(data);
  const [ allUsers, setAllUsers ] = useState(allUsersData);

  
  useEffect(() => {
    getData().then((res) => {
      setComents(res);
      setAllUsers(transFormData(res))
      console.log(res);
      
    });
  }, []);

  

  return (
    <div className="App">
      {/* <UserProfile /> */}

      <Card props={allUsers}/>

      {/* {allUsers.length &&
        allUsers.map((user, index) => {
          return (
            <div key={index}>
              <h1>UserId</h1>
              {user.userId} 
              
              {user.coments.map((coment, index) =>{
                return (
                  <div key={`child${index}`}>
                      <h2>Title</h2>
                      {coment.title}
                      <h3>body</h3>
                      {coment.body}
                  </div>
                )
              })}

            </div>
          );
        })} */}

        
    </div>
  );
};

export default App;
