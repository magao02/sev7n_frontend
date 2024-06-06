import React from 'react';
import './style.css';

interface CardImagemProps {
  titulo: string;
  corCategoria: string;
  urlImagem: string;
  nomeCategoria: string;
}

function CardImagem ({ titulo, corCategoria, urlImagem, nomeCategoria}: CardImagemProps) {
  return (
    <div className='container-card-imagem' >
      <img src={urlImagem} alt='Imagem do artigo' />
      <span className='' style={{color: corCategoria}}>{nomeCategoria}</span>
      <h3>{titulo}</h3>
    </div>
  );
}
export default CardImagem;