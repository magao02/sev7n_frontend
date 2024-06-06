import React, { useEffect, useState } from 'react';
import './style.css';
import Menu from '../../components/menu';
import CardSecundario from '../../components/cardArtigoSecundartio';
import CardImagem from '../../components/cardArtigoImagem';
import { Link } from 'react-router-dom';
import Publicidade from '../../components/publicidade';
interface ArtigoPrincipal {
  id: number;
  titulo: string;
  imagem: string;
  categoria: string;
  corCategoria: string;
}
interface ArtigoSecundario {
  id: number;
  titulo: string;
  corCategoria: string;
}
function Home() {
  const [artigosPrincipais, setArtigosPrincipais] = useState<ArtigoPrincipal[]>([]);
  const [artigosSecundarios, setArtigosSecundarios] = useState<ArtigoSecundario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDataArtigosPrincipais(){
      try {
        const response = await fetch('http://localhost:3100/artigosprincipais');
        if (!response.ok) {
          throw new Error('Erro ao buscar os artigos principais');
        }
        const data = await response.json();
        
        setArtigosPrincipais(data.artigos);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os artigos:', error);
      } finally {
        setLoading(false); 
      }
    }
    async function fetchDataArtigosSecundarios(){
      try {
        const response = await fetch('http://localhost:3100/artigossecundarios');
        if (!response.ok) {
          throw new Error('Erro ao buscar os artigos secundarios');
        }
        const data = await response.json();
        
        setArtigosSecundarios(data.artigos);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os artigos:', error);
      }
    }
    fetchDataArtigosPrincipais();
    fetchDataArtigosSecundarios();
   
  }, []);
  if (loading) {
    return  <div className="spinner"></div>; 
  }
  return (
    <div className='container-page' >
      <Menu pagina='home' />
      <div className='container-content-wrapper'>
      <Publicidade />
      <div className='container-principais' >
        <Link to={`/artigo/${artigosPrincipais[0].id}`} key={artigosPrincipais[0].id}>
        <h2>{artigosPrincipais[0].titulo}</h2>
        </Link>
        
        <div className='container-cards-principais' >
          {artigosPrincipais.slice(1).map((artigo) => (
             <Link to={`/artigo/${artigo.id}`} key={artigo.id}>
             <CardImagem
               titulo={artigo.titulo}
               corCategoria={artigo.corCategoria}
               urlImagem={`http://localhost:3100${artigo.imagem}`}
               nomeCategoria={artigo.categoria}
             />
           </Link>

          ))}
        </div>
      </div>
      <div className='container-cards-secundarios' >
        {artigosSecundarios.map((artigo) => (
          <Link to={`/artigo/${artigo.id}`} key={artigo.id}>
          <CardSecundario key={artigo.id} texto={artigo.titulo} corCategoria={artigo.corCategoria} />
        </Link>
        ))}
        
      </div>  
      </div>
      
    </div>
  );
}
export default Home;