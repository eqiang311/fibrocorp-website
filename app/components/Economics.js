export default function Economics() {
  const numbers = [
    { stat: '$41.9M', label: 'Annual revenue', note: 'At $7/pallet conservative pricing' },
    { stat: '78%',    label: 'Gross profit margin', note: '$32.5M gross profit per year' },
    { stat: '5.9M',   label: 'Pallets produced per year', note: '20 lines, continuous operation' },
    { stat: '$1.46',  label: 'Cost to produce one pallet', note: 'vs. $15–30 for wood' },
  ]

  return (
    <section style={{
      padding: '56px 40px',
      background: '#0a1a0f',
      borderTop: '0.5px solid #1e3d26',
      borderBottom: '0.5px solid #1e3d26',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none'
      }} />

      <p style={{
        fontSize: '10px',
        fontWeight: '500',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#3fa865',
        marginBottom: '12px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }}></span>
        The economics
      </p>

      <h2 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '28px',
        color: '#e8f5ed',
        fontWeight: '600',
        letterSpacing: '-0.5px',
        marginBottom: '6px',
        position: 'relative'
      }}>
        What a 20-line operation looks like.
      </h2>

      <p style={{
        fontSize: '13px',
        color: '#7aab88',
        fontWeight: '300',
        marginBottom: '32px',
        position: 'relative'
      }}>
        Based on real data from the Tacoma demonstration factory. Conservative estimates.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: '#1e3d26',
        border: '0.5px solid #1e3d26',
        position: 'relative'
      }}>
        {numbers.map((item) => (
          <div key={item.stat} style={{
            padding: '28px 24px',
            background: '#0d2218'
          }}>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '32px',
              color: '#6dc98a',
              fontWeight: '600',
              letterSpacing: '-0.5px',
              lineHeight: '1',
              marginBottom: '8px'
            }}>
              {item.stat}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#4a7a5a',
              fontWeight: '300',
              marginBottom: '4px'
            }}>
              {item.label}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#2d7a4f',
              fontStyle: 'italic'
            }}>
              {item.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
