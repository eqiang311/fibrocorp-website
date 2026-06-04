import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MarketExplorer from './MarketExplorer'

const gridBg = {
  position: 'absolute',
  inset: 0,
  backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
  backgroundSize: '32px 32px',
  pointerEvents: 'none'
}

const eyebrow = {
  fontSize: '12px',
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
  fontSize: '12px',
  fontWeight: '500',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: '#2d7a4f',
  marginBottom: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}

const regionalDemand = [
  { region: 'North America',    annualPallets: '1.8B',  woodPrice: '$18–35',  fibroPrice: '$7–12',  notes: 'US alone consumes ~1B pallets/yr' },
  { region: 'Europe',           annualPallets: '1.5B',  woodPrice: '$20–38',  fibroPrice: '$7–12',  notes: 'EUR pallet standard dominant; strict ISPM enforcement' },
  { region: 'Asia-Pacific',     annualPallets: '2.4B',  woodPrice: '$12–28',  fibroPrice: '$6–11',  notes: 'Fastest-growing region; China & India leading demand' },
  { region: 'Latin America',    annualPallets: '0.8B',  woodPrice: '$10–22',  fibroPrice: '$5–10',  notes: 'Cost-sensitive; wood supply under deforestation pressure' },
  { region: 'Middle East & Africa', annualPallets: '0.5B', woodPrice: '$16–30', fibroPrice: '$6–11', notes: 'Low local wood supply; high import costs for wood pallets' },
]

const pricingComparison = [
  { metric: 'Standard wood pallet (new)',         wood: '$18–35',   fibro: '$7–12',  delta: '50–70% lower' },
  { metric: 'Heat-treated wood pallet (ISPM 15)', wood: '$22–40',   fibro: '$7–12',  delta: '55–70% lower' },
  { metric: 'Recycled / repaired wood pallet',    wood: '$8–16',    fibro: '$7–12',  delta: 'Competitive' },
  { metric: 'Plastic pallet (HDPE)',              wood: '$50–120',  fibro: '$7–12',  delta: '75–90% lower' },
  { metric: 'Composite pallet',                   wood: '$40–80',   fibro: '$7–12',  delta: '70–85% lower' },
]

