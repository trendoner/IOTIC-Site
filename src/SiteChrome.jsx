import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const technologyLinks = [
  { label: 'Vector Alpha', to: '/technology/vector-alpha' },
  { label: 'Flux Alpha', to: '/technology/flux-alpha' },
]

const companyLinks = [
  { label: 'About Us', href: '#about-us' },
  { label: 'Incubation', href: '#about-us' },
  { label: 'Timeline', to: '/timeline' },
  { label: 'Publications', to: '/publications' },
]

function SiteChrome({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previousScrollRestoration }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }))
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  useEffect(() => {
    const pageTitles = {
      '/development-log': 'Timeline · IOTIC Space',
      '/timeline': 'Timeline · IOTIC Space',
      '/publications': 'Publications & Insights · IOTIC Space',
      '/recruitment': 'Recruitment · IOTIC Space',
    }
    const title = location.pathname.startsWith('/technology/vector-alpha')
      ? 'Vector Alpha · IOTIC Space'
      : location.pathname.startsWith('/technology/flux-alpha')
        ? 'Flux Alpha · IOTIC Space'
        : pageTitles[location.pathname] || 'IOTIC Space · Propulsion and launch systems'
    document.title = title
  }, [location.pathname])

  const toggleMenu = (menu) => setOpenMenu((current) => (current === menu ? null : menu))

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="IOTIC Space home">
          <img src="/LogoWithoutText.png" alt="IOTIC Space logo" />
          <span className="brand-name">iotic.space</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true">{mobileOpen ? 'Close' : 'Menu'}</span>
        </button>

        <nav className={`nav ${mobileOpen ? 'is-open' : ''}`} id="primary-navigation" aria-label="Primary">
          <a className={location.pathname === '/' ? 'is-active' : ''} href="/#home">Home</a>
          <div className="nav-dropdown">
            <button
              type="button"
              className={location.pathname.startsWith('/technology') ? 'is-active nav-menu-button' : 'nav-menu-button'}
              aria-expanded={openMenu === 'technology'}
              onClick={() => toggleMenu('technology')}
            >
              Technology <span aria-hidden="true">⌄</span>
            </button>
            <div className={`nav-dropdown-panel ${openMenu === 'technology' ? 'is-open' : ''}`}>
              {technologyLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
            </div>
          </div>
          <a href="/#moon-mission">Roadmap</a>
          <a href="/#team">Team</a>
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-menu-button"
              aria-expanded={openMenu === 'company'}
              onClick={() => toggleMenu('company')}
            >
              Company <span aria-hidden="true">⌄</span>
            </button>
            <div className={`nav-dropdown-panel ${openMenu === 'company' ? 'is-open' : ''}`}>
              {companyLinks.map((item) => item.to
                ? <Link key={item.to} to={item.to}>{item.label}</Link>
                : <a key={item.label} href={`/${item.href}`}>{item.label}</a>)}
            </div>
          </div>
          <a href="/#contact">Contact</a>
        </nav>

        <Link className="nav-recruitment-cta" to="/recruitment">Recruitment</Link>
      </header>
      {children}
      <SiteFooter />
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="global-footer">
      <div className="global-footer-brand">
        <Link className="brand" to="/" aria-label="IOTIC Space home">
          <img src="/LogoWithoutText.png" alt="IOTIC Space logo" />
          <span className="brand-name">iotic.space</span>
        </Link>
          <p>Propulsion and launch systems from IIT (ISM) Dhanbad.</p>
          <small>InterOrbital Technnovation Corp Pvt Ltd</small>
      </div>
      <div className="global-footer-column">
        <span>Explore</span>
        <Link to="/technology/vector-alpha">Vector Alpha</Link>
        <Link to="/technology/flux-alpha">Flux Alpha</Link>
      </div>
      <div className="global-footer-column">
        <span>Company</span>
        <Link to="/#about-us">About Us</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/recruitment">Recruitment</Link>
      </div>
      <div className="global-footer-column">
        <span>Contact</span>
        <a href="mailto:hello@ioticspace.com">hello@iotic.space</a>
        <a href="https://www.linkedin.com/company/iotic-space" target="_blank" rel="noreferrer">linkedin</a>
        <small>© {new Date().getFullYear()} IOTIC Space</small>
      </div>
    </footer>
  )
}

export { SiteFooter }
export default SiteChrome
