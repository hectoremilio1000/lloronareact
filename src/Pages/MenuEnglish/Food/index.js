import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { QuickInfoWrapper } from "../../../Modules/styles/globalStyles";


function Food() {
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
                  ¡Book now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <QuickInfoWrapper>
        <h4 className="text-center tituloSection">Mexican dishes</h4>
        <h2 className="text-center subTituloSection">
          Cooked with love and lots of passion
        </h2>
        <div className="linea"></div>
        <div>
          <Image
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/english/food1.jpg"
            style={{ height: "30%", width: "100%" }}
          />
          <Image
            src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/english/food2.jpg"
            style={{ height: "30%", width: "100%" }}
          />
        </div>
      </QuickInfoWrapper>
    </>
  );
}

export default Food;
