'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function useCountUp(target, duration = 1800, startCounting) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!startCounting) return
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [startCounting, target, duration])

  return value
}

function StatItem({ stat, index, started, isLast }) {
  const isNumeric = !isNaN(parseFloat(stat.rawNumber))
  const count = useCountUp(
    isNumeric ? parseFloat(stat.rawNumber) : 0,
    1600 + index * 100,
    started
  )

  function formatValue() {
    if (!isNumeric) return stat.number
    if (!started) return stat.prefix || ''
    const formatted = stat.decimals
      ? count.toFixed(stat.decimals)
      : count.toLocaleString()
    return `${stat.prefix || ''}${formatted}${stat.suffix || ''}`
  }

  return (
    <div style={{
      padding: '22px 28px',
      borderRight: !isLast ? '0.5px solid #1e3d26' : 'none',
      opacity: started ? 1 : 0,
      transform: started ? 'translateY(0)' : 'translateY(8px)',
      transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`
    }}>
      <div style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '30px',
        color: '#6dc98a',
        lineHeight: '1',
        fontWeight: '600',
        letterSpacing: '-0.5px'
      }}>
        {formatValue()}
      </div>
      <div style={{
        fontSize: '11px',
        color: '#4a7a5a',
        marginTop: '5px',
        lineHeight: '1.4',
        fontWeight: '300'
      }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    { number: '214%',   rawNumber: '214',  suffix: '%',   label: 'Annual ROI on a 20-line unit' },
    { number: '5.6mo',  rawNumber: '5.6',  decimals: 1, suffix: 'mo', label: 'Investment payback period' },
    { number: '$1.70',  rawNumber: '1.70', prefix: '$', decimals: 2,  label: 'Cost per pallet vs. $15–30 for wood' },
    { number: 'SGS',    rawNumber: 'SGS',  label: 'Independently certified — load, durability, waterproofing' },
    { number: '$100B+', rawNumber: '100',  prefix: '$', suffix: 'B+', label: 'Global pallet market size' },
    { number: '158',    rawNumber: '158',  label: 'Countries with PCT patent protection' },
  ]

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        background: '#0d2218',
        borderBottom: '0.5px solid #1e3d26'
      }}
    >
      {stats.map((stat, index) => (
        <StatItem
          key={stat.number}
          stat={stat}
          index={index}
          started={isInView}
          isLast={index === stats.length - 1}
        />
      ))}
    </div>
  )
}
