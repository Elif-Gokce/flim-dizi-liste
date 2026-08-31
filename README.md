# 🎬 Film & Dizi Yorum ve İzleme Listesi Uygulaması

React + TypeScript ile geliştirilmiş modern bir uygulama.
Kullanıcılar favorilere ekleyebilir, detay sayfasını görebilir ve izleme listesi oluşturabilir.


## 🚀 Özellikler
- **Sayfalar & Route:** Ana Sayfa, Ürün Detay (`/urun/:id`), İzleme Listesi, İletişim, Hakkında
- **State Yönetimi:** Context API ile tema (light/dark) ve favori film yönetimi
- **Kalıcı Veri:** Tema ve favoriler `localStorage` üzerinde saklanır
- **Veri Çekme:** Custom `useFetch` hook'u ile loading & error yönetimi
- **Form:** İletişim sayfasında hata/girdi kontrolleri


## Ekran Görüntüleri

## 🏠 Anasayfa
<img width="1280" height="723" alt="Ekran görüntüsü 2026-08-31 212237" src="https://github.com/user-attachments/assets/999b9f6f-0426-4d68-ab48-f61812c007c8" />

## ℹ️ Hakkında
<img width="1280" height="738" alt="Ekran görüntüsü 2026-08-31 220712" src="https://github.com/user-attachments/assets/59dc938d-6b19-4985-9028-8bcd1e6e21e4" />

## 📋 İzleme Listesi
<img width="1280" height="734" alt="Ekran görüntüsü 2026-08-31 220729" src="https://github.com/user-attachments/assets/4d5c489e-a476-4516-baf5-4c251411ba7b" />

## ✉️ İletişim
<img width="1280" height="557" alt="Ekran görüntüsü 2026-08-31 220758" src="https://github.com/user-attachments/assets/a87f6f6f-91b4-43e3-9eb8-fc2c6942c54f" />

## 🌙 Karanlık Mod
<img width="1280" height="736" alt="Ekran görüntüsü 2026-08-31 220816" src="https://github.com/user-attachments/assets/ae6d3b27-2ddc-428d-98a9-5f6874a1fda4" />

##  💻 Kurulum ve Çalıştırma (Getting Started)
### Projeyi klonlayın
- git clone https://github.com/kullaniciadi/proje-adi.git
### Proje dizinine gidin
- cd proje-adi
### Bağımlılıkları yükleyin
- npm install
### Uygulamayı geliştirme modunda başlatın
- npm run dev  # veya npm start



## Kullanılan Teknolojiler
- React
- TypeScript
- Vite
- React Router DOM
- TailwindCSS

## 🌐 API ve Veri Kaynağı
Veriler mock JSON verisi kullanıllanılarak alındı.(movies.json dosyasında)




## 📂 Proje Dizin Yapısı

 ```text
 .
 ├── public/             
 ├── src/
 │   ├── assets/        
 │   ├── components/    
 │   ├── context/      
 │   ├── hooks/         
 │   ├── pages/      
 │   ├── App.tsx       
 │   ├── index.css       
 │   ├── main.tsx        
 │   └── movies.json    
 ├── .env              
 ├── .gitignore          
 ├── eslint.config.js    
 ├── index.html         
 ├── package.json   
 ├── README.md      
 ├── tsconfig.json     
 └── vite.config.ts     




















