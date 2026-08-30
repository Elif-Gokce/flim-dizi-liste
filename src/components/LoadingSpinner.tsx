export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-16 gap-3">
      {/* Tailwind animate-spin ile dönen halka */}
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">Filmler yükleniyor...</p>
    </div>
  );
}