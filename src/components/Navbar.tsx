import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: 'rgba(15,35,25,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(192,125,47,0.2)' }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-3 group">
            <img src="/ant-logo.png" alt="ANT Logo" style={{ width: 72, height: 72, objectFit: 'contain' }} />
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: 'var(--cream)', fontSize: '0.95rem', lineHeight: 1.2 }}>ACCELERATING NETWORK TOGETHER</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600 }}>ANT · Kenya (HQ: Eldoret)</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about"    className="nav-link">About</a>
            <a href="#programs" className="nav-link">Programs</a>
            <a href="#values"   className="nav-link">Values</a>
            <a href="#impact"   className="nav-link">Impact</a>
            <a href="#contact"  className="nav-link">Contact</a>
          </div>
          <a href="#contact" className="hidden md:block btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.78rem' }}>
            Partner With Us
          </a>

          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span style={{ width: 24, height: 2, background: 'var(--cream)', display: 'block', transition: 'all 0.3s' }}></span>
            <span style={{ width: 18, height: 2, background: 'var(--cream)', display: 'block', transition: 'all 0.3s' }}></span>
            <span style={{ width: 24, height: 2, background: 'var(--cream)', display: 'block', transition: 'all 0.3s' }}></span>
          </button>
        </div>

        {mobileOpen && (
          <div style={{ paddingBottom: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '0.5rem' }}>
            <div className="flex flex-col gap-4 pt-4">
              <a href="#about"    className="nav-link text-sm" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#programs" className="nav-link text-sm" onClick={() => setMobileOpen(false)}>Programs</a>
              <a href="#values"   className="nav-link text-sm" onClick={() => setMobileOpen(false)}>Values</a>
              <a href="#impact"   className="nav-link text-sm" onClick={() => setMobileOpen(false)}>Impact</a>
              <a href="#contact"  className="nav-link text-sm" onClick={() => setMobileOpen(false)}>Contact</a>
              <a href="#contact"  className="btn-primary mt-2" style={{ alignSelf: 'flex-start' }} onClick={() => setMobileOpen(false)}>Partner With Us</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
