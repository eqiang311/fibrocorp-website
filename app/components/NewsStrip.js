'use client'

import { useRef } from 'react'

// ─────────────────────────────────────────────────────────────────
// NEWS DATA
// To add or edit news items, only edit this array.
// Each item renders automatically as a card.
// When the /news page is built, update each item's `href` to its
// individual article URL (e.g. href: '/news/aircargo-2026').
// To pull from a CMS or API later, replace this array with a fetch
// — the card rendering code does not need to change.
// ─────────────────────────────────────────────────────────────────
const NEWS_ITEMS = [
  {
    id: 1,
    tag: 'Events',
    date: '2026',
    headline: 'FibroCorp attends Air Cargo in Orlando 2026',
    summary: 'FibroCorp joins the global air cargo industry at the annual Air Cargo Americas conference in Orlando, showcasing the weight and cost advantages of pulp molded pallets for air freight.',
    href: '/news'
  },
  {
    id: 2,
    tag: 'Technology',
    date: '2026',
    headline: 'Molded fiber equipment is 33% more efficient producing 12ct egg cartons',
    summary: 'Latest equipment optimization delivers a 33% efficiency gain on 12-count egg carton production lines, further reducing unit cost and increasing throughput.',
    href: '/news'
  },
  {
    id: 3,
    tag: 'News',
    date: '2026',
    headline: 'News #3',
    summary: 'Placeholder — update with article content.',
    href: '/news'
  },
  {
    id: 4,
    tag: 'News',
    date: '2026',
    headline: 'News #4',
    summary: 'Placeholder — update with article content.',
    href: '/news'
  },
  {
    id: 5,
    tag: 'News',
    date: '2026',
    headline: 'News #5',
    summary: 'Placeholder — update with article content.',
    href: '/news'
  }
]

export default function NewsStrip() {
  const scrollRef = useRef(null)

  function scrollBy(direction) {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth'
    })
  }

  return (
    <section style={{
      padding: '56px 0 56px',
      background: '#ffffff',
      borderBottom: '0.5px solid #c8dece',
      overflow: 'hidden'
    }}>

      {/* Header row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '0 40px',
        marginBottom: '28px'
      }}>
        <div>
          <p style={{
            fontSize: '10px',
            fontWeight: '500',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#2d7a4f',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
            Latest news
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '28px',
            color: '#0d1f14',
            fontWeight: '600',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}>
            What's happening at FibroCorp.
          </h2>
        </div>

        {/* Controls — arrow buttons + View all link */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexShrink: 0
        }}>
          <button
            onClick={() => scrollBy('left')}
            aria-label="Scroll left"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '0.5px solid #c8dece',
              background: '#f0f7f2',
              color: '#2d7a4f',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            ←
          </button>

          <button
            onClick={() => scrollBy('right')}
            aria-label="Scroll right"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '0.5px solid #c8dece',
              background: '#f0f7f2',
              color: '#2d7a4f',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            →
          </button>

          <a href="/news" style={{
            fontSize: '12px',
            fontWeight: '500',
            color: '#1f5c38',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '0.5px solid #2d7a4f',
            borderRadius: '2px',
            letterSpacing: '0.3px',
            whiteSpace: 'nowrap'
          }}>
            View all news →
          </a>
        </div>
      </div>

      {/* Scrollable card track */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '12px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          padding: '0 40px 16px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {NEWS_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            style={{
              flexShrink: 0,
              width: '300px',
              scrollSnapAlign: 'start',
              background: '#ffffff',
              border: '0.5px solid #c8dece',
              borderTop: '2px solid #2d7a4f',
              borderRadius: '2px',
              padding: '22px 20px',
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(13,31,20,0.08)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '14px'
              }}>
                <span style={{
                  fontSize: '10px',
                  fontWeight: '500',
                  color: '#2d7a4f',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  {item.tag}
                </span>
                <span style={{
                  fontSize: '10px',
                  color: '#6b8c76',
                  fontWeight: '300'
                }}>
                  {item.date}
                </span>
              </div>

              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#0d1f14',
                lineHeight: '1.4',
                marginBottom: '10px',
                letterSpacing: '-0.2px'
              }}>
                {item.headline}
              </div>

              <div style={{
                fontSize: '12px',
                color: '#5a7a64',
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                {item.summary}
              </div>
            </div>

            <div style={{
              fontSize: '11px',
              color: '#2d7a4f',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '20px'
            }}>
              Read more →
            </div>
          </a>
        ))}
      </div>

      {/* Hide scrollbar in webkit browsers */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>

    </section>
  )
}
