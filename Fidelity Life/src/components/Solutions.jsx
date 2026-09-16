import { useState } from 'react';

function Solutions() {
  const [activeTab, setActiveTab] = useState('personal');

  const personalSolutions = [
    { number: '01', icon: '❤️', tag: 'PROTECTION AND SAVINGS', title: 'Life Assurance', desc: 'Life protection with long-term savings for you and the people you love.', link: 'View product' },
    { number: '02', icon: '⚰️', tag: 'END-TO-END SUPPORT', title: 'Funeral Services', desc: 'Practical funeral service support delivered with care when your family needs it.', link: 'View services' },
    { number: '03', icon: '🛡️', tag: 'FLEXIBLE FAMILY COVER', title: 'Funeral Assurance', desc: 'Flexible funeral cover with service, cashback and split-benefit options.', link: 'View product' },
  ];

  const corporateSolutions = [
    { number: '01', icon: '🏢', tag: 'GROUP COVER', title: 'Corporate Life Cover', desc: 'Life assurance solutions designed for businesses and their employees.', link: 'View product' },
  ];

  const activeList = activeTab === 'personal' ? personalSolutions : corporateSolutions;

  return (
    <section style={{ padding: '3rem 2.5rem' }}>
      <p style={{ color: '#b0263f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>
        FIDELITY LIFE SOLUTIONS
      </p>
      <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 1rem 0', color: '#111' }}>
        Cover built around people and organisations
      </h2>
      <p style={{ color: '#555', fontSize: '1rem', marginBottom: '2rem', maxWidth: '500px' }}>
        Select who the cover is for, then explore the services designed around those needs.
      </p>

      {/* Toggle buttons */}
      <div style={{
        display: 'inline-flex',
        background: '#f0f0f0',
        borderRadius: '30px',
        padding: '4px',
        marginBottom: '2rem'
      }}>
        <button
          onClick={() => setActiveTab('personal')}
          style={{
            padding: '0.7rem 1.8rem',
            borderRadius: '25px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: activeTab === 'personal' ? '#1a2a4a' : 'transparent',
            color: activeTab === 'personal' ? 'white' : '#333'
          }}
        >
          Personal
        </button>
        <button
          onClick={() => setActiveTab('corporate')}
          style={{
            padding: '0.7rem 1.8rem',
            borderRadius: '25px',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            backgroundColor: activeTab === 'corporate' ? '#1a2a4a' : 'transparent',
            color: activeTab === 'corporate' ? 'white' : '#333'
          }}
        >
          Corporate
        </button>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '500px' }}>
        {activeList.map((item, index) => (
          <div key={index} style={{
            border: '1px solid #eee',
            borderTop: index === 0 ? '4px solid #b0263f' : '4px solid #1a2a4a',
            borderRadius: '10px',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{
                fontSize: '1.5rem',
                background: '#f5f5f5',
                borderRadius: '10px',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </span>
              <span style={{ color: '#bbb', fontWeight: 700 }}>{item.number}</span>
            </div>
            <p style={{ color: '#b0263f', fontWeight: 700, fontSize: '0.8rem', margin: '0 0 0.4rem 0', letterSpacing: '0.5px' }}>
              {item.tag}
            </p>
            <h3 style={{ margin: '0 0 0.6rem 0', fontSize: '1.3rem' }}>{item.title}</h3>
            <p style={{ color: '#555', margin: '0 0 1rem 0' }}>{item.desc}</p>
            <a style={{ color: '#1a2a4a', fontWeight: 700, textDecoration: 'none', cursor: 'pointer' }}>
              {item.link} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Solutions;