interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 max-w-md mx-auto">
      <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-lg p-6 w-full text-center shadow-sm">
        <div className="text-red-500 text-4xl mb-2">⚠️</div>
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-1">
            Bir Hata Oluştu
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {message}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium text-sm rounded-md transition shadow-sm"
          >
            Tekrar Dene 
          </button>
        )}
      </div>
    </div>
  );
}