import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

export default function IzlemeListesi() {
  const { favorites, removeFavorite } = useFavorites();

  // 1. Liste boşsa gösterilecek durum
  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>İzleme listeniz henüz boş 🎬</h2>
        <p>Ana sayfadan ilginizi çeken filmleri listenize ekleyebilirsiniz.</p>
        <br />
        <Link to="/">Filmlere Göz At</Link>
      </div>
    );
  }

  // 2. Eklenmiş filmler varsa gösterilecek liste
  return (
    <div>
      <h1>İzleme Listem ({favorites.length})</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {favorites.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '10px',
              backgroundColor: 'var(--card-bg)'
            }}
          >
            <img
              src={movie.poster_path }
              alt={movie.title}
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3 style={{ fontSize: '1rem', margin: '10px 0' }}>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <Link to={`/urun/${movie.id}`}>Detay Gör</Link>
              <button
                onClick={() => removeFavorite(movie.id)}
                style={{
                  backgroundColor: '#ff4d4d',
                  color: '#fff',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Listeden Çıkar ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}