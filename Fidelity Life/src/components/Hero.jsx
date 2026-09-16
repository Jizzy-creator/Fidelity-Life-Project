import { useState, useEffect } from 'react';
import bgImage1 from '../assets/download (1).jpg';
import bgImage2 from '../assets/download (2).jpg';
import bgImage3 from '../assets/download (3).jpg';

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      tag: 'FIDELITY LIFE ASSURANCE',
      title: 'A lifetime of moments, protected.',
      desc: 'Build a secure future for yourself and the people you love with cover made for real life.',
      primaryBtn: 'Explore life assurance',
      secondaryBtn: 'Track an application',
      bg: bgImage1
    },
    {
      tag: 'SIMPLE DIGITAL SELF SERVICE',
      title: 'Your assurance journey, now easier.',
      desc: 'Start an application, track your progress and access support wherever you are.',
      primaryBtn: 'Track my application',
      secondaryBtn: 'Explore insurance products',
      bg: bgImage2
    },
    {
      tag: 'SOLUTIONS FOR ORGANISATIONS',
      title: 'Protect the people behind your business.',
      desc: 'Explore medical aid, actuarial support and group funeral assurance for your organisation.',
      primaryBtn: 'Explore corporate solutions',
      secondaryBtn: 'Track an application',
      bg: bgImage3
    },
  ];

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${slide.bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '3rem 2.5rem',
      maxWidth: '900px',
      borderRadius: '16px',
      transition: 'background-image 0.5s ease-in-out'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
        <div style={{ width: '30px', height: '3px', background: '#b0263f' }}></div>
        <span style={{ color: '#b0263f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px' }}>
          {slide.tag}
        </span>
      </div>

      <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.5rem 0', color: '#111' }}>
        {slide.title}
      </h1>

      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: 1.5 }}>
        {slide.desc}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', marginBottom: '2rem' }}>
        <button style={{
          backgroundColor: '#b0263f', color: 'white', border: 'none', padding: '1rem',
          borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'
        }}>
          {slide.primaryBtn} →
        </button>
        <button style={{
          background: 'white', color: '#111', border: '1px solid #ccc', padding: '1rem',
          borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'
        }}>
          {slide.secondaryBtn}
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveSlide(index)}
            style={{
              width: '30px',
              height: '4px',
              borderRadius: '2px',
              backgroundColor: index === activeSlide ? '#b0263f' : '#ddd',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;