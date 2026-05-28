export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Choose your business',
      text: 'Select the product line that fits your market — pallet production, molded fiber products, or both. We tailor the setup to your region and scale.',
      items: ['Pallet Production Business', 'Molded Fiber Business', 'Or both']
    },
    {
      num: '02',
      title: 'We set you up',
      text: 'Equipment ships, installs, and is ready to produce. You receive patent rights, the business plan, operator training, and 1 year of free spare parts.',
      items: ['Equipment installed', 'Team trained', 'Patent licensed', '1 year spare parts']
    },
    {
      num: '03',
      title: 'You produce and earn',
      text: 'Start producing. Sell to the market, supply your own operation, or license to other producers. The business model is yours to shape.',
      items: ['Sell to open market', 'Supply in-house', 'License to producers']
    }
  ]

  return (
    <section style={{
      padding: '56px 40px',
      background: '#ffffff',
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
        How it works
      </p>

      <h2 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '28px',
        color: '#0d1f14',
        fontWeight: '600',
        letterSpacing: '-0.5px',
        marginBottom: '8px'
      }}>
        Three steps to operating.
      </h2>

      <p style={{
        fontSize: '13px',
        color: '#5a7a64',
        fontWeight: '300',
        lineHeight: '1.7',
        marginBottom: '36px',
        maxWidth: '500px'
      }}>
        There is nothing to invent, nothing to discover, no system to build.
        You adopt what already works.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        border: '0.5px solid #c8dece',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        {steps.map((step, index) => (
          <div key={step.num} style={{
            padding: '28px 24px',
            borderRight: index < steps.length - 1 ? '0.5px solid #c8dece' : 'none',
            background: '#ffffff'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#e8f5ed',
              border: '0.5px solid #c8dece',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: '500',
              color: '#1f5c38',
              marginBottom: '16px'
            }}>
              {step.num}
            </div>

            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#0d1f14',
              marginBottom: '8px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              {step.title}
            </div>

            <div style={{
              fontSize: '12px',
              color: '#5a7a64',
              lineHeight: '1.6',
              fontWeight: '300',
              marginBottom: '16px'
            }}>
              {step.text}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {step.items.map(item => (
                <div key={item} style={{
                  fontSize: '11px',
                  color: '#2d7a4f',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ fontSize: '10px' }}>✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
