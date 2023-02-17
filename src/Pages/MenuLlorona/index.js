import React from 'react'
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Components/ButtonComponent';
import Section from "../../Modules/styles/section";

function MenuLlorona() {
  const [english, setEnglish] = useState(false);
  const [spanish, setSpanish] = useState(true);

  const onEnglish = () => {
    setEnglish(true);
    setSpanish(false);
  };

  const onSpanish = () => {
    setEnglish(false);
    setSpanish(true);
  };

  return (
    <>
      <header className="bannerMenu">
        <div className="d-flex subContenedor1Banner">
          <div className="subDiv1Banner">
            <h3 className=" font-weight-bold bannerHomeTexto">
              Mexican Experience
            </h3>

            <div className="subSubDiv1Banner">
              <Link to="/reserva">
                <button type="button" className="buttonComponente">
                  ¡Reserva ya!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Section className="mt-2">
        <div>
          <h2 className="text-center font-weight-bold">Menú</h2>
          <div className="contenedorLenguaje">
            <Button onClick={onEnglish}>English</Button>
            <Button onClick={onSpanish}>Español</Button>
          </div>
        </div>

        {spanish && (
          <div className="contenedorMenu">
            <ButtonComponent
              titulo="ALIMENTOS"
              enlace="/menullorona/menualimentos"
            />
            <ButtonComponent
              titulo="BEBIDAS"
              enlace="/menullorona/menubebidas"
            />
            <ButtonComponent
              titulo="ESPECIAL"
              enlace="/menullorona/cantinero"
            />
          </div>
        )}

        {english && (
          <div className="contenedorMenu">
            <ButtonComponent titulo="FOOD" enlace="menufood" />
            <ButtonComponent titulo="DRINKS & BEERS" enlace="drinks" />
            <ButtonComponent titulo="SPECIAL" enlace="menuTavern" />
          </div>
        )}
      </Section>
    </>
  );
}

export default MenuLlorona