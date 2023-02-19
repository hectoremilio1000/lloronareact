import React from 'react'
import { Image } from 'react-bootstrap'
import { QuickInfoWrapper } from '../../../Modules/styles/globalStyles'
import Section from '../../../Modules/styles/section'

function Cantinero() {
  return (
    <>
      <header className="col jumbotron-fluid pt-3 bannerCantina">
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h2 className=" font-weight-bold proximamente2">
              <b>Taco x Trago</b>
              <br />
              <b>1 drink 1 food</b>
            </h2>
          </div>
        </div>
      </header>
      <Section className="mt-2">
        <div>
          <h1 className="text-center font-weight-bold">Menú Cantinero</h1>
        </div>
        <div>
          <div>
            <h4 className="text-center tituloSection">
              Pide un copa y te regalamos un llanto
            </h4>
            <h2 className="text-center subTituloSection">
              Revivimos las cantinas mexicanas
            </h2>
            <div className="linea"></div>
          </div>
          <QuickInfoWrapper>
            <p className="text text-justify">
              En las cantinas mexicanas la botana es una tradición, aquí el
              cliente recibe comida gratis después de cada brebaje de enjundia. Es decir,
              después de una mixologia, cerveza artesanal o
              destilado favorito, un vaso con caldo de camarón, y
              posteriormente lo que el cuerpo aguante.
            </p>
          </QuickInfoWrapper>
        </div>
      </Section>
      <div>
        <Image
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/menucantinerofrente080223.jpg"
          style={{ height: "30%", width: "100%" }}
        />
      </div>
    </>
  );
}

export default Cantinero