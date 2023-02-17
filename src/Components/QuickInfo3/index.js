import React from 'react'
import { Link } from "react-router-dom";
import "../../styles/global.css";
import { QuickInfoWrapper } from "../../Modules/styles/globalStyles";
import Section from "../../Modules/styles/section";

function QuickInfo3() {
  return (
    <Section className="mt-2">
      <div>
        <h1 className="text-center font-weight-bold">Llorona's Passion</h1>
      </div>
      <div>
        <h4 className="text-center tituloSection">Buen Son y Sazón</h4>
        <h2 className="text-center subTituloSection1">para todo Corazón</h2>
        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-center texto1Home">
          Los jueves disfruta de Música en vivo. Así cómo de jueves a domingo
          djs que tocarán los mejores sones para ti. Atrévete a bailar y
          disfrutar de la gran experiencia que preparamos para ti.
        </p>
      </QuickInfoWrapper>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Link to="/reserva">
          <div>
            <img
              className="imagen2AbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+1.43.06.png"
              alt="Música en vivo"
            />
            <p className="textoFotosHome">
              Jueves Música
              <br />
              en Vivo
            </p>
          </div>
        </Link>
        <Link to="/reserva">
          <div>
            <img
              className="imagen2AbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+12.36.30.png"
              alt="Djs por día"
            />
            <p className="textoFotosHome">
              Djs <br />
              por día
            </p>
          </div>
        </Link>
        <Link to="/menullorona/menubebidas/artesanal">
          <div>
            <img
              className="imagen2AbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/Screen+Shot+2023-02-06+at+12.36.39.png"
              alt="Bebe y Baila la vida "
            />
            <p className="textoFotosHome">
              Mixología con
              <br />
              Pulque, Mezcal
              <br />y Tequila
            </p>
          </div>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/reserva">
          <button type="button" className="buttonComponente">
            ¡Reserva ya!
          </button>
        </Link>
      </div>
    </Section>
  );
}

export default QuickInfo3