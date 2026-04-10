import { useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  reason: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', email: '', reason: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const { supabase } = await import('../lib/supabase');
      const { error } = await supabase.from('contact_messages').insert({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        reason: form.reason,
        message: form.message,
      });
      if (error) throw error;
      setStatus('sent');
      setForm({ firstName: '', lastName: '', email: '', reason: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1.5px solid #ddd8cf',
    borderRadius: 2,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.78rem',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#4a6358',
    display: 'block',
    marginBottom: '0.5rem',
  };

  const focusStyle = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.target.style.borderColor = '#c07d2f'; },
    onBlur:  (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { e.target.style.borderColor = '#ddd8cf'; },
  };

  return (
    <section id="contact" style={{ background: 'var(--cream-light)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="section-label">Get In Touch</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,3vw,2.75rem)', fontWeight: 900, color: 'var(--forest)', margin: '1rem 0 2rem', lineHeight: 1.2 }}>
              Connect With<br /><em>ANT</em>
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a6358', marginBottom: '2.5rem', maxWidth: 440 }}>
              Reach out to explore partnerships, volunteer opportunities, program inquiries, or to learn how you can support our work in Kenyan communities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(26,61,43,0.08)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1a3d2b" width={20} height={20}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--forest)', marginBottom: '0.2rem' }}>Address</div>
                  <div style={{ fontSize: '0.88rem', color: '#4a6358', lineHeight: 1.5 }}>P.O Box 10365, Eldoret, Kenya</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(26,61,43,0.08)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1a3d2b" width={20} height={20}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--forest)', marginBottom: '0.2rem' }}>Phone</div>
                  <div style={{ fontSize: '0.88rem', color: '#4a6358', lineHeight: 1.5 }}>+254 712 520 288 / +254 725 357 651</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(26,61,43,0.08)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#1a3d2b" width={20} height={20}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--forest)', marginBottom: '0.2rem' }}>Email</div>
                  <a href="mailto:acquirentransform@gmail.com" style={{ fontSize: '0.88rem', color: 'var(--amber)', textDecoration: 'none' }}>acquirentransform@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '2.5rem', borderRadius: 4, boxShadow: '0 8px 40px rgba(26,61,43,0.08)', borderTop: '4px solid var(--amber)' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '2rem' }}>Send a Message</h3>

            {status === 'sent' ? (
              <div style={{ background: 'rgba(26,61,43,0.06)', border: '1px solid rgba(26,61,43,0.2)', borderRadius: 4, padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✓</div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.5rem' }}>Message Sent!</h4>
                <p style={{ fontSize: '0.9rem', color: '#4a6358' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                <button className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }} onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" required style={inputStyle} {...focusStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required style={inputStyle} {...focusStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" required style={inputStyle} {...focusStyle} />
                </div>

                <div>
                  <label style={labelStyle}>Reason for Contact</label>
                  <select name="reason" value={form.reason} onChange={handleChange} required style={{ ...inputStyle, background: 'white', color: '#333' }} {...focusStyle}>
                    <option value="">Select an option...</option>
                    <option>Partnership Inquiry</option>
                    <option>Volunteer Opportunity</option>
                    <option>Donation / Funding</option>
                    <option>Program Information</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us how you'd like to get involved..." required style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => { e.target.style.borderColor = '#c07d2f'; }}
                    onBlur={e => { e.target.style.borderColor = '#ddd8cf'; }}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: '0.85rem', color: '#c0392b' }}>Something went wrong. Please try again.</p>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending...' : (
                    <>
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width={16} height={16}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
