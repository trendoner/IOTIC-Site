import { useMemo, useState } from 'react'
import SiteChrome from './SiteChrome.jsx'
import MissionTimeline from './MissionTimeline.jsx'
import './InsightsPage.css'

const updates = [
  { type: 'Project update', status: 'In Development', title: 'Vector Alpha programme dossier', date: '01 · Current public scope', text: 'The public project record now separates design objectives, planned testing, and future evidence.' },
  { type: 'Company announcement', status: 'Completed', title: 'Institutional context', date: '02 · Current public scope', text: 'IOTIC Space is incubated at CIIE – IIT (ISM) Dhanbad Foundation and lists its MeitY GENESIS EiR 2.0 association.' },
]

const publications = [
  {
    type: 'Research & Development',
    title: 'Development and Numerical Investigation of GhostLine: A Pneumatic Pressure Isolation Architecture for Remote Combustion Chamber Pressure Measurement',
    text: 'This paper presents the development of “GhostLine”, a pneumatic pressure isolation architecture for combustion chamber pressure measurement. The proposed approach uses a pre-charged pneumatic transmission line to separate pressure-wave propagation from direct thermal and particulate exposure.',
    authors: ['INTERORBITAL TECHNNOVATION CORPORATION PRIVATE LIMITED', 'Harikesh Pratap Verma, Department Of Mechanical Engineering, IIT ISM Dhanbad', 'Hruday Chilukuri, Department Of Mechanical Engineering, IIT ISM Dhanbad', 'Yash Budvansh, Department Of Mechanical Engineering, IIT ISM Dhanbad'],
    supervisor: 'Prof. Swagata Bhaumik, Department of Mechanical Engineering, IIT-ISM Dhanbad',
    originality: 'This paper presents the development of ‘GhostLine’, a pneumatic pressure isolation architecture for combustion chamber pressure measurement. Unlike conventional pressure sensing arrangements, the proposed approach employs a pre-charged pneumatic transmission line to separate pressure-wave propagation from direct thermal and particulate exposure.',
    abstract: 'Combustion chamber pressure is one of the most important parameters for evaluating the performance, stability, and safety of rocket propulsion systems. Conventional pressure measurement techniques typically require sensors to be mounted in close proximity to the combustion chamber, exposing them to extreme temperatures, combustion products, thermal shock, and mechanical vibrations, thereby increasing instrumentation cost and reducing sensor longevity. To address these challenges, this paper presents GhostLine, a pneumatic pressure isolation architecture designed to remotely transmit combustion chamber pressure while minimising thermal and particulate exposure to the sensing element through a pre-charged pneumatic transmission line.',
    keywords: 'Rocket propulsion, Combustion chamber pressure measurement, Pneumatic pressure isolation, Instrumentation, Acoustic wave propagation, Numerical modelling',
  },
]

function InsightsPage({ mode = 'updates' }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const isUpdates = mode === 'updates'
  const source = isUpdates ? updates : publications
  const categories = ['All', ...new Set(source.map((item) => item.type))]
  const filtered = useMemo(() => source.filter((item) => (category === 'All' || item.type === category) && `${item.title} ${item.text}`.toLowerCase().includes(query.toLowerCase())), [category, query, source])

  return (
    <SiteChrome>
      <main className="insights-page">
        <section className="insights-hero reveal is-visible">
          <p className="eyebrow">{isUpdates ? 'Timeline' : 'Publications & Insights'}</p>
          <h1>{isUpdates ? 'Mission timeline.' : 'Publications & Insights.'}</h1>
          <p>{isUpdates ? 'Seven programme stages. Stage 01 is in development.' : 'Technical articles, research, engineering updates, and announcements.'}</p>
        </section>
        {!isUpdates && <section className="insights-tools">
          <label><span className="sr-only">Search</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" /></label>
          <div className="insights-filters">{categories.map((item) => <button type="button" className={category === item ? 'is-selected' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        </section>}
        {!isUpdates && <section className="insights-list" aria-live="polite">
          {filtered.map((item) => <article className="publication-card" key={item.title}><div className="publication-heading"><span className="insight-type">{item.type}</span><h2>{item.title}</h2><p>{item.text}</p></div><div className="publication-meta"><span>Authors</span><ul>{item.authors.map((author) => <li key={author}>{author}</li>)}</ul><span>Research supervisor</span><p>{item.supervisor}</p></div><div className="publication-body"><h3>Statement of originality</h3><p>{item.originality}</p><h3>Abstract</h3><p>{item.abstract}</p><h3>Keywords</h3><p>{item.keywords}</p></div></article>)}
          {filtered.length === 0 && <p className="empty-state">No matches.</p>}
        </section>}
        {isUpdates && <MissionTimeline />}
      </main>
    </SiteChrome>
  )
}

export default InsightsPage
