import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Children() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <Image
                src="/images/child1.png"
                alt="Child therapy session in a welcoming environment"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />
              <h2 className="title is-2 heading mb-4">Creating a Safe Space for Children and Adolescents to Express and Heal</h2>
              <p className="mb-4 text-secondary">
                Therapy for children and adolescents offers a supportive, safe environment to explore and understand difficult thoughts, feelings, and behaviours. Whether you're young or older, from any background or belief, my role is to listen and support you. Sharing your feelings and worries can feel scary or unfamiliar, but opening up about tough or upsetting times is a brave step towards healing and growth.
              </p>
              <div className="gentle-quote-box">
                <p className="is-italic">
                  "Therapy creates a safe, creative space where children and adolescents can express emotions, build understanding, and find new ways to cope with life's challenges."
                </p>
              </div>
              <p className="mb-4 text-secondary">
                Children often find it hard to put their emotions into words. That's why creative play and art are powerful tools in therapy—they help express feelings when talking is difficult. Life changes like divorce, peer pressure, school transitions, or substance use can cause emotional struggles. While these challenges might improve over time, ongoing difficulties are best addressed early with professional support to help children and families move forward.
              </p>
              <div className="gentle-quote-box">
                <p className="is-italic">
                  "Mr. Fonzie, the therapy dog, gently helps children feel more comfortable and confident in sharing their thoughts and feelings."
                </p>
              </div>
              <p className="mb-4 text-secondary">
                Through my experience as a therapist with Place2Be, I understand the pressures children face to fit in and find their voice. Family relationships, identity, school stress, and feelings of purpose all impact wellbeing. Play therapy uses tools like paint, clay, puppets, and slime, allowing each child to express themselves uniquely. And when words aren't enough, Mr. Fonzie—the therapy-trained dog—helps create a comforting bridge, making it easier to open up and share what's really on your mind.
              </p>
            </div>
            <div className="column is-4">
              <div className="box">
                <h3 className="title is-4 heading mb-4">When therapy can help:</h3>
                <ul className="content" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Anxiety or low mood</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">School transitions or exam stress</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Family breakdown or conflict</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Bullying, peer pressure, or social isolation</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Identity, self-worth, or behavioural concerns</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Physical or sexual abuse</span>
                  </li>
                  <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>•</span>
                    <span className="text-secondary">Bereavement or trauma</span>
                  </li>
                </ul>
              </div>
              <div className="box">
                <Image
                  src="/images/fonsie1.png"
                  alt="Mr. Fonzie therapy dog"
                  width={300}
                  height={200}
                  className="mb-4"
                  style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}
                  unoptimized
                />
                <h3 className="title is-4 heading mb-3">The Role of Mr. Fonzie:</h3>
                <p className="mb-3 text-secondary">
                  Sometimes, talking about difficult experiences can feel intimidating. Mr. Fonzie, my therapy dog-in-training, helps children feel more relaxed and safe. His calming presence often opens the door to deeper conversations — especially when words are hard to find.
                </p>
                <div className="content">
                  <p className="mb-2"><strong>Learn more:</strong></p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <Link href="/healing-paw-pet-therapy" className="link-primary">The Healing Paw: How Pets Transform Mental Wellbeing</Link>
                    </li>
                    <li>
                      <Link href="/playtherapy" className="link-primary">Play Therapy: Exploring Emotions Through Play</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
