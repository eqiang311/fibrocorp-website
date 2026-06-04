import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const gridBg = {
  position: 'absolute',
  inset: 0,
  backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
  backgroundSize: '32px 32px',
  pointerEvents: 'none'
}

const eyebrow = {
  fontSize: '10px',
  fontWeight: '500',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: '#3fa865',
  marginBottom: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}

const eyebrowLight = {
  fontSize: '10px',
  fontWeight: '500',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: '#2d7a4f',
  marginBottom: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section style={{
        background: '#0a1a0f',
        padding: '80px 40px 64px',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={gridBg} />

        <p style={{ ...eyebrow, position: 'relative' }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }} />
          Get in touch
        </p>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '52px',
          lineHeight: '1.05',
          color: '#e8f5ed',
          marginBottom: '16px',
          fontWeight: '600',
          letterSpacing: '-1px',
          position: 'relative'
        }}>
          Contact{' '}
          <em style={{
            fontFamily: 'Playfair Display, serif',
            color: '#6dc98a',
            fontWeight: '400',
            fontSize: '54px',
            fontStyle: 'italic'
          }}>
            FibroCorp.
          </em>
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#7aab88',
          marginBottom: '40px',
          maxWidth: '540px',
          lineHeight: '1.7',
          fontWeight: '300',
          position: 'relative'
        }}>
          Whether you're exploring a partnership, licensing opportunity, or simply want to learn more — we'd like to hear from you.
        </p>
      </section>

      {/* ── Contact Details ───────────────────────────────────── */}
      <section style={{
        padding: '64px 40px',
        background: '#ffffff',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={eyebrowLight}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
          Contact information
        </p>

        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '32px',
          color: '#0d1f14',
          fontWeight: '600',
          letterSpacing: '-0.5px',
          marginBottom: '8px'
        }}>
          Reach us directly.
        </h2>

        <p style={{
          fontSize: '13px',
          color: '#5a7a64',
          fontWeight: '300',
          lineHeight: '1.7',
          marginBottom: '40px',
          maxWidth: '480px'
        }}>
          Our team is based in Tacoma, Washington. We respond to all inquiries within one business day.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '0.5px solid #c8dece',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          {/* Email */}
          <div style={{
            padding: '32px 28px',
            borderRight: '0.5px solid #c8dece',
            background: '#ffffff'
          }}>
            <p style={{
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#2d7a4f',
              marginBottom: '12px'
            }}>
              Email
            </p>
            <a
              href="mailto:esmeraldaq@fibrocorp.com"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '16px',
                color: '#1f5c38',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'block',
                marginBottom: '6px'
              }}
            >
              esmeraldaq@fibrocorp.com
            </a>
            <p style={{ fontSize: '12px', color: '#6b8c76', fontWeight: '300' }}>
              For partnerships, licensing, and general inquiries
            </p>
          </div>

          {/* Phone */}
          <div style={{
            padding: '32px 28px',
            borderRight: '0.5px solid #c8dece',
            background: '#f7faf8'
          }}>
            <p style={{
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#2d7a4f',
              marginBottom: '12px'
            }}>
              Phone
            </p>
            <a
              href="tel:+12533201789"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '16px',
                color: '#1f5c38',
                textDecoration: 'none',
                fontWeight: '500',
                display: 'block',
                marginBottom: '6px'
              }}
            >
              +1 253 320 1789
            </a>
            <p style={{ fontSize: '12px', color: '#6b8c76', fontWeight: '300' }}>
              Available Monday – Friday, 9am – 5pm PT
            </p>
          </div>

          {/* Address */}
          <div style={{
            padding: '32px 28px',
            background: '#ffffff'
          }}>
            <p style={{
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#2d7a4f',
              marginBottom: '12px'
            }}>
              Address
            </p>
            <p style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '16px',
              color: '#0d1f14',
              fontWeight: '500',
              lineHeight: '1.5',
              marginBottom: '6px'
            }}>
              401 E 15th St<br />
              Tacoma, WA 98421
            </p>
            <p style={{ fontSize: '12px', color: '#6b8c76', fontWeight: '300' }}>
              Demonstration factory &amp; headquarters
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{
        padding: '64px 40px',
        background: '#0a1a0f',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={gridBg} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px',
          position: 'relative'
        }}>
          <div>
            <p style={{ ...eyebrow, marginBottom: '12px' }}>
              <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }} />
              Explore more
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '28px',
              color: '#e8f5ed',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              marginBottom: '8px'
            }}>
              Interested in becoming a partner?
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#7aab88',
              fontWeight: '300',
              maxWidth: '420px',
              lineHeight: '1.6'
            }}>
              Learn about licensing FibroCorp's technology and bringing it to your region.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0, alignItems: 'flex-end' }}>
            <a href="/opportunity" style={{
              fontSize: '12px',
              fontWeight: '500',
              background: '#1f5c38',
              color: '#e8f5ed',
              padding: '13px 24px',
              borderRadius: '2px',
              border: '0.5px solid #2d7a4f',
              textDecoration: 'none',
              letterSpacing: '0.5px'
            }}>
              Partner &amp; License ↗
            </a>
            <a href="/products" style={{
              fontSize: '12px',
              fontWeight: '400',
              color: '#7aab88',
              padding: '13px 24px',
              borderRadius: '2px',
              border: '0.5px solid #1e3d26',
              textDecoration: 'none',
              letterSpacing: '0.3px'
            }}>
              See our products →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
