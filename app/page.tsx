import Layout from '@/components/Layout'
import FAQ from '@/components/FAQ'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Palette, Leaf, Star, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <Image
                src="/images/alex1.png"
                alt="Alexander Lajer"
                width={320}
                height={320}
                className="hero-image"
                unoptimized
              />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome from <span className="hero-title-accent">Alexander Lajer</span>
              </h1>
              <p className="hero-subtitle">
                Supporting the emotional well-being and growth of young people at different stages of life in North London.
              </p>
              <p className="hero-description">
                My approach is creative, compassionate, and always tailored—whether you're navigating childhood, adolescence, or early adulthood—to help you feel heard, understood, and empowered to meet life's challenges.
              </p>
              <div className="hero-cta">
                <Link href="/whoami" className="button is-primary hero-button">
                  Learn More About Me
                </Link>
                <Link href="/contact" className="button is-outlined hero-button-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="site-section features-list bg-light">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 className="title is-2 heading mb-3">Therapy for Children, Adolescents & Young Adults</h2>
            <p className="subtitle is-5 text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Tailored support for young people at every stage—helping children, teens, and young adults thrive emotionally, socially, and academically.
            </p>
          </div>
          <div className="columns">
            <div className="column is-4">
              <div className="box has-text-centered" style={{ height: '100%' }}>
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Heart size={32} />
                </div>
                <h3 className="title is-4 heading mb-3">Children & Adolescents</h3>
                <p className="text-secondary">
                  Providing a nurturing environment for children and teens to explore feelings, build resilience, and develop healthy coping skills through play, conversation, and creative activities.
                </p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered" style={{ height: '100%' }}>
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Users size={32} />
                </div>
                <h3 className="title is-4 heading mb-3">Young Adults</h3>
                <p className="text-secondary">
                  Supporting young adults as they navigate independence, relationships, academic and career pressures, and personal growth in a safe, understanding space.
                </p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered" style={{ height: '100%' }}>
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Palette size={32} />
                </div>
                <h3 className="title is-4 heading mb-3">Integrative Approach</h3>
                <p className="text-secondary">
                  Blending a range of therapeutic methods—including creative, evidence-based, and relational approaches—to create a personalised experience that meets the unique needs of each child, adolescent, or young adult.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section feature-fonzie">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <Image
                src="/images/fonsie1.png"
                alt="Therapy dog placeholder"
                width={500}
                height={400}
                style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  boxShadow: 'var(--shadow-md)',
                  border: '2px solid var(--border-light)'
                }}
                unoptimized
              />
            </div>
            <div className="column is-6">
              <h2 className="title is-2 heading mb-4">Meet <span className="accent-color">Mr. Fonzie</span></h2>
              <p className="subtitle is-5 mb-4 text-secondary">
                Mr. Fonzie, my therapy dog-in-training, brings warmth and comfort to our sessions. His gentle presence helps those who I work with feel safe, supported, and more at ease during therapy.
              </p>
              <ul className="content" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <Sparkles size={20} style={{ marginRight: '0.75rem', color: 'var(--primary-color)' }} />
                  <span className="text-secondary">Calming influence in sessions</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <Sparkles size={20} style={{ marginRight: '0.75rem', color: 'var(--primary-color)' }} />
                  <span className="text-secondary">Encourages emotional expression</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <Sparkles size={20} style={{ marginRight: '0.75rem', color: 'var(--primary-color)' }} />
                  <span className="text-secondary">Builds trust with young clients</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center' }}>
                  <Sparkles size={20} style={{ marginRight: '0.75rem', color: 'var(--primary-color)' }} />
                  <span className="text-secondary">Helps with emotional regulation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section benefits-section bg-light">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 className="title is-2 heading">Benefits of Therapy for Children</h2>
          </div>
          <div className="columns">
            <div className="column is-4">
              <div className="box has-text-centered" style={{ height: '100%' }}>
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Heart size={32} />
                </div>
                <h3 className="title is-4 heading mb-3">Emotional Growth</h3>
                <p className="text-secondary">
                  Therapy helps children understand and manage their feelings, fostering emotional intelligence and self-awareness.
                </p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered" style={{ height: '100%' }}>
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Leaf size={32} />
                </div>
                <h3 className="title is-4 heading mb-3">Resilience Building</h3>
                <p className="text-secondary">
                  Develop coping strategies and resilience to navigate life's challenges with confidence and adaptability.
                </p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered" style={{ height: '100%' }}>
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Star size={32} />
                </div>
                <h3 className="title is-4 heading mb-3">Improved Self-Esteem</h3>
                <p className="text-secondary">
                  Boost self-esteem and self-worth, helping children and adolescents feel valued and empowered in their daily lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section cta-section accent-bg">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-5 has-text-centered">
              <Image
                src="/images/start1.png"
                alt="Contact Alexander Lajer Therapy"
                width={300}
                height={220}
                style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  boxShadow: 'var(--shadow-md)', 
                  objectFit: 'cover', 
                  maxHeight: '220px',
                  border: '2px solid var(--border-light)'
                }}
                unoptimized
              />
            </div>
            <div className="column is-7 has-text-centered-mobile">
              <h2 className="title is-2 heading mb-4">Ready to Begin the Journey?</h2>
              <p className="subtitle is-5 mb-5 text-secondary">
                I'm here to support you and your family. Contact me today to learn more or schedule a consultation. Together, we can create a safe space for growth and healing.
              </p>
              <Link href="/contact" className="button is-primary is-large">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </Layout>
  )
}
