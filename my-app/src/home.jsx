import React from "react";
import './style.css';

class Home extends React.Component {
  render() {
    document.addEventListener('mouseover', (elem) => {
      const background = document.querySelector('.frame')
      if (elem.target.innerText === 'AQUICULTURA') {
        background.style.backgroundImage = "url('https://revistavetshare.com.br/wp-content/uploads/2021/10/shutterstock_1915187485.jpg')"
      } if (elem.target.innerText === 'ZOOTECNIA') {
        background.style.backgroundImage = "url('https://ak.picdn.net/shutterstock/videos/3852800/thumb/1.jpg')"
      } if (elem.target.innerText === 'PUBLICAÇÕES') {
        background.style.backgroundImage = "url('https://www.meatpoultrynutrition.org/sites/default/files/nutrition/library.jpg')"
      } if (elem.target.innerText === 'PROGRAMAÇÃO') {
        background.style.backgroundImage = "url('https://miro.medium.com/max/1400/0*Wz93rPzLLTq1VwVW')"
      }
    });

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
        <nav>
            
        </nav>
        <section>
            <div className="frame">
              <a href="https://aquiculturanoceara.blogspot.com/">
              <div className="btn btn_aquic">
                Aquicultura
              </div></a>
              {/* <div class="btn btn_zootec">
                  <p>Zootecnia</p>
              </div> */}
              <a href="../programation.html">
              <div className="btn btn_arts">
                <p>Publicações</p>
              </div>
              </a>
              <a href="./programation.html">
              <div className="btn btn_prog">
                <p>Programação</p>
              </div></a>
            </div>
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

export default Home;
