import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MissionTimeline.css'

const missionStages = [
  {
    number: '00', title: 'Company Incorporated', project: 'IOTIC Space', status: 'Completed', tone: 'completed', date: 'Not officially established',
    description: 'Company incorporated and initial funds secured.',
    milestones: ['Company incorporation', 'Initial funds secured'],
    gate: 'Company formation and initial funding established.', link: '/#about-us', linkLabel: 'View company context',
  },
  {
    number: '01', title: 'Propulsion Validation', project: 'Vector Alpha', status: 'In Development', tone: 'current', date: 'Not officially established',
    description: 'Establish the propulsion, ground-testing, and instrumentation foundation through a disciplined solid motor validation programme.',
    milestones: ['First static fire campaign', 'Validate solid propulsion hardware', 'Analyze measured thrust and pressure performance', 'Complete repeatability and reliability testing', 'Establish ground testing and instrumentation capabilities'],
    gate: 'Successful, documented propulsion validation against predefined engineering requirements.', link: '/technology/vector-alpha', linkLabel: 'Open Vector Alpha dossier',
  },
  {
    number: '02', title: 'Flight Demonstrator', project: 'Integrated vehicle programme', status: 'Planned', tone: 'upcoming', date: 'Not officially established',
    description: 'Progress from component validation to an integrated flight demonstrator that brings propulsion, avionics, and vehicle subsystems together.',
    milestones: ['Develop an integrated flight demonstrator', 'Integrate propulsion, avionics, and vehicle subsystems', 'Complete ground integration and qualification', 'Conduct first controlled flight demonstration', 'Evaluate flight data and vehicle performance'],
    gate: 'Successful demonstration of integrated vehicle flight capability.',
  },
  {
    number: '03', title: 'Stratospheric Flight', project: 'Sounding rocket vehicle', status: 'Planned', tone: 'upcoming', date: 'Not officially established',
    description: 'Develop and qualify a dedicated sounding rocket vehicle for high-altitude flight-system and telemetry demonstrations.',
    milestones: ['Develop a dedicated sounding rocket vehicle', 'Complete vehicle-level qualification', 'Conduct stratospheric flight demonstration', 'Validate telemetry and flight avionics', 'Demonstrate recovery capabilities where applicable'],
    gate: 'Successful high-altitude flight demonstration and validation of relevant flight systems.',
  },
  {
    number: '04', title: 'Exo-atmospheric Flight', project: 'Advanced flight vehicle', status: 'Planned', tone: 'upcoming', date: 'Not officially established',
    description: 'Advance propulsion and vehicle qualification toward the high-altitude and exo-atmospheric capabilities required for orbital vehicle development.',
    milestones: ['Develop an advanced flight vehicle', 'Progress propulsion and vehicle qualification', 'Demonstrate flight beyond the dense atmosphere', 'Validate upper-stage and flight-system capabilities', 'Establish foundations for orbital vehicle development'],
    gate: 'Successful demonstration of the required high-altitude and exo-atmospheric flight capabilities.',
  },
  {
    number: '05', title: 'Cryogenic Propulsion', project: 'Flux Alpha', status: 'Planned', tone: 'upcoming', date: 'Not officially established',
    description: 'Advance the Methalox engine programme from subsystem validation toward integrated cryogenic propulsion qualification.',
    milestones: ['Advance Methalox engine development', 'Validate individual propulsion subsystems', 'Progress integrated engine development', 'Complete relevant ground qualification', 'Establish cryogenic propulsion capabilities for future launch vehicles'],
    gate: "Engine qualification against the programme's predefined requirements.", link: '/technology/flux-alpha', linkLabel: 'Open Flux Alpha dossier',
  },
  {
    number: '06', title: 'Orbital Launch Vehicle', project: 'Orbital launch vehicle programme', status: 'Planned', tone: 'upcoming', date: 'Not officially established',
    description: 'Develop the multi-stage orbital launch vehicle architecture, its integrated systems, launch infrastructure, and qualification pathway.',
    milestones: ['Develop the orbital launch vehicle architecture', 'Establish multi-stage vehicle development', 'Integrate propulsion, avionics, and vehicle systems', 'Complete integrated ground qualification', 'Establish launch infrastructure and regulatory readiness', 'Complete launch vehicle qualification'],
    gate: 'Readiness for the first orbital launch attempt.',
  },
  {
    number: '07', title: 'First Orbital Flight', project: 'IOTIC Space — orbital flight', status: 'Planned', tone: 'upcoming', date: 'Not officially established',
    description: 'Complete final integration and launch-readiness work before attempting orbital insertion with a payload or instrumented vehicle.',
    milestones: ['Complete final vehicle integration', 'Complete launch readiness reviews', 'Conduct the first orbital launch attempt', 'Demonstrate successful orbital insertion', "Establish IOTIC Space's orbital launch capability"],
    gate: 'Successful insertion of a payload or instrumented vehicle into the intended orbit.',
  },
]

