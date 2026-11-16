import { Link, useParams } from 'react-router-dom'
import SiteChrome from './SiteChrome.jsx'
import './ProjectPage.css'

const projects = {
  'vector-alpha': {
    name: 'Vector Alpha',
    eyebrow: 'Solid propulsion / project dossier',
    intro: 'Solid motor prototype for design, instrumentation, and static-fire validation.',
    image: '/Vector%20Alpha/cad_ss.jpg',
    status: 'In development',
    sections: [
      ['Development objective', 'Develop and test an 8 kN-class solid motor with instrumentation and safe static-fire operations.'],
      ['Motor architecture', 'Vector Alpha is a solid rocket motor prototype. Grain geometry, materials, and internal drawings are not public.'],
      ['Nozzle & combustion chamber', 'Nozzle and chamber design are in the validation loop. Geometry, thermal analysis, and measured pressure traces are not public.'],
      ['Test infrastructure', 'A static-fire campaign is in preparation. Stand, instrumentation, photographs, and data-acquisition details are not public.'],
    ],
    technicalData: [
      ['Propellant', 'KNSU · potassium nitrate (KNO₃) and sucrose'],
      ['Nominal formulation', '65 wt% oxidizer / 35 wt% fuel'],
      ['Total modelled propellant mass', '28.704 kg'],
      ['Propellant density', '1,800 kg/m³'],
      ['Maximum model pressure', '10.3425 MPa'],
      ['Burn-rate coefficient', '0.10073115 mm/(s·Paⁿ)'],
      ['Burn-rate exponent', '0.319'],
      ['Specific heat ratio', '1.133'],
      ['Combustion temperature', '~1,720 K'],
      ['Exhaust molar mass', '41.98 g/mol'],
      ['Characteristic velocity', '918 m/s'],
      ['Initial Kn', '144.16053'],
    ],
    simulationSummary: 'The supplied OM_Data.csv contains 186 time-series records from 0.00 s to 5.55 s. In that preliminary model record, the maximum listed thrust is 9,436.35 N at 0.03 s and the maximum listed chamber pressure is 2.70714 MPa at 0.00 s. These are model outputs, not measured test results.',
    analyticalSummary: 'Preliminary 1D thermochemical baseline: nominal chamber pressure 15.6 bar, peak chamber pressure 27.1 bar, combustion temperature approximately 1,720 K, and OpenMotor simulated delivered specific impulse of 85–100 s.',
    milestones: [
      { label: 'Architecture and design', status: 'Completed · 17 Sep 2026' },
      { label: 'Manufacturing and integration', status: 'Completed · 17 Nov 2026' },
      { label: 'Instrumentation checkout', status: 'Scheduled · 28 Nov 2026' },
      { label: 'Static fire campaign', status: 'In progress · starts 2 Dec 2026' },
    ],
  },
  'flux-alpha': {
    name: 'Flux Alpha',
    eyebrow: 'Methalox propulsion / concept dossier',
    intro: 'LOX/LCH4 propulsion concept for future space transportation.',
    image: '/engine.png',
    status: 'Concept / design study',
    sections: [
      ['Propellant combination', 'LOX + LCH4. This is a programme direction, not a flight-proven result.'],
      ['Architecture & thermal systems', 'Chamber, nozzle, cooling, and feed systems are under study. Detailed drawings and simulations are not public.'],
      ['Performance specifications', 'Indicative targets: 400 kN thrust class and 260–290 s specific impulse. Not validated.'],
      ['Long-term objective', 'Develop propulsion for missions beyond Earth orbit through staged validation.'],
    ],
    milestones: [
      { label: 'Concept definition', status: 'Current public scope' },
      { label: 'Architecture studies', status: 'Not yet published' },
      { label: 'Simulation and CAD', status: 'Not yet published' },
      { label: 'Future hardware development', status: 'Not yet published' },
    ],
  },
}

function ProjectPage() {
  const { projectId } = useParams()
  const project = projects[projectId] || projects['vector-alpha']

  return (
    <SiteChrome>
      <main className="project-page">
        <section className="project-hero reveal is-visible">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <span className="status-chip">{project.status}</span>
            <h1>{project.name}</h1>
            <p className="project-intro">{project.intro}</p>
            <div className="project-actions">
              <Link className="secondary-action" to="/#contact">Contact the team</Link>
            </div>
          </div>
          <figure className="project-hero-image">
            <img src={project.image} alt={`${project.name} engineering visual`} />
            <figcaption>Existing project visual · public material</figcaption>
          </figure>
        </section>

        <section className="project-section dossier-grid">
          {project.sections.map(([title, text]) => (
            <article className="dossier-card" key={title}>
              <p className="eyebrow">{title}</p>
              <p>{text}</p>
            </article>
          ))}
        </section>

        {project.technicalData && <section className="project-section technical-data-section">
          <div className="technical-data-heading"><p className="eyebrow">Preliminary motor data</p><h2>Vector Alpha.</h2><p>Preliminary KNSU/OpenMotor and CSV data. Not measured test results.</p></div>
          <dl className="technical-data-grid">{project.technicalData.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <div className="simulation-notes"><p><strong>Analytical operating conditions</strong>{project.analyticalSummary}</p><p><strong>Time-series simulation record</strong>{project.simulationSummary}</p><p><strong>Recorded fields</strong>Time, Kn, chamber pressure, thrust, propellant mass, volume loading, mass flow, mass flux, regression depth, web, nozzle exit pressure, throat diameter change, and core Mach number for the three grain groups.</p></div>
        </section>}

        <section className="project-section project-milestones">
          <div>
            <p className="eyebrow">Development milestones</p>
            <h2>Programme stages.</h2>
            <p className="muted-copy">No completion or test result is implied.</p>
          </div>
          <ol>
            {project.milestones.map((milestone, index) => (
              <li key={milestone.label}><span>0{index + 1}</span><strong>{milestone.label}</strong><em>{milestone.status}</em></li>
            ))}
          </ol>
        </section>

        <section className="project-section archive-note">
          <p className="eyebrow">Gallery &amp; archive</p>
          <h2>Evidence archive.</h2>
          <p>CAD, simulations, photographs, videos, measurements, and conclusions will be added when released.</p>
        </section>
      </main>
    </SiteChrome>
  )
}

export default ProjectPage
