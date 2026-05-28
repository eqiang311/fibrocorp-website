export default function Validation() {
  const tickerStyle = `
    @keyframes ticker {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .ticker-track {
      animation: ticker 28s linear infinite;
      display: flex;
      width: max-content;
    }
    .ticker-track:hover {
      animation-play-state: paused;
    }
  `

  return (
    <section style={{
      padding: '56px 40px',
      background: '#ffffff',
      borderBottom: '0.5px solid #c8dece'
    }}>

      {/* Ticker styles */}
      <style>{tickerStyle}</style>

      {/* Customer ticker */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{
          fontSize: '10px',
          fontWeight: '500',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#2d7a4f',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ display: 'block', width: '16px', height: '1px', background: '#2d7a4f' }}></span>
          Trusted by
        </p>

        {/* Overflow container — clips the ticker */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div className="ticker-track">
            {[...Array(2)].map((_, copyIndex) => (
              <div
                key={copyIndex}
                style={{ display: 'flex', gap: '8px', paddingRight: '8px' }}
              >
                {[
                  'Walmart', 'Costco', 'Kroger', 'Safeway', 'Target',
                  "Trader Joe's", 'Fred Meyer', 'Wilcox Farms', 'Hickman', 'Rose Acre'
                ].map(name => (
                  <span key={name} style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#0d1f14',
                    padding: '7px 16px',
                    border: '0.5px solid #c8dece',
                    borderRadius: '2px',
                    background: '#f0f7f2',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}>
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications — single column */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        maxWidth: '600px'
      }}>
        <div>
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
            Validation
          </p>
          <h2 style={{
            fontSize: '28px',
            color: '#0d1f14',
            marginBottom: '8px',
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.5px'
          }}>
            Certified.<br />Recognized. Trusted.
          </h2>
          <p style={{
            fontSize: '13px',
            color: '#5a7a64',
            marginBottom: '28px',
            lineHeight: '1.7',
            fontWeight: '300'
          }}>
            Independently validated at the highest international standards and recognized by governments worldwide.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              {
                title: 'SGS International',
                text: 'Load capacity, durability, and environmental performance independently certified.'
              },
              {
                title: 'PCT — 158 Countries',
                text: '~20 years of international patent protection across 158 countries.'
              }
            ].map((cert) => (
              <div key={cert.title} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px',
                background: '#f0f7f2',
                border: '0.5px solid #c8dece',
                borderRadius: '2px'
              }}>
                <div style={{ fontSize: '18px', color: '#2d7a4f', flexShrink: 0 }}>✦</div>
                <div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#0d1f14',
                    marginBottom: '4px'
                  }}>
                    {cert.title}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: '#6b8c76',
                    lineHeight: '1.5',
                    fontWeight: '300'
                  }}>
                    {cert.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
