import React from 'react'
import { Link } from 'react-router-dom';
import QuickInfo from '../../Components/Quickinfo';
import QuickInfo2 from '../../Components/QuickInfo2';
import QuickInfo3 from '../../Components/QuickInfo3';
import Section from "../../Modules/styles/section";
import { QuickInfoWrapper } from "../../Modules/styles/globalStyles";

function Home() {
  return (
    <>
      <header className="bannerHome">
        <div className="d-flex subContenedor1Banner">
          <div className="subDiv1Banner mr-3">
            <h3 className=" font-weight-bold bannerHomeTexto mr-2">
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
      <QuickInfo className="mt-2" />
      <QuickInfo2 />
      <QuickInfo3 />
      <Section>
        <div>
          <h4 className="text-center tituloSection">Ubicación</h4>
          <h2 className="text-center subTituloSection">
            de esta gran experiencia
          </h2>
          <div className="linea"></div>
        </div>

        <QuickInfoWrapper>
          <p className="textUbicacion h4">
            Alvaro obregón 308 Roma Condesa CDMX México
          </p>

          <div className="subSubDiv1Banner">
            <Link to="/reserva">
              <button type="button" className="buttonComponente">
                ¡Reserva ya!
              </button>
            </Link>
          </div>
        </QuickInfoWrapper>
      </Section>
    </>
  );
}

export default Home