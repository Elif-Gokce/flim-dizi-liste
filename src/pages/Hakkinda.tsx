import { useState,type FormEvent,type ChangeEvent } from 'react';

// 1. Form verilerinin veri tipleri
interface FormData {
  name: string;
  email: string;
  message: string;
}

// 2. Hata mesajlarının veri tipleri
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Hakkinda() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Input değişikliklerini tek bir fonksiyonda toplama
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Kullanıcı yazmaya başladığında o alanın hatasını temizle
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Doğrulama Kontrolleri
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'İsim alanı boş bırakılamaz.';
    } else if (formData.name.length < 3) {
      newErrors.name = 'İsim en az 3 karakter olmalıdır.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı boş bırakılamaz.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj alanı boş bırakılamaz.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Mesaj en az 10 karakter olmalıdır.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Gönderimi
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Formu sıfırla
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Hakkımızda</h1>
      <p style={{ marginBottom: '30px' }}>
        Bu platform, sinemaseverlerin favori filmlerini keşfetmesi ve kendi izleme listelerini oluşturması için geliştirilmiştir.
        Uluslararası  ölçekte bulunan bütün kullanıcıların birbiryle anlık iletişime girmesi ve canlı sohbetlerle kaynaştığı bir websitedir.
        2026 yılında sektöre giriş yaptık .Şuanda Türkiye merkezli olsa da hedefimiz dünyaya yayılmak.
      </p>

      <hr style={{ margin: '30px 0' }} />

      <h2>Film Önerisi / İletişim Formu 📩</h2>

      {isSubmitted && (
        <div style={{ padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '6px', marginBottom: '20px' }}>
          ✅ Mesajınız başarıyla iletildi! En kısa sürede geri dönüş yapacağız.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* İsim Alanı */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ad Soyad:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.name && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.name}</span>}
        </div>

        {/* E-posta Alanı */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>E-posta:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.email}</span>}
        </div>

        {/* Mesaj Alanı */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Mesajınız / Film Öneriniz:</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {errors.message && <span style={{ color: 'red', fontSize: '0.85rem' }}>{errors.message}</span>}
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Gönder 
        </button>
      </form>
    </div>
  );
}