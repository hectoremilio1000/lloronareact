import React from 'react'
import { Link } from 'react-router-dom';
import ButtonComponent from '../../../Components/ButtonComponent';
import { QuickInfoWrapper } from '../../../Modules/styles/globalStyles';

function Drinks() {
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
                ¡Book now!
              </button>
            </Link>
          </div>

        </div>
      </header>
      <QuickInfoWrapper>
        <h4 className="text-center tituloSection">Drinks</h4>
        <h2 className="text-center subTituloSection">Llorona</h2>
        <div className="linea"></div>
      </QuickInfoWrapper>
      <div className="contenedorMenu mb-3">
        <ButtonComponent
          titulo="MADE IN MEXICO WITH LLORONA'S PASSION: BEERS, MEZCALES AND MEXICAN MIXOLOGY"
          enlace="mixology"
        />

        <ButtonComponent
          titulo="SODAS, SPIRITS AND INDUSTRIAL BEERS"
          enlace="spirits"
        />
      </div>
    </>
  );
}

export default Drinks;