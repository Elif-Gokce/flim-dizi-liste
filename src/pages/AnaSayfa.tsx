import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites,type Movie} from '../context/FavoritesContext';

export default function AnaSayfa() {
  const { data: movies, loading, error, refetch } = useFetch<Movie[]>('/movies.json');
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>⏳ Yükleniyor...</div>;
  if (error) return (
    <div style={{ textAlign: 'center', color: 'red', padding: '50px' }}>
      <p>Hata: {error}</p>
      <button onClick={refetch}>Tekrar Dene 🔄</button>
    </div>
  );

  return (
    <div>
      <h1>Popüler Filmler</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {movies?.map((movie) => {
          const favorite = isFavorite(movie.id);
          return (
            <div key={movie.id} style={{ border: '1px solid var(--border-color)', padding: '10px', borderRadius: '8px', backgroundColor: 'var(--card-bg)' }}>
              <img src={movie.poster_path} alt={movie.title} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} />
              <h3>{movie.title}</h3>
              <p>⭐ {movie.vote_average}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link to={`/urun/${movie.id}`}>Detay Gör</Link>
                <button onClick={() => favorite ? removeFavorite(movie.id) : addFavorite(movie)}>
                  {favorite ? 'Favorilerden Çıkar ❌' : 'Favorilere Ekle ⭐'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}