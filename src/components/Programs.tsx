const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={14} height={14}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const programs = [
  {
    label: 'Programmatic Focus',
    title: 'Increase Access to Healthcare',
    desc: 'Expanding health services to underserved communities through mobile clinics, community health workers, and preventive care campaigns.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=240&fit=crop&q=80',
    alt: 'Healthcare',
  },
  {
    label: 'Economic Empowerment',
    title: 'Support Livelihoods & Economic Growth',
    desc: 'Equipping individuals with vocational skills, microfinance access, and entrepreneurial support to build sustainable income sources.',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=240&fit=crop&q=80',
    alt: 'Livelihoods',
  },
  {
    label: 'Knowledge & Skills',
    title: 'Enhance Education & Skills',
    desc: 'Delivering non-formal education, literacy programs, and skills training that empower youth and adults to participate fully in society.',
    img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=240&fit=crop&q=80',
    alt: 'Education',
  },
  {
    label: 'WASH',
    title: 'Improve Water, Sanitation & Hygiene',
    desc: 'Constructing clean water points, sanitation facilities, and conducting hygiene behavior-change communication in schools and communities.',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=240&fit=crop&q=80',
    alt: 'WASH',
  },
  {
    label: 'Disease Management',
    title: 'Address Specific Health Challenges',
    desc: 'Targeted programs on HIV/AIDS, TB, malaria, maternal health, and nutrition — reducing morbidity and improving community health outcomes.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=240&fit=crop&q=80',
    alt: 'Health programs',
  },
];

export default function Programs() {
  return (
    <section id="programs" style={{ background: 'var(--cream)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" style={{ marginBottom: '4rem' }}>
          <div>
            <p className="section-label">What We Do</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 900, color: 'var(--forest)', marginTop: '1rem', lineHeight: 1.2 }}>
              Our Programmatic<br /><em>Focus Areas</em>
            </h2>
          </div>
          <p style={{ maxWidth: 380, fontSize: '0.95rem', lineHeight: 1.7, color: '#4a6358' }}>
            ANT's integrated programs tackle health, livelihoods, education, WASH, and specific disease challenges — addressing root causes, not just symptoms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <article key={p.title} className="program-card">
              <div className="card-accent"></div>
              <img src={p.img} alt={p.alt} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <div style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '0.5rem' }}>{p.label}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#4a6358' }}>{p.desc}</p>
                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--amber)', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Learn more <ArrowRight />
                </div>
              </div>
            </article>
          ))}

          <article className="program-card" style={{ background: 'var(--forest)' }}>
            <div style={{ height: 4, background: 'linear-gradient(90deg,var(--amber),var(--amber-light))' }}></div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 380 }}>
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '1rem' }}>Strategic Goal</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '1rem', lineHeight: 1.3 }}>Foster Partnerships &amp; Collaboration</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.75)' }}>ANT builds bridges with government agencies, faith-based institutions, NGOs, and private sector partners to amplify collective impact.</p>
              </div>
              <blockquote style={{ marginTop: '2rem', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'var(--amber-light)', fontSize: '1.05rem', lineHeight: 1.6, borderLeft: '2px solid var(--amber)', paddingLeft: '1rem' }}>
                "We rise highest when we rise together."
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
