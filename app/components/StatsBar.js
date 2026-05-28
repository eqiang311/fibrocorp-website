export default function StatsBar() {
  const stats = [
    { number: '214%',   label: 'Annual ROI on a 20-line unit' },
    { number: '5.6mo',  label: 'Investment payback period' },
    { number: '$1.70',  label: 'Cost per pallet vs. $15–30 for wood' },
    { number: 'SGS',    label: 'Independently certified — load, durability, waterproofing' },
    { number: '$100B+', label: 'Global pallet market size' },
    { number: '158',    label: 'Countries with PCT patent protection' },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
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