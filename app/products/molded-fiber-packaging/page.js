import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const productionStats = [
  { type: '12 ct.', annual: '14.6M', perDay: '49,360 units', weight: '45g' },
  { type: '18 ct.', annual: '10.9M', perDay: '37,020 units', weight: '65g' },
  { type: '24 ct.', annual: '7.3M',  perDay: '24,680 units', weight: '80g' },
]

const productTypes = [
  'Egg Cartons (12ct, 18ct, 24ct)',
  'Food Carriers',
  'Electronic Packaging',
  'Fruit Trays',
  'Wine Trays',
  'Construction Materials',
]

const customers = [
  'Target', "Trader Joe's", 'Costco', 'Walmart',
  'Rose Acre', 'Wilcox Farms', 'Hickmans'
]

export default function MoldedFiberPackaging() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: '#0a1a0f',
        padding: '80px 40px 64px',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(#1e3d2620 1px, transparent 1px), linear-gradient(90deg, #1e3d2620 1px, transparent 1px)',
          backgroundSize: '40px 40px', pointerEvents: 'none'
        }} />
        <p style={{
          fontSize: '10px', fontWeight: '500', letterSpacing: '3px',
          textTransform: 'uppercase', color: '#3fa865',
          marginBottom: '12px', position: 'relative'
        }}>
          Products · Molded Fiber Packaging Equipment
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '48px', lineHeight: '1.05', color: '#e8f5ed',
          fontWeight: '600', letterSpacing: '-1px', marginBottom: '16px',
          position: 'relative'
        }}>
          1 Machine.<br />
          <em style={{
            fontFamily: 'Playfair Display, serif',
            color: '#6dc98a', fontWeight: '400',
            fontSize: '50px', fontStyle: 'italic'
          }}>
            Every product.
          </em>
        </h1>
        <p style={{
          fontSize: '15px', color: '#7aab88', maxWidth: '520px',
          lineHeight: '1.7', fontWeight: '300',
          marginBottom: '14px', position: 'relative'
        }}>
          One production line. A simple mold change. A full range of molded
          fiber packaging — egg cartons, fruit trays, food carriers, wine trays,
          electronic packaging, and more. Already trusted by the world's largest
          retailers.
        </p>
        <p style={{
          fontSize: '12px', color: '#3fa865', fontStyle: 'italic',
          borderLeft: '2px solid #2d7a4f', paddingLeft: '12px',
          marginBottom: '40px', position: 'relative'
        }}>
          Proven technology. Established demand. Ready to license globally.
        </p>
        <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
          <Link href="/contact" style={{
            fontSize: '12px', fontWeight: '500',
            background: '#1f5c38', color: '#e8f5ed',
            padding: '12px 22px', borderRadius: '2px',
            border: '0.5px solid #2d7a4f', textDecoration: 'none'
          }}>
            Request a licensing conversation →
          </Link>
          <Link href="/products" style={{
            fontSize: '12px', color: '#7aab88', textDecoration: 'none',
            display: 'flex', alignItems: 'center'
          }}>
            ← All products
          </Link>
        </div>
      </section>

      {/* Trusted by */}
      <section style={{
        padding: '40px 40px',
        background: '#ffffff',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={{
          fontSize: '10px', fontWeight: '500', letterSpacing: '3px',
          textTransform: 'uppercase', color: '#2d7a4f',
          marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
          Trusted by
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {customers.map(name => (
            <span key={name} style={{
              fontSize: '12px', fontWeight: '500', color: '#0d1f14',
              padding: '7px 14px', border: '0.5px solid #c8dece',
              borderRadius: '2px', background: '#f0f7f2'
            }}>
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Product range + Production stats */}
      <section style={{
        padding: '56px 40px',
        background: '#f0f7f2',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px', alignItems: 'start'
        }}>

          {/* Left — product range */}
          <div>
            <p style={{
              fontSize: '10px', fontWeight: '500', letterSpacing: '3px',
              textTransform: 'uppercase', color: '#2d7a4f', marginBottom: '14px',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
              What you can produce
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '28px', color: '#0d1f14', fontWeight: '600',
              letterSpacing: '-0.5px', marginBottom: '8px', lineHeight: '1.2'
            }}>
              Produce a wide range of packaging with a simple mold change.
            </h2>
            <p style={{
              fontSize: '13px', color: '#5a7a64', lineHeight: '1.7',
              fontWeight: '300', marginBottom: '28px'
            }}>
              Switch between product types without replacing the machine.
              Each mold change opens a new revenue stream.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {productTypes.map(type => (
                <div key={type} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px',
                  background: '#ffffff', border: '0.5px solid #c8dece',
                  borderRadius: '2px'
                }}>
                  <span style={{ color: '#2d7a4f', fontSize: '12px', fontWeight: '500' }}>✓</span>
                  <span style={{ fontSize: '13px', color: '#0d1f14', fontWeight: '400' }}>{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — production stats table */}
          <div>
            <p style={{
              fontSize: '10px', fontWeight: '500', letterSpacing: '3px',
              textTransform: 'uppercase', color: '#2d7a4f', marginBottom: '14px',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
              Egg carton production stats
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '28px', color: '#0d1f14', fontWeight: '600',
              letterSpacing: '-0.5px', marginBottom: '8px', lineHeight: '1.2'
            }}>
              Output that scales.
            </h2>
            <p style={{
              fontSize: '13px', color: '#5a7a64', lineHeight: '1.7',
              fontWeight: '300', marginBottom: '24px'
            }}>
              Production figures for egg carton output per machine.
              Output varies by carton size and configuration.
            </p>

            {/* Table header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr 80px',
              gap: '0',
              background: '#0a1a0f',
              padding: '10px 16px',
              borderRadius: '2px 2px 0 0'
            }}>
              {['Type', 'Annual Output', 'Per Day', 'Weight'].map(h => (
                <div key={h} style={{
                  fontSize: '10px', fontWeight: '500',
                  color: '#6dc98a', textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {h}
                </div>
              ))}
            </div>

            {/* Table rows */}
            {productionStats.map((row, i) => (
              <div key={row.type} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 1fr 80px',
                gap: '0',
                background: i % 2 === 0 ? '#ffffff' : '#f0f7f2',
                padding: '14px 16px',
                border: '0.5px solid #c8dece',
                borderTop: i === 0 ? 'none' : '0.5px solid #c8dece'
              }}>
                <div style={{ fontSize: '13px', fontWeight: '500', color: '#0d1f14' }}>{row.type}</div>
                <div style={{ fontSize: '13px', color: '#1f5c38', fontWeight: '500' }}>{row.annual}</div>
                <div style={{ fontSize: '13px', color: '#3a4a3f', fontWeight: '300' }}>{row.perDay}</div>
                <div style={{ fontSize: '13px', color: '#3a4a3f', fontWeight: '300' }}>{row.weight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '56px 40px',
        background: '#f7faf8',
        borderBottom: '0.5px solid #c8dece',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', gap: '32px'
      }}>
        <div>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '24px', color: '#0d1f14',
            fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '8px'
          }}>
            Ready to license the packaging equipment?
          </h2>
          <p style={{ fontSize: '13px', color: '#6b8c76', fontWeight: '300' }}>
            Early partners receive preferred terms and dedicated onboarding support.
          </p>
        </div>
        <Link href="/contact" style={{
          flexShrink: 0, fontSize: '12px', fontWeight: '500',
          background: '#1f5c38', color: '#e8f5ed',
          padding: '12px 22px', borderRadius: '2px',
          border: '0.5px solid #2d7a4f', textDecoration: 'none'
        }}>
          Request a conversation →
        </Link>
      </section>

      <Footer />
    </>
  )
}
