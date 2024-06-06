import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Menu from '../../components/menu';
import Publicidade from '../../components/publicidade';
interface ArtigoInterface {
  id: number;
  titulo: string;
  texto: string;
  imagem: string;
  categoria: string;
  corCategoria: string;
  subtitulo: string;
  data: string;
  autor: string;
}

function Artigo() {
  const [artigo, setArtigo] = useState<ArtigoInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataArtigo() {
      try {
        const response = await fetch(`http://localhost:3100/artigo/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar o artigo');
        }
        const data = await response.json();
        setArtigo(data);

      } catch (error) {
        console.error('Ocorreu um erro ao buscar o artigo:', error);
      } finally {
        setLoading(false); 
      }
    }

    fetchDataArtigo();
  }, [id]);
  if (loading) {
    return  <div className="spinner"></div>; 
  }
  return (
    <div className="artigo-container">
      <Menu pagina='artigo' />
      <div className='artigo-container-wrapper'>
      <header className="artigo-header">
        <span style={{color: artigo?.corCategoria}}>{artigo?.categoria}</span>
        <h1>{artigo?.titulo}</h1>
        <p>{artigo?.subtitulo}</p>
        <div className='artigo-info'>
          <span>{artigo?.data},</span>
          <span> por {artigo?.autor}</span>
        </div>
      </header>
      <Publicidade />
      <div className='artigo-content'>
        <img src={`http://localhost:3100${artigo?.imagem}`} alt={artigo?.titulo} />
        <p>{artigo?.texto}</p>
        </div>
      </div>
      

    </div>
  );
}
export default Artigo;