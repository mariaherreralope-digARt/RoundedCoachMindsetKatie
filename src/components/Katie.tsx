'use client';

import React, { useState } from 'react';

export default function Page(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-pink-25 to-white text-slate-800 antialiased">
      <Navbar />

      <main className="scroll-smooth">
        <section id="hero" className="min-h-[70vh] flex items-center py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm mb-4">New videos weekly • Gentle spiritual tools</p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">Transform your mindset. Awaken your spirit. Manifest the life you desire.</h1>

              <p className="text-lg md:text-xl text-slate-700 mb-8">Practical mindset tools + soulful spiritual guidance for professional women who want clarity, confidence, and real change. Simple. Gentle. Powerful.</p>

              <div className="flex flex-wrap gap-4">
                <a href="#resources" className="inline-block rounded-2xl bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 shadow-lg">Download Free Worksheets</a>
                <a href="#videos" className="inline-block rounded-2xl border border-rose-200 px-6 py-3">Watch Latest Videos</a>
              </div>

              <div className="mt-8 text-sm text-slate-500">Prefer to explore? Scroll down to learn more about workshops, worksheets, and how Katie supports your growth.</div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-semibold mb-4">About Katie</h2>
                <p className="text-slate-700 mb-4">Hi — I’m Katie. I guide women through mindset shifts and soulful practices so they can step into aligned, abundant lives. My approach blends practical, evidence-backed mindset work with gentle spiritual tools that are easy to fit into a busy life.</p>
                <p className="text-slate-700">If you want grounded practices that actually work (no fluff), this space is for you: clear teachings, real exercises, and warm encouragement to help you change from the inside out.</p>

                <div className="mt-6">
                  <a href="#workshops" className="inline-block rounded-full bg-rose-100 text-rose-700 px-4 py-2 mr-3">See Workshops</a>
                  <a href="#contact" className="inline-block rounded-full border border-rose-200 px-4 py-2">Say Hello</a>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-56 h-56 rounded-3xl shadow-xl bg-gradient-to-tr from-pink-100 to-rose-50 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="w-36 h-36 rounded-full bg-white shadow-inner mx-auto mb-3 flex items-center justify-center">photo</div>
                    <div className="text-xs text-slate-400">Profile image placeholder — replace with Katie's photo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="py-20 bg-rose-50/40">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-6">Videos & Stories</h2>
            <p className="text-slate-700 mb-8 max-w-2xl">Short storytelling videos, practical how-tos, and spiritual insights — all explained simply so beginners and busy professionals can use them right away.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <article key={i} className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="h-40 rounded-lg bg-pink-100 mb-4 flex items-center justify-center">video {i + 1}</div>
                  <h3 className="font-semibold mb-2">Video title placeholder</h3>
                  <p className="text-sm text-slate-600 mb-4">Short description to hook viewers and explain the value of this video.</p>
                  <div className="flex gap-3">
                    <a className="text-rose-600 text-sm" href="#">Watch</a>
                    <a className="text-slate-500 text-sm" href="#">Save</a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <a href="#" className="inline-block rounded-2xl bg-white border border-rose-200 px-6 py-3">See all videos on YouTube</a>
            </div>
          </div>
        </section>

        <section id="workshops" className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-4">Workshops</h2>
              <p className="text-slate-700 mb-8">Interactive workshops and small-group courses to help you go deeper — include journaling prompts, live exercises, and actionable steps you can use immediately.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <WorkshopCard title="Rewrite Limiting Beliefs" summary="Tools to identify and release stories that hold you back." />
                <WorkshopCard title="Manifest with Confidence" summary="Practical rituals and clarity exercises to manifest intentionally." />
                <WorkshopCard title="Connect with Your Higher Self" summary="Meditations and reflective work to hear your inner guidance." />
              </div>

            </div>
          </div>
        </section>

        <section id="resources" className="py-20 bg-rose-50/30">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-semibold mb-4">Worksheets & Resources</h2>
            <p className="text-slate-700 mb-6 max-w-2xl">Free and premium worksheets created to help you apply the lessons from the videos — limiting belief releases, manifestation plans, energy checks, and weekly trackers.</p>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="rounded-full bg-rose-100 px-4 py-2">Download Free Worksheet</a>
              <a href="#" className="rounded-full border border-rose-200 px-4 py-2">See Resource Library</a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-4">Contact</h2>
              <p className="text-slate-700 mb-6">Questions, collaborations, or to share your story — I’d love to hear from you. Fill out the form below or email hello@katielclarke.example</p>

              <ContactForm />
            </div>
          </div>
        </section>

        <section id="subscribe" className="py-20 bg-gradient-to-tr from-rose-50 to-pink-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-3">Join the Community</h2>
              <p className="text-slate-700 mb-6">Weekly insights, new worksheets, and workshop invites — delivered with gentle encouragement and practical tools.</p>

              <SubscribeForm />

              <p className="text-sm text-slate-500 mt-4">We respect your inbox. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-rose-100 py-8">
          <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500">© {new Date().getFullYear()} Katie Clarke — All rights reserved</div>
            <div className="flex gap-4">
              <a href="#" className="text-slate-600 text-sm">Privacy</a>
              <a href="#" className="text-slate-600 text-sm">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Navbar(): JSX.Element {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/60 border-b border-rose-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold text-rose-600">Katie Clarke</a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-slate-700 hover:text-rose-600">About</a>
            <a href="#videos" className="text-sm text-slate-700 hover:text-rose-600">Videos</a>
            <a href="#workshops" className="text-sm text-slate-700 hover:text-rose-600">Workshops</a>
            <a href="#resources" className="text-sm text-slate-700 hover:text-rose-600">Resources</a>
            <a href="#contact" className="text-sm text-slate-700 hover:text-rose-600">Contact</a>
            <a href="#subscribe" className="text-sm text-rose-600 font-medium">Subscribe</a>
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu(): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md bg-white/40">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h14M3 10h14M3 14h14" stroke="#7f1d1d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-48 bg-white rounded-lg shadow-lg py-3 px-4">
          <a href="#about" className="block py-2 text-sm" onClick={() => setOpen(false)}>About</a>
          <a href="#videos" className="block py-2 text-sm" onClick={() => setOpen(false)}>Videos</a>
          <a href="#workshops" className="block py-2 text-sm" onClick={() => setOpen(false)}>Workshops</a>
          <a href="#resources" className="block py-2 text-sm" onClick={() => setOpen(false)}>Resources</a>
          <a href="#contact" className="block py-2 text-sm" onClick={() => setOpen(false)}>Contact</a>
          <a href="#subscribe" className="block py-2 text-sm text-rose-600 font-medium" onClick={() => setOpen(false)}>Subscribe</a>
        </div>
      )}
    </div>
  );
}

