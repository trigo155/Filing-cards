import React, { useEffect, useState } from "react";
import { Icoment, USERCOMENTS } from "../../types";
import "./Card.scss";
import "../../fonts/icons/style.scss";
import PostCards from "../PostsCards/PostCards";
import { Button } from "reactstrap";
import { arrayImg } from "../../utils";

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
    <div>
      <div className="cards">
        {props.length > 0 &&
          props.map((coment, index) => {
            return (
              <div className="cards__item" key={index}>
                <div className="card">
                  <div>
                    <img className="card__image" src={arrayImg[index]} alt="User image" />
                  </div>
                  <div className="card__content">
                    <div className="card__title">
                      <span className="icon-user"></span> {coment.userId}
                    </div>
                    <div className="card__text">
                      <p>
                        Please, press the button to see the user's comments.
                      </p>
                    </div>
                    <Button
                      className="btn btn--block card__btn b-button"
                      onClick={() => {
                        showUser(coment.userId);
                        toggleModal();
                      }}
                    >
                      Comments <span className="icon-bubble2"></span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        {isOpen && (
          <PostCards props={state} isOpen={isOpen} setisOpen={setisOpen} />
        )}
      </div>
    </div>
  );
};

export default Card;
