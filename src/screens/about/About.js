import React from "react";
import SubaboutYou from "./SubaboutYou";
import SubaboutME from "./SubaboutME";
import Modal from "../../components/modal";
import { Link } from "react-router-dom";
import { tsPropertySignature } from "@babel/types";

function About(props) {
  return (
    <>
      <h1>Estás en la página about</h1>
      <SubaboutYou />
      <SubaboutME />
      <nav>
        <ul>
          <li>
            <Link to="/About/SubaboutYou">Sub About You</Link>
          </li>
          <li>
            <Link to="/About/SubaboutME">Yes</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <div className="App popover-container">
          <header>
            <button
              className="button--principal"
              onClick={props.handleClick}
            >
              {" "}
              {props.state.isOpen ? "close" : "open"}{" "}
            </button>
          </header>
          <div className="popover-container" ref={props.node}>
            {props.state.popupVisible && (
              <Modal handleClick={props.handleClick} modalContent='modal-content1' button='button'>
                <h1>Esto es un modal desde el padre</h1>
              </Modal>
            )}
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default About;
