export default function Footer() {
  return (
    <footer style={{
      padding: '20px 40px',
      borderTop: '0.5px solid #c8dece',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#0a1a0f'
    }}>
      <span style={{
        fontSize: '11px',
        color: '#4a7a5a',
        fontWeight: '300',
        letterSpacing: '0.3px'
      }}>
        © 2026 FibroCorp · Tacoma, Washington
      </span>
      <div style={{ display: 'flex', gap: '20px' }}>
        {['Products', 'Opportunity', 'Sustainability', 'News', 'Contact', 'Careers'].map((link) => (
          <a key={link} href={`/${link.toLowerCase()}`} style={{
            fontSize: '11px',
            color: '#4a7a5a',
            textDecoration: 'none',
            letterSpacing: '0.3px'
          }}>
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}