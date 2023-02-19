import React from 'react'
import { Image } from 'react-bootstrap'
import { QuickInfoWrapper } from '../../../Modules/styles/globalStyles'
import Section from '../../../Modules/styles/section'

function Tavern() {
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
          <h1 className="text-center font-weight-bold">Menu Special</h1>
        </div>
        <div>
          <div>
            <h4 className="text-center tituloSection">
              Order a drink and we'll give you a food
            </h4>
            <h2 className="text-center subTituloSection">
              We revive the Mexican cantinas
            </h2>
            <div className="linea"></div>
          </div>
          <QuickInfoWrapper>
            <p className="text text-justify">
              In the Mexican taverns the snack is a tradition, here the client
              receives free food after a mixology, craft beer or favorite
              distillate.
            </p>
          </QuickInfoWrapper>
        </div>
      </Section>
      <div style={{ width: "100%" }}>
        <Image
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/english/tavern.jpg"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
}

export default Tavern;