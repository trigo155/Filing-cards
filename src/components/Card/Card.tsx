import React, { useState } from "react";
import { Icoment, USERCOMENTS } from "../../types";
import "./Card.scss";
import '../../fonts/icons/style.scss'

const Card = ({ props }: { props: USERCOMENTS[] }) => {
  let userComents: Icoment[] = [];
  const [state, setState] = useState(userComents);
  const [ icon, setIcon ] = useState();

  const showUser = (n: number) => {
    userComents = props[n - 1].coments;
    setState(userComents);
    
  };

  const icons: any = ['happy', 'smile', 'tongue', 'wink', 'grin', 'cool', 'evil', 'shocked', 'baffled', 'hipster'];
  const iconsFont = "";

  const iconMap = () =>{
    icons.map((iconImg: string) =>{
      return iconImg;
       
    })
  }
    console.log(iconMap());
    
  

  return (
    <div className="b-gallery">
      {props.length &&
        props.map((coment, index) => {
          return (
            <div className="card" key={index}>
              <header>
                <img
                  src="https://cdn.pixabay.com/photo/2021/11/22/16/46/nature-6816877_960_720.jpg"
                  alt=""
                />
              </header>
              {/* <h1 className="b-heading">User: {coment.userId}</h1> */}
              <span className={`icon-${icon}`}></span>
              
              <section>
                <h2 className="b-heading">User: {coment.userId}</h2>
              <button onClick={() => showUser(coment.userId)}>
                Coments
              </button>
                {/* <h3>Software Engineer - Web Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, corporis.
                </p> */}
                <ul>
                  <li>
                    <a href="#" className="fa fa-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-linkedin"></a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-youtube"></a>
                  </li>
                </ul>
              </section>
              <footer>
                <p>Hola cara de bola</p>
              </footer>
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

<main className="card">
  <header>
    <img src="" alt="" />
  </header>

  <section>
    <h2>Roger Natividad</h2>
    <h3>Software Engineer - Web Developer</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
      corporis.
    </p>
    <ul>
      <li>
        <a href="#" className="fa fa-facebook"></a>
      </li>
      <li>
        <a href="#" className="fa fa-twitter"></a>
      </li>
      <li>
        <a href="#" className="fa fa-linkedin"></a>
      </li>
      <li>
        <a href="#" className="fa fa-youtube"></a>
      </li>
    </ul>
  </section>
</main>;
