import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EcoCalculator from '../components/EcoCalculator'

const gridBg = {
  position: 'absolute',
  inset: 0,
  backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
  backgroundSize: '32px 32px',
  pointerEvents: 'none'
}

const eyebrowDark = {
  fontSize: '11px',
  fontWeight: '500',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#3fa865',
  marginBottom: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}

const eyebrowLight = {
  fontSize: '11px',
  fontWeight: '500',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#2d7a4f',
  marginBottom: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}

export default function SustainabilityPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero — light ──────────────────────────────────────── */}
      <section style={{
        background: '#f0f7f2',
        padding: '80px 40px 64px',
        borderBottom: '0.5px solid #c8dece',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(#c8dece30 1px, transparent 1px), linear-gradient(90deg, #c8dece30 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none'
        }} />

        <p style={{ ...eyebrowLight, position: 'relative' }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
          Sustainability
        </p>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '52px',
          lineHeight: '1.05',
          color: '#0d1f14',
          marginBottom: '16px',
          fontWeight: '600',
          letterSpacing: '-1px',
          position: 'relative'
        }}>
          Built for the planet.{' '}
          <em style={{
            fontFamily: 'Playfair Display, serif',
            color: '#2d7a4f',
            fontWeight: '400',
            fontSize: '54px',
            fontStyle: 'italic'
          }}>
            Proven at scale.
          </em>
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#5a7a64',
          marginBottom: '16px',
          maxWidth: '480px',
          lineHeight: '1.7',
          fontWeight: '300',
          position: 'relative'
        }}>
          FibroCorp's pulp-molding technology transforms agricultural waste into industrial-grade pallets — replacing wood, reducing landfill, and cutting carbon at every step.
        </p>

        <p style={{
          fontSize: '13px',
          color: '#2d7a4f',
          marginBottom: '40px',
          fontStyle: 'italic',
          borderLeft: '2px solid #2d7a4f',
          paddingLeft: '12px',
          position: 'relative'
        }}>
          Every pallet we make is one less tree cut, one less ton of waste in the ground.
        </p>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', position: 'relative' }}>
          <a href="/contact" style={{
            fontSize: '12px',
            fontWeight: '500',
            background: '#1f5c38',
            color: '#f0f7f2',
            padding: '12px 22px',
            borderRadius: '2px',
            border: '0.5px solid #2d7a4f',
            textDecoration: 'none',
            letterSpacing: '0.5px'
          }}>
            Request a licensing conversation ↗
          </a>
          <a href="/opportunity" style={{
            fontSize: '12px',
            color: '#2d7a4f',
            textDecoration: 'none',
            fontWeight: '400',
            letterSpacing: '0.3px'
          }}>
            See the opportunity →
          </a>
        </div>
      </section>

      {/* ── Section 2 — dark · EcoCalculator ─────────────────── */}
      <section style={{
        background: '#0a1a0f',
        padding: '64px 40px',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={gridBg} />
        <div style={{ position: 'relative' }}>
          <EcoCalculator />
        </div>
      </section>

      {/* ── Section 3 — light placeholder ─────────────────────── */}
      <section style={{
        background: '#ffffff',
        padding: '64px 40px',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={eyebrowLight}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
          Section label
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '160px',
          border: '0.5px solid #c8dece',
          borderRadius: '2px',
          background: '#f7faf8'
        }}>
          <span style={{ fontSize: '48px', color: '#c8dece', fontWeight: '600', letterSpacing: '-1px' }}>×</span>
        </div>
      </section>

      {/* ── Section 4 — dark placeholder ──────────────────────── */}
      <section style={{
        background: '#0a1a0f',
        padding: '64px 40px',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={gridBg} />
        <p style={{ ...eyebrowDark, position: 'relative' }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }} />
          Section label
        </p>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '160px',
          border: '0.5px solid #1e3d26',
          borderRadius: '2px',
          background: '#0d2218'
        }}>
          <span style={{ fontSize: '48px', color: '#1e3d26', fontWeight: '600', letterSpacing: '-1px' }}>×</span>
        </div>
      </section>

      {/* ── Section 5 — light placeholder ─────────────────────── */}
      <section style={{
        background: '#f0f7f2',
        padding: '64px 40px',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={eyebrowLight}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
          Section label
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '160px',
          border: '0.5px solid #c8dece',
          borderRadius: '2px',
          background: '#e8f5ed'
        }}>
          <span style={{ fontSize: '48px', color: '#c8dece', fontWeight: '600', letterSpacing: '-1px' }}>×</span>
        </div>
      </section>

      {/* ── Section 6 — dark placeholder ──────────────────────── */}
      <section style={{
        background: '#0a1a0f',
        padding: '64px 40px',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={gridBg} />
        <p style={{ ...eyebrowDark, position: 'relative' }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }} />
          Section label
        </p>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '160px',
          border: '0.5px solid #1e3d26',
          borderRadius: '2px',
          background: '#0d2218'
        }}>
          <span style={{ fontSize: '48px', color: '#1e3d26', fontWeight: '600', letterSpacing: '-1px' }}>×</span>
        </div>
      </section>

      <Footer />
    </main>
  )
}
