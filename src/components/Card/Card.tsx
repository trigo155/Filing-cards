import React, { useEffect, useState } from "react";
import { Icoment, USERCOMENTS } from "../../types";
import "./Card.scss";
import "../../fonts/icons/style.scss";
import PostCards from "../PostsCards/PostCards";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Card = ({ props }: { props: USERCOMENTS[] }) => {
  let userComents: Icoment[] = [];
  const [state, setState] = useState(userComents);
  const [isOpen, setisOpen] = useState(false);

  const showUser = (n: number) => {
    userComents = props[n - 1].coments;
    setState(userComents);
  };

  const toggleModal = () => {
    setisOpen(!isOpen);
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
                <Button
                  className="b-button"
                  onClick={() => {
                    showUser(coment.userId);
                    toggleModal();
                  }}
                >
                  Comments
                </Button>
              </section>
              <footer className="b-footer">
                <p>User {coment.userId} has xxx comments </p>
              </footer>
            </div>
          );
        })}
      {isOpen && (
        <PostCards props={state} isOpen={isOpen} setisOpen={setisOpen} />
      )}
    </div>
  );
};

export default Card;
