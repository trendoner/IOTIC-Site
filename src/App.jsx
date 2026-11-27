import { useEffect, useRef, useState } from 'react'
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
  { name: 'Yash Budvansh', role: 'Propulsion Engineer', education: 'B.Tech, Mechanical Engineering (MME), IIT (ISM) Dhanbad (Exp: 2028)', responsibilities: 'Propulsion architecture, analysis, and project direction.', image: yashPhoto, linkedin: 'https://www.linkedin.com/in/yash-budvansh/', email: 'yashkumarbvansh@gmail.com' },
  { name: 'Hruday Chilukuri', role: 'Aero-Mechanical Engineer', education: 'B.Tech, Mechanical Engineering, IIT (ISM) Dhanbad (Exp: 2028)', responsibilities: 'Aero-mechanical structures, CAD, and thermal design.', image: hrudayPhoto, linkedin: 'https://www.linkedin.com/in/hrudaychilukuri/', email: 'hruday.chilukuri@gmail.com' },
  { name: 'Harikesh Pratap Verma', role: 'Flight Systems and Data Engineer', education: 'B.Tech, Mechanical Engineering, IIT (ISM) Dhanbad (Exp: 2028)', responsibilities: 'Flight systems, data handling, and simulation workflows.', image: harikeshPhoto, linkedin: 'https://www.linkedin.com/in/harikesh-pratap-verma-852797256/', email: 'harikeshv630@gmail.com' },
]

const vectorTestDate = new Date('2026-12-15T15:00:00+05:30')
const getVectorTestCountdown = () => {
  const remaining = Math.max(0, vectorTestDate.getTime() - Date.now())
  const totalSeconds = Math.floor(remaining / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    complete: remaining === 0,
  }
}