function WorkshopCard({ title, summary }: { title: string; summary: string }): JSX.Element {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm text-left">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600 mb-4">{summary}</p>
      <a href="#" className="text-rose-600 text-sm">Learn more</a>
    </div>
  );
}

function ContactForm(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      // placeholder: replace with API call (SendGrid, Netlify, Formspree, etc.)
      await new Promise((res) => setTimeout(res, 700));
      setStatus('sent');
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-lg border border-rose-100 px-4 py-3" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" type="email" className="w-full rounded-lg border border-rose-100 px-4 py-3" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" rows={5} className="w-full rounded-lg border border-rose-100 px-4 py-3"></textarea>
      <div className="flex items-center gap-4">
        <button disabled={status === 'sending'} type="submit" className="rounded-full bg-rose-500 text-white px-5 py-2">Send Message</button>
        {status === 'sent' && <span className="text-sm text-rose-600">Thanks — message sent!</span>}
        {status === 'error' && <span className="text-sm text-red-500">Something went wrong.</span>}
      </div>
    </form>
  );
}

function SubscribeForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'subscribing'|'done'|'error'>('idle');

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus('subscribing');
    try {
      // placeholder: hook up to your newsletter provider
      await new Promise((res) => setTimeout(res, 700));
      setStatus('done');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" type="email" required className="w-full sm:w-auto min-w-[220px] rounded-full border border-rose-100 px-4 py-3" />
      <button disabled={status === 'subscribing'} type="submit" className="rounded-full bg-rose-500 text-white px-6 py-3">Join</button>
      {status === 'done' && <div className="text-sm text-rose-600">Thanks for joining!</div>}
      {status === 'error' && <div className="text-sm text-red-500">Unable to subscribe.</div>}
    </form>
  );
}
