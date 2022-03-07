import React from "react";
import './style.css';
import { BsCart2 } from 'react-icons/bs';
import { GiSolarSystem, GiMagicBroom, GiCardRandom } from 'react-icons/gi';

class Codes extends React.Component {

  render() {
    const { close } = this.props;
    return(
      <div className="displayCodes">
        <div className="pubsTitle">
          <span className="pubsTitleText">
            <h1>Trabalhos de Programação</h1>
          </span>
          <span 
            className="closeButton"
            name="showPubs"
            onClick={ close } 
            id="showCodes"
          >
            ×
          </span>
        </div>
        <div className="cardsDisplay">
          <a 
            href="https://tgandr.github.io/pages/shopping/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card">
              <BsCart2 />
              <p>Shopping Cart</p>
            </div>
          </a>
          <a 
            href="https://tgandr.github.io/pages/trybewarts/index.html"
            target="_blank"
            rel="noopener noreferrer"  
          >
            <div className="card">
              <GiMagicBroom />
              <p>Trybewarts</p>
            </div>
          </a>
          <div className="card">
            <GiSolarSystem />
            <p>Sistema Solar</p>
          </div>
          <div className="card">
            <GiCardRandom />
            <p>Trunfo</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Codes;
