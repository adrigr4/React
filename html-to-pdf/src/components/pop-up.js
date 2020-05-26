import React, { Component } from "react";
import Popup from "reactjs-popup";
import '../App.css';
 
class PopUp extends Component {

    render() {
        return(
        <Popup trigger={<button className="button"> Open PopUp </button>} modal>
        {close => (
        <>
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Title </div>
        <div className="content">
          {" "}
          Text
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            Submit
          </button>
        </div>
        </>
    )}
    </Popup>);
    }
    
}

export default PopUp;