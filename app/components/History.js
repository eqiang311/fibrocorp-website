export default function History() {
  return (
    <section style={{
      padding: '56px 40px',
      borderBottom: '0.5px solid #c8dece',
      background: '#ffffff'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'start'
      }}>

        {/* Left column — story */}
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
            Our story
          </p>
          <h2 style={{
            fontSize: '28px',
            color: '#0d1f14',
            marginBottom: '24px',
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.5px'
          }}>
            Built on decades.<br />Driven by waste.
          </h2>
          <div style={{
            fontSize: '13px',
            lineHeight: '1.9',
            color: '#3a4a3f',
            fontWeight: '300'
          }}>
            <p style={{ marginBottom: '14px' }}>
              FibroCorp's roots run deeper than pallets. We began in paper manufacturing — learning the industry from the inside, redirecting heat from production plants to warm entire cities, and planting trees to offset what the process consumed.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Over the last 20 years, that hands-on experience led us to a single question: what happens to all the waste? Through two decades of R&D in pulp molding, we developed processes that turn waste paper into high-performance products — egg cartons, fruit trays, wine carriers — each replacing a material that didn't need to exist.
            </p>
            <p>
              Our latest innovation is our most consequential: a PCT-patented, SGS-certified molded fiber pallet that outperforms wood economically and environmentally — built for a $100B+ industry that has never had a truly sustainable alternative. Until now.
            </p>
          </div>
          <a href="/contact" style={{
            display: 'inline-block',
            marginTop: '24px',
            fontSize: '12px',
            fontWeight: '500',
            background: '#1f5c38',
            color: '#e8f5ed',
            padding: '12px 22px',
            borderRadius: '2px',
            border: '0.5px solid #2d7a4f',
            textDecoration: 'none',
            letterSpacing: '0.5px'
          }}>
            Inquire about licensing ↗
          </a>
        </div>

        {/* Right column — founders + global presence */}
        <div>
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
            Founded by
          </p>

          {/* Founder cards */}
          {[
            { initials: 'PZ', name: 'Paul Zhang', title: 'President & Founder — 20+ years in pulp molding' },
            { initials: 'SZ', name: 'Sharon Zhang', title: 'Vice President & Co-Founder' }
          ].map((founder) => (
            <div key={founder.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px 16px',
              background: '#f0f7f2',
              border: '0.5px solid #c8dece',
              borderRadius: '2px',
              marginBottom: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '2px',
                background: '#1a3d24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                fontWeight: '500',
                color: '#6dc98a',
                flexShrink: 0
              }}>
                {founder.initials}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: '500', color: '#0d1f14' }}>{founder.name}</div>
                <div style={{ fontSize: '11px', color: '#6b8c76', fontWeight: '300' }}>{founder.title}</div>
              </div>
            </div>
          ))}

          {/* Global presence */}
          <div style={{
            marginTop: '16px',
            padding: '14px 16px',
            background: '#f0f7f2',
            border: '0.5px solid #c8dece',
            borderRadius: '2px'
          }}>
            <div style={{
              fontSize: '10px',
              fontWeight: '500',
              color: '#2d7a4f',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '10px'
            }}>
              Global presence
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['South Korea', 'Saudi Arabia', 'Egypt', 'United States'].map((country) => (
                <span key={country} style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  background: '#e8f5ed',
                  color: '#1f5c38',
                  borderRadius: '2px',
                  fontWeight: '500',
                  letterSpacing: '0.3px',
                  border: '0.5px solid #c8dece'
                }}>
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}