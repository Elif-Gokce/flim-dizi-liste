// src/pages/AnaSayfa.tsx
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites, type Movie } from '../context/FavoritesContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

export default function AnaSayfa() {
  const { data: movies, loading, error, refetch } = useFetch<Movie[]>('/movies.json');
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // 1. Loading Durumu ->Görsel Spinner Gösterimi
  if (loading) return <LoadingSpinner />;

  // Hata ->Tekrar dene
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Popüler Filmler</h1>
      
      {/* Responsive Grid Yapısı */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies?.map((movie) => {
          const favorite = isFavorite(movie.id);
          return (
            <div key={movie.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between p-4">
              <div>
                <img 
                  src={movie.poster_path} 
                  alt={movie.title} 
                  className="w-full h-72 object-cover rounded-md mb-3" 
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">{movie.title}</h3>
                <p className="text-sm text-yellow-500 font-medium my-1">⭐ {movie.vote_average}</p>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <Link 
                  to={`/urun/${movie.id}`} 
                  className="text-center py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded font-medium text-sm transition"
                >
                  Detay Gör
                </Link>
                <button 
                  onClick={() => favorite ? removeFavorite(movie.id) : addFavorite(movie)}
                  className={`py-2 px-4 rounded text-sm font-medium transition text-white ${
                    favorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
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