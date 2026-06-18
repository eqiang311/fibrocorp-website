import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ProductsOverview() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: '#0a1a0f',
        padding: '80px 40px 64px',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(#1e3d2620 1px, transparent 1px), linear-gradient(90deg, #1e3d2620 1px, transparent 1px)',
          backgroundSize: '40px 40px', pointerEvents: 'none'
        }} />
        <p style={{
          fontSize: '10px', fontWeight: '500', letterSpacing: '3px',
          textTransform: 'uppercase', color: '#3fa865', marginBottom: '20px',
          position: 'relative'
        }}>
          Products
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '48px', lineHeight: '1.05', color: '#e8f5ed',
          fontWeight: '600', letterSpacing: '-1px', marginBottom: '16px',
          position: 'relative', maxWidth: '640px'
        }}>
          One technology.<br />Two businesses.
        </h1>
        <p style={{
          fontSize: '16px', color: '#7aab88', maxWidth: '480px',
          lineHeight: '1.7', fontWeight: '300', position: 'relative'
        }}>
          FibroCorp licenses a complete, patent-protected manufacturing system
          across two product lines. Both use waste paper as raw material.
          Both are ready to operate.
        </p>
      </section>

      {/* Two product cards */}
      <section style={{
        padding: '64px 40px',
        background: '#f0f7f2',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>

          {/* Product 1 */}
          <div style={{
            background: '#ffffff',
            border: '0.5px solid #c8dece',
            borderTop: '2px solid #2d7a4f',
            borderRadius: '2px',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                fontSize: '10px', fontWeight: '500',
                color: '#1f5c38', background: '#e8f5ed',
                border: '0.5px solid #c8dece',
                borderRadius: '2px', padding: '3px 8px',
                marginBottom: '20px', letterSpacing: '0.3px'
              }}>
                Proven & operating
              </div>
              <h2 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '24px', fontWeight: '600',
                color: '#0d1f14', letterSpacing: '-0.5px',
                marginBottom: '14px', lineHeight: '1.2'
              }}>
                Molded Fiber Packaging Equipment
              </h2>
              <p style={{
                fontSize: '13px', color: '#5a7a64',
                lineHeight: '1.7', fontWeight: '300',
                marginBottom: '28px'
              }}>
                One machine. One mold change. A full range of packaging products —
                egg cartons, fruit trays, food carriers, wine trays, electronic
                packaging, and more. Trusted by Walmart, Costco, Kroger, Target,
                and Trader Joe's.
              </p>
              <div style={{
                display: 'flex', gap: '24px', marginBottom: '28px'
              }}>
                {[
                  { num: '14.6M', label: 'Units/year (12ct)' },
                  { num: '6+',    label: 'Product types' },
                  { num: '70%',   label: 'Gross margin' }
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: '20px', fontWeight: '600', color: '#1f5c38', lineHeight: '1' }}>{s.num}</div>
                    <div style={{ fontSize: '10px', color: '#6b8c76', marginTop: '4px', fontWeight: '300' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/products/molded-fiber-packaging" style={{
              display: 'inline-block',
              fontSize: '12px', fontWeight: '500',
              background: '#1f5c38', color: '#e8f5ed',
              padding: '11px 20px', borderRadius: '2px',
              border: '0.5px solid #2d7a4f',
              textDecoration: 'none', letterSpacing: '0.5px',
              alignSelf: 'flex-start'
            }}>
              View product →
            </Link>
          </div>

          {/* Product 2 */}
          <div style={{
            background: '#0a1a0f',
            border: '0.5px solid #1e3d26',
            borderTop: '2px solid #6dc98a',
            borderRadius: '2px',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
              backgroundSize: '32px 32px', pointerEvents: 'none'
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{
                display: 'inline-block',
                fontSize: '10px', fontWeight: '500',
                color: '#6dc98a', background: 'transparent',
                border: '0.5px solid #2d7a4f',
                borderRadius: '2px', padding: '3px 8px',
                marginBottom: '20px', letterSpacing: '0.3px'
              }}>
                Exclusive global launch
              </div>
              <h2 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '24px', fontWeight: '600',
                color: '#e8f5ed', letterSpacing: '-0.5px',
                marginBottom: '14px', lineHeight: '1.2'
              }}>
                Molded Fiber Pallet
              </h2>
              <p style={{
                fontSize: '13px', color: '#7aab88',
                lineHeight: '1.7', fontWeight: '300',
                marginBottom: '28px'
              }}>
                A PCT-patented, SGS-verified pallet made from 100% waste paper.
                Stronger, lighter, and cheaper than wood. Launching globally now —
                seeking first-market partners with preferred licensing terms.
              </p>
              <div style={{
                display: 'flex', gap: '24px', marginBottom: '28px',
                position: 'relative'
              }}>
                {[
                  { num: '$100B', label: 'Global market' },
                  { num: '70%',   label: 'Gross margin' },
                  { num: '6mo',   label: 'Payback period' }
                ].map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: '20px', fontWeight: '600', color: '#6dc98a', lineHeight: '1' }}>{s.num}</div>
                    <div style={{ fontSize: '10px', color: '#4a7a5a', marginTop: '4px', fontWeight: '300' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/products/molded-fiber-pallet" style={{
              display: 'inline-block',
              fontSize: '12px', fontWeight: '500',
              background: 'transparent', color: '#6dc98a',
              padding: '11px 20px', borderRadius: '2px',
              border: '0.5px solid #2d7a4f',
              textDecoration: 'none', letterSpacing: '0.5px',
              alignSelf: 'flex-start', position: 'relative'
            }}>
              View product →
            </Link>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        padding: '56px 40px',
        background: '#f7faf8',
        borderBottom: '0.5px solid #c8dece',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '32px'
      }}>
        <div>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '24px', color: '#0d1f14',
            fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '8px'
          }}>
            Not sure which product fits your market?
          </h2>
          <p style={{ fontSize: '13px', color: '#6b8c76', fontWeight: '300' }}>
            Book a call and we'll help you identify the right entry point
            for your region and operation size.
          </p>
        </div>
        <Link href="/contact" style={{
          flexShrink: 0, fontSize: '12px', fontWeight: '500',
          background: '#1f5c38', color: '#e8f5ed',
          padding: '12px 22px', borderRadius: '2px',
          border: '0.5px solid #2d7a4f', textDecoration: 'none',
          letterSpacing: '0.5px'
        }}>
          Request a conversation →
        </Link>
      </section>

      <Footer />
    </>
  )
}
