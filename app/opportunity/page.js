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

export default function OpportunityPage() {
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
          Partner &amp; License
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
          Own a proven factory.{' '}
          <em style={{
            fontFamily: 'Playfair Display, serif',
            color: '#6dc98a',
            fontWeight: '400',
            fontSize: '54px',
            fontStyle: 'italic'
          }}>
            Anywhere in the world.
          </em>
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#7aab88',
          marginBottom: '16px',
          maxWidth: '540px',
          lineHeight: '1.7',
          fontWeight: '300',
          position: 'relative'
        }}>
          FibroCorp licenses its patented pulp-molding technology and business system to partners who want to enter the global pallet market — the single largest category in industrial packaging.
        </p>

        <p style={{
          fontSize: '13px',
          color: '#3fa865',
          marginBottom: '40px',
          fontStyle: 'italic',
          borderLeft: '2px solid #2d7a4f',
          paddingLeft: '12px',
          position: 'relative'
        }}>
          You don't build the system. You inherit it. Early partners receive preferred terms and exclusive regional rights.
        </p>

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
            See our products →
          </a>
        </div>
      </section>

      {/* ── Economic Numbers ─────────────────────────────────── */}
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
          The economics
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
              fontSize: '32px',
              color: '#e8f5ed',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              marginBottom: '6px'
            }}>
              What the numbers look like.
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#7aab88',
              fontWeight: '300',
              maxWidth: '440px',
              lineHeight: '1.6'
            }}>
              Based on real production data from the Tacoma demonstration factory. Conservative per-unit pricing used throughout.
            </p>
          </div>
          <p style={{
            fontSize: '11px',
            color: '#2d7a4f',
            fontStyle: 'italic',
            textAlign: 'right',
            lineHeight: '1.6',
            maxWidth: '200px'
          }}>
            20-line operation · continuous run · $7/pallet pricing
          </p>
        </div>

        {/* Primary stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: '#1e3d26',
          border: '0.5px solid #1e3d26',
          marginBottom: '1px',
          position: 'relative'
        }}>
          {[
            { stat: '$41.9M', label: 'Annual revenue', note: 'At $7/pallet conservative pricing' },
            { stat: '78%',    label: 'Gross profit margin', note: '$32.5M gross profit per year' },
            { stat: '5.9M',   label: 'Pallets per year', note: '20 lines, continuous operation' },
            { stat: '$1.46',  label: 'Cost to produce', note: 'Per pallet, all-in manufacturing cost' },
          ].map(item => (
            <div key={item.stat} style={{ padding: '32px 28px', background: '#0d2218' }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '36px',
                color: '#6dc98a',
                fontWeight: '600',
                letterSpacing: '-0.5px',
                lineHeight: '1',
                marginBottom: '8px'
              }}>
                {item.stat}
              </div>
              <div style={{ fontSize: '12px', color: '#4a7a5a', fontWeight: '300', marginBottom: '4px' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '11px', color: '#2d7a4f', fontStyle: 'italic' }}>
                {item.note}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: '#1e3d26',
          border: '0.5px solid #1e3d26',
          position: 'relative'
        }}>
          {[
            { stat: '1 year',  label: 'Free spare parts', note: 'Included with every license' },
            { stat: '~20 yrs', label: 'Patent protection', note: 'PCT across 158 countries' },
            { stat: '6 weeks', label: 'Operator training', note: 'Full team certification program' },
            { stat: '$15–30',  label: 'Wood pallet cost', note: 'What your customers pay today' },
          ].map(item => (
            <div key={item.stat} style={{ padding: '24px 28px', background: '#091a10' }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '26px',
                color: '#3fa865',
                fontWeight: '600',
                letterSpacing: '-0.5px',
                lineHeight: '1',
                marginBottom: '6px'
              }}>
                {item.stat}
              </div>
              <div style={{ fontSize: '12px', color: '#3d6649', fontWeight: '300', marginBottom: '3px' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '11px', color: '#2d4f38', fontStyle: 'italic' }}>
                {item.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Market Information ───────────────────────────────── */}
      <section style={{
        padding: '64px 40px',
        background: '#ffffff',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={eyebrowLight}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
          The market
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'start'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '32px',
              color: '#0d1f14',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              marginBottom: '8px',
              lineHeight: '1.15'
            }}>
              A $100B industry with no sustainable alternative.
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#5a7a64',
              fontWeight: '300',
              lineHeight: '1.8',
              marginBottom: '28px'
            }}>
              The global pallet market is one of the largest and most demand-inelastic categories in industrial packaging. Every supply chain on earth depends on pallets — and today, nearly all of them are made from wood.
            </p>
            <p style={{
              fontSize: '13px',
              color: '#5a7a64',
              fontWeight: '300',
              lineHeight: '1.8',
              borderLeft: '2px solid #c8dece',
              paddingLeft: '14px'
            }}>
              Regulatory pressure, deforestation concerns, and hygiene requirements in food and pharma are creating a structural shift. FibroCorp is the only production-ready solution at scale.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              {
                label: 'Global pallet market size',
                value: '$100B+',
                sub: 'Annual market, growing at ~4.5% CAGR'
              },
              {
                label: 'Pallets in circulation globally',
                value: '6–8B',
                sub: 'Majority replaced every 1–3 years'
              },
              {
                label: 'US pallet market alone',
                value: '$14B',
                sub: 'Over 1 billion pallets used annually in the US'
              },
              {
                label: 'Wood pallet market share',
                value: '~95%',
                sub: 'Almost no scalable alternative exists today'
              },
              {
                label: 'Food & pharma hygiene requirement',
                value: 'Growing',
                sub: 'FSMA and EU regulations driving non-wood demand'
              },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '16px 18px',
                background: '#f7faf8',
                border: '0.5px solid #c8dece',
                borderRadius: '2px',
                gap: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#0d1f14', fontWeight: '500', marginBottom: '3px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '11px', color: '#6b8c76', fontWeight: '300' }}>
                    {item.sub}
                  </div>
                </div>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '18px',
                  color: '#1f5c38',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.3px'
                }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demand drivers */}
        <div style={{ marginTop: '48px' }}>
          <p style={{ ...eyebrowLight, marginBottom: '20px' }}>
            <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
            Demand drivers
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px'
          }}>
            {[
              {
                title: 'Regulatory tailwinds',
                text: 'ISPM 15, FSMA, and EU timber regulations are restricting untreated wood pallets in cross-border trade and food-contact supply chains.'
              },
              {
                title: 'Deforestation pressure',
                text: 'ESG mandates and corporate sustainability commitments are pushing Fortune 500 procurement teams away from virgin wood products.'
              },
              {
                title: 'Hygiene & contamination',
                text: 'Wood pallets harbor bacteria, mold, and pests. Pharma, food processing, and cold-chain logistics increasingly require cleanroom-safe alternatives.'
              },
            ].map(item => (
              <div key={item.title} style={{
                padding: '24px',
                background: '#f0f7f2',
                border: '0.5px solid #c8dece',
                borderRadius: '2px'
              }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#0d1f14',
                  marginBottom: '8px',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#5a7a64',
                  lineHeight: '1.7',
                  fontWeight: '300'
                }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison vs Wood Pallets ───────────────────────── */}
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
          FibroCorp vs wood
        </p>

        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '32px',
          color: '#e8f5ed',
          fontWeight: '600',
          letterSpacing: '-0.5px',
          marginBottom: '6px',
          position: 'relative'
        }}>
          Every dimension. Side by side.
        </h2>

        <p style={{
          fontSize: '13px',
          color: '#7aab88',
          fontWeight: '300',
          marginBottom: '36px',
          position: 'relative'
        }}>
          The incumbent is cheap to make but expensive to own. FibroCorp inverts the model.
        </p>

        {/* Comparison table */}
        <div style={{ position: 'relative' }}>
          {/* Header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.5fr 1.5fr',
            gap: '1px',
            background: '#1e3d26',
            marginBottom: '1px'
          }}>
            <div style={{ padding: '12px 20px', background: '#0d2218' }} />
            <div style={{
              padding: '12px 20px',
              background: '#122b1a',
              textAlign: 'center',
              fontSize: '11px',
              fontWeight: '600',
              color: '#6dc98a',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              FibroCorp Pallet
            </div>
            <div style={{
              padding: '12px 20px',
              background: '#0d2218',
              textAlign: 'center',
              fontSize: '11px',
              fontWeight: '500',
              color: '#4a7a5a',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Wood Pallet
            </div>
          </div>

          {/* Data rows */}
          {[
            {
              category: 'Cost to produce',
              fibro: '$1.46 per unit',
              wood: '$15–30 per unit',
              fibroGood: true
            },
            {
              category: 'Retail / sell price',
              fibro: '$7–12 per unit',
              wood: '$18–35 per unit',
              fibroGood: true
            },
            {
              category: 'Gross margin',
              fibro: '~78%',
              wood: '~20–35%',
              fibroGood: true
            },
            {
              category: 'Weight',
              fibro: '~3.5 kg (lighter)',
              wood: '~18–25 kg',
              fibroGood: true
            },
            {
              category: 'Load capacity',
              fibro: 'SGS-certified · equivalent to wood',
              wood: 'Standard',
              fibroGood: false
            },
            {
              category: 'Hygiene',
              fibro: 'Non-porous · mold-resistant · food-safe',
              wood: 'Absorbs moisture · harbors bacteria',
              fibroGood: true
            },
            {
              category: 'Pest risk',
              fibro: 'None',
              wood: 'High · requires heat treatment (ISPM 15)',
              fibroGood: true
            },
            {
              category: 'Cross-border compliance',
              fibro: 'No treatment required',
              wood: 'Requires phytosanitary certification',
              fibroGood: true
            },
            {
              category: 'Environmental impact',
              fibro: 'Made from agricultural waste fiber',
              wood: 'Requires virgin timber harvest',
              fibroGood: true
            },
            {
              category: 'End of life',
              fibro: '100% compostable',
              wood: 'Landfill or burn',
              fibroGood: true
            },
            {
              category: 'Customization',
              fibro: 'Fully moldable — size, shape, branding',
              wood: 'Fixed nail-and-board construction',
              fibroGood: true
            },
            {
              category: 'Production control',
              fibro: 'Automated · consistent quality',
              wood: 'Manual · variable quality',
              fibroGood: true
            },
          ].map((row, i) => (
            <div key={row.category} style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1.5fr 1.5fr',
              gap: '1px',
              background: '#1e3d26',
              marginBottom: '1px'
            }}>
              <div style={{
                padding: '16px 20px',
                background: i % 2 === 0 ? '#0d2218' : '#091a10',
                fontSize: '12px',
                color: '#c8e8d4',
                fontWeight: '500'
              }}>
                {row.category}
              </div>
              <div style={{
                padding: '16px 20px',
                background: i % 2 === 0 ? '#112b19' : '#0e2416',
                fontSize: '12px',
                color: '#6dc98a',
                fontWeight: row.fibroGood ? '500' : '300',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                {row.fibroGood && (
                  <span style={{ fontSize: '10px', color: '#3fa865' }}>✓</span>
                )}
                {row.fibro}
              </div>
              <div style={{
                padding: '16px 20px',
                background: i % 2 === 0 ? '#0d2218' : '#091a10',
                fontSize: '12px',
                color: '#4a7a5a',
                fontWeight: '300'
              }}>
                {row.wood}
              </div>
            </div>
          ))}
        </div>

        <p style={{
          fontSize: '11px',
          color: '#2d4f38',
          marginTop: '16px',
          fontStyle: 'italic',
          position: 'relative'
        }}>
          Load capacity and durability figures based on SGS International independent testing. Cost figures derived from Tacoma demonstration factory data.
        </p>
      </section>

      {/* ── What you receive ─────────────────────────────────── */}
      <section style={{
        padding: '64px 40px',
        background: '#ffffff',
        borderBottom: '0.5px solid #c8dece'
      }}>
        <p style={eyebrowLight}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }} />
          What's included
        </p>

        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '28px',
          color: '#0d1f14',
          fontWeight: '600',
          letterSpacing: '-0.5px',
          marginBottom: '8px'
        }}>
          Everything to operate from day one.
        </h2>

        <p style={{
          fontSize: '13px',
          color: '#5a7a64',
          fontWeight: '300',
          lineHeight: '1.7',
          marginBottom: '36px',
          maxWidth: '500px'
        }}>
          A license is not just intellectual property. It's a complete operating system — equipment, training, support, and regional exclusivity.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          border: '0.5px solid #c8dece',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          {[
            {
              num: '01',
              title: 'Patent license',
              items: [
                'PCT protection in 158 countries',
                '~20 years of exclusivity',
                'Regional territory rights',
                'Sub-licensing rights available'
              ]
            },
            {
              num: '02',
              title: 'Production system',
              items: [
                'Production-ready equipment',
                'Full installation support',
                '6-week operator training',
                '1 year free spare parts'
              ]
            },
            {
              num: '03',
              title: 'Business system',
              items: [
                'Proven business plan',
                'Financial model & projections',
                'Sales and customer playbook',
                'Ongoing technical support'
              ]
            }
          ].map((item, index) => (
            <div key={item.num} style={{
              padding: '28px 24px',
              borderRight: index < 2 ? '0.5px solid #c8dece' : 'none',
              background: '#ffffff'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#e8f5ed',
                border: '0.5px solid #c8dece',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: '500',
                color: '#1f5c38',
                marginBottom: '16px'
              }}>
                {item.num}
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0d1f14',
                marginBottom: '14px',
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                {item.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {item.items.map(line => (
                  <div key={line} style={{
                    fontSize: '12px',
                    color: '#5a7a64',
                    fontWeight: '300',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px'
                  }}>
                    <span style={{ fontSize: '10px', color: '#2d7a4f', fontWeight: '500' }}>✓</span>
                    {line}
                  </div>
                ))}
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
              Ready to move forward?
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '28px',
              color: '#e8f5ed',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              marginBottom: '8px'
            }}>
              Bring FibroCorp to your market.
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#7aab88',
              fontWeight: '300',
              maxWidth: '420px',
              lineHeight: '1.6'
            }}>
              Early partners receive preferred licensing terms and first access to new regions. Territories are allocated on a first-conversation basis.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0, alignItems: 'flex-end' }}>
            <a href="/contact" style={{
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
              Request a licensing conversation ↗
            </a>
            <a href="/contact" style={{
              fontSize: '12px',
              fontWeight: '400',
              color: '#7aab88',
              padding: '13px 24px',
              borderRadius: '2px',
              border: '0.5px solid #1e3d26',
              textDecoration: 'none',
              letterSpacing: '0.3px'
            }}>
              Schedule a factory visit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
