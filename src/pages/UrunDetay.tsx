// src/pages/UrunDetay.tsx
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFavorites, type Movie } from '../context/FavoritesContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Yorumlar from '../components/Yorumlar';

interface FullMovie extends Movie {
  overview: string;
  release_date: string;
}

export default function UrunDetay() {
  const { id } = useParams<{ id: string }>();

  // DÜZELTME: GitHub Pages alt klasör yolu için BASE_URL eklendi
  const { data: movies, loading, error, refetch } = useFetch<FullMovie[]>(
    `${import.meta.env.BASE_URL}movies.json`
  );
  
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  // Ana sayfayla uyumlu yükleme ve hata bileşenleri
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  const movie = movies?.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-500">Film bulunamadı ❌</h2>
      </div>
    );
  }

  const favorite = isFavorite(movie.id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {movie.title} <span className="text-gray-500 text-xl">({movie.release_date})</span>
        </h1>

        <img 
          src={movie.poster_path} 
          alt={movie.title} 
          className="w-full h-96 object-cover rounded-md mb-6" 
        />

        <div className="space-y-3 mb-6">
          <p className="text-lg text-yellow-500 font-semibold">
            ⭐ Puan: {movie.vote_average}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Özet:</strong> {movie.overview}
          </p>
        </div>

        <button 
          onClick={() => favorite ? removeFavorite(movie.id) : addFavorite(movie)}
          className={`w-full py-3 px-6 rounded font-medium transition text-white ${
            favorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {favorite ? 'İzleme Listesinden Çıkar ❌' : 'İzleme Listesine Ekle ⭐'}
        </button>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <Yorumlar />
        </div>
      </div>
    </div>
  );
}