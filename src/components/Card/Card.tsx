import React, { useState } from "react";
import { Icoment, USERCOMENTS } from "../../types";
import "./Card.scss";
import "../../fonts/icons/style.scss";
import PostCards from "../PostsCards/PostCards";

const Card = ({ props }: { props: USERCOMENTS[] }) => {
  let userComents: Icoment[] = [];
  const [state, setState] = useState(userComents);

  const showUser = (n: number) => {
    userComents = props[n - 1].coments;
    setState(userComents);
  };

  return (
    <div className="b-containercard">
      {props.length > 0 &&
        props.map((coment, index) => {
          return (
            <div className="b-card" key={index}>
              <section>
                <h2 className="b-heading">User: {coment.userId}</h2>
                <div></div>
                <button
                  className="b-button"
                  onClick={() => showUser(coment.userId)}>
                  Comments
                </button>
              </section>
              <footer className="b-footer">
                <p>User {coment.userId} has xxx comments </p>
              </footer>
            </div>
          );
        })}
      {state.length && <PostCards props={state} />}
    </div>
  );
};

export default Card;
