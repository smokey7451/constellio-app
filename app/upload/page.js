'use client';
import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ border: '1px solid #333', padding: '50px', borderRadius: '15px', textAlign: 'center' }}>
        <h2 style={{ letterSpacing: '0.3rem' }}>CONSTELLIO STORAGE</h2>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ margin: '20px 0', display: 'block' }} />
        <button onClick={() => alert('Ready to upload: ' + file?.name)} style={{ width: '100%', padding: '12px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {file ? 'UPLOAD TO CLOUD' : 'SELECT FILE'}
        </button>
      </div>
    </div>
  );
}
