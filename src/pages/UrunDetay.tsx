import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites,type Movie}from '../context/FavoritesContext';

interface FullMovie extends Movie {
  overview: string;
  release_date: string;
}

export default function UrunDetay() {
  const { id } = useParams<{ id: string }>();
  const { data: movies, loading, error } = useFetch<FullMovie[]>('/movies.json');
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <div>Film detayı yükleniyor...</div>;
  if (error) return <div>Hata oluştu.</div>;

  const movie = movies?.find(m => m.id === Number(id));
  if (!movie) return <div>Film bulunamadı.</div>;

  const favorite = isFavorite(movie.id);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>{movie.title} ({movie.release_date})</h1>
      <img src={movie.poster_path} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p style={{ marginTop: '15px' }}><strong>Puan:</strong> ⭐ {movie.vote_average}</p>
      <p><strong>Özet:</strong> {movie.overview}</p>
      <button onClick={() => favorite ? removeFavorite(movie.id) : addFavorite(movie)}>
        {favorite ? 'İzleme Listesinden Çıkar ❌' : 'İzleme Listesine Ekle ⭐'}
      </button>
    </div>
  );
}