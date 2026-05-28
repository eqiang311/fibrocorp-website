import GlobeSection from './GlobeSection'

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
            Built on decades<br />Driven by waste
          </h2>
          <div style={{
            fontSize: '13px',
            lineHeight: '1.9',
            color: '#3a4a3f',
            fontWeight: '300'
          }}>
            <p style={{ marginBottom: '14px' }}>
              FibroCorp's roots run deeper than pallets. We began in paper manufacturing, learning the industry from the inside, redirecting heat from production plants to warm entire cities, and planting trees to offset what the process consumed.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Over the last 20 years, that hands on experience led us to a single question: what happens to all the waste? Through two decades of R&D in pulp molding, we developed processes that turn waste paper into high performance products, egg cartons, fruit trays, wine carriers, each replacing a material that didn't need to exist.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Our latest innovation is our most consequential: a PCT patented, SGS certified molded fiber pallet that outperforms wood economically and environmentally, built for a $100B+ industry that has never had a truly sustainable alternative. Until now.
            </p>
            <p style={{ marginBottom: '14px' }}>
              Demonstration factories are now operating in Tacoma, Washington and Cairo, Egypt — validating both the technology and the economic model in real-world conditions. Conversations are active across multiple regions. First-market partners receive preferred licensing terms, dedicated installation support, and priority access to new territories.
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
            { name: 'Paul Zhang', title: 'President & Founder — 45 years experience, 40+ patents' },
            { name: 'Sharon Zhang', title: 'Vice President & Co Founder' }
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
              <img
                src="/User /user-3296.svg"
                alt={founder.name}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '2px',
                  objectFit: 'cover',
                  flexShrink: 0
                }}
              />
              <div>
                <div style={{ fontSize: '13px', fontWeight: '500', color: '#0d1f14' }}>{founder.name}</div>
                <div style={{ fontSize: '11px', color: '#6b8c76', fontWeight: '300' }}>{founder.title}</div>
              </div>
            </div>
          ))}

          <p style={{ fontSize: '12px', color: '#5a7a64', lineHeight: '1.7', fontWeight: '300', marginTop: '16px', marginBottom: '24px' }}>
            Paul Zhang began his entrepreneurial journey in the United States in 1990. Over 45 years, he has obtained more than 40 patents across environmental protection technology and industrial manufacturing — earning recognition from Washington State governors, U.S. senators, and government leaders across three continents.
          </p>

          <GlobeSection />
        </div>

      </div>
    </section>
  )
}