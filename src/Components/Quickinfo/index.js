import React from 'react'
import { Link } from 'react-router-dom';
import Section from "../../Modules/styles/section";
import { QuickInfoWrapper } from "../../Modules/styles/globalStyles";
import "../../styles/global.css";

function QuickInfo() {
  return (
    <Section className="mt-2">
      <div>
        <h1 className="text-center font-weight-bold">La Llorona Xperience</h1>
      </div>
      <div>
        <h4 className="text-center tituloSection">¿Cómo ser un</h4>
        <h2 className="text-center subTituloSection">Mexicano?</h2>
        <div className="linea"></div>
      </div>

      <QuickInfoWrapper>
        <p className="text text-center texto1Home">
          Toma nuestros cocteles con <b>Pulque y Mezcal</b>. Prueba con nosotros
          la gastronomía urbana mexicana que va desde{" "}
          <b>tacos, memelas hasta hamburguesas</b> y deleítate con una exquisita
          <b> Cerveza Artesanal Mexicana</b> que encontraras AQUÍ.
        </p>
      </QuickInfoWrapper>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Link to="/menullorona/menualimentos">
          <div>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/mexican-shredded-pork-recipes-900x900.jpg"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome">Tacos de Cochinita Pibil</p>
          </div>
        </Link>
        <Link to="menu/menualimentos">
          <div>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/aguachileVerde.jpg"
              alt="Aguachile Verde Camarón"
            />
            <p className="textoFotosHome">
              Aguachile Verde <br />
              de Camarón
            </p>
          </div>
        </Link>
        <Link to="/menullorona/menualimentos">
          <div>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome">
              Hamburguesa Méxicana <br />
              con especias mexicanas
            </p>
          </div>
        </Link>
        <Link to="/menullorona/menubebidas/artesanal">
          <div>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/mixologia/IMG_8064.jpg"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome">
              Pierde Almas con
              <br />
              Mezcal Artesanal
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

export default QuickInfo