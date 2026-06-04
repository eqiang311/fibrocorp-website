'use client'
import { useState } from 'react'

const CO2_PER_PALLET      = 12877711 / 419440000
const TREES_PER_PALLET    = 17956418 / 419440000
const LANDFILL_PER_PALLET = 7760000  / 419440000
const WATER_PER_PALLET    = 3736.1465856 / 149760

function fmt(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(2) + 'M'
  if (n >= 1000)    return Math.round(n).toLocaleString()
  return n.toFixed(1)
}

const LeafIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6dc98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
)

const CloudIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6dc98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
  </svg>
)

const TreeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6dc98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12"/>
    <path d="M12 12 8 8"/>
    <path d="M12 12l4-4"/>
    <path d="M5 8h14"/>
    <path d="M3 12h18"/>
    <path d="M7 4h10l2 4H5l2-4z"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6dc98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
    <path d="M10 11v6"/>
    <path d="M14 11v6"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
)

const DropletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6dc98a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)

export default function EcoCalculator() {
  const [pallets, setPallets] = useState(5000000)
  const [tick, setTick] = useState(0)

  function handleChange(e) {
    setPallets(e.target.value === '' ? '' : Number(e.target.value))
    setTick(t => t + 1)
  }

  const display = (constant) => {
    const p = Number(pallets)
    if (!p || p <= 0) return '—'
    return fmt(p * constant)
  }

  const cards = [
    { label: 'CO2 prevented',        Icon: CloudIcon,   value: display(CO2_PER_PALLET),      sub: 'metric tons / yr' },
    { label: 'Trees saved',           Icon: TreeIcon,    value: display(TREES_PER_PALLET),    sub: 'trees / yr' },
    { label: 'Landfill waste reduced',Icon: TrashIcon,   value: display(LANDFILL_PER_PALLET), sub: 'metric tons / yr' },
    { label: 'Wastewater treated',    Icon: DropletIcon, value: display(WATER_PER_PALLET),    sub: 'metric tons / yr' },
  ]

  return (
    <div>

      {/* Header row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '28px'
      }}>
        <div>
          <p style={{
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#4a7a5a',
            marginBottom: '6px'
          }}>
            Environmental impact
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '28px',
            fontWeight: '600',
            color: '#e8f5ed',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}>
            Impact calculator
          </h2>
        </div>

        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: '#0a1a0f',
          border: '0.5px solid #1e3d26',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <LeafIcon />
        </div>
      </div>

      {/* Input row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 18px',
        background: '#0d2218',
        border: '0.5px solid #1e3d26',
        borderRadius: '2px',
        marginBottom: '12px'
      }}>
        <span style={{ fontSize: '13px', color: '#4a7a5a', flexShrink: 0 }}>Pallets replaced</span>
        <input
          type="number"
          min="1"
          step="1000"
          value={pallets}
          onChange={handleChange}
          style={{
            flex: 1,
            fontSize: '20px',
            fontWeight: '500',
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#e8f5ed',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            textAlign: 'center'
          }}
        />
        <span style={{ fontSize: '13px', color: '#4a7a5a', flexShrink: 0 }}>pallets / yr</span>
      </div>

      {/* Output cards 2×2 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '16px'
      }}>
        {cards.map(({ label, Icon, value, sub }) => (
          <div key={label} style={{
            padding: '20px',
            background: '#0d2218',
            border: '0.5px solid #1e3d26',
            borderRadius: '2px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              marginBottom: '10px'
            }}>
              <Icon />
              <span style={{
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#4a7a5a'
              }}>
                {label}
              </span>
            </div>
            <div
              key={tick}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '32px',
                fontWeight: '600',
                color: '#6dc98a',
                letterSpacing: '-0.5px',
                lineHeight: '1',
                marginBottom: '4px',
                animation: 'ecoFlash 0.2s ease'
              }}
            >
              {value}
            </div>
            <div style={{ fontSize: '11px', color: '#3fa865', fontWeight: '300' }}>
              {sub}
            </div>
          </div>
        ))}
      </div>

      {/* Source note */}
      <div style={{
        paddingTop: '12px',
        borderTop: '0.5px solid #1e3d26'
      }}>
        <p style={{ fontSize: '11px', color: '#2d4f38', lineHeight: '1.6', fontWeight: '300' }}>
          Benchmarks sourced from Kamps Inc Corporate Social Responsibility Report 2025 (419.4M pallets recycled; 12.9M tons CO2 prevented; 18.0M trees saved; 7.8M tons landfill reduced). Wastewater calculated at 24.95 kg evaporated per pallet based on FibroCorp production data.
        </p>
      </div>
    </div>
  )
}