export default function MarketPage() {
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
          Market
        </p>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '60px',
          lineHeight: '1.05',
          color: '#e8f5ed',
          marginBottom: '16px',
          fontWeight: '600',
          letterSpacing: '-1px',
          position: 'relative'
        }}>
          The world moves on pallets.{' '}
          <em style={{
            fontFamily: 'Playfair Display, serif',
            color: '#6dc98a',
            fontWeight: '400',
            fontSize: '62px',
            fontStyle: 'italic'
          }}>
            All of them.
          </em>
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#7aab88',
          marginBottom: '16px',
          maxWidth: '560px',
          lineHeight: '1.7',
          fontWeight: '300',
          position: 'relative'
        }}>
          Over 6 billion pallets are in circulation globally — replaced every one to three years. Nearly every one is wood. FibroCorp is the only production-ready alternative at scale.
        </p>

        <div style={{ display: 'flex', gap: '32px', marginTop: '40px', position: 'relative' }}>
          {[
            { stat: '6–8B',    label: 'Pallets in circulation globally' },
            { stat: '$100B+',  label: 'Annual global pallet market' },
            { stat: '~95%',    label: 'Wood pallet market share today' },
          ].map(item => (
            <div key={item.stat} style={{
              paddingRight: '32px',
              borderRight: '0.5px solid #1e3d26'
            }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '37px',
                color: '#6dc98a',
                fontWeight: '600',
                letterSpacing: '-0.5px',
                lineHeight: '1',
                marginBottom: '6px'
              }}>
                {item.stat}
              </div>
              <div style={{ fontSize: '13px', color: '#4a7a5a', fontWeight: '300' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Annual Demand by Region ───────────────────────────── */}
      <section style={{
        padding: '64px 40px',
        background: '#0a1a0f',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={gridBg} />

        <p style={{ ...eyebrow, position: 'relative' }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }} />
          Annual pallet demand
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '36px',
          position: 'relative'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '37px',
              color: '#e8f5ed',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              marginBottom: '6px'
            }}>
              Demand is everywhere. Simultaneously.
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#7aab88',
              fontWeight: '300',
              maxWidth: '480px',
              lineHeight: '1.6'
            }}>
              Every region on earth replaces billions of pallets every year — and none of them have a viable alternative to wood.
            </p>
          </div>
          <p style={{
            fontSize: '13px',
            color: '#2d7a4f',
            fontStyle: 'italic',
            textAlign: 'right',
            lineHeight: '1.6',
            maxWidth: '200px'
          }}>
            Sources: FAOSTAT, IPPC, Technavio Pallet Market Report
          </p>
        </div>

        {/* Header row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
          gap: '1px',
          background: '#1e3d26',
          border: '0.5px solid #1e3d26',
          marginBottom: '1px',
          position: 'relative'
        }}>
          {['Region', 'Annual Demand', 'Wood Price', 'FibroCorp Price', 'Market Context'].map(col => (
            <div key={col} style={{
              padding: '10px 18px',
              background: '#122b1a',
              fontSize: '12px',
              fontWeight: '600',
              color: '#3fa865',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              {col}
            </div>
          ))}
        </div>

        {regionalDemand.map((row, i) => (
          <div key={row.region} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
            gap: '1px',
            background: '#1e3d26',
            border: '0.5px solid #1e3d26',
            marginBottom: '1px',
            position: 'relative'
          }}>
            <div style={{
              padding: '18px 18px',
              background: i % 2 === 0 ? '#0d2218' : '#091a10',
              fontSize: '15px',
              color: '#c8e8d4',
              fontWeight: '500',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              {row.region}
            </div>
            <div style={{
              padding: '18px 18px',
              background: i % 2 === 0 ? '#0d2218' : '#091a10',
              fontSize: '23px',
              color: '#6dc98a',
              fontWeight: '600',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.3px'
            }}>
              {row.annualPallets}
            </div>
            <div style={{
              padding: '18px 18px',
              background: i % 2 === 0 ? '#0d2218' : '#091a10',
              fontSize: '15px',
              color: '#4a7a5a',
              fontWeight: '300'
            }}>
              {row.woodPrice}
            </div>
            <div style={{
              padding: '18px 18px',
              background: i % 2 === 0 ? '#112b19' : '#0e2416',
              fontSize: '15px',
              color: '#6dc98a',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <span style={{ fontSize: '12px', color: '#3fa865' }}>✓</span>
              {row.fibroPrice}
            </div>
            <div style={{
              padding: '18px 18px',
              background: i % 2 === 0 ? '#0d2218' : '#091a10',
              fontSize: '13px',
              color: '#3d6649',
              fontWeight: '300',
              fontStyle: 'italic',
              lineHeight: '1.5'
            }}>
              {row.notes}
            </div>
          </div>
        ))}

        <p style={{
          fontSize: '13px',
          color: '#2d4f38',
          marginTop: '14px',
          fontStyle: 'italic',
          position: 'relative'
        }}>
          Pallet pricing reflects new wooden pallets, standard GMA/EUR sizing. FibroCorp pricing at $7–12 conservative sell-side range.
        </p>
      </section>

      {/* ── Price Comparison ──────────────────────────────────── */}
      <section style={{
        padding: '64px 40px',
        background: '#ffffff',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={eyebrowLight}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
          Price comparison
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
          marginBottom: '48px'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '37px',
              color: '#0d1f14',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              marginBottom: '8px',
              lineHeight: '1.15'
            }}>
              Local market price: wood vs FibroCorp.
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#5a7a64',
              fontWeight: '300',
              lineHeight: '1.8',
              marginBottom: '16px'
            }}>
              Standard wooden pallets sell for $18–35 in most markets — before heat treatment, transport, or fumigation costs. FibroCorp pallets sell for $7–12 and cost $1.46 to produce.
            </p>
            <p style={{
              fontSize: '15px',
              color: '#5a7a64',
              fontWeight: '300',
              lineHeight: '1.8',
              borderLeft: '2px solid #c8dece',
              paddingLeft: '14px'
            }}>
              Customers pay less. Producers earn dramatically more. The economics work at every point in the supply chain.
            </p>
          </div>

          <div style={{
            padding: '28px',
            background: '#f0f7f2',
            border: '0.5px solid #c8dece',
            borderRadius: '2px'
          }}>
            <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#2d7a4f',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Margin at a glance
            </div>
            {[
              { label: 'Wood pallet sell price',    val: '$18–35',  color: '#4a7a5a' },
              { label: 'Wood pallet gross margin',  val: '~20–35%', color: '#4a7a5a' },
              { label: 'FibroCorp sell price',      val: '$7–12',   color: '#1f5c38' },
              { label: 'FibroCorp cost to produce', val: '$1.46',   color: '#1f5c38' },
              { label: 'FibroCorp gross margin',    val: '~78%',    color: '#1f5c38' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: '0.5px solid #c8dece'
              }}>
                <span style={{ fontSize: '14px', color: '#5a7a64', fontWeight: '300' }}>{item.label}</span>
                <span style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '17px',
                  color: item.color,
                  fontWeight: '600',
                  letterSpacing: '-0.2px'
                }}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div>
          <p style={{ ...eyebrowLight, marginBottom: '20px' }}>
            <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
            All pallet types vs FibroCorp
          </p>

          {/* Table header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2.5fr 1fr 1fr 1fr',
            gap: '1px',
            background: '#c8dece',
            border: '0.5px solid #c8dece',
            marginBottom: '1px',
            borderRadius: '2px 2px 0 0',
            overflow: 'hidden'
          }}>
            {['Pallet type', 'Market price', 'FibroCorp price', 'Price delta'].map(col => (
              <div key={col} style={{
                padding: '10px 18px',
                background: '#e8f5ed',
                fontSize: '12px',
                fontWeight: '600',
                color: '#2d7a4f',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                {col}
              </div>
            ))}
          </div>

          {pricingComparison.map((row, i) => (
            <div key={row.metric} style={{
              display: 'grid',
              gridTemplateColumns: '2.5fr 1fr 1fr 1fr',
              gap: '1px',
              background: '#c8dece',
              border: '0.5px solid #c8dece',
              marginBottom: '1px'
            }}>
              <div style={{
                padding: '16px 18px',
                background: i % 2 === 0 ? '#f7faf8' : '#ffffff',
                fontSize: '14px',
                color: '#0d1f14',
                fontWeight: '500'
              }}>
                {row.metric}
              </div>
              <div style={{
                padding: '16px 18px',
                background: i % 2 === 0 ? '#f7faf8' : '#ffffff',
                fontSize: '15px',
                color: '#6b8c76',
                fontWeight: '300'
              }}>
                {row.wood}
              </div>
              <div style={{
                padding: '16px 18px',
                background: i % 2 === 0 ? '#eef7f1' : '#f5faf7',
                fontSize: '15px',
                color: '#1f5c38',
                fontWeight: '600',
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                {row.fibro}
              </div>
              <div style={{
                padding: '16px 18px',
                background: i % 2 === 0 ? '#eef7f1' : '#f5faf7',
                fontSize: '14px',
                color: '#2d7a4f',
                fontWeight: '500',
                fontStyle: 'italic'
              }}>
                {row.delta}
              </div>
            </div>
          ))}

          <p style={{
            fontSize: '13px',
            color: '#8aad98',
            marginTop: '12px',
            fontStyle: 'italic'
          }}>
            Market pricing sourced from North American and EU wholesale pallet market data. FibroCorp pricing at $7–12 conservative sell-side range.
          </p>
        </div>
      </section>

      <MarketExplorer />

      {/* ── Why demand is shifting ────────────────────────────── */}
      <section style={{
        padding: '64px 40px',
        background: '#0a1a0f',
        borderBottom: '0.5px solid #1e3d26',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={gridBg} />

        <p style={{ ...eyebrow, position: 'relative' }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }} />
          Why demand is shifting now
        </p>

        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '37px',
          color: '#e8f5ed',
          fontWeight: '600',
          letterSpacing: '-0.5px',
          marginBottom: '36px',
          position: 'relative'
        }}>
          Wood's dominance is structural — and structurally fragile.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          position: 'relative'
        }}>
          {[
            {
              title: 'Regulatory tailwinds',
              text: 'ISPM 15 requires heat treatment on all cross-border wood pallets. FSMA and EU timber regulations are expanding restrictions on untreated and non-certified wood in food-contact supply chains.'
            },
            {
              title: 'Deforestation pressure',
              text: 'ESG mandates and Fortune 500 sustainability commitments are pushing procurement teams away from virgin wood. Scope 3 emissions reporting now includes pallet material sourcing.'
            },
            {
              title: 'Hygiene & contamination',
              text: 'Wood harbors bacteria, mold, and pests. Pharma, food processing, and cold-chain logistics increasingly require cleanroom-safe, non-porous alternatives — wood cannot pass.'
            },
            {
              title: 'Supply chain cost pressure',
              text: 'Timber prices are volatile and regionally scarce. Pallet pool operators are absorbing increasing repair and replacement costs. A cheaper, consistent-quality alternative has clear procurement appeal.'
            },
            {
              title: 'Export logistics',
              text: 'Heat-treatment certification adds cost and lead time for wood pallets crossing borders. FibroCorp pallets require no phytosanitary treatment — reducing friction in international supply chains.'
            },
            {
              title: 'No viable alternative — until now',
              text: 'Plastic pallets cost 5–10× more to produce. Composite pallets are heavy and expensive. FibroCorp is the only production-ready alternative that competes on cost, weight, and performance simultaneously.'
            },
          ].map(item => (
            <div key={item.title} style={{
              padding: '28px 24px',
              background: '#0d2218',
              border: '0.5px solid #1e3d26',
              borderRadius: '2px'
            }}>
              <div style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#c8e8d4',
                marginBottom: '10px',
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                {item.title}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#4a7a5a',
                lineHeight: '1.75',
                fontWeight: '300'
              }}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
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
              Enter the market
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '32px',
              color: '#e8f5ed',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              marginBottom: '8px'
            }}>
              Your region is open. For now.
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#7aab88',
              fontWeight: '300',
              maxWidth: '420px',
              lineHeight: '1.6'
            }}>
              FibroCorp allocates exclusive regional licenses on a first-conversation basis. The pallet market in your region is waiting for an alternative — and it won't wait long.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0, alignItems: 'flex-end' }}>
            <a href="/opportunity" style={{
              fontSize: '14px',
              fontWeight: '500',
              background: '#1f5c38',
              color: '#e8f5ed',
              padding: '13px 24px',
              borderRadius: '2px',
              border: '0.5px solid #2d7a4f',
              textDecoration: 'none',
              letterSpacing: '0.5px'
            }}>
              See the Partner &amp; License opportunity ↗
            </a>
            <a href="/contact" style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#7aab88',
              padding: '13px 24px',
              borderRadius: '2px',
              border: '0.5px solid #1e3d26',
              textDecoration: 'none',
              letterSpacing: '0.3px'
            }}>
              Request a conversation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
