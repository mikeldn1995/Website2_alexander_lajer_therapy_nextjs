'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsActive(!isActive)
  }

  const isActiveRoute = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item" style={{ padding: '0.5rem 0' }}>
            <Image
              src="/images/favicon1.png"
              alt="Site Icon"
              width={40}
              height={40}
              style={{ marginRight: '0.7em', verticalAlign: 'middle' }}
              unoptimized
            />
            <span>
              <strong style={{ fontSize: '1.1rem', letterSpacing: '-0.01em' }}>Alexander Lajer</strong>
              <br />
              <span style={{ fontSize: '0.85em', display: 'block', lineHeight: 1, color: 'var(--text-secondary)' }}>
                Integrative Therapist
              </span>
            </span>
          </Link>

          <a
            role="button"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isActive}
            onClick={toggleMenu}
            style={{ color: 'var(--text-primary)' }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link 
              href="/" 
              className={`navbar-item ${isActiveRoute('/') && pathname === '/' ? 'is-active' : ''}`}
            >
              Home
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link href="/children" className="navbar-link">
                Children
                <ChevronDown size={16} className="dropdown-icon" />
              </Link>
              <div className="navbar-dropdown" style={{ 
                borderRadius: 'var(--radius-md)', 
                boxShadow: 'var(--shadow-md)',
                border: '1px solid var(--border-color)',
                marginTop: '0.5rem'
              }}>
                <Link href="/children" className="navbar-item">
                  Overview
                </Link>
                <Link href="/playtherapy" className="navbar-item">
                  Play Therapy
                </Link>
              </div>
            </div>
            <Link 
              href="/young-adults" 
              className={`navbar-item ${isActiveRoute('/young-adults') ? 'is-active' : ''}`}
            >
              Young Adults
            </Link>
            <Link 
              href="/whoami" 
              className={`navbar-item ${isActiveRoute('/whoami') ? 'is-active' : ''}`}
            >
              Who Am I
            </Link>
            <Link 
              href="/reflections" 
              className={`navbar-item ${isActiveRoute('/reflections') ? 'is-active' : ''}`}
            >
              Reflections
            </Link>
            <Link 
              href="/contact" 
              className={`navbar-item ${isActiveRoute('/contact') ? 'is-active' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
