import { useState } from 'react';

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={14} height={14}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const programs = [
  {
    label: 'Cancer Screening',
    title: 'Increase Access to Healthcare',
    desc: 'Expanding cancer screening and health services to underserved Kenyan communities through mobile clinics, trained community health workers, and preventive care campaigns.',
    details: 'Our health initiatives prioritize early detection. We conduct free breast, cervical, and prostate cancer screening camps across rural Kenya. We also partner with local hospitals to subsidize treatments for marginalized groups and continuously build the capacity of community health workers to recognize early symptoms.',
    img: '/screening.png',
    alt: 'African health workers cancer screening Kenya',
  },
  {
    label: 'Economic Empowerment',
    title: 'Support Livelihoods & Economic Growth',
    desc: 'Equipping Kenyan individuals with vocational skills, microfinance access, and entrepreneurial support to build sustainable income sources.',
    details: 'Focusing primarily on women and youth, we offer comprehensive financial literacy training, provide seed grants for micro-enterprises, and establish market linkages. Our goal is to foster deep self-reliance and community wealth creation through sustainable business practices.',
    img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&h=240&fit=crop&q=80',
    alt: 'African women economic empowerment Kenya',
  },
  {
    label: 'Knowledge & Skills',
    title: 'Enhance Education & Skills',
    desc: 'Delivering non-formal education, literacy programs, and skills training that empower Kenyan youth and adults to participate fully in society.',
    details: 'We run extensive scholarship programs for orphaned and vulnerable children (OVCs). In addition, we have established vocational training hubs and IT centers in rural areas to bridge the digital divide and ensure youth are adequately prepared for the modern job market.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=240&fit=crop&q=80',
    alt: 'African children education Kenya',
  },
  {
    label: 'WASH',
    title: 'Improve Water, Sanitation & Hygiene',
    desc: 'Constructing clean water points, sanitation facilities, and conducting hygiene behavior-change communication in Kenyan schools and communities.',
    details: 'By drilling boreholes in arid regions, distributing essential water purification kits, and constructing eco-friendly latrines in public schools, we significantly reduce the prevalence of waterborne diseases and drastically improve school attendance rates.',
    img: '/water.jpg',
    alt: 'African community WASH program Kenya',
  },
  {
    label: 'Disease Management',
    title: 'Address Specific Health Challenges',
    desc: 'Targeted programs on cancer screening, HIV/AIDS, TB, malaria, maternal health, and nutrition — reducing morbidity and improving community health outcomes across Kenya.',
    details: 'We operate mobile testing units strictly for HIV/AIDS, Malaria, and TB. Furthermore, we provide critical nutritional support for expectant mothers and children under five, backed by continuous community sensitization on managing and preventing communicable diseases.',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=240&fit=crop&q=80',
    alt: 'African health clinic Kenya cancer screening',
  },
];

export default function Programs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
          {programs.map((p, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <article key={p.title} className="program-card">
                <div className="card-accent"></div>
                <img src={p.img} alt={p.alt} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div style={{ padding: '1.75rem' }}>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '0.5rem' }}>{p.label}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#4a6358', marginBottom: isExpanded ? '1rem' : 0 }}>{p.desc}</p>
                  
                  {isExpanded && (
                    <div className="anim-fade-in" style={{ padding: '1rem', background: 'rgba(192,125,47,0.08)', borderRadius: 4, marginTop: '1rem', borderLeft: '2px solid var(--amber)' }}>
                      <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#2a4436' }}>
                        {p.details}
                      </p>
                    </div>
                  )}

                  <button 
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--amber)', fontWeight: 600, fontSize: '0.82rem', letterSpacing: '0.05em', textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
                  >
                    {isExpanded ? 'Show less' : 'Learn more'} <ArrowRight />
                  </button>
                </div>
              </article>
            );
          })}

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
