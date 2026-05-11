import { Link, useLocation } from 'react-router'
import { useState } from 'react'
import { Menu, X, User, Briefcase, Mic, Home } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/bio', label: 'My Bio', icon: User },
  { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { path: '/elevator-pitch', label: 'Elevator Pitch', icon: Mic },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e2d9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-semibold text-[#2d2a26] tracking-tight">
            Gentille UMUHOZAWASE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#2d2a26] text-[#faf8f5]'
                      : 'text-[#5c564e] hover:bg-[#f0ebe3] hover:text-[#2d2a26]'
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#5c564e] hover:bg-[#f0ebe3] transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#faf8f5] border-t border-[#e8e2d9] px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            const Icon = link.icon
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2d2a26] text-[#faf8f5]'
                    : 'text-[#5c564e] hover:bg-[#f0ebe3]'
                }`}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
