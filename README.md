# Film / Dizi Listesi

Bu proje React + TypeScript kullanılarak geliştirilmiş bir film/dizi arama ve izleme listesi uygulamasıdır.  
Kullanıcılar film API’si üzerinden arama yapabilir, detay sayfasını görebilir ve izleme listesi oluşturabilir.

## Özellikler
- **Sayfalar & Route:** Ana Sayfa, Ürün Detay (`/urun/:id`), İzleme Listesi ve Hakkında sayfaları.
- **State Yönetimi:** Context API ile Tema (`light`/`dark`) ve Favori film yönetimi.
- **Kalıcı Veri:** Tema,Favaori tercihi `localStorage` üzerinde saklanır.
- **Veri Çekme:** Custom `useFetch` hook'u ile yüklenme (loading) ve hata (error) durumları yönetilir.
- **Form :** Hakkında sayfasında hata/girdi kontrolleri.

##  Kurulum
Projeyi çalıştırmak için:
```bash
npm install
npm run dev

# Kullanılan Teknolojiler
-React
-TypeScript
-Vite
-React Router DOM
-TailwindCSS



---


