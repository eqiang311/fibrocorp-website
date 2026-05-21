export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      background: '#0a1a0f',
      borderBottom: '0.5px solid #1e3d26'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '18px',
          fontWeight: '500',
          color: '#e8f5ed',
          letterSpacing: '0.5px'
        }}>
          FibroCorp
        </span>
      </div>
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        <a href="/products" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>Products</a>
        <a href="/opportunity" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>Opportunity</a>
        <a href="/sustainability" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>Sustainability</a>
        <a href="/news" style={{ fontSize: '13px', color: '#7aab88', textDecoration: 'none' }}>News</a>
        <a href="/contact" style={{
          fontSize: '13px',
          fontWeight: '500',
          color: '#6dc98a',
          padding: '7px 16px',
          border: '0.5px solid #2d7a4f',
          borderRadius: '2px',
          textDecoration: 'none'
        }}>
          Request a conversation
        </a>
      </div>
    </nav>
  )
}