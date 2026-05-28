export default function Validation() {
  return (
    <section style={{
      padding: '56px 40px',
      background: '#ffffff',
      borderBottom: '0.5px solid #c8dece'
    }}>

      {/* Customer bar */}
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
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            'Walmart', 'Costco', 'Kroger', 'Safeway', 'Target',
            "Trader Joe's", 'Fred Meyer', 'Wilcox Farms', 'Hickman', 'Rose Acre'
          ].map(name => (
            <span key={name} style={{
              fontSize: '12px',
              fontWeight: '500',
              color: '#0d1f14',
              padding: '7px 14px',
              border: '0.5px solid #c8dece',
              borderRadius: '2px',
              background: '#f0f7f2'
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'start'
      }}>

        {/* Left — Certifications */}
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

        {/* Right — Hall of Recognition */}
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
            Hall of recognition
          </p>
          <h2 style={{
            fontSize: '28px',
            color: '#0d1f14',
            marginBottom: '24px',
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.5px'
          }}>
            When governments<br />take notice.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              {
                date: 'January 20, 2025',
                title: 'Paul Zhang Day',
                text: 'King County Executive Dow Constantine declared January 20th Paul Zhang Day. Later adopted by seven other cities in Washington State.'
              },
              {
                date: 'Washington State',
                title: "Governor Bob Ferguson's visit",
                text: 'Governor and his team visited the Tacoma facility for live pallet performance testing.'
              },
              {
                date: 'U.S. Congress',
                title: 'Congressman Adam Smith',
                text: 'Visited the Tacoma facility. Formally endorsed for environmental and economic significance.'
              },
              {
                date: 'City Leaders',
                title: 'Five mayors + Port Commissioner',
                text: 'Mayors of Seattle, Tacoma, Bellevue, Renton, and Tukwila — plus Port of Seattle Commissioner Sam Cho.'
              },
              {
                date: 'International',
                title: 'Diplomatic engagement',
                text: 'Government delegations from South Korea, Saudi Arabia, and Egypt have visited the Tacoma facility.'
              },
            ].map((item) => (
              <div key={item.title} style={{
                padding: '16px',
                background: '#f0f7f2',
                border: '0.5px solid #c8dece',
                borderTop: '2px solid #2d7a4f',
                borderRadius: '2px'
              }}>
                <div style={{
                  fontSize: '10px',
                  fontWeight: '500',
                  color: '#2d7a4f',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '4px'
                }}>
                  {item.date}
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#0d1f14',
                  marginBottom: '4px'
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#5a7a64',
                  lineHeight: '1.5',
                  fontWeight: '300'
                }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
