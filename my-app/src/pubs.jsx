import React from "react";
import './style.css';

class Pubs extends React.Component {
/*   constructor(props){
    super(props);
    
  } */

  render() {
    const { close } = this.props;
    return(
      <div className="displayPubs">
        <div className="pubsTitle">
          <span className="pubsTitleText">
            <h1>Publicações</h1>
          </span>
          <span 
            className="closeButton"
            name="showPubs"
            onClick={ close } 
            id="showPubs"
          >
            ×
          </span>
        </div>
        <div className="cardsDisplay">
          <a 
            href="https://www.aquaculturebrasil.com/artigo/80/a-matematica-da-aquicultura:-otimizando-a-producao-aquicola-com-auxilio-de-modelos-matematicos"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div className="card_pubs">
            <p>Revista Aquaculture Brasil<br/>Otimizando a produção aquícola - modelos matemáticos</p>
          </div>
          </a>
          <a 
            href="http://www.uece.br/cienciaanimal/index.php?option=com_docman&task=doc_view&gid=888&tmpl=component&format=raw&Itemid=157"
            target="_blank"
            rel="noopener noreferrer"
          >
          <div className="card_pubs">
            <p>Revista Ciência Animal - Vol. 31, nº 2 - Aquaponia, exudado da raiz de hortelã e parasitas de peixes</p>
          </div>
          </a>
          <a 
            href="http://www.repositorio.ufc.br/handle/riufc/50351"
            target="_blank"
            rel="noopener noreferrer"  
          >
            <div className="card_pubs">
              <p>Dissertação de mestrado em Engenharia de Pesca</p>
            </div>
          </a>
          <a 
            href="https://www.seduc.ce.gov.br/2019/06/21/eeep-de-guaiuba-cria-peixes-e-plantas-medicinais-utilizando-a-mesma-agua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card_pubs">
              <p>Matéria no site da Secretaria de Educação do Estado do Ceará sobre o projeto de aquaponia na EEEP de Guaiúba</p>
            </div>
            <div id="section1" />
          </a>
        </div>
      </div>
    )
  }
}

export default Pubs;
