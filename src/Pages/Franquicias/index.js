import React from 'react'
import FranquiciaInfo from '../../Components/FranquiciaInfo/FranquiciaInfo';

function Franquicias() {
  return (
    <>
      <header
        className="col jumbotron-fluid pt-5"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/franquicias/banner/IMG_8775.jpg")`,
          backgroundSize: "cover",
          height: "90vh",
          backgroundPosition: "top",
        }}
      >
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h3 className=" font-weight-bold proximamente2 text-white">
              <b>Franquicias</b>
            </h3>

            <div className="subSubDiv1Banner">
              <a href="https://wa.me/+5215549242477">
                <button type="button" className="buttonComponente">
                  ¡Solicita información ya!
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <FranquiciaInfo className="mt-2" />
    </>
  );
}

export default Franquicias