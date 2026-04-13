const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialBtnStyle: React.CSSProperties = {
  width: 36, height: 36,
  background: 'rgba(255,255,255,0.08)',
  borderRadius: 2,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--cream)',
  transition: 'background 0.2s',
  cursor: 'pointer',
};

export default function Footer() {
  return (
    <footer style={{ background: '#0f2319', color: 'var(--cream)', padding: '4rem 0 2rem' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-8" style={{ paddingBottom: '3rem', borderBottom: '1px solid rgba(245,240,232,0.1)' }}>

          <div className="md:col-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/ant-logo.png" alt="ANT Logo" style={{ width: 80, height: 80, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem' }}>ACCELERATING NETWORK TOGETHER</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)' }}>ANT · Kenya (HQ: Nairobi)</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.6)', maxWidth: 340 }}>
              Empowering communities through integrated health, education, and socioeconomic programs. Rooted in compassion, driven by transformation.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                { icon: <FacebookIcon />, url: 'https://www.facebook.com/profile.php?id=61572079712659' },
                { icon: <TwitterIcon />, url: '#' },
                { icon: <InstagramIcon />, url: 'https://www.instagram.com/ant_kenya/' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target={item.url !== '#' ? "_blank" : undefined}
                  rel={item.url !== '#' ? "noopener noreferrer" : undefined}
                  style={socialBtnStyle}
                  onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#c07d2f'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)'; }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '1.25rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[['#about', 'About ANT'], ['#programs', 'Our Programs'], ['#values', 'Core Values'], ['#impact', 'Our Impact'], ['#contact', 'Contact Us']].map(([href, label]) => (
                <li key={label}>
                  <a href={href} style={{ fontSize: '0.88rem', color: 'rgba(245,240,232,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#e09a4a'; }}
                    onMouseOut={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.65)'; }}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '1.25rem' }}>Strategic Focus</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Improve Health Outcomes', 'Enhance Socioeconomic Opportunities', 'Strengthen Community Capacity', 'Promote Equity & Inclusion', 'Foster Partnerships'].map((item) => (
                <li key={item} style={{ fontSize: '0.88rem', color: 'rgba(245,240,232,0.65)' }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.4)' }}>
            &copy; 2025 ACCELERATING NETWORK TOGETHER (ANT). All rights reserved.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.3)', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
            "When we unite, we can lift an elephant."
          </p>
        </div>
      </div>
    </footer>
  );
}
