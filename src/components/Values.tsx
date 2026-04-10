const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" width={12} height={12}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const values = [
  { icon: '🌿', title: 'Compassion', desc: 'Deep commitment to community well-being' },
  { icon: '⚖️', title: 'Equity',     desc: 'Fairness, justice, and inclusion for all' },
  { icon: '💪', title: 'Empowerment', desc: 'Enabling communities to own their growth' },
  { icon: '🤝', title: 'Collaboration', desc: 'Strong local and international partnerships' },
  { icon: '🌱', title: 'Sustainability', desc: 'Long-term impact and environmental care' },
  { icon: '💡', title: 'Innovation', desc: 'Creative, evidence-based solutions' },
];

const principles = [
  { title: 'Diligence & Hard Work',       desc: 'Continuous effort and commitment to excellence in everything we do.' },
  { title: 'Decentralized Leadership',    desc: 'Participatory decision-making and distributed accountability at every level.' },
  { title: 'Perseverance & Resilience',   desc: 'Adapting and rebuilding with strength in the face of any obstacle.' },
  { title: 'Planning & Foresight',        desc: 'Strategic preparedness and wisdom for long-term sustainable impact.' },
];

export default function Values() {
  return (
    <section id="values" style={{ background: 'var(--cream-light)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="section-label">What Drives Us</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 900, color: 'var(--forest)', margin: '1rem 0 2.5rem', lineHeight: 1.2 }}>
              Core Values &amp;<br /><em>Guiding Principles</em>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {values.map((v) => (
                <div key={v.title} className="value-pill">
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--forest)', marginBottom: '0.25rem' }}>{v.icon} {v.title}</div>
                  <div className="value-pill-sub" style={{ fontSize: '0.8rem', color: '#4a6358', lineHeight: 1.5 }}>{v.desc}</div>
                </div>
              ))}
              <div className="value-pill col-span-2">
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--forest)', marginBottom: '0.25rem' }}>🙏 Respect</div>
                <div className="value-pill-sub" style={{ fontSize: '0.8rem', color: '#4a6358', lineHeight: 1.5 }}>Upholding dignity, diversity, and human rights in every interaction</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--forest)', borderRadius: 4, padding: '3rem', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'radial-gradient(circle,rgba(192,125,47,0.15) 0%,transparent 70%)', borderRadius: '50%' }}></div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '1.5rem' }}>The Ant Principles</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.3 }}>How We Work</h3>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {principles.map((p) => (
                <li key={p.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ width: 24, height: 24, background: 'var(--amber)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <CheckIcon />
                  </span>
                  <div>
                    <strong style={{ fontWeight: 600, fontSize: '0.9rem' }}>{p.title}</strong>
                    <br />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(245,240,232,0.65)', lineHeight: 1.6 }}>{p.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
