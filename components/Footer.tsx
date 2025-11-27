import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="columns mb-5">
          <div className="column is-4">
            <h3 className="heading-section mb-3">Alexander Lajer Therapy</h3>
            <p className="mb-3" style={{ opacity: 0.8 }}>Supporting young minds with care and creativity, in the heart of North London.</p>
            <p>
              <Link href="/whoami" className="footer-link">
                Read More
              </Link>
            </p>
          </div>
          <div className="column is-4">
            <h3 className="heading-section mb-3">Get in touch</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ marginRight: '0.75rem', marginTop: '0.125rem', flexShrink: 0, opacity: 0.8 }} />
                <span style={{ opacity: 0.8, lineHeight: '1.6' }}>Golders Hill Health Centre, 151 North End Road, London, Greater London, NW11 7HT</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Phone size={20} style={{ marginRight: '0.75rem', flexShrink: 0, opacity: 0.8 }} />
                <a href="tel:+447795534265" className="footer-link">
                  +44 7795 534 265
                </a>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <Mail size={20} style={{ marginRight: '0.75rem', flexShrink: 0, opacity: 0.8 }} />
                <a href="mailto:alex@alexanderlajertherapy.com" className="footer-link">
                  alex@alexanderlajertherapy.com
                </a>
              </li>
            </ul>
          </div>
          <div className="column is-4">
            <div className="has-text-centered" style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="/images/credentials.png"
                alt="Credentials"
                width={200}
                height={150}
                style={{ objectFit: 'contain', height: '75%', opacity: 0.9 }}
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="has-text-centered" style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <p style={{ opacity: 0.6, fontSize: '0.875rem' }}>
            Copyright &copy; {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
