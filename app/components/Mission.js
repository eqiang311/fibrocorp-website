export default function Mission() {
  return (
    <section style={{
      background: '#0a1a0f',
      padding: '48px 40px',
      borderTop: '0.5px solid #1e3d26',
      borderBottom: '0.5px solid #1e3d26',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(#1e3d2615 1px, transparent 1px), linear-gradient(90deg, #1e3d2615 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none'
      }} />

      <p style={{
        fontSize: '10px',
        fontWeight: '500',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        color: '#3fa865',
        marginBottom: '20px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{ display: 'block', width: '16px', height: '1px', background: '#3fa865' }}></span>
        Our belief
      </p>

      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '20px',
        lineHeight: '1.7',
        color: '#c8e8d4',
        maxWidth: '600px',
        fontStyle: 'italic',
        position: 'relative'
      }}>
        "Being greener shouldn't be a burden. It should be a natural extension of how a business operates — one that strengthens the bottom line, satisfies stakeholders, and leaves a cleaner world behind in the process."
      </p>

    </section>
  )
}