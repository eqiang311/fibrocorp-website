'use client'

import { useState } from 'react'

const marketData = {
  us: {
    label: "United States",
    unitCost: "$1.73",
    grossMargin: "75.2%",
    marginPct: 75.2,
    payback: "5.8 months",
    roi: "2.08x ROI",
    annualProfit: "$31.5M",
    insight: "Lowest waste paper cost ($63/T) and established recycling infrastructure give U.S. operators a strong material cost advantage. Carbon credits (WA State ETS at $70.86/T) add an emerging upside revenue stream."
  },
  eg: {
    label: "Egypt",
    unitCost: "$2.77",
    grossMargin: "60.5%",
    marginPct: 60.5,
    payback: "7.2 months",
    roi: "1.67x ROI",
    annualProfit: "$25.3M",
    insight: "Ultra-low labor ($1.06/hr) and energy costs make Egypt highly competitive. With local waste paper sourcing at $50–90/T, actual margins could significantly exceed this model."
  },
  mx: {
    label: "Mexico",
    unitCost: "$1.64",
    grossMargin: "76.5%",
    marginPct: 76.5,
    payback: "5.7 months",
    roi: "2.11x ROI",
    annualProfit: "$32.1M",
    insight: "Mexico offers the strongest gross margin (76.5%) and fastest payback (5.7 months) of the three markets. Nearshoring demand from U.S. companies is driving rapid logistics expansion."
  }
}

const gridBg = {
  position: 'absolute',
  inset: 0,
  backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
  backgroundSize: '32px 32px',
  pointerEvents: 'none'
}

export default function MarketExplorer() {
  const [active, setActive] = useState('us')
  const [visible, setVisible] = useState(true)
  const [hovered, setHovered] = useState(null)

  function switchCountry(key) {
    if (key === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(key)
      setVisible(true)
    }, 220)
  }

  const data = marketData[active]

  const cardStyle = {
    padding: '24px',
    background: '#0d2218',
    border: '0.5px solid #1e3d26',
    borderRadius: '2px'
  }

  const cardLabelStyle = {
    fontSize: '11px',
    fontWeight: '500',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#3d6649',
    marginBottom: '10px'
  }

  const cardValueStyle = {
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '34px',
    color: '#6dc98a',
    fontWeight: '600',
    letterSpacing: '-0.5px',
    lineHeight: '1',
    marginBottom: '8px'
  }

  const cardSubtextStyle = {
    fontSize: '12px',
    color: '#4a7a5a',
    fontWeight: '300',
    lineHeight: '1.5'
  }

  const tagStyle = {
    display: 'inline-block',
    marginTop: '10px',
    fontSize: '11px',
    fontWeight: '500',
    color: '#6dc98a',
    background: '#122b1a',
    border: '0.5px solid #1e3d26',
    borderRadius: '2px',
    padding: '3px 8px',
    letterSpacing: '0.03em'
  }

  return (
    <section style={{
      padding: '64px 40px',
      background: '#0a1a0f',
      borderBottom: '0.5px solid #1e3d26',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={gridBg} />

      {/* Header row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '36px',
        position: 'relative'
      }}>
        <div>
          <p style={{
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#3fa865',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }} />
            Market intelligence
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '37px',
            color: '#e8f5ed',
            fontWeight: '600',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}>
            Global opportunity explorer
          </h2>
        </div>

        {/* Globe icon circle */}
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: '#122b1a',
          border: '0.5px solid #1e3d26',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3fa865" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
      </div>

      {/* Country toggle buttons */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '28px',
        position: 'relative'
      }}>
        {Object.entries(marketData).map(([key, val]) => {
          const isActive = key === active
          const isHov = hovered === key && !isActive
          return (
            <button
              key={key}
              onClick={() => switchCountry(key)}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '13px',
                fontWeight: isActive ? '500' : '400',
                color: isActive ? '#f0f7f2' : isHov ? '#c8e8d4' : '#4a7a5a',
                background: isActive ? '#0a1a0f' : isHov ? '#122b1a' : 'transparent',
                border: isActive ? '0.5px solid #2d7a4f' : isHov ? '0.5px solid #2d7a4f80' : '0.5px solid #1e3d26',
                borderRadius: '2px',
                padding: '8px 20px',
                cursor: 'pointer',
                transition: 'background 0.15s ease, color 0.15s ease, border-color 0.15s ease'
              }}
            >
              {val.label}
            </button>
          )
        })}
      </div>

      {/* Animated data panel */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(4px)',
        transition: 'opacity 0.22s ease, transform 0.22s ease',
        position: 'relative'
      }}>
        {/* Row 1 — three cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          marginBottom: '10px'
        }}>
          {/* Card 1 — Cost to produce */}
          <div style={cardStyle}>
            <div style={cardLabelStyle}>Cost to produce</div>
            <div style={cardValueStyle}>{data.unitCost}</div>
            <div style={cardSubtextStyle}>All-in per pallet</div>
          </div>

          {/* Card 2 — Gross margin */}
          <div style={cardStyle}>
            <div style={cardLabelStyle}>Gross margin</div>
            <div style={cardValueStyle}>{data.grossMargin}</div>
            <div style={{
              height: '6px',
              background: '#1e3d26',
              borderRadius: '1px',
              marginTop: '10px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${data.marginPct}%`,
                background: '#2d7a4f',
                borderRadius: '1px',
                transition: 'width 0.4s ease'
              }} />
            </div>
          </div>

          {/* Card 3 — Payback period */}
          <div style={cardStyle}>
            <div style={cardLabelStyle}>Payback period</div>
            <div style={cardValueStyle}>{data.payback}</div>
            <div style={cardSubtextStyle}>To recoup $15.2M investment</div>
            <span style={tagStyle}>{data.roi}</span>
          </div>
        </div>

        {/* Row 2 — two cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
          marginBottom: '20px'
        }}>
          {/* Card 1 — Annual revenue */}
          <div style={cardStyle}>
            <div style={cardLabelStyle}>Annual revenue</div>
            <div style={cardValueStyle}>$41.9M</div>
            <div style={cardSubtextStyle}>5.99M pallets x $7</div>
          </div>

          {/* Card 2 — Annual gross profit */}
          <div style={cardStyle}>
            <div style={cardLabelStyle}>Annual gross profit</div>
            <div style={cardValueStyle}>{data.annualProfit}</div>
            <div style={cardSubtextStyle}>Per production unit / yr</div>
            <span style={tagStyle}>{data.roi}</span>
          </div>
        </div>

        {/* Insight callout */}
        <div style={{
          borderLeft: '2px solid #2d7a4f',
          borderTop: '0.5px solid #1e3d26',
          borderRight: '0.5px solid #1e3d26',
          borderBottom: '0.5px solid #1e3d26',
          borderRadius: '0 2px 2px 0',
          padding: '18px 20px',
          background: '#0d2218'
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#3fa865',
            marginBottom: '8px'
          }}>
            Market insight — {data.label}
          </p>
          <p style={{
            fontSize: '14px',
            color: '#6b8c76',
            lineHeight: '1.75',
            fontWeight: '300'
          }}>
            {data.insight}
          </p>
        </div>
      </div>
    </section>
  )
}
