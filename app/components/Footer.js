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
        {[
          { label: 'Products', href: '/products' },
          { label: 'Proof', href: '/proof' },
          { label: 'Partner & License', href: '/opportunity' },
          { label: 'Sustainability', href: '/sustainability' },
          { label: 'News', href: '/news' },
          { label: 'Contact', href: '/contact' },
          { label: 'Careers', href: '/careers' },
        ].map((link) => (
          <a key={link.label} href={link.href} style={{
            fontSize: '11px',
            color: '#4a7a5a',
            textDecoration: 'none',
            letterSpacing: '0.3px'
          }}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}