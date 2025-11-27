import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function UnderstandingAnxietyYoungPeople() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/reflections" className="link-primary">Reflections</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>Understanding Anxiety in Young People</a></li>
            </ul>
          </nav>
          
          <div className="columns is-centered">
            <div className="column is-8">
              <Image
                src="/images/child1.png"
                alt="Young person in a calm, supportive environment"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />

              <h1 className="title is-2 heading mb-4">Understanding Anxiety in Young People: Signs, Support, and Hope</h1>
              
              <p className="mb-4 text-secondary">
                Anxiety is one of the most common mental health challenges facing young people today. While it's normal to feel worried or nervous at times, anxiety becomes a concern when it starts to interfere with daily life, relationships, or personal growth. Understanding what anxiety looks like in children, adolescents, and young adults is the first step toward providing meaningful support.
              </p>
              
              <p className="mb-4 text-secondary">
                In children, anxiety often shows up differently than in adults. A child might complain of stomach aches or headaches before school, avoid social situations, or become unusually clingy. They might have trouble sleeping, experience nightmares, or show excessive worry about things that seem minor to adults. These physical symptoms are real—anxiety doesn't just live in the mind, but manifests throughout the body.
              </p>
              
              <p className="mb-4 text-secondary">
                For adolescents, anxiety frequently centres around social acceptance, academic performance, or body image. A teenager might withdraw from friends, skip school, or become irritable and moody. They might engage in perfectionistic behaviours, constantly seeking reassurance, or avoiding new experiences. The pressure to fit in, perform well, and figure out their identity can create a perfect storm for anxiety to take hold.
              </p>
              
              <p className="mb-4 text-secondary">
                Young adults often face anxiety related to independence, career choices, relationships, and financial pressures. The transition from adolescence to adulthood brings new responsibilities and uncertainties. Anxiety might show up as procrastination, difficulty making decisions, relationship conflicts, or physical symptoms like panic attacks.
              </p>
              
              <div className="gentle-quote-box">
                <p className="is-italic">
                  "Anxiety is not a character flaw or a sign of weakness. It's a natural response to stress that, with understanding and support, can be managed and transformed into resilience."
                </p>
              </div>
              
              <h3 className="title is-4 heading mt-5 mb-3">How to Support a Young Person with Anxiety</h3>
              
              <p className="mb-4 text-secondary">
                The most important thing you can do is listen without judgment. Validate their feelings—anxiety is real and distressing, even if the worries seem irrational. Avoid dismissing their concerns or telling them to "just relax." Instead, acknowledge that what they're experiencing is difficult.
              </p>
              
              <p className="mb-4 text-secondary">
                Encourage healthy coping strategies like regular exercise, adequate sleep, and balanced nutrition. Help them practice grounding techniques, such as the 5-4-3-2-1 exercise or box breathing. Create routines and predictability where possible, as structure can be calming for anxious minds.
              </p>
              
              <p className="mb-4 text-secondary">
                Most importantly, know when to seek professional help. If anxiety is significantly impacting daily life, relationships, or wellbeing, therapy can provide tools and support. Early intervention often leads to better outcomes, helping young people develop healthy coping skills that will serve them throughout their lives.
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

