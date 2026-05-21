export default function Validation() {
  return (
    <section style={{
      padding: '56px 40px',
      background: '#ffffff',
      borderBottom: '0.5px solid #c8dece'
    }}>
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
                date: 'January 20',
                title: 'Paul Zhang Day',
                text: 'Washington State officially declared Paul Zhang Day in recognition of FibroCorp\'s environmental contribution.'
              },
              {
                date: 'U.S. Congress',
                title: 'Senate Recognition',
                text: 'Formally endorsed by U.S. senators for environmental and economic significance.'
              },
              {
                date: 'International',
                title: 'Diplomatic Visits',
                text: 'Government officials from South Korea, Saudi Arabia, and Egypt have visited our Tacoma facility.'
              }
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