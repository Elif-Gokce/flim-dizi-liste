import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Manuel olarak "Tekrar Dene" butonuna basıldığında tetiklenecek fonksiyon
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`İstek başarısız oldu: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu');
    } finally {
      setLoading(false);
    }
  }, [url]);

  // Sayfa ilk yüklendiğinde otomatik çalışan etki
  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`İstek başarısız oldu: ${response.statusText}`);
        }
        const result = await response.json();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    getData();

    // Bileşen ekrandan kaldırılırsa  state güncellemesini iptal eder
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}