export default function StatsBar() {
  const stats = [
    { number: '$1.70', label: 'Cost per pallet vs. $15–30 for wood in USA' },
    { number: '$100B+', label: 'Global pallet industry annual market' },
    { number: '158', label: 'Countries with PCT patent protection' },
    { number: '20+', label: 'Years of pulp molding expertise' },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      background: '#0d2218',
      borderBottom: '0.5px solid #1e3d26'
    }}>
      {stats.map((stat, index) => (
        <div key={index} style={{
          padding: '22px 28px',
          borderRight: index < stats.length - 1 ? '0.5px solid #1e3d26' : 'none'
        }}>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '30px',
            color: '#6dc98a',
            lineHeight: '1',
            fontWeight: '600',
            letterSpacing: '-0.5px'
          }}>
            {stat.number}
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
      ))}
    </div>
  )
}