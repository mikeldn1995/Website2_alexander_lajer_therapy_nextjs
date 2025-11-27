import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function PlayTherapy() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/children" className="link-primary">Children</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>Play Therapy</a></li>
            </ul>
          </nav>
          <div className="columns">
            <div className="column is-8">
              <Image
                src="/images/playtherapy.png"
                alt="Play therapy session with toys and creative materials"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />
              <h2 className="title is-2 heading mb-4">Exploring Emotions Through Play: A Child-Centred Therapeutic Approach</h2>
              <p className="mb-4 text-secondary">
                At its core, Play-Based Therapy recognises that play is a child's natural way of communicating. Whilst young adults often rely on words to express themselves, children tend to share their inner world through play. Whether it's through storytelling with toys, drawing pictures, or building with blocks, children reveal their thoughts, emotions, and experiences in symbolic ways. In a safe and supportive therapeutic setting, these activities are not simply recreational—they become meaningful tools for expression. Alexander Lajer's approach invites children to explore at their own pace, helping them process complex feelings such as fear, sadness, anger, or confusion in ways that feel intuitive and manageable.
              </p>
              <p className="mb-4 text-secondary">
                What may look like ordinary play is, in fact, rich with emotional significance. A child repeatedly building and knocking down a tower might be expressing feelings of instability or frustration. A nurturing scene with dolls could signal a need for comfort or a desire to make sense of relationships. In these moments, Alexander carefully observes and gently interacts, offering reflections and support without taking control of the experience. This balance of freedom and therapeutic guidance allows children to feel safe, seen, and heard—often for the first time. The consistency and containment of regular sessions create an environment where trust can develop, and emotional resilience can begin to grow.
              </p>
              <p className="mb-4 text-secondary">
                For younger children especially, Play-Based Therapy can feel like entering a magical space that is entirely theirs. Sessions are designed to be engaging and child-led, which naturally encourages openness and honesty. The toys and materials available aren't random—they're thoughtfully selected to offer children many ways to explore their thoughts and feelings non-verbally. Over time, even children who struggle to articulate what they're going through can begin to make sense of their experiences and feel more in control. In Alexander's practice, the ultimate goal of this work is not just to address current emotional challenges, but to nurture a child's long-term capacity for self-awareness, emotional regulation, and healthy relationships.
              </p>
            </div>
            <div className="column is-4">
              <div className="box">
                <h3 className="title is-4 heading mb-4">Key Benefits:</h3>
                <ul className="content" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Non-verbal expression of emotions</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Child-led exploration</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Safe space for processing difficult feelings</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Builds emotional resilience</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Develops self-awareness</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Improves emotional regulation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
