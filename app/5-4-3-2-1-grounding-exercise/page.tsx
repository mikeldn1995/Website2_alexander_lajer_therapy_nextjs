import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function FiveFourThreeTwoOneGrounding() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/reflections" className="link-primary">Reflections</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>5-4-3-2-1 Grounding Exercise</a></li>
            </ul>
          </nav>
          
          <div className="columns is-centered">
            <div className="column is-8">
              <Image
                src="/images/54321.png"
                alt="5-4-3-2-1 grounding exercise sensory awareness illustration"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />

              <h1 className="title is-2 heading mb-4">Ground Yourself with the 5-4-3-2-1 Exercise — A Simple Tool for Anxiety, Overwhelm, or Stress</h1>
              
              <p className="mb-4 text-secondary">
                When anxiety strikes or your mind begins to spiral, it's easy to feel untethered — like you're floating away from the present moment. The 5-4-3-2-1 grounding exercise is a simple, effective way to reconnect with your body and surroundings. It's based on using your five senses to anchor you in the here and now. This technique doesn't require any equipment or special training, making it a practical tool you can use anytime, anywhere.
              </p>
              
              <p className="mb-4 text-secondary">
                The exercise begins by noticing 5 things you can see around you. Look for details you might normally overlook: the pattern in the carpet, the shadows on the wall, or a reflection in a window. Try not to rush this step. The aim is not just to count objects, but to really see them. If you're indoors, move your gaze slowly from corner to corner of the room. Outdoors, look for textures, colours, and movement. This visual scan helps interrupt anxious thoughts and reminds your brain that you're in a safe, familiar space.
              </p>
              
              <p className="mb-4 text-secondary">
                Next, shift your attention to 4 things you can touch. These can be the feel of your shirt against your skin, the chair under you, the ground beneath your feet, or even your own hands. If you're able to move, run your fingers along a textured surface like a wall or a leaf. Tuning into physical sensations can help bring you out of your head and back into your body. If you're feeling overwhelmed, try holding something with a bit of weight or texture—a smooth stone, a warm mug, or a soft fabric—to create a tactile anchor.
              </p>
              
              <p className="mb-4 text-secondary">
                Then name 3 things you can hear. These don't have to be loud or dramatic—just whatever is around you. Maybe it's the hum of a fridge, birds outside, or the faint buzz of traffic. If you're in a noisy place, focus on the quieter, more distant sounds. This step helps redirect your attention from internal noise (worry, panic, racing thoughts) to external reality. As you listen, try to separate each sound from the others and give it a moment of focus. This can create a sense of space between you and the anxiety.
              </p>
              
              <p className="mb-4 text-secondary">
                The final steps are 2 things you can smell and 1 thing you can taste. These can be the trickiest, but they're powerful for grounding. If you can't immediately smell anything, try changing your environment slightly—step outside, sniff a nearby object, or carry something like essential oil or hand cream for this purpose. For taste, even a sip of water, a mint, or simply noticing the taste in your mouth works. These last steps help activate your sensory system fully, rounding off the exercise with deep grounding in the present moment.
              </p>
              
              <h3 className="title is-4 heading mt-5 mb-3">Practical Tips:</h3>
              <ul className="content text-secondary" style={{ paddingLeft: '1.5rem' }}>
                <li className="mb-2">Practise the 5-4-3-2-1 exercise before you're in crisis, so it becomes second nature when you need it.</li>
                <li className="mb-2">Write the steps down on a card or keep a note on your phone as a quick reference.</li>
                <li className="mb-2">Pair the exercise with slow, even breathing—inhale for 4, exhale for 4—to enhance its calming effect.</li>
                <li className="mb-2">Adapt it to your environment: If one sense isn't accessible, spend extra time with the others.</li>
                <li className="mb-2">Try it when you feel overstimulated, disconnected, or even when transitioning between tasks to help re-centre yourself.</li>
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

