export default function Impact() {
  return (
    <section id="impact" style={{ background: 'var(--forest)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle,rgba(192,125,47,0.12) 0%,transparent 70%)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 300, height: 300, background: 'radial-gradient(circle,rgba(42,92,64,0.5) 0%,transparent 70%)', borderRadius: '50%' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <p className="section-label" style={{ justifyContent: 'center', color: 'var(--amber)' }}>Our Impact</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 900, color: 'var(--cream)', marginTop: '1rem' }}>
            Measuring What Matters
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { num: '50K+', label: 'Community\nMembers Reached' },
            { num: '15+',  label: 'Active\nPrograms' },
            { num: '30+',  label: 'Partner\nOrganizations' },
            { num: '10+',  label: 'Years of\nService' },
          ].map((s) => (
            <div key={s.num} style={{ padding: '2rem', border: '1px solid rgba(192,125,47,0.2)', borderRadius: 4, background: 'rgba(255,255,255,0.03)' }}>
              <div className="stat-number">{s.num}</div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)', marginTop: '0.75rem', fontWeight: 500, whiteSpace: 'pre-line' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6" style={{ marginTop: '4rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ width: 56, height: 56, background: 'rgba(192,125,47,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e09a4a" width={26} height={26}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
            </div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem' }}>Reduce Poverty &amp; Inequality</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)' }}>Tackling root causes through economic inclusion programs and equitable resource distribution.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ width: 56, height: 56, background: 'rgba(192,125,47,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e09a4a" width={26} height={26}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem' }}>Improve Quality of Life</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)' }}>Raising living standards through health, sanitation, education, and economic advancement.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ width: 56, height: 56, background: 'rgba(192,125,47,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e09a4a" width={26} height={26}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem' }}>Build Resilience &amp; Sustainability</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.6)' }}>Creating lasting change through community ownership, capacity building, and long-term partnerships.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