function App() {
  const hasSetInitialVideoOffset = useRef(false)
  const [vectorTestCountdown, setVectorTestCountdown] = useState(getVectorTestCountdown)
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { elements.forEach((element) => element.classList.add('is-visible')); return undefined }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const updateCountdown = () => setVectorTestCountdown(getVectorTestCountdown())
    const timer = window.setInterval(updateCountdown, 1000)
    return () => window.clearInterval(timer)
  }, [])
  const handleVideoMetadata = (event) => { if (!hasSetInitialVideoOffset.current) { event.currentTarget.currentTime = 2; hasSetInitialVideoOffset.current = true } }

  return <SiteChrome>
    <main id="home">
      <section className="hero"><div className="hero-copy reveal is-visible"><h1>Engineering the first steps toward humanity’s next frontier.</h1></div><div className="hero-visual reveal is-visible" style={{ '--reveal-delay': '120ms' }}><div className="moon-panel"><div className="moon-frame"><video className="moon-video" src="/Moon%20Live%20Wallpaper_2160p.mp4" onLoadedMetadata={handleVideoMetadata} autoPlay loop muted playsInline preload="metadata" aria-label="Live moon wallpaper" /><div className="moon-sheen" /></div></div></div></section>
      <section className="upcoming-test reveal" id="upcoming-test"><div className="upcoming-test-copy"><p className="upcoming-test-badge"><span className="upcoming-test-pulse" />Upcoming Test</p><h2 id="upcoming-test-title">Vector Alpha</h2><p className="upcoming-test-text">An 8 kN solid motor static fire campaign.</p><p className="upcoming-test-countdown" aria-live="polite">{vectorTestCountdown.complete ? 'Test window reached' : <><span>T - </span><span>{String(vectorTestCountdown.days ?? 0).padStart(2, '0')}</span><span className="upcoming-test-countdown-unit">D</span><span>{String(vectorTestCountdown.hours ?? 0).padStart(2, '0')}</span><span className="upcoming-test-countdown-unit">H</span><span>{String(vectorTestCountdown.minutes ?? 0).padStart(2, '0')}</span><span className="upcoming-test-countdown-unit">M</span><span>{String(vectorTestCountdown.seconds ?? 0).padStart(2, '0')}</span><span className="upcoming-test-countdown-unit">S</span></>}</p></div><dl className="upcoming-test-specs"><div><dt>Test</dt><dd>Static Fire</dd></div><div><dt>Motor thrust</dt><dd>8 kN</dd></div><div><dt>Earliest test window</dt><dd>15 Dec 2026 · 3:00 PM IST</dd></div></dl></section>
      <section className="showcase vector-summary vector-summary--reverse reveal" id="vector-alpha-summary"><div className="showcase-visual"><img src="/Vector%20Alpha/cad_ss.jpg" alt="Vector Alpha motor cutaway and internal architecture" loading="lazy" /></div><div className="showcase-copy"><p className="eyebrow">Vector Alpha · solid propulsion</p><h2>Vector Alpha <span className="showcase-year">(expected 2026)</span></h2><p>An 8 kN-class KNSU solid motor program focused on propulsion design, instrumentation, and static-fire testing.</p><div className="timeline"><div><strong>Propellant</strong><span>KNSU · potassium nitrate and sucrose.</span></div><div><strong>Motor class</strong><span>8 kN · program target.</span></div><div><strong>Current phase</strong><span>Static-fire campaign · starts 15 Dec 2026.</span></div></div><Link className="text-link" to="/technology/vector-alpha">View Vector Alpha →</Link></div></section>
      <section className="capabilities reveal" id="technology"><div className="section-heading"><p>Technology</p><h2>Real engineering capability first. Scale later.</h2></div><div className="capability-grid">{capabilities.map(([title, text], index) => <article className="capability-card" key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="showcase reveal" id="vehicles"><div className="showcase-visual"><img src="/engine.png" alt="IOTIC Space engine assembly" loading="lazy" /></div><div className="showcase-copy"><p className="eyebrow">Flux Alpha · conceptual values</p><h2>Flux Alpha <span className="showcase-year">(expected 2029)</span></h2><p>LOX/LCH4 concept. Values are design targets, not validated results.</p><div className="timeline"><div><strong>ISP</strong><span>260–290 s · conceptual target range.</span></div><div><strong>Thrust</strong><span>400 kN · conceptual design target.</span></div><div><strong>Propellant</strong><span>LOX + LCH4 · programme direction.</span></div></div><Link className="text-link" to="/technology/flux-alpha">Read Flux Alpha dossier →</Link></div></section>
      <section className="moon-goal reveal" id="moon-mission"><div className="moon-goal-heading"><p className="eyebrow">Roadmap</p><h2>The Moon Mission.</h2><p>A staged path from propulsion validation to lunar transportation.</p></div><ol className="moon-goal-roadmap">{roadmap.map(([title, text, status], index) => <li key={title}><span className="card-index">Step 0{index + 1}</span><h3>{title}</h3><p>{text}</p><small>{status}</small></li>)}</ol></section>
      <section className="mission-panel reveal" id="mission-control"><div><p className="eyebrow">The Mission</p><h2>One validated propulsion milestone at a time.</h2></div><div className="mission-panel-detail"><p>Design. Build. Test. Learn. Iterate.</p><ol className="mission-milestones"><li><span>01</span><strong>8 kN Static Fire Test</strong><time>Dec 2026</time></li><li><span>02</span><strong>20 kN Flight-Grade Engine Static Fire Test</strong><time>June 2027</time></li><li><span>03</span><strong>Stratospheric Flight Test</strong><time>Dec 2027</time></li></ol></div></section>
      <section className="about-section reveal" id="about-us"><div className="about-heading"><p className="eyebrow">Company &amp; incubation</p><h2 id="about-title">Incubated and recognised.</h2><div className="about-logos" aria-label="Incubation institutions"><img src="/incubator/iit_ism.png" alt="IIT (ISM) Dhanbad" loading="lazy" /><img src="/incubator/ciie.png" alt="CIIE IIT (ISM) Dhanbad Foundation" loading="lazy" /></div></div><div className="about-copy"><p>IOTIC Space is incubated at the CIIE – IIT (ISM) Dhanbad Foundation, under the Ministry of Electronics and Information Technology (MeitY) GENESIS Entrepreneur-in-Residence (EiR) 2.0 programme.</p><p>This incubation provides an institutional ecosystem to support our entrepreneurial and technological development.</p><p>IOTIC Space is also registered with the Indian National Space Promotion and Authorisation Centre (IN-SPACe) as a Non-Government Entity (NGE).</p><ul className="about-tags"><li>CIIE – IIT (ISM) Dhanbad</li><li>MeitY GENESIS EiR 2.0</li><li>IN-SPACe registered NGE</li></ul></div></section>
      <section className="team-section reveal" id="team"><div className="team-heading"><h2 id="team-title">Core Team at IOTIC Space.</h2></div><div className="team-grid">{teamMembers.map((member) => <article className="team-card" key={member.name}><div className="team-image-wrapper"><img src={member.image} alt={`${member.name}, ${member.role}`} className="team-image" loading="lazy" /><div className="team-image-overlay" /></div><div className="team-info" style={{ '--team-image': `url(${member.image})` }}><div className="team-header"><div className="team-name-block"><h3>{member.name}</h3><span className="team-role">{member.role}</span></div><div className="team-contact-links"><a className="team-linkedin" href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}><img src="/team/linkedin_logo.png" alt="" /></a><span className="team-contact-divider" aria-hidden="true">|</span><a className="team-linkedin team-gmail" href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}><img src="/team/gmail_logo.png" alt="" /></a></div></div><div className="team-detail"><span className="team-detail-label">Education</span><p className="team-education">{member.education}</p></div><div className="team-detail"><span className="team-detail-label">Responsibilities</span><p className="team-education">{member.responsibilities}</p></div></div></article>)}</div></section>
      <section className="updates-preview reveal" id="development-log"><div><p className="eyebrow">Timeline</p><h2>Development updates.</h2><p>Project, engineering, manufacturing, simulation, and test records.</p></div><Link className="secondary-action" to="/timeline">Open timeline</Link></section>
      <section className="contact-section reveal" id="contact"><div className="contact-copy"><p className="eyebrow">Contact</p><h2>Contact IOTIC Space.</h2><div className="contact-details" aria-label="Contact details"><div><span>Email</span><a className="contact-link contact-link--email" href="mailto:hello@ioticspace.com">hello@iotic.space</a></div><div><span>Founder</span><a className="contact-link contact-link--email" href="mailto:founder@iotic.space">founder@iotic.space</a></div><div><span>Phone</span><a className="contact-link" href="tel:+918505905796">+91 85059 05796</a></div><div><span>Location</span><p>Dhanbad, Jharkhand</p></div><div className="contact-details-wide"><span>LinkedIn</span><a className="contact-link contact-link--linkedin" href="https://www.linkedin.com/company/iotic-space" target="_blank" rel="noreferrer">https://www.linkedin.com/company/iotic-space</a></div></div></div></section>
    </main>
  </SiteChrome>
}

export default App
