'use client';
import { useState } from 'react';

export default function SecretButton({ secret }: { secret: string }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button 
        onClick={() => setShow(!show)}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: 'white',
          color: '#E53E3E',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.1s'
        }}
      >
        {show ? 'Cacher' : 'Appuyer ici'}
      </button>
      {show && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          color: '#333', 
          borderRadius: '8px',
          fontSize: '1.5rem',
          fontWeight: '500',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          whiteSpace: 'nowrap',
          maxWidth: '90vw',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textAlign: 'center'
        }}>
          {secret || 'Aucun secret trouvé'}
        </div>
      )}
    </div>
  );
}
