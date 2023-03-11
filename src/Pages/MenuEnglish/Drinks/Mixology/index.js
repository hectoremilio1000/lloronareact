import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { QuickInfoWrapper } from "../../../../Modules/styles/globalStyles";
import draftBeer from '../../../../data/assets/imagenes/menuIngles/draftbeer.jpg'
import industrial from '../../../../data/assets/imagenes/menuIngles/SpiritsBeersSodas.jpg'
import food1 from '../../../../data/assets/imagenes/menuIngles/food1.jpg'

function Mixology() {
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
        <>
        <h4 className="text-center tituloSection">Mexican drinks</h4>
        <h2 className="text-center subTituloSection">
          Mixology with liquors and mexican flavors, Craft Mexican Beers and Mexican Mezcals
        </h2>
        <div className="linea"></div>
        <div>
          <Image
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/english/MixologyEnglish.jpg"
            style={{ height: "30%", width: "100%" }}
          />
          <Image
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/english/mezcalIngles.jpg"
            style={{ height: "30%", width: "100%" }}
          />
          <Image
            src={draftBeer}
            style={{ height: "30%", width: "100%" }}
          />
          </div>
        </>
        <>
          <h4 className="text-center tituloSection">Sodas, Spirits</h4>
          <h2 className="text-center subTituloSection">Industrial Beers</h2>
          <div className="linea"></div>
          <div>
            <Image
              src={industrial}
              style={{ height: "30%", width: "100%" }}
            />
            <Image
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/english/distillates.jpg"
              style={{ height: "30%", width: "100%" }}
            />
          </div>
        </>
        <>
          <h4 className="text-center tituloSection">Mexican dishes</h4>
          <h2 className="text-center subTituloSection">
            Cooked with love and lots of passion
          </h2>
          <div className="linea"></div>
          <div>
            <Image
              src={food1}
              style={{ height: "30%", width: "100%" }}
            />
            <Image
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/english/food2.jpg"
              style={{ height: "30%", width: "100%" }}
            />
          </div>
        </>
      </QuickInfoWrapper>
    
    </>
  );
}

export default Mixology