const reusabilityTrack = ['Recovery technology research', 'Reusable vehicle architecture', 'Recovery and landing demonstrations', 'Reflight validation', 'Reusable launch system development']

function MissionTimeline() {
  const [selectedStage, setSelectedStage] = useState(1)

  return (
    <section className="mission-timeline-section is-visible" id="mission-development" aria-labelledby="mission-timeline-title">
      <div className="mission-timeline-intro">
        <p className="eyebrow">Mission Development Timeline</p>
        <h2 id="mission-timeline-title">FROM FIRST FIRE TO ORBIT.</h2>
        <p>Every milestone brings us closer to independent space transportation. From validating our first propulsion systems to developing orbital launch capabilities, we are building the foundations of a new generation of space infrastructure.</p>
      </div>

      <div className="timeline-flow" aria-label="Mission development stages">
        {missionStages.map((stage, index) => {
          const isSelected = selectedStage === index
          return <article className={`timeline-stage timeline-stage--${stage.tone} ${isSelected ? 'is-selected' : ''}`} key={stage.number}>
            <button className="timeline-stage-trigger" type="button" aria-expanded={isSelected} aria-controls={`stage-detail-${stage.number}`} onClick={() => setSelectedStage(index)}>
              <span className="timeline-stage-number">{stage.number}</span>
              <span className="timeline-stage-heading"><strong>{stage.title}</strong><small>{stage.project}</small></span>
              <span className={`timeline-status timeline-status--${stage.tone}`}>{stage.status}</span>
              <span className="timeline-chevron" aria-hidden="true">{isSelected ? '−' : '+'}</span>
            </button>
            {isSelected && <div className="timeline-stage-detail" id={`stage-detail-${stage.number}`}>
              <p>{stage.description}</p>
              <div className="timeline-detail-columns"><div><span className="timeline-label">Key deliverables</span><ul>{stage.milestones.map((milestone) => <li key={milestone}>{milestone}</li>)}</ul></div><div><span className="timeline-label">Completion gate</span><p>{stage.gate}</p><span className="timeline-label">Target date</span><p>{stage.date}</p>{stage.link && <Link className="timeline-link" to={stage.link}>{stage.linkLabel} →</Link>}</div></div>
            </div>}
          </article>
        })}
      </div>

      <div className="mission-table-wrap"><div className="mission-table-heading"><p className="eyebrow">Programme register</p><h3>Seven gates. One accountable path.</h3></div><table className="mission-table"><caption className="sr-only">IOTIC Space mission development stages</caption><thead><tr><th>Stage</th><th>Programme milestone</th><th>Project</th><th>Status</th><th>Target date</th></tr></thead><tbody>{missionStages.map((stage) => <tr className={stage.tone === 'current' ? 'is-current' : ''} key={stage.number}><td>{stage.number}</td><td>{stage.title}</td><td>{stage.project}</td><td><span className={`timeline-status timeline-status--${stage.tone}`}>{stage.status}</span></td><td>{stage.date}</td></tr>)}</tbody></table></div>

      <div className="reusability-track"><div><p className="eyebrow">Parallel technology track</p><h3>REUSABILITY</h3><p>Parallel to the orbital programme. Not required for first orbital flight.</p></div><ol>{reusabilityTrack.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol><div className="reusability-connection" aria-hidden="true">→ orbital launch vehicle → lunar transportation</div></div>

      <div className="orbital-destination"><p className="eyebrow">Long-term destination</p><h3>IOTIC SPACE — ORBITAL FLIGHT</h3><p>Building the capability to reach orbit. Engineering the infrastructure to go beyond.</p></div>
    </section>
  )
}

export { missionStages }
export default MissionTimeline
