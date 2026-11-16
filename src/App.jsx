import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SiteChrome from './SiteChrome.jsx'
import './App.css'
import yashPhoto from '/team/yash-budvansh.jpg'
import hrudayPhoto from '/team/hruday-chilukuri.jpg'
import harikeshPhoto from '/team/harikesh-pratap-verma.jpg'

const roadmap = [
  ['Prove Propulsion', 'Design, build, instrument, and safely test foundational propulsion hardware.', 'In development'],
  ['Build Flux Alpha', 'Advance the LOX/LCH4 engine concept through architecture, CAD, and simulation studies.', 'Concept'],
  ['Reach Cislunar Space', 'Develop reliable space transportation systems that move payloads beyond Earth orbit.', 'Long-term objective'],
  ['Land on the Moon', 'Work toward lunar missions as the long-term destination for the propulsion programme.', 'Long-term objective'],
]
const capabilities = [['Propulsion Validation', 'Solid motor design, nozzle work, and pressure analysis.'], ['Deep-Tech Infrastructure', 'Space transportation systems for cislunar and lunar missions.'], ['Iterative Engineering', 'Design, test, learn, iterate.']]
const teamMembers = [
  { name: 'Yash Budvansh', role: 'Propulsion Engineer', education: 'B.Tech, Mechanical Engineering (MME), IIT (ISM) Dhanbad (Exp: 2028)', responsibilities: 'Propulsion architecture, analysis, and project direction.', image: yashPhoto },
  { name: 'Hruday Chilukuri', role: 'Aero-Mechanical Engineer', education: 'B.Tech, Mechanical Engineering, IIT (ISM) Dhanbad (Exp: 2028)', responsibilities: 'Aero-mechanical structures, CAD, and thermal design.', image: hrudayPhoto },
  { name: 'Harikesh Pratap Verma', role: 'Flight Systems and Data Engineer', education: 'B.Tech, Mechanical Engineering, IIT (ISM) Dhanbad (Exp: 2028)', responsibilities: 'Flight systems, data handling, and simulation workflows.', image: harikeshPhoto },
]

