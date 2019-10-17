import React, { Component } from "react";
import logo from "../../logo.svg";
import Modal from "../../components/modal";
import "../../App.css";

class Home extends Component {
  render() {
    return (
      <div className="popover-container" ref={this.props.node}>
        <img src={logo} className='App-logo' alt ='logo'/>
        <button className="button--principal" onClick={this.props.handleClick}>
          {" "}
          {this.props.state.isOpen ? "close" : "open"}{" "}
        </button>
        {this.props.state.popupVisible && (
          <Modal handleClick={this.props.handleClick} modalContent='modal-content' button='button'>
            <h1>Esto es un modal desde el padre</h1>
          </Modal>
        )}
      </div>
    );
  }
}

export default Home;

