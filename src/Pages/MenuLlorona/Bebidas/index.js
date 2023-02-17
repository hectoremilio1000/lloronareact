import React from 'react'
import { Link } from 'react-router-dom';
import ButtonComponent from '../../../Components/ButtonComponent';
import { QuickInfoWrapper } from '../../../Modules/styles/globalStyles';

function Bebidas() {
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
      <QuickInfoWrapper>
        <h4 className="text-center tituloSection">Bebidas</h4>
        <h2 className="text-center subTituloSection">
          Llorona
        </h2>
        <div className="linea"></div>
        </QuickInfoWrapper>
      <div className="contenedorMenu mb-3">
        <ButtonComponent
          titulo="LO MEXICANO: CERVEZAS, MEZCALES Y MIXOLOGÍA ARTESANAL"
          enlace="artesanal"
        />
       
       
        <ButtonComponent titulo="SODAS, DESTILADOS Y CERVEZAS INDUSTRIALES" enlace="industrial" />
     
      </div>
    </>
  );
}

export default Bebidas