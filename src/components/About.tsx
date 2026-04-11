export default function About() {
  return (
    <section id="about" className="diagonal-bottom" style={{ background: 'var(--cream-light)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: '5rem' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Who We Are</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 900, color: 'var(--forest)', marginTop: '1rem', lineHeight: 1.2 }}>
            Rooted in Community,<br /><em>Driven by Transformation</em>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1rem', lineHeight: 1.8, color: '#4a6358' }}>
            ANT is a non-governmental organization working at the intersection of health, education,
            and economic empowerment across Kenya — headquartered in Eldoret.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '2.5rem', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: 'rgba(192,125,47,0.12)', borderRadius: '50%' }}></div>
            <div style={{ width: 48, height: 48, background: 'rgba(192,125,47,0.2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e09a4a" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '0.75rem' }}>Our Vision</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '1rem' }}>Universal Access to Health &amp; Opportunity</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.75)' }}>A world where all communities have access to quality healthcare and socioeconomic opportunities, enabling them to thrive and reach their full potential.</p>
          </div>

          <div style={{ background: 'white', padding: '2.5rem', borderRadius: 4, boxShadow: '0 4px 24px rgba(26,61,43,0.08)', borderTop: '4px solid var(--amber)' }}>
            <div style={{ width: 48, height: 48, background: 'rgba(192,125,47,0.1)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c07d2f" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '0.75rem' }}>Our Mission</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--forest)', marginBottom: '1rem' }}>Integrated Empowerment Programs</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#4a6358' }}>To empower communities through integrated health and socioeconomic development programs, fostering partnerships and promoting sustainable solutions that improve lives and transform societies.</p>
          </div>

          <div style={{ background: '#e8e0d0', padding: '2.5rem', borderRadius: 4, border: '1px solid rgba(26,61,43,0.1)' }}>
            <div style={{ width: 48, height: 48, background: 'rgba(26,61,43,0.1)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1a3d2b" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forest)', fontWeight: 600, marginBottom: '0.75rem' }}>Our Philosophy</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--forest)', marginBottom: '1rem' }}>The Wisdom of the Ant</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#4a6358' }}>Named after the industrious ant of Proverbs 6:6–8, ANT embodies diligence, foresight, unity, and collective effort — helping communities <strong>Acquire</strong> knowledge and <strong>Transform</strong> lives.</p>
          </div>
        </div>

        <div style={{ marginTop: '5rem', borderRadius: 4, overflow: 'hidden', position: 'relative', height: 300 }}>
          <img
            src="https://images.unsplash.com/photo-1508962914676-134849a727f0?w=1400&h=400&fit=crop&q=80"
            alt="Kenyan community cancer screening outreach"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(15,35,25,0.85) 0%,rgba(15,35,25,0.3) 60%,transparent 100%)', display: 'flex', alignItems: 'center', padding: '3rem' }}>
            <div style={{ maxWidth: 520 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Building from Within</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.7 }}>ANT's approach ensures that interventions are not only impactful but locally driven and maintained — creating community ownership that outlasts any single program.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
