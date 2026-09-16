function QuickActions() {
  const actions = [
    { icon: '❤️', title: 'Personal Solutions', subtitle: 'Cover for individuals and families' },
    { icon: '🛡️', title: 'Corporate Onboarding', subtitle: 'Start the business registration flow' },
    { icon: '🕐', title: 'Track application', subtitle: 'Continue your journey' },
    { icon: '💬', title: 'Get help', subtitle: 'Talk to our assistant' },
    { icon: '📞', title: 'Request a callback', subtitle: 'Choose a convenient time' },
  ];

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 2.5rem 2rem 2.5rem',
      border: '1px solid #eee',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      {actions.map((action, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.2rem',
            borderBottom: index < actions.length - 1 ? '1px solid #eee' : 'none',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '1.3rem' }}>{action.icon}</span>
          <div>
            <p style={{ margin: 0, fontWeight: 600, color: '#111' }}>{action.title}</p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#777' }}>{action.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuickActions;