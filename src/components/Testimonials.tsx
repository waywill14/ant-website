const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width={32} height={32} style={{ color: 'var(--amber)', opacity: 0.4, marginBottom: '1rem' }}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const testimonials = [
  {
    quote: '"ANT\'s health outreach program reached my family when we had no access to a clinic. Today my children are vaccinated and my wife received maternal care. This organization gave us hope."',
    name: 'James M.',
    role: 'Community Member, Eldoret',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&face&q=80',
  },
  {
    quote: '"The vocational training I received through ANT helped me start a tailoring business. I now employ two other women from my community. The transformation is real and lasting."',
    name: 'Grace W.',
    role: 'Program Graduate, Eldoret',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&face&q=80',
  },
  {
    quote: '"As a partner organization, we\'ve seen how ANT\'s community-first approach creates real, measurable change. Their transparency and dedication make collaboration a joy."',
    name: 'Dr. Peter K.',
    role: 'Partner Organization Director',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&face&q=80',
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: 'var(--cream)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Community Voices</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 900, color: 'var(--forest)', marginTop: '1rem' }}>
            Lives <em>Transformed</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <QuoteIcon />
              <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#4a6358', marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src={t.img} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--forest)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#7a9488' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
