import React from 'react';
import bgImage from '../assets/plants-bg.jpg';

export default function Home() {
  return (
    <section id="home" className="home-section" style={{ minHeight: '100vh' }}>
      <div 
        className="hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          color: 'white'
        }}
      >
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          Welcome to Green Thumb Haven
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2.5rem', maxWidth: '800px' }}>
          Your one-stop shop for beautiful houseplants!
        </p>
        <a 
          href="#products" 
          className="btn" 
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            border: '2px solid #4CAF50'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#4CAF50';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#4CAF50';
            e.target.style.color = 'white';
          }}
        >
          Get Started
        </a>
      </div>
    </section>
  );
}