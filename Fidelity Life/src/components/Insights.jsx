import { useState } from 'react';

function Insights() {
  const [activeFilter, setActiveFilter] = useState('All insights');

  const filters = ['All insights', 'Agriculture & Climate Risk', 'Zimbabwe Insurance Market', 'Funeral Assurance'];

  const insights = [
    {
      category: 'AGRICULTURE & CLIMATE RISK',
      date: '24 Jul, 2026',
      title: 'Buhera farmers embrace crop insurance as ICZ intensifies payment efforts',
      desc: 'Farmers in Buhera are increasingly adopting crop insurance as the Insurance Council of Zimbabwe steps up efforts to support premium payments.',
      dark: true
    },
    {
      category: 'ZIMBABWE INSURANCE MARKET',
      date: '24 Jul, 2026',
      title: 'ZimFest 2026 brings insurance engagement to the diaspora',
      desc: 'Diaspora Insurance is using ZimFest 2026 to engage Zimbabweans abroad through insurance education, promotions and community activities.',
      dark: false
    },
    {
      category: 'FUNERAL ASSURANCE',
      date: '18 Jun, 2026',
      title: 'Insurance Council offers support following Chiredzi bus disaster',
      desc: 'The Insurance Council of Zimbabwe offered funeral and insurance compensation support for victims of the Chiredzi bus disaster.',
      dark: false
    },
  ];

  return (
    <section style={{ padding: '3rem 2.5rem', background: '#fafafa' }}>
      <p style={{ color: '#b0263f', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '0.5rem' }}>
        INSURANCE INTELLIGENCE
      </p>
      <h2 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 1rem 0', color: '#111' }}>
        What's shaping insurance today
      </h2>
      <p style={{ color: '#555', fontSize: '1rem', marginBottom: '2rem', maxWidth: '500px' }}>
        Fresh market developments, risk insights and industry news to help you stay informed.
      </p>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              padding: '0.6rem 1.3rem',
              borderRadius: '25px',
              border: activeFilter === filter ? 'none' : '1px solid #ddd',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              backgroundColor: activeFilter === filter ? '#1a2a4a' : 'white',
              color: activeFilter === filter ? 'white' : '#333',
              whiteSpace: 'nowrap'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Insight cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '600px' }}>
        {insights.map((item, index) => (
          <div key={index} style={{
            backgroundColor: item.dark ? '#1a2a4a' : 'white',
            border: item.dark ? 'none' : '1px solid #eee',
            borderRadius: '12px',
            padding: '1.8rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{
                backgroundColor: item.dark ? 'rgba(255,255,255,0.15)' : '#fbe6ea',
                color: item.dark ? 'white' : '#b0263f',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                {item.category}
              </span>
              <span style={{ color: item.dark ? '#ccc' : '#888', fontSize: '0.85rem' }}>{item.date}</span>
            </div>
            <h3 style={{
              margin: '0 0 0.8rem 0',
              fontSize: '1.3rem',
              color: item.dark ? 'white' : '#111'
            }}>
              {item.title}
            </h3>
            <p style={{
              margin: '0 0 1.2rem 0',
              color: item.dark ? '#ddd' : '#555',
              lineHeight: 1.5
            }}>
              {item.desc}
            </p>
            <a style={{
              color: item.dark ? 'white' : '#1a2a4a',
              fontWeight: 700,
              textDecoration: 'none',
              cursor: 'pointer'
            }}>
              Read full insight →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Insights;