function App() {
  const hasSetInitialVideoOffset = useRef(false)
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { elements.forEach((element) => element.classList.add('is-visible')); return undefined }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  const handleVideoMetadata = (event) => { if (!hasSetInitialVideoOffset.current) { event.currentTarget.currentTime = 2; hasSetInitialVideoOffset.current = true } }

  return <SiteChrome>
    <main id="home">
      <section className="hero"><div className="hero-copy reveal is-visible"><h1>Engineering the first steps toward humanity’s next frontier.</h1></div><div className="hero-visual reveal is-visible" style={{ '--reveal-delay': '120ms' }}><div className="moon-panel"><div className="moon-frame"><video className="moon-video" src="/Moon%20Live%20Wallpaper_2160p.mp4" onLoadedMetadata={handleVideoMetadata} autoPlay loop muted playsInline preload="metadata" aria-label="Live moon wallpaper" /><div className="moon-sheen" /></div></div></div></section>
      <section className="upcoming-test reveal" id="upcoming-test"><div className="upcoming-test-copy"><p className="upcoming-test-badge"><span className="upcoming-test-pulse" />Upcoming Test</p><h2 id="upcoming-test-title">Vector Alpha</h2><p className="upcoming-test-text">An 8 kN solid motor static fire campaign.</p></div><dl className="upcoming-test-specs"><div><dt>Test</dt><dd>Static Fire</dd></div><div><dt>Motor thrust</dt><dd>8 kN</dd></div><div><dt>Earliest test date</dt><dd>2 Dec 2026</dd></div></dl></section>
      <section className="capabilities reveal" id="technology"><div className="section-heading"><p>Technology</p><h2>Real engineering capability first. Scale later.</h2></div><div className="capability-grid">{capabilities.map(([title, text], index) => <article className="capability-card" key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="showcase reveal" id="vehicles"><div className="showcase-visual"><img src="/engine.png" alt="IOTIC Space engine assembly" loading="lazy" /></div><div className="showcase-copy"><p className="eyebrow">Flux Alpha · conceptual values</p><h2>Methalox propulsion.</h2><p>LOX/LCH4 concept. Values are design targets, not validated results.</p><div className="timeline"><div><strong>ISP</strong><span>260–290 s · conceptual target range.</span></div><div><strong>Thrust</strong><span>400 kN · conceptual design target.</span></div><div><strong>Propellant</strong><span>LOX + LCH4 · programme direction.</span></div></div><Link className="text-link" to="/technology/flux-alpha">Read dossier →</Link></div></section>
      <section className="moon-goal reveal" id="moon-mission"><div className="moon-goal-heading"><p className="eyebrow">Roadmap</p><h2>The Moon Mission.</h2><p>A staged path from propulsion validation to lunar transportation.</p></div><ol className="moon-goal-roadmap">{roadmap.map(([title, text, status], index) => <li key={title}><span className="card-index">Step 0{index + 1}</span><h3>{title}</h3><p>{text}</p><small>{status}</small></li>)}</ol></section>
      <section className="mission-panel reveal" id="mission-control"><div><p className="eyebrow">The Mission</p><h2>One validated propulsion milestone at a time.</h2></div><p>Design. Build. Test. Learn. Iterate.</p></section>
      <section className="about-section reveal" id="about-us"><div className="about-heading"><p className="eyebrow">Company &amp; incubation</p><h2 id="about-title">Incubated and recognised.</h2></div><div className="about-copy"><p>IOTIC Space is incubated at the CIIE – IIT (ISM) Dhanbad Foundation, under the Ministry of Electronics and Information Technology (MeitY) GENESIS Entrepreneur-in-Residence (EiR) 2.0 programme.</p><p>This incubation provides an institutional ecosystem to support our entrepreneurial and technological development.</p><p>IOTIC Space is also registered with the Indian National Space Promotion and Authorisation Centre (IN-SPACe) as a Non-Government Entity (NGE).</p><ul className="about-tags"><li>CIIE – IIT (ISM) Dhanbad</li><li>MeitY GENESIS EiR 2.0</li><li>IN-SPACe registered NGE</li></ul></div></section>
      <section className="team-section reveal" id="team"><div className="team-heading"><p className="eyebrow">Team</p><h2 id="team-title">IOTIC Space.</h2></div><div className="team-grid">{teamMembers.map((member) => <article className="team-card" key={member.name}><div className="team-image-wrapper"><img src={member.image} alt={`${member.name}, ${member.role}`} className="team-image" loading="lazy" /><div className="team-image-overlay" /></div><div className="team-info"><div className="team-header"><h3>{member.name}</h3><span className="team-role">{member.role}</span></div><div className="team-detail"><span className="team-detail-label">Education</span><p className="team-education">{member.education}</p></div><div className="team-detail"><span className="team-detail-label">Responsibilities</span><p className="team-education">{member.responsibilities}</p></div></div></article>)}</div></section>
      <section className="updates-preview reveal" id="development-log"><div><p className="eyebrow">Timeline</p><h2>Development updates.</h2><p>Project, engineering, manufacturing, simulation, and test records.</p></div><Link className="secondary-action" to="/timeline">Open timeline</Link></section>
      <section className="contact-section reveal" id="contact"><div className="contact-copy"><p className="eyebrow">Contact</p><h2>Contact IOTIC Space.</h2><div className="contact-details" aria-label="Contact details"><div><span>Email</span><a className="contact-link contact-link--email" href="mailto:hello@ioticspace.com">hello@iotic.space</a></div><div><span>Founder</span><a className="contact-link contact-link--email" href="mailto:founder@iotic.space">founder@iotic.space</a></div><div><span>Phone</span><a className="contact-link" href="tel:+918505905796">+91 85059 05796</a></div><div><span>Location</span><p>Dhanbad, Jharkhand</p></div><div className="contact-details-wide"><span>LinkedIn</span><a className="contact-link contact-link--linkedin" href="https://www.linkedin.com/company/iotic-space" target="_blank" rel="noreferrer">https://www.linkedin.com/company/iotic-space</a></div></div></div></section>
    </main>
  </SiteChrome>
}

export default App
