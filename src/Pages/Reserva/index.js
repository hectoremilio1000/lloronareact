import React from 'react'
import { QuickInfoWrapper } from '../../Modules/styles/globalStyles';
import Section from '../../Modules/styles/section';
import Calendario from '../../Components/Calendario/index';
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

function Reserva() {
  return (
    <>
      <header
        className="col jumbotron-fluid pt-5"
        style={{
          backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/pinatacumpleanera.JPG")`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h3 className=" font-weight-bold proximamente2 text-white">
              <b>Los jueves piñata cumpleañera con una botella de mezcal</b>
            </h3>

            <div className="subSubDiv1Banner"></div>
          </div>
        </div>
      </header>
      <Calendario />
      <Section>
        <div>
          <h4 className="text-center tituloSection">Celebra tu cumpleaños</h4>
          <h2 className="text-center subTituloSection">
            los jueves con nosotros
          </h2>
          <div className="linea"></div>
        </div>

        <QuickInfoWrapper>
          <p className="textUbicacion">
            La piñata cumpleañera no tiene costo, y aplica todos los jueves si
            cumples años en el mes ❤️🪅 y solo tienen que hacer reservación en
            cualquiera de nuestras redes sociales. Les regalamos dulces típicos
            mexicanos y una botella de nuestro mejor mezcal de la casa 🍶🥃
            madre cuishe el cual está elaborado artesanalmente.
          </p>
        </QuickInfoWrapper>
      </Section>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/nina2pinata.JPG",
    title: "Piñata cumpleañera",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninapinata.JPG",
    title: "novios",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/IMG_9585.jpg",
    title: "Pierde almas",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/cumple/ninas4pinata.JPG",
    title: "amigas",
    cols: 2,
  },
];

export default Reserva