import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecruitmentPage from './RecruitmentPage.jsx'
import ProjectPage from './ProjectPage.jsx'
import InsightsPage from './InsightsPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recruitment',
    element: <RecruitmentPage/>
  }
  ,{
    path: '/technology/:projectId',
    element: <ProjectPage/>
  },
  {
    path: '/development-log',
    element: <InsightsPage mode="updates" />
  },
  {
    path: '/timeline',
    element: <InsightsPage mode="updates" />
  },
  {
    path: '/publications',
    element: <InsightsPage mode="publications" />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
