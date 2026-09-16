function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '3rem 2rem',
      borderTop: '1px solid #eee'
    }}>
      <h2 style={{ color: '#b0263f', margin: 0, fontSize: '1.3rem', fontWeight: 800 }}>
        FIDELITY LIFE
      </h2>
      <p style={{ fontSize: '0.7rem', margin: '0 0 1rem 0', color: '#555', letterSpacing: '1px' }}>
        ASSURANCE OF ZIMBABWE
      </p>
      <p style={{ color: '#777', marginBottom: '1.5rem' }}>
        Life assurance made clearer, simpler and closer to you.
      </p>
      <p style={{ color: '#999', fontSize: '0.85rem', margin: 0 }}>
        © 2026 Fidelity Life Assurance of Zimbabwe
      </p>
    </footer>
  );
}

export default Footer;