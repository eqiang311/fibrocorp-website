export default function Products() {
  const products = [
    {
      icon: '🏭',
      title: 'Molded Fiber Technology',
      text: 'Automated production lines converting waste paper into molded fiber products — egg cartons, fruit trays, wine carriers, electronic parts, and pallets.',
      link: 'Explore the technology →'
    },
    {
      icon: '📦',
      title: 'Pallets, Equipment & Machinery',
      text: '2-layer, heavy load, flat top, and water-resistant variants — SGS-certified and outperforming wood on cost, weight, and recyclability.',
      link: 'View pallet specifications →'
    },
    {
      icon: '⬡',
      title: 'Molds',
      text: 'Custom mold solutions developed in partnership with licensees for specific product applications. Details available upon inquiry.',
      link: 'Get in touch →'
    }
  ]

  return (
    <section style={{
      padding: '56px 40px',
      background: '#f0f7f2',
      borderBottom: '0.5px solid #c8dece'
    }}>
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
        Products
      </p>
      <h2 style={{
        fontSize: '28px',
        color: '#0d1f14',
        marginBottom: '8px',
        lineHeight: '1.2',
        fontWeight: '600',
        letterSpacing: '-0.5px'
      }}>
        One technology.<br />Many applications.
      </h2>
      <p style={{
        fontSize: '13px',
        color: '#5a7a64',
        marginBottom: '32px',
        maxWidth: '500px',
        lineHeight: '1.7',
        fontWeight: '300'
      }}>
        From the machine to the mold, FibroCorp delivers a complete licensed manufacturing system — built for performance, designed for scale.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px'
      }}>
        {products.map((product) => (
          <div key={product.title} style={{
            background: '#ffffff',
            border: '0.5px solid #c8dece',
            borderTop: '2px solid #2d7a4f',
            borderRadius: '2px',
            padding: '22px 18px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '2px',
              background: '#e8f5ed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px',
              fontSize: '16px',
              border: '0.5px solid #c8dece'
            }}>
              {product.icon}
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: '500',
              color: '#0d1f14',
              marginBottom: '6px',
              letterSpacing: '-0.2px'
            }}>
              {product.title}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#5a7a64',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              {product.text}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#2d7a4f',
              fontWeight: '500',
              marginTop: '14px',
              letterSpacing: '0.3px',
              textTransform: 'uppercase'
            }}>
              {product.link}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}