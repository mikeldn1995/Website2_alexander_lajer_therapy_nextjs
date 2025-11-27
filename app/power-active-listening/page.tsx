import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function PowerActiveListening() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/reflections" className="link-primary">Reflections</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>The Power of Active Listening</a></li>
            </ul>
          </nav>
          
          <div className="columns is-centered">
            <div className="column is-8">
              <Image
                src="/images/handshake1.png"
                alt="Connection and understanding through active listening"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />

              <h1 className="title is-2 heading mb-4">The Power of Active Listening: Building Connection and Understanding</h1>
              
              <p className="mb-4 text-secondary">
                In our fast-paced world, truly listening to someone has become a rare gift. Active listening goes beyond simply hearing words—it's about being fully present, understanding not just what someone says, but what they mean, and making them feel truly seen and heard. For young people, who often feel misunderstood or dismissed, active listening can be transformative.
              </p>
              
              <p className="mb-4 text-secondary">
                Active listening involves giving your full attention, without planning your response or thinking about what you'll say next. It means putting aside your own agenda, judgments, and assumptions to truly understand another person's experience. This kind of listening requires presence, patience, and genuine curiosity about the other person's inner world.
              </p>
              
              <p className="mb-4 text-secondary">
                For children and adolescents, feeling heard is fundamental to their sense of self-worth and belonging. When a young person shares something difficult—a worry, a fear, a struggle—and they're met with active listening, they learn that their feelings matter, their experiences are valid, and they're not alone. This validation is powerful, especially for young people who might be questioning themselves or their place in the world.
              </p>
              
              <h3 className="title is-4 heading mt-5 mb-3">How to Practice Active Listening</h3>
              
              <p className="mb-4 text-secondary">
                Start by creating space. Put away distractions—your phone, your to-do list, your own concerns. Make eye contact (when culturally appropriate), and use open body language that shows you're engaged. Let the person finish their thoughts without interrupting, even if you think you know what they're going to say.
              </p>
              
              <p className="mb-4 text-secondary">
                Reflect back what you're hearing, not just the words, but the emotions underneath. "It sounds like you're feeling really overwhelmed by school right now" shows you're not just hearing, but understanding. Ask open-ended questions that invite deeper sharing: "What was that like for you?" or "How did that make you feel?"
              </p>
              
              <p className="mb-4 text-secondary">
                Resist the urge to fix, advise, or minimise. Often, when someone shares something difficult, our instinct is to solve the problem or make them feel better. But sometimes, what people need most is simply to be heard and understood. You don't need to have all the answers—your presence and attention are enough.
              </p>
              
              <div className="gentle-quote-box">
                <p className="is-italic">
                  "Active listening is not about being perfect—it's about being present. It's about creating a space where someone feels safe enough to be vulnerable, understood enough to feel less alone."
                </p>
              </div>
              
              <p className="mb-4 text-secondary">
                In therapy, active listening is foundational. It's how trust is built, how understanding deepens, and how healing begins. But active listening isn't just for therapists—it's a skill that can transform relationships, whether between parent and child, teacher and student, or friend and friend. When we truly listen, we create connection, and connection is at the heart of wellbeing.
              </p>
              
              <p className="mb-4 text-secondary">
                If you're supporting a young person, practice active listening regularly, not just when they're struggling. Make it a habit to check in, ask how they're doing, and really listen to the answer. Sometimes, the most powerful thing you can do is simply be there, fully present, and truly listening.
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

