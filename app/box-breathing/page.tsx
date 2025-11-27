import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function BoxBreathing() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/reflections" className="link-primary">Reflections</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>Box Breathing</a></li>
            </ul>
          </nav>
          
          <div className="columns is-centered">
            <div className="column is-8">
              <Image
                src="/images/box-breathing.png"
                alt="Box Breathing Illustration"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />

              <h1 className="title is-2 heading mb-4">Box Breathing: A Simple Tool for Calm and Balance</h1>
              
              <p className="mb-4 text-secondary">
                Box breathing—sometimes called square breathing or belly breathing—is a gentle yet powerful technique for calming the mind and body. Used by therapists, athletes, and even first responders, this practice can help anyone manage stress, anxiety, or overwhelm. The beauty of box breathing is its simplicity: all you need is your breath and a few quiet moments.
              </p>
              
              <p className="mb-4 text-secondary">
                To begin, sit comfortably with your feet on the floor and your hands resting in your lap. If it feels safe, close your eyes or soften your gaze. Inhale slowly through your nose for a count of four, feeling your belly gently expand. Hold your breath for another count of four. Then exhale slowly for four, letting your belly fall. Finally, pause and hold your breath out for a count of four. Repeat this cycle several times, letting the rhythm anchor you in the present moment.
              </p>
              
              <p className="mb-4 text-secondary">
                Box breathing works by engaging your body's natural relaxation response. The steady, even pace helps regulate your nervous system, lowers your heart rate, and brings a sense of balance. If you find the four-count too long or too short, feel free to adjust it—what matters most is the even, gentle rhythm. You can also place a hand on your belly to help you focus on the movement and deepen your breath.
              </p>
              
              <p className="mb-4 text-secondary">
                Try using box breathing whenever you notice tension, racing thoughts, or a sense of overwhelm. It's especially helpful before a stressful event, during moments of anxiety, or as a daily ritual to build resilience. You might even teach it to children or teens as a simple tool they can use at school or home. Over time, regular practice can make it easier to return to calm when life feels unpredictable.
              </p>
              
              <div className="gentle-quote-box">
                <p className="is-italic">
                  "Each breath is a gentle reminder that you are safe, you are present, and you can find calm—even in the midst of uncertainty."
                </p>
              </div>
              
              <p className="mb-4 text-secondary">
                Practical tips: Practice box breathing at the same time each day to build the habit—perhaps before bed, during a break at work, or whenever you need a moment of calm. Pair it with a comforting object or a soothing scent. If your mind wanders, simply return your focus to the gentle rhythm of your breath. Remember, there's no perfect way to breathe—what matters is showing up for yourself with kindness and patience.
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

