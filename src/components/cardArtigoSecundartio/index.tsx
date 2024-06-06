import React from 'react';
import './style.css';

interface CardSecundarioProps {
  texto: string;
  corCategoria: string;
}

function CardSecundario ({ texto, corCategoria}: CardSecundarioProps) {
  return (
    <div className='container-card-secundario' >
      <div className='categorie-bar' style={{backgroundColor: corCategoria}}></div>
      <h3>{texto}</h3>


    </div>
  );
}
export default CardSecundario;