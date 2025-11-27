import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function FiveMinuteGroundingPractice() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/reflections" className="link-primary">Reflections</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>5-Minute Grounding Practice</a></li>
            </ul>
          </nav>
          
          <div className="columns is-centered">
            <div className="column is-8">
              <Image
                src="/images/5minutegrounding.png"
                alt="5-minute grounding practice exercise illustration"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />

              <h1 className="title is-2 heading mb-4">A 5-Minute Grounding Practice for Calm and Clarity</h1>
              
              <p className="mb-4 text-secondary">
                When life feels overwhelming, taking just five minutes to ground yourself can make a world of difference. This simple practice is designed to help you reconnect with your body and the present moment, reducing anxiety and restoring a sense of control. Unlike more structured techniques, this approach is flexible and can be adapted to your needs and environment. All you need is a willingness to pause, breathe, and gently turn your attention inward.
              </p>
              
              <p className="mb-4 text-secondary">
                Begin by sitting comfortably and closing your eyes if you feel safe to do so. Take a deep, slow breath in through your nose, feeling your chest and belly expand. Hold the breath for a moment, then exhale slowly through your mouth. Repeat this cycle several times, focusing on the sensation of the air moving in and out of your body. If your mind wanders, gently bring your attention back to your breath. This mindful breathing helps signal to your nervous system that it's safe to relax, creating a foundation for the rest of your grounding practice.
              </p>
              
              <p className="mb-4 text-secondary">
                Next, bring your awareness to the points of contact between your body and the surface beneath you. Notice the weight of your body in the chair or on the floor, the feeling of your feet against the ground, and the support beneath your hands. If you like, press your feet firmly into the floor for a few seconds and then release. This physical connection can help you feel more anchored and present, especially if you're feeling scattered or disconnected.
              </p>
              
              <p className="mb-4 text-secondary">
                Now, scan your body from head to toe, noticing any areas of tension, discomfort, or warmth. Don't try to change anything—just observe what's there. If you find a spot that feels tight, imagine sending your breath to that area as you inhale, and letting go of tension as you exhale. This simple body scan not only grounds you in the present, but also builds awareness of how emotions show up physically. Over time, this awareness can help you respond to stress more skillfully.
              </p>
              
              <p className="mb-4 text-secondary">
                Finally, set a gentle intention for yourself as you finish the practice. It could be as simple as "I am here," "I am safe," or "I can handle this moment." Open your eyes, stretch if you need to, and notice how you feel.
              </p>
              
              <h3 className="title is-4 heading mt-5 mb-3">Practical Tips:</h3>
              <ul className="content text-secondary" style={{ paddingLeft: '1.5rem' }}>
                <li className="mb-2">Try to make this a daily ritual, even when you're not feeling overwhelmed, so it becomes a reliable tool in your self-care kit.</li>
                <li className="mb-2">Keep a reminder on your phone or a sticky note in your space.</li>
                <li className="mb-2">Pair the practice with a comforting object, like a soft blanket or a favourite mug, to enhance the sense of safety.</li>
                <li className="mb-2">And remember, grounding is not about escaping discomfort, but about meeting it with kindness and presence.</li>
              </ul>
              
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

