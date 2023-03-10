import React from 'react'
import { Link } from 'react-router-dom';
import ButtonComponent from '../../../Components/ButtonComponent';
import { QuickInfoWrapper } from '../../../Modules/styles/globalStyles';

function Bebidas() {
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
      <QuickInfoWrapper>
        <h4 className="text-center tituloSection">Bebidas</h4>
        <h2 className="text-center subTituloSection">
          Llorona
        </h2>
        <div className="linea"></div>
      </QuickInfoWrapper>
      <div className="contenedorMenu mb-3">
        <ButtonComponent
          titulo="LO MEXICANO: CERVEZAS ARTESANALES MEXICANAS, MEZCALES ARTESANALES Y MIXOLOGÍA CON SABORES Y DESTILADOS MEXICANOS"
          enlace="artesanal"
        />


        <ButtonComponent titulo="SODAS, DESTILADOS Y CERVEZAS INDUSTRIALES" enlace="industrial" />

      </div>
    </>
  );
}

export default Bebidas