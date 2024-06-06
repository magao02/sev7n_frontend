import React from 'react';
import './style.css';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
interface MenuProps {
  pagina: string;
}

function Menu({ pagina }: MenuProps) {

  return (
    <div className={`container-menu ${pagina == 'home' ? 'container-menu-home' : ''}`} >
      {pagina != 'home' ? <Link to={'/'}>
        <FaArrowLeft />
      </Link> : ''}
      
      <h3>
      SEVN NEWS
      </h3>
    </div>
  );
}
export default Menu;