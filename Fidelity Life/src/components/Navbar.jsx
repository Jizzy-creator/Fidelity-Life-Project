function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2.5rem',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      background: 'white',
      zIndex: 100,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }}>
      {/* Logo section */}
      <div>
        <h2 style={{
          color: '#b0263f',
          margin: 0,
          fontSize: '1.4rem',
          fontWeight: 800,
          letterSpacing: '0.5px'
        }}>
          FIDELITY LIFE
        </h2>
        <p style={{
          fontSize: '0.65rem',
          margin: 0,
          color: '#555',
          letterSpacing: '1px'
        }}>
          ASSURANCE OF ZIMBABWE
        </p>
      </div>

      {/* Right side buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <button style={{
          backgroundColor: '#b0263f',
          color: 'white',
          border: 'none',
          padding: '0.65rem 1.8rem',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '0.95rem',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#8f1f34'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#b0263f'}
        >
          Login
        </button>

        <button style={{
          border: '1px solid #ddd',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          background: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
        >
          🌙
        </button>

        <button style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          width: '42px',
          height: '42px',
          background: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;