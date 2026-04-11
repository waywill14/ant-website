export default function Hero() {
  return (
    <section className="hero-bg diagonal-top" style={{ paddingTop: '7rem', paddingBottom: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="section-label anim-fade-up" style={{ color: 'var(--amber)' }}>
              Non-Governmental Organization · Kenya (HQ: Eldoret)
            </p>
            <h1
              className="anim-fade-up delay-100"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.8rem,5vw,4.5rem)', fontWeight: 900, lineHeight: 1.1, color: 'var(--cream)', marginTop: '1.5rem' }}
            >
              Empowering<br />
              <em style={{ color: 'var(--amber)' }}>Communities.</em><br />
              Transforming Lives.
            </h1>
            <p
              className="anim-fade-up delay-200"
              style={{ marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.75)', maxWidth: 520 }}
            >
              ACCELERATING NETWORK TOGETHER (ANT) addresses the interconnected challenges of health, poverty,
              and socioeconomic inequality — equipping Kenyan communities with the tools to thrive.
            </p>

            <blockquote className="verse anim-fade-up delay-300" style={{ marginTop: '2rem', maxWidth: 480 }}>
              "Go to the ant, you sluggard; consider its ways and be wise!"
              <footer style={{ marginTop: '0.75rem', fontSize: '0.8rem', fontStyle: 'normal', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600 }}>— Proverbs 6:6–8</footer>
            </blockquote>

            <div className="flex flex-wrap gap-4 anim-fade-up delay-400" style={{ marginTop: '2.5rem' }}>
              <a href="#programs" className="btn-primary">Explore Our Work</a>
              <a href="#about"    className="btn-outline">Learn More</a>
            </div>
          </div>

          <div className="relative anim-fade-in delay-300 hidden lg:block">
            <div style={{ position: 'relative', height: 540 }}>
              <img
                src="/cancer screening.png"
                alt="Cancer screening tent initiative"
                style={{ position: 'absolute', top: 0, right: 0, width: '72%', height: 360, objectFit: 'cover', borderRadius: 4, boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}
              />
              <img
                src="/community.jpg"
                alt="Kenyan community members smiling"
                style={{ position: 'absolute', bottom: 0, left: 0, width: '52%', height: 240, objectFit: 'cover', borderRadius: 4, border: '4px solid #1a3d2b', boxShadow: '0 16px 40px rgba(0,0,0,0.35)' }}
              />
              <div style={{ position: 'absolute', top: 260, right: 0, background: 'var(--amber)', color: 'white', padding: '1.25rem 1.5rem', borderRadius: 4, textAlign: 'center', minWidth: 120 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.9, marginTop: 4 }}>Years of<br />Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
