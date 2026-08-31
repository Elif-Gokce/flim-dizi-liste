import { useState } from 'react';


interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
}


export default function Yorumlar() {
  // Örnek yorum
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Ahmet',
      text: 'Kesinlikle izlenmesi gereken harika bir yapım!',
      date: '28.08.2026',
    },
  ]);

  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  // Yorum Ekleme 
  const handleAddComment = () => {
    if (!author.trim() || !text.trim()) {
      setError('Lütfen adınızı ve yorumunuzu giriniz.');
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      author: author.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString('tr-TR'),
    };

    setComments([newComment, ...comments]); // Yeni yorumu en üste ekle
    setAuthor('');
    setText('');
    setError('');
  };

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
      <h3>💬 Yorumlar ({comments.length})</h3>

      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '25px', maxWidth: '500px' }}>
        <input
          type="text"
          placeholder="Adınız"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Film hakkında düşüncelerinizi yazın..."
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        {error && <span style={{ color: 'red', fontSize: '0.85rem' }}>{error}</span>}
        
        <button
          type="button"
          onClick={handleAddComment}
          style={{ padding: '8px 16px', cursor: 'pointer', alignSelf: 'flex-start' }}
        >
          Yorum Gönder
        </button>
      </div>

   
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {comments.map((item) => (
          <div key={item.id} style={{ border: '1px solid #e0e0e0', padding: '12px', borderRadius: '6px', backgroundColor: '#f9f9f9' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <strong>{item.author}</strong>
              <small style={{ color: '#666' }}>{item.date}</small>
            </div>
            <p style={{ margin: 0, color: '#333' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
