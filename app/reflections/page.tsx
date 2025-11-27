import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Reflections() {
  const articles = [
    {
      slug: 'healing-paw-pet-therapy',
      title: 'The Healing Paw:',
      subtitle: 'How Pets Transform Mental Wellbeing and Influence Therapy',
      image: '/images/fonsie1.png',
      alt: 'The Healing Paw article'
    },
    {
      slug: '5-minute-grounding-practice',
      title: 'The 5-Minute Grounding Practice:',
      subtitle: 'A Simple Tool for Overwhelming Moments',
      image: '/images/5minutegrounding.png',
      alt: '5-Minute Grounding Practice'
    },
    {
      slug: 'box-breathing',
      title: 'Box Breathing:',
      subtitle: 'A Calming Technique for Anxiety and Stress',
      image: '/images/box-breathing.png',
      alt: 'Box Breathing technique'
    },
    {
      slug: '5-4-3-2-1-grounding-exercise',
      title: 'The 5-4-3-2-1 Grounding Exercise:',
      subtitle: 'Using Your Senses to Stay Present',
      image: '/images/54321.png',
      alt: '5-4-3-2-1 Grounding Exercise'
    },
    {
      slug: 'understanding-anxiety-young-people',
      title: 'Understanding Anxiety in Young People:',
      subtitle: 'Signs, Support, and Hope',
      image: '/images/child1.png',
      alt: 'Understanding anxiety in young people'
    },
    {
      slug: 'building-resilience-creative-expression',
      title: 'Building Resilience Through Creative Expression',
      subtitle: 'How Art, Music, and Play Foster Healing',
      image: '/images/playtherapy.png',
      alt: 'Creative expression and resilience'
    },
    {
      slug: 'navigating-school-transitions',
      title: 'Navigating School Transitions:',
      subtitle: 'Supporting Young People Through Change',
      image: '/images/people1.png',
      alt: 'School transitions support'
    },
    {
      slug: 'power-active-listening',
      title: 'The Power of Active Listening:',
      subtitle: 'Building Connection and Understanding',
      image: '/images/handshake1.png',
      alt: 'Active listening and connection'
    }
  ]

  return (
    <Layout>
      <div className="site-section bg-light">
        <div className="container">
          <h1 className="title is-2 heading has-text-centered mb-6">Reflections & Resources</h1>
          <p className="subtitle is-5 has-text-centered text-secondary mb-6" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
            Explore articles, practices, and insights on mental health, therapy, and supporting young people through life's challenges.
          </p>
          
          <div className="columns is-multiline">
            {articles.map((article) => (
              <div key={article.slug} className="column is-6 is-4-desktop">
                <div className="box" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-image mb-4" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <Link href={`/${article.slug}`}>
                      <Image
                        src={article.image}
                        alt={article.alt}
                        width={400}
                        height={300}
                        style={{ 
                          objectFit: 'cover',
                          width: '100%',
                          height: '200px',
                          borderRadius: 'var(--radius-md)'
                        }}
                        unoptimized
                      />
                    </Link>
                  </div>
                  <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 className="title is-4 heading mb-3">
                      <Link href={`/${article.slug}`} className="link-primary">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-secondary mb-4" style={{ flex: 1 }}>
                      {article.subtitle}
                    </p>
                    <Link href={`/${article.slug}`} className="button is-text link-primary" style={{ alignSelf: 'flex-start' }}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
