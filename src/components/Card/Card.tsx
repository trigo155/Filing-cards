import React, { useState } from "react";
import { Icoment, USERCOMENTS } from "../../types";
import "./Card.scss";

const Card = ({ props }: { props: USERCOMENTS[] }) => {
  let userComents: Icoment[] = [];
  const [state, setState] = useState(userComents);

  const showUser = (n: number) => {
    userComents = props[n - 1].coments;
    setState(userComents);
  };

  return (
    <div className="b-pepe">
      {props.length &&
        props.map((coment, index) => {
          return (
            <div className="b-block">
              <div className="b-card" key={index}>
                <h1>User: {coment.userId}</h1>
                <a href="#miModal" onClick={() => showUser(coment.userId)}>
                  Coments
                </a>
              </div>
            </div>
          );
        })}
      <div id="miModal" className="modal">
        <div className="modal-contenido">
          <a href="#">X</a>
          {state.length &&
            state.map((userComent, index) => {
              return (
                <div className="b-card" key={index}>
                  <h2>Title</h2>
                  {userComent.title}
                  <h3>body</h3>
                  {userComent.body}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
