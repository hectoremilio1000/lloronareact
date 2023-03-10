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
      <header className="">
        <div className="d-flex justify-content-around m-2">
          
          <span className="d-flex align-items-center font-weight-bold .text-dark h3 m-0 p-0 ">
              Mexican Experience
            </span>

            <div className="">
              <Link to="/reserva">
                <button type="button" className="buttonComponente">
                  ¡Reserva ya!
                </button>
              </Link>
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