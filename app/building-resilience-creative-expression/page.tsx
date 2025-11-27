import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function BuildingResilienceCreativeExpression() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/reflections" className="link-primary">Reflections</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>Building Resilience Through Creative Expression</a></li>
            </ul>
          </nav>
          
          <div className="columns is-centered">
            <div className="column is-8">
              <Image
                src="/images/playtherapy.png"
                alt="Creative expression through art and play"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />

              <h1 className="title is-2 heading mb-4">Building Resilience Through Creative Expression</h1>
              
              <p className="mb-4 text-secondary">
                Creativity is a powerful pathway to resilience. When words fail us, art, music, movement, and play offer alternative ways to process emotions, make sense of experiences, and find our voice. For young people especially, creative expression can be a lifeline—a way to explore difficult feelings without the pressure of having to explain or justify them.
              </p>
              
              <p className="mb-4 text-secondary">
                In therapy, creative expression takes many forms. A child might use paint to express anger they can't verbalise, or build with blocks to create a sense of control in a chaotic world. An adolescent might write poetry to process grief, or use music to connect with emotions that feel too big for words. A young adult might use movement or dance to release tension, or journaling to untangle complex thoughts.
              </p>
              
              <p className="mb-4 text-secondary">
                What makes creative expression so powerful is its ability to bypass the analytical mind and access deeper emotional truths. When we create, we're not just making art—we're externalising our inner world, making the invisible visible. This process can be incredibly validating, helping us see that our feelings are real, important, and worthy of expression.
              </p>
              
              <h3 className="title is-4 heading mt-5 mb-3">The Benefits of Creative Expression</h3>
              
              <p className="mb-4 text-secondary">
                Creative activities activate different parts of the brain than verbal communication, offering new pathways for healing. They can reduce stress, improve mood, and increase self-awareness. The act of creating something—whether it's a drawing, a song, or a story—can build confidence and provide a sense of accomplishment, especially important for young people struggling with self-esteem.
              </p>
              
              <p className="mb-4 text-secondary">
                Perhaps most importantly, creative expression teaches resilience by showing that we can transform difficult experiences into something meaningful. A painful memory becomes a powerful poem. Confusion becomes a beautiful abstract painting. Fear becomes a story with a hopeful ending. This process of transformation is at the heart of resilience—the ability to take what's difficult and find meaning, growth, or beauty within it.
              </p>
              
              <div className="gentle-quote-box">
                <p className="is-italic">
                  "You don't need to be an artist to benefit from creative expression. The goal isn't perfection—it's process. It's about giving yourself permission to explore, experiment, and express what's inside."
                </p>
              </div>
              
              <p className="mb-4 text-secondary">
                If you're supporting a young person, encourage creative expression without judgment. Provide materials and space, but let them lead. The value isn't in the final product, but in the process of creation itself. And remember, creative expression isn't just for therapy sessions—it can be a daily practice, a way to check in with yourself, process the day, and find moments of peace and self-discovery.
              </p>
              
              <div className="mt-6">
                <Link href="/reflections" className="button is-outlined">
                  ← Back to Reflections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

