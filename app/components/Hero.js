export default function Hero() {
  return (
    <section style={{
      background: '#0a1a0f',
      padding: '80px 40px 64px',
      borderBottom: '0.5px solid #1e3d26',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(#1e3d2620 1px, transparent 1px), linear-gradient(90deg, #1e3d2620 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      {/* Eyebrow */}
      <p style={{
        fontSize: '10px',
        fontWeight: '500',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#3fa865',
        marginBottom: '24px',
        position: 'relative'
      }}>
        PCT-Patented · SGS-Certified · Made in the USA
      </p>

      {/* Headline */}
      <h1 style={{
        fontSize: '52px',
        lineHeight: '1.05',
        color: '#e8f5ed',
        marginBottom: '16px',
        fontWeight: '600',
        letterSpacing: '-1px',
        position: 'relative'
      }}>
        Profitable{' '}
        <em style={{
          fontFamily: 'Playfair Display, serif',
          color: '#6dc98a',
          fontWeight: '400',
          fontSize: '54px',
          fontStyle: 'italic'
        }}>
          Sustainability.
        </em>
      </h1>

      {/* Subheadline */}
      <p style={{
        fontSize: '16px',
        color: '#7aab88',
        marginBottom: '16px',
        maxWidth: '480px',
        lineHeight: '1.7',
        fontWeight: '300',
        position: 'relative'
      }}>
        Decrease your Scope 3 emissions — $1.70 at a time.
      </p>

      {/* Tagline */}
      <p style={{
        fontSize: '13px',
        color: '#3fa865',
        marginBottom: '40px',
        fontStyle: 'italic',
        borderLeft: '2px solid #2d7a4f',
        paddingLeft: '12px',
        position: 'relative'
      }}>
        With FibroCorp, reducing your Scope 3 emissions is just the beginning. The real impact is global.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', position: 'relative' }}>
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
          Request a licensing conversation ↗
        </a>
        <a href="/products" style={{
          fontSize: '12px',
          color: '#7aab88',
          textDecoration: 'none',
          fontWeight: '400',
          letterSpacing: '0.3px'
        }}>
          Explore the technology →
        </a>
      </div>

    </section>
  )
}