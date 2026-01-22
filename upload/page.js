'use client';
import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ border: '1px solid #333', padding: '50px', borderRadius: '15px', textAlign: 'center', backgroundColor: '#0a0a0a' }}>
        <h2 style={{ letterSpacing: '0.3rem' }}>CONSTELLIO STORAGE</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>Select an image or document to secure</p>
        
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginBottom: '20px', display: 'block', width: '100%' }} 
        />
        
        <button 
          onClick={() => alert('Vercel Blob is ready to receive: ' + (file ? file.name : 'No file selected'))}
          style={{ width: '100%', padding: '12px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {file ? 'UPLOAD NOW' : 'SELECT FILE'}
        </button>
        
        <a href="/" style={{ display: 'block', marginTop: '20px', color: '#444', textDecoration: 'none', fontSize: '0.8rem' }}>Back to Dashboard</a>
      </div>
    </div>
  );
}
