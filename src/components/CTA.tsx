export default function CTA() {
  return (
    <section className="cta-section" style={{ padding: '7rem 0' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <p className="section-label" style={{ justifyContent: 'center', color: 'var(--amber)' }}>Join the Movement</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 900, color: 'var(--cream)', margin: '1.5rem 0', lineHeight: 1.15 }}>
          Be Part of the<br /><em style={{ color: 'var(--amber)' }}>Transformation</em>
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', maxWidth: 560, margin: '0 auto 3rem' }}>
          Whether you are a donor, partner, volunteer, or community member — there is a place for you in ANT's mission to empower communities and transform lives across Kenya.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a href="#contact" className="btn-primary" style={{ fontSize: '0.9rem', padding: '1rem 2.5rem' }}>
            Partner With Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={16} height={16}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href="#programs" className="btn-outline" style={{ fontSize: '0.9rem', padding: '1rem 2.5rem' }}>View Our Programs</a>
        </div>
      </div>
    </section>
  );
}
