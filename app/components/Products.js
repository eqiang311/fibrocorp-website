export default function Products() {

  const mainProducts = [
    {
      badge: 'Early mover advantage',
      badgeStyle: { background: '#faeeda', color: '#633806', border: '0.5px solid #f0d8b4' },
      title: 'Pallet Production Business',
      market: "Over 90% of the world's 12.7 billion pallets are still made from wood. FibroCorp's pallet costs $1.70 to produce vs. $15–30 for wood — and outperforms it on weight, waterproofing, and recyclability. The industry is changing. First-market partners lead it.",
      stats: [
        { number: '$100B+', label: 'Global market' },
        { number: '5.9M',   label: 'Pallets/year (20 lines)' },
        { number: '78%',    label: 'Gross margin' },
      ],
      link: 'Explore the pallet business →',
      href: '/products/pallets'
    },
    {
      badge: 'Proven & operating',
      badgeStyle: { background: '#e8f5ed', color: '#1f5c38', border: '0.5px solid #c8dece' },
      title: 'Molded Fiber Business',
      market: "Walmart, Costco, Kroger, Safeway, Target, and Trader Joe's already buy products made on this machine. Egg cartons, fruit trays, wine carriers, electronic trays — one production line, multiple revenue streams. Demand is not a question.",
      stats: [
        { number: '$25B+', label: 'Molded fiber market' },
        { number: '10+',   label: 'Product types' },
        { number: '70%',   label: 'Gross margin' },
      ],
      link: 'Explore the molded fiber business →',
      href: '/products/molded-fiber'
    }
  ]

  return (
    <section style={{
      padding: '56px 40px',
      background: '#f0f7f2',
      borderBottom: '0.5px solid #c8dece'
    }}>

      {/* Eyebrow */}
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
        Two businesses
      </p>

      {/* Headline */}
      <h2 style={{
        fontSize: '28px',
        color: '#0d1f14',
        marginBottom: '8px',
        lineHeight: '1.2',
        fontWeight: '600',
        letterSpacing: '-0.5px'
      }}>
        Choose your path.
      </h2>

      {/* Sub-headline */}
      <p style={{
        fontSize: '13px',
        color: '#5a7a64',
        marginBottom: '32px',
        maxWidth: '500px',
        lineHeight: '1.7',
        fontWeight: '300'
      }}>
        Same proven system. Two of the world's largest markets. Both use waste
        paper as raw material.
      </p>

      {/* Two main product cards — side by side */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginBottom: '12px'
      }}>
        {mainProducts.map((product) => (
          <div key={product.title} style={{
            background: '#ffffff',
            border: '0.5px solid #c8dece',
            borderRadius: '2px',
            padding: '24px 20px'
          }}>

            {/* Badge */}
            <div style={{
              display: 'inline-block',
              fontSize: '10px',
              fontWeight: '500',
              padding: '3px 8px',
              borderRadius: '2px',
              marginBottom: '14px',
              letterSpacing: '0.3px',
              ...product.badgeStyle
            }}>
              {product.badge}
            </div>

            {/* Title */}
            <div style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#0d1f14',
              marginBottom: '10px',
              letterSpacing: '-0.2px'
            }}>
              {product.title}
            </div>

            {/* Market copy */}
            <div style={{
              fontSize: '12px',
              color: '#5a7a64',
              lineHeight: '1.7',
              fontWeight: '300',
              marginBottom: '20px'
            }}>
              {product.market}
            </div>

            {/* Divider */}
            <div style={{
              height: '0.5px',
              background: '#c8dece',
              marginBottom: '16px'
            }} />

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '18px'
            }}>
              {product.stats.map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1f5c38',
                    lineHeight: '1'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: '#6b8c76',
                    marginTop: '3px',
                    fontWeight: '300'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Link */}
            <a href={product.href} style={{
              fontSize: '11px',
              color: '#2d7a4f',
              fontWeight: '500',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              textDecoration: 'none'
            }}>
              {product.link}
            </a>

          </div>
        ))}
      </div>


    </section>
  )
}
