import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Icoment } from "../../types";
import "./PostCards.scss";

type Iprop = {
  props: Icoment[];
  isOpen: boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostCards = (props: Iprop) => {
  const [firstArray, setFirstArray] = useState([...props.props]);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const deleteComent = (n: number) => {
    const mostrar: Icoment[] = props.props.splice(n, 1);

    setFirstArray([...props.props]);
  };

  const editFields = (objeto: any) => {
    setTitle(objeto.title);
    setBody(objeto.body);
    setEdit(true);
  };

  return (
    <div>
      <Button color="danger" onClick={() => console.log("toggleModal")}>
        Click Me
      </Button>
      <Modal
        scrollable={true}
        className={"b-modalClassName"}
        contentClassName={"b-modalContent"}
        external={
          <button
            className="close"
            onClick={() => props.setisOpen(!props.isOpen)}
            style={{ position: "absolute", right: "15px", top: "15px" }}
          >
            ×
          </button>
        }
        toggle={() => props.setisOpen(!props.isOpen)}
        isOpen={props.isOpen}
      >
        <ModalHeader className="b-modalHeader">Comments</ModalHeader>
        <ModalBody className="b-modalBody">
          {props.props.length > 0 &&
            props.props.map((userComent, index) => {
              return (
                <div key={index} className="b-contentcard">
                  <h2 className="b-message">Title</h2>
                  {userComent.title}
                  <h3 className="b-message">Message</h3>
                  {userComent.body}
                  <div style={{ margin: "auto", display: "flex" }}>
                    <button
                      className="b-btncoment b-btncoment--red"
                      onClick={() => deleteComent(index)}
                    >
                      Delete
                    </button>
                    <button className="b-btncoment b-btncoment--blue"
                      
                      onClick={() => {
                        editFields(userComent);
                      }}>
                    
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
        </ModalBody>
        <ModalFooter className="b-modalFooter">
          <Button
            color="primary"
            onClick={() => props.setisOpen(!props.isOpen)}
          >
            Do Something
          </Button>{" "}
          <Button onClick={() => props.setisOpen(!props.isOpen)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PostCards;
