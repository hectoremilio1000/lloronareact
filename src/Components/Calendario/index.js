import React from 'react'
import { InlineWidget } from 'react-calendly';

function Calendario() {
  return (
    <div id="reserva">
      <section className="containerCalendario">
        <div className="subcontainerCalendario">
          <h1 className="text-center tituloCalendario">
            Reserva en la Cantina más trendy de la RomaCondesa
          </h1>

          <InlineWidget url="https://calendly.com/reservaciones-14/reservaciones-llorona" />
        </div>
      </section>
    </div>
  );
}

export default Calendario