'use client'

export default function Recognition() {
  const items = [
    {
      date: 'January 20, 2025',
      title: 'Paul Zhang Day',
      text: "King County Executive Dow Constantine declared January 20th Paul Zhang Day in recognition of FibroCorp's environmental contribution. Later adopted by seven other cities in Washington State.",
      color: '#0d2218',
      textColor: '#e8f5ed',
      subColor: '#7aab88',
      accentColor: '#6dc98a'
    },
    {
      date: 'Washington State',
      title: "Governor Bob Ferguson's visit",
      text: 'Governor Bob Ferguson and his team visited the FibroCorp Tacoma facility for a live demonstration of pallet performance testing — load bearing, waterproofing, and forklift stress tests.',
      color: '#0f2d1c',
      textColor: '#e8f5ed',
      subColor: '#7aab88',
      accentColor: '#6dc98a'
    },
    {
      date: 'U.S. Congress',
      title: 'Congressman Adam Smith',
      text: 'U.S. Congressman Adam Smith visited the facility and formally endorsed FibroCorp for its environmental and economic significance to Washington State.',
      color: '#1a3d28',
      textColor: '#e8f5ed',
      subColor: '#9abba6',
      accentColor: '#6dc98a'
    },
    {
      date: 'City leaders',
      title: 'Five mayors + Port Commissioner',
      text: 'Mayors of Seattle, Tacoma, Bellevue, Renton, and Tukwila — along with Port of Seattle Commissioner Sam Cho — have each visited the Tacoma facility.',
      color: '#234d34',
      textColor: '#e8f5ed',
      subColor: '#9abba6',
      accentColor: '#a8dbb8'
    },
    {
      date: 'International',
      title: 'Diplomatic engagement',
      text: 'Government delegations from South Korea, Saudi Arabia, and Egypt have visited the Tacoma facility. Paul Zhang met with the Korean Consul General in Seattle.',
      color: '#2d6040',
      textColor: '#e8f5ed',
      subColor: '#b8cfc0',
      accentColor: '#c8e8d0'
    }
  ]

  const CARD_HEIGHT = 280
  const TOP_OFFSET  = 80

  return (
    <section style={{
      padding: '56px 40px 0',
      background: '#ffffff',
      borderBottom: '0.5px solid #c8dece'
    }}>

      <p style={{
        fontSize: '10px',
        fontWeight: '500',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#2d7a4f',
        marginBottom: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
        Hall of recognition
      </p>

      <h2 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '28px',
        color: '#0d1f14',
        fontWeight: '600',
        letterSpacing: '-0.5px',
        marginBottom: '8px'
      }}>
        When governments take notice.
      </h2>

      <p style={{
        fontSize: '13px',
        color: '#5a7a64',
        fontWeight: '300',
        lineHeight: '1.7',
        marginBottom: '48px',
        maxWidth: '480px'
      }}>
        FibroCorp has earned recognition from elected officials, government
        agencies, and diplomatic delegations across three continents.
      </p>

      {/* Sticky stack container */}
      <div style={{
        position: 'relative',
        paddingBottom: `${items.length * TOP_OFFSET + 80}px`
      }}>
        {items.map((item, index) => (
          <div
            key={item.title}
            style={{
              position: 'sticky',
              top: `${TOP_OFFSET * index + 80}px`,
              height: `${CARD_HEIGHT}px`,
              marginBottom: '0',
              zIndex: index + 1,
              borderRadius: '12px',
              background: item.color,
              padding: '36px 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transform: `scale(${1 - index * 0.02})`,
              transformOrigin: 'top center',
              overflow: 'hidden'
            }}
          >
            {/* Subtle grid overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              pointerEvents: 'none',
              borderRadius: '12px'
            }} />

            <div style={{ position: 'relative' }}>
              <p style={{
                fontSize: '10px',
                fontWeight: '500',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: item.accentColor,
                marginBottom: '12px'
              }}>
                {item.date}
              </p>

              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '22px',
                fontWeight: '600',
                color: item.textColor,
                letterSpacing: '-0.3px',
                marginBottom: '14px',
                lineHeight: '1.2'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '13px',
                color: item.subColor,
                lineHeight: '1.7',
                fontWeight: '300',
                maxWidth: '520px'
              }}>
                {item.text}
              </p>
            </div>

            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '11px',
                color: item.accentColor,
                opacity: 0.6,
                fontWeight: '300',
                letterSpacing: '1px'
              }}>
                {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
