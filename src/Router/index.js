import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuLlorona from '../Pages/MenuLlorona/index';
import Reserva from '../Pages/Reserva';
import Home from '../Pages/Home/index';
import Franquicias from '../Pages/Franquicias/index';
import Mezcal from '../Pages/Mezcal/index';
import Cantinero from '../Pages/MenuLlorona/Cantinero/index';
import Tavern from '../Pages/MenuEnglish/Tavern';
import Alimentos from '../Pages/MenuLlorona/Alimentos/index';
import Drinks from '../Pages/MenuEnglish/Drinks/index';
import Bebidas from '../Pages/MenuLlorona/Bebidas/index';
import Artesanal from '../Pages/MenuLlorona/Bebidas/Artesanal/index';
import Industrial from '../Pages/MenuLlorona/Bebidas/Industrial/index';
import Food from '../Pages/MenuEnglish/Food';
import Mixology from '../Pages/MenuEnglish/Drinks/Mixology/index';
import Spirits from '../Pages/MenuEnglish/Drinks/Spirits/index';
import LayoutLlorona from '../Modules/LayoutLlorona/index';

function Rutas() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/menullorona" element={<MenuLlorona />} />
      <Route path="/mezcal" element={<Mezcal />} />
      <Route path="/franquicias" element={<Franquicias />} />
      <Route path="/menullorona/" element={<MenuLlorona />} />

      {/**menú español */}

      <Route path="/menullorona/cantinero" element={<Cantinero />} />
      <Route path="/menullorona/menualimentos" element={<Alimentos />} />
      <Route path="/menullorona/menubebidas" element={<Bebidas />} />
      <Route
        path="/menullorona/menubebidas/artesanal"
        element={<Artesanal />}
      />
      <Route
        path="/menullorona/menubebidas/industrial"
        element={<Industrial />}
      />

      {/** menu english */}
      <Route path="/menullorona/menuTavern" element={<Tavern />} />
      <Route path="/menullorona/menuFood" element={<Food />} />
      <Route path="/menullorona/drinks" element={<Drinks />} />
      <Route path="/menullorona/drinks/mixology" element={<Mixology />} />
      <Route path="/menullorona/drinks/spirits" element={<Spirits />} />

    </Routes>

  );
}

export default Rutas;