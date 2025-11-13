import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <div>
        <h1 className="gradient-text" style={{ fontSize: '72px', marginBottom: '20px' }}>
          404
        </h1>
        <h2 style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--color-text)' }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

