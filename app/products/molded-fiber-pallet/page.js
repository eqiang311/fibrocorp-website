import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const partnershipStats = [
  { num: '70%',   label: 'Gross margin' },
  { num: '6mo',   label: 'Payback period' },
  { num: '$100B', label: 'Global market' },
  { num: '$4B',   label: 'Carbon credit opportunity' },
]

const performanceItems = [
  {
    icon: '⚖',
    title: 'Load bearing',
    text: 'Dynamic load: 1–6 tons. Static load: 2–16 tons. SGS verified.'
  },
  {
    icon: '🧊',
    title: 'Waterproof',
    text: 'IPX4 waterproof rating. Functional in 100% humidity conditions.'
  },
  {
    icon: '🌿',
    title: 'Clean production',
    text: 'No pollution throughout the manufacturing process. 100% waste paper input.'
  },
  {
    icon: '📐',
    title: 'Customizable',
    text: 'Size and shape customizable to meet customer and regional requirements.'
  },
  {
    icon: '🚚',
    title: 'Transport savings',
    text: 'Reduces transportation cost by 50% vs. wood. Lighter weight, stackable design.'
  },
  {
    icon: '💡',
    title: '20-year protection',
    text: 'PCT patent across 158 countries. 20 years of protection for continuous high profit margins.'
  },
]

export default function MoldedFiberPallet() {
  return (
    <>
      <Navbar />

      {/* Hero — dark, launch energy */}
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
          Exclusive global launch · Seeking partners
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '48px', lineHeight: '1.05', color: '#e8f5ed',
          fontWeight: '600', letterSpacing: '-1px', marginBottom: '16px',
          position: 'relative'
        }}>
          The pallet industry<br />
          <em style={{
            fontFamily: 'Playfair Display, serif',
            color: '#6dc98a', fontWeight: '400',
            fontSize: '50px', fontStyle: 'italic'
          }}>
            hasn&apos;t changed in 50 years.
          </em>
        </h1>
        <p style={{
          fontSize: '15px', color: '#7aab88', maxWidth: '520px',
          lineHeight: '1.7', fontWeight: '300',
          marginBottom: '14px', position: 'relative'
        }}>
          FibroCorp's PCT-patented, SGS-verified molded fiber pallet is made from
          100% low-grade waste paper. It outperforms wood on load bearing,
          waterproofing, weight, and cost — and it's launching globally now.
        </p>
        <p style={{
          fontSize: '12px', color: '#3fa865', fontStyle: 'italic',
          borderLeft: '2px solid #2d7a4f', paddingLeft: '12px',
          marginBottom: '40px', position: 'relative'
        }}>
          First-market partners receive preferred licensing terms and priority
          regional access.
        </p>
        <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
          <Link href="/contact" style={{
            fontSize: '12px', fontWeight: '500',
            background: '#1f5c38', color: '#e8f5ed',
            padding: '12px 22px', borderRadius: '2px',
            border: '0.5px solid #2d7a4f', textDecoration: 'none'
          }}>
            Become a launch partner →
          </Link>
          <Link href="/products" style={{
            fontSize: '12px', color: '#7aab88', textDecoration: 'none',
            display: 'flex', alignItems: 'center'
          }}>
            ← All products
          </Link>
        </div>
      </section>

      {/* Partnership opportunity stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        background: '#0d2218',
        borderBottom: '0.5px solid #1e3d26'
      }}>
        {partnershipStats.map((s, i) => (
          <div key={s.label} style={{
            padding: '24px 28px',
            borderRight: i < partnershipStats.length - 1
              ? '0.5px solid #1e3d26' : 'none'
          }}>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '30px', color: '#6dc98a',
              lineHeight: '1', fontWeight: '600', letterSpacing: '-0.5px'
            }}>
              {s.num}
            </div>
            <div style={{
              fontSize: '11px', color: '#4a7a5a',
              marginTop: '5px', lineHeight: '1.4', fontWeight: '300'
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ESG / sustainability angle */}
      <section style={{
        padding: '56px 40px',
        background: '#ffffff',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <p style={{
            fontSize: '10px', fontWeight: '500', letterSpacing: '3px',
            textTransform: 'uppercase', color: '#2d7a4f', marginBottom: '14px',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
            The opportunity
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '28px', color: '#0d1f14', fontWeight: '600',
            letterSpacing: '-0.5px', marginBottom: '16px', lineHeight: '1.2'
          }}>
            Profit-first. Planet by design.
          </h2>
          <p style={{
            fontSize: '14px', color: '#3a4a3f', lineHeight: '1.8',
            fontWeight: '300', marginBottom: '16px'
          }}>
            Raw material is low-grade waste paper — one of the world's most abundant
            and cheapest inputs. The production process generates no pollution.
            The product reduces Scope 3 emissions for every customer that adopts it.
          </p>
          <p style={{
            fontSize: '14px', color: '#3a4a3f', lineHeight: '1.8', fontWeight: '300'
          }}>
            The result: a business that earns strong margins, satisfies ESG mandates
            from major retailers, and generates up to{' '}
            <strong style={{ color: '#0d1f14', fontWeight: '500' }}>
              $4 billion in carbon credit value
            </strong>{' '}
            globally.
          </p>
        </div>
      </section>

      {/* Performance specs */}
      <section style={{
        padding: '56px 40px',
        background: '#f0f7f2',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={{
          fontSize: '10px', fontWeight: '500', letterSpacing: '3px',
          textTransform: 'uppercase', color: '#2d7a4f', marginBottom: '14px',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
          Performance
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '28px', color: '#0d1f14', fontWeight: '600',
          letterSpacing: '-0.5px', marginBottom: '8px', lineHeight: '1.2'
        }}>
          SGS verified. Built to outperform.
        </h2>
        <p style={{
          fontSize: '13px', color: '#5a7a64', lineHeight: '1.7',
          fontWeight: '300', marginBottom: '32px', maxWidth: '480px'
        }}>
          Every performance claim has been independently tested and certified
          by SGS — the world's leading inspection and certification company.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px'
        }}>
          {performanceItems.map(item => (
            <div key={item.title} style={{
              background: '#ffffff',
              border: '0.5px solid #c8dece',
              borderTop: '2px solid #2d7a4f',
              borderRadius: '2px',
              padding: '20px 18px'
            }}>
              <div style={{ fontSize: '20px', marginBottom: '10px' }}>{item.icon}</div>
              <div style={{
                fontSize: '13px', fontWeight: '500',
                color: '#0d1f14', marginBottom: '6px'
              }}>
                {item.title}
              </div>
              <div style={{
                fontSize: '12px', color: '#5a7a64',
                lineHeight: '1.6', fontWeight: '300'
              }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '56px 40px',
        background: '#0a1a0f',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
          backgroundSize: '32px 32px', pointerEvents: 'none'
        }} />
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: '32px', position: 'relative'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '24px', color: '#e8f5ed',
              fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '8px'
            }}>
              This is an exclusive launch. Early partners move first.
            </h2>
            <p style={{ fontSize: '13px', color: '#7aab88', fontWeight: '300' }}>
              Preferred licensing terms, dedicated support, and first regional
              access available now to launch partners.
            </p>
          </div>
          <Link href="/contact" style={{
            flexShrink: 0, fontSize: '12px', fontWeight: '500',
            background: '#1f5c38', color: '#e8f5ed',
            padding: '12px 22px', borderRadius: '2px',
            border: '0.5px solid #2d7a4f', textDecoration: 'none',
            letterSpacing: '0.5px'
          }}>
            Become a launch partner →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
