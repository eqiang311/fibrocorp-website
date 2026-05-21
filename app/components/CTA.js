export default function CTA() {
  return (
    <section style={{
      padding: '56px 40px',
      background: '#f7faf8',
      borderBottom: '0.5px solid #c8dece'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '32px'
      }}>
        <div>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '24px',
            color: '#0d1f14',
            marginBottom: '8px',
            fontWeight: '600',
            letterSpacing: '-0.5px'
          }}>
            Ready to bring FibroCorp<br />to your market?
          </h2>
          <p style={{
            fontSize: '13px',
            color: '#6b8c76',
            fontWeight: '300'
          }}>
            Request a licensing conversation or schedule a visit to our Tacoma facility.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
          <a href="/contact" style={{
            fontSize: '12px',
            fontWeight: '500',
            background: 'transparent',
            color: '#1f5c38',
            padding: '12px 20px',
            borderRadius: '2px',
            border: '0.5px solid #2d7a4f',
            textDecoration: 'none',
            letterSpacing: '0.3px'
          }}>
            Schedule a visit
          </a>
          <a href="/contact" style={{
            fontSize: '12px',
            fontWeight: '500',
            background: '#1f5c38',
            color: '#e8f5ed',
            padding: '12px 22px',
            borderRadius: '2px',
            border: '0.5px solid #2d7a4f',
            textDecoration: 'none',
            letterSpacing: '0.5px'
          }}>
            Request a conversation ↗
          </a>
        </div>
      </div>
    </section>
  )
}