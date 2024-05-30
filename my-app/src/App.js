import React from 'react';
import './App.css';
import Home from './home';
import Pubs from "./pubs";
import Codes from './codes';


class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      showHome: true,
      showPubs: false,
      showCodes: false,
    }
  }

  page = (event) => {
    const e = event.target.id;
    this.state.e
    ? this.setState({ [e]: false })
    : this.setState({ showHome: false, [e]: true })
  }

  close = (event) => {
    this.setState({ [event.target.id]: false, showHome: true })
  }

  render() {
    const { page, close } = this;
    const { showHome, showPubs, showCodes } = this.state;
    
    return (
      <main>
        <header>
          <div className="upperBar">
            <h1>Thiago Andrade da Silva</h1>
            <hr/>
            <div>
              <p><span>Zootecnista</span>
                <span>Mestre em Engenharia de Pesca</span>
                <span>Programador front e back end</span>
              </p>
            </div>
          </div>
        </header>
        <section>
          { showHome && (<Home page={ page } />) }
        </section>
        <section>
          { showPubs && (<Pubs close={ close } />) }
          { showCodes && (<Codes close={ close } />)}
        </section>
        <footer>
            <p><a href="http://lattes.cnpq.br/0867464831177008">Currículo Lattes |</a>
              <a href="https://www.linkedin.com/in/thiagoandsilva/">&nbsp;LinkedIn |</a>
              <a href="https://www.instagram.com/thiagoandsilva/">&nbsp;Instagram</a></p>
        </footer>
      </main>
    )
  }
}



export default App;
