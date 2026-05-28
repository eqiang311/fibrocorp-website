export default function Qualifier() {
  return (
    <section style={{
      padding: '48px 40px',
      background: '#ffffff',
      borderBottom: '0.5px solid #c8dece'
    }}>
      <div style={{ maxWidth: '620px' }}>
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
          Is this right for you?
        </p>

        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '24px',
          color: '#0d1f14',
          fontWeight: '600',
          letterSpacing: '-0.5px',
          marginBottom: '16px'
        }}>
          We partner with operators who are ready to move.
        </h2>

        <p style={{
          fontSize: '14px',
          color: '#3a4a3f',
          lineHeight: '1.8',
          fontWeight: '300'
        }}>
          FibroCorp works best with{' '}
          <strong style={{ fontWeight: '500', color: '#0d1f14' }}>
            manufacturers looking to add a high-margin revenue stream
          </strong>
          , and{' '}
          <strong style={{ fontWeight: '500', color: '#0d1f14' }}>
            entrepreneurs with access to capital
          </strong>
          {' '}ready to enter markets with proven, existing demand. We operate
          globally — if your market has waste paper and pallet demand, we can
          build there.
        </p>
      </div>
    </section>
  )
}
