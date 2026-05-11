import { Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Portfolio from './pages/Portfolio'
import ElevatorPitch from './pages/ElevatorPitch'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/elevator-pitch" element={<ElevatorPitch />} />
      </Routes>
    </Layout>
  )
}
