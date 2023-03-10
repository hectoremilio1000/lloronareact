import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { QuickInfoWrapper } from '../../../../Modules/styles/globalStyles';
import cervezaArtesanal from '../../../../data/assets/imagenes/menuEspa/cervezaArtesanal.jpg'
import menuComida1 from '../../../../data/assets/imagenes/menuEspa/menuComida1.jpg'
import soda from '../../../../data/assets/imagenes/menuEspa/licoresCervezasSodas.jpg'

function Artesanal() {
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
        <>
        <h4 className="text-center tituloSection">Bebidas Mexicanas</h4>
        <h2 className="text-center subTituloSection">
          CERVEZAS ARTESANALES MEXICANAS, MEZCALES ARTESANALES Y MIXOLOGÍA CON SABORES Y DESTILADOS MEXICANOS
        </h2>
        <div className="linea"></div>
        <div>
          <Image
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/Mixologia.jpg"
            style={{ height: "30%", width: "100%" }}
          />
          <Image
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/mezcales.jpg"
            style={{ height: "30%", width: "100%" }}
          />
            <Image
              src={cervezaArtesanal}
              style={{ height: "30%", width: "100%" }}
            />

          </div>
        </>
        <>
          <h4 className="text-center tituloSection">Sodas, Destilados</h4>
          <h2 className="text-center subTituloSection">Cervezas Industriales</h2>
          <div className="linea"></div>
          <div>
            <Image
              src={soda}
              style={{ height: "30%", width: "100%" }}
            />
            <Image
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/destilados.jpg"
              style={{ height: "30%", width: "100%" }}
            />
          </div>
        </>
        <>
          <h4 className="text-center tituloSection">Platillos mexicanos</h4>
          <h2 className="text-center subTituloSection">
            Cocinados con amor y mucho sazón
          </h2>
          <div className="linea"></div>
          <div>
            <Image
              src={menuComida1}
              style={{ height: "30%", width: "100%" }}
            />
            <Image
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/menuComida2.jpg"
              style={{ height: "30%", width: "100%" }}
            />
          </div>

         
      
        </>
      </QuickInfoWrapper>
    </>
  );
}

export default Artesanal