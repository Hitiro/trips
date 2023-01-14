import React from 'react';
import { MdDelete } from 'react-icons/md';

import './style.css'

export default function Reservas() {
  return (
    <div>
      <h1 className="title" >Voce solicitou 1 reserva</h1>

      <div className="reservas">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
          alt="maceio"
        />

        <strong>Viagem Maceio 7 dias</strong>
        <span>Quatidade: 2</span>
        <button
          type="button"
          onClick={() => { }}
        >
          <MdDelete size={20} color="#191919" />
        </button>
      </div>

      <footer>
        <button type="button" >Solicitar reservas</button>
      </footer>
    </div>
  );
}