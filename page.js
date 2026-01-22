"use client";
import React from 'react';

export default function Page() {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#fff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: 0, letterSpacing: '4px' }}>CONSTELLIO</h1>
      <p style={{ color: '#888', fontSize: '1.2rem', marginTop: '10px' }}>Unlock Your Future</p>
      <button style={{ 
        marginTop: '40px', 
        backgroundColor: '#fff', 
        color: '#000', 
        padding: '15px 40px', 
        borderRadius: '30px', 
        fontWeight: 'bold', 
        border: 'none', 
        cursor: 'pointer' 
      }}>
        ENTER THE CONSTELLATION
      </button>
    </div>
  );
}
