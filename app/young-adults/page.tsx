import Layout from '@/components/Layout'
import Image from 'next/image'

export default function YoungAdults() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <Image
                src="/images/adult1.png"
                alt="Young adult therapy session in a comfortable setting"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />
              <h2 className="title is-2 heading mb-4">Feeling Overwhelmed? Let's Talk.</h2>
              <p className="mb-4 text-secondary">
                Life at 18–25 can be a wild ride. You're navigating so much—maybe starting university, kicking off a career, figuring out relationships, or just trying to understand who you are. It's totally normal for things to feel stressful, confusing, or just plain heavy sometimes. If you're wondering, "What am I even doing?" or "Why do I feel this way?", you're definitely not alone.
              </p>
              <h3 className="title is-3 heading mb-3">Your Space to Be You</h3>
              <p className="mb-4 text-secondary">
                I offer a confidential, chill space where you can honestly talk about anything on your mind. No filters, no pretending, no judgment. This is your personal zone to explore your thoughts, feelings, and the things you do without worrying about what anyone else thinks.
              </p>
              <h3 className="title is-3 heading mb-3">What We Can Work On Together</h3>
              <p className="mb-4 text-secondary">
                We'll work together to understand your unique story. We'll explore how past experiences might be shaping your present and, more importantly, build practical tools and strategies to help you handle challenges, feel better, and create a future that genuinely excites you.
              </p>
              <h3 className="title is-3 heading mb-3">How We'll Do It</h3>
              <p className="mb-4 text-secondary">
                My approach is all about you. I use a mix of different ways to understand what's going on, like looking at how your past connects to your present, focusing on your strengths, and even getting creative if that feels right for you. This means our sessions are tailored specifically to what you need to start feeling more like yourself and navigate the ups and downs with more confidence.
              </p>
              <p className="mb-4 text-secondary">Ready to explore what's next for you?</p>
            </div>
            <div className="column is-4">
              <div className="box">
                <h3 className="title is-4 heading mb-4">Areas we can focus on together:</h3>
                <ul className="content" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Substance misuse</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Friend drama or family tension</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Anxiety, stress, or constant worrying</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Figuring out your identity or future</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Tough experiences from your past</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Dating and relationship struggles</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Low self-worth or feeling "not enough"</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Just feeling lost, stuck, or unmotivated</span>
                  </li>
                </ul>
              </div>
              <div className="box">
                <p className="text-secondary">
                  Therapy isn't about "fixing" you—it's about really getting what you're going through and helping you discover your own way forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
