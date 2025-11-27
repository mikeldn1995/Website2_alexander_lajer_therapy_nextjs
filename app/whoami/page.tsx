import Layout from '@/components/Layout'
import Image from 'next/image'
import { Target, Star, BookOpen } from 'lucide-react'

export default function WhoAmI() {
  return (
    <Layout>
      <div className="site-section mb-5">
        <div className="container">
          <h1 className="title is-1 heading mb-5">
            <span className="accent-color">Alexander Lajer</span> – Integrative Therapist
          </h1>
          <div className="columns mb-5">
            <div className="column is-6">
              <p className="mb-4 text-secondary">
                I'm an Integrative Therapist based in North London, where I work primarily with young people, supporting them as they navigate their personal journeys through emotional difficulties, life transitions, identity questions, and inner challenges. My approach is rooted in the belief that each young person holds the potential for growth, self-understanding, and healing—especially when offered a safe, non-judgemental space where they feel seen and heard.
              </p>
              <p className="mb-4 text-secondary">
                I draw from a range of therapeutic modalities, adapting my approach to suit the individual needs of each person I work with. This means sessions can be creative, structured, exploratory, or quietly reflective—depending on what feels most supportive in the moment. I place great emphasis on the therapeutic relationship itself, as I believe trust, connection, and mutual respect are central to any meaningful therapeutic process.
              </p>
              <p className="mb-4 text-secondary">
                My clinical experience includes working in schools (including with the organisation Place2Be), private clinics, and private practice. These varied settings have allowed me to work with children and adolescents facing a wide range of emotional and psychological difficulties—from anxiety, low mood, and grief, to school-related stress, family breakdowns, and questions of identity or belonging.
              </p>
            </div>
            <div className="column is-6">
              <p className="mb-4 text-secondary">
                I'm deeply committed to making therapy accessible, collaborative, and tailored to the young person's pace and needs.
              </p>
              <p className="mb-4 text-secondary">
                Outside of the therapy room, I find grounding and inspiration in nature. Long walks through Hampstead Heath or by the sea, travelling to unfamiliar places, and spending quiet time outdoors help me stay centred and connected. These experiences nourish my work by reminding me of the rhythms and seasons that shape all our inner worlds. Just as nature holds space for change, stillness, and new growth, I strive to bring that same holding and patience into my sessions.
              </p>
              <p className="mb-4 text-secondary">
                Therapy is, in many ways, a shared journey—one that unfolds over time, often in gentle, unexpected ways. I feel incredibly privileged to accompany young people as they make sense of their thoughts and feelings, develop resilience, and discover more about who they are and what they need to thrive. Each story I hear is unique, and each person I meet deepens my belief in the power of compassionate, attuned connection.
              </p>
            </div>
          </div>

          <div className="columns mt-6">
            <div className="column is-4">
              <div className="box has-text-centered">
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Target size={32} />
                </div>
                <p className="text-secondary">Diploma in Integrative Counselling and Psychotherapy</p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered">
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <Star size={32} />
                </div>
                <p className="text-secondary">Extensive experience working with children, adolescents, and young adults</p>
              </div>
            </div>
            <div className="column is-4">
              <div className="box has-text-centered">
                <div className="icon-container" style={{ margin: '0 auto 1.5rem' }}>
                  <BookOpen size={32} />
                </div>
                <p className="text-secondary">Ongoing CPD in creative arts therapy, trauma-informed care, and animal-assisted therapy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="has-text-centered">
            <Image
              src="/images/people1.png"
              alt="Therapy session"
              width={800}
              height={600}
              style={{ 
                borderRadius: 'var(--radius-lg)', 
                boxShadow: 'var(--shadow-md)',
                border: '2px solid var(--border-light)'
              }}
              unoptimized
